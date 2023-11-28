import React, { useEffect, useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import DatePicker from "../common/DatePicker/DatePicker";
import Pagination from "../common/Pagination/Pagination";
import DataTable from "../common/DataTable/DataTable";

import classes from "./RewardTable.module.css";

const RewardTable = () => {
  const [searchState, setSearchState] = useState("");
  const [originalData, setOriginalData] = useState([]); // Store the original unfiltered data
  const [filteredData, setFilteredData] = useState([]); // Use this for filtering
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [formState, setFormState] = useState({
    startDate: "",
    endDate: "",
  });
  const [totalDataLength, setTotalDataLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        "https://api.thegraph.com/subgraphs/name/civa/uns-universal-staking";

      const query = {
        query: `
          query MyQuery {
            rewards {
              amount
              blockNumber
              blockTimestamp
              id
              stakeID
              transactionHash
              user
            }
          }
        `,
        variables: {},
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie:
            "__cf_bm=SVfXB2AwRwA2NxG9_rS9yBftBSFunMvvqxv2Y2UXs.E-1700984154-0-AcW4Mf51KFa4wwGrDClJCOfxB7jg9taKJNFdNUvTsBaQ27HKFAn3cyvBC2UlARcTRY82HMfGPkY9GjIiuLvryCM=",
        },
        body: JSON.stringify(query),
      };

      try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        setOriginalData(data.data.rewards);
        setFilteredData(data.data.rewards);
        setTotalDataLength(data.data.rewards.length);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, filteredData]);

  useEffect(() => {
    const filtered = originalData.filter((el) => {
      const userMatches = el.user
        .toLowerCase()
        .includes(searchState.toLowerCase());

      if (formState.startDate && formState.endDate) {
        const startTime = formState.startDate.getTime();
        const endTime = formState.endDate.getTime();
        const itemTime = el.blockTimestamp * 1000; // Convert seconds to milliseconds

        return userMatches && itemTime >= startTime && itemTime <= endTime;
      }

      return userMatches; // Include all if no date range is specified
    });

    setFilteredData(filtered);
    setTotalDataLength(filtered.length);
  }, [searchState, formState, originalData]);

  return (
    <div className={[classes.mainWrapper, "mainWrapper"].join(" ")}>
      <div className={classes.tableHeader}>
        <h2 className={classes.pageTitle}>
          Reward Table{" "}
          <span className={classes.numberOfUsers}>
            {filteredData.length} users
          </span>
        </h2>
        <div className={classes.filtering}>
          {" "}
          <div className={classes.searchContainer}>
            <IoSearchOutline className={classes.searchIcon} />
            <input
              type="text"
              placeholder="Search for trades"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
          </div>
          <DatePicker
            onChange={(date) =>
              setFormState((prev) => ({ ...prev, startDate: date }))
            }
            value={formState.startDate}
            placeholder="Start Date"
          />
          <DatePicker
            onChange={(date) =>
              setFormState((prev) => ({ ...prev, endDate: date }))
            }
            value={formState.endDate}
            placeholder="End Date"
          />
        </div>
      </div>
      <div className={classes.tableContainer}>
        <DataTable data={currentTableData} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={totalDataLength}
        pageSize={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
        siblingCount={0}
      />
    </div>
  );
};

export default RewardTable;
