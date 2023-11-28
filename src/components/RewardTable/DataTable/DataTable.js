import React from "react";
import classes from "./DataTable.module.css";
import {
  convertTimestampToFormattedDate,
  shortenEthereumAddress,
  formatNumberWithCommas,
} from "../../common/utils";
import Loader from "../../common/Loader/Loader";

const DataTable = ({ data, loader }) => {
  return (
    <div className={classes.tableContainer}>
      {loader && <Loader />}
      <table>
        <thead>
          <tr>
            <th>stakeID</th>
            <th>amount</th>
            <th>ID</th>
            <th>user</th>
            <th>transactionHash</th>
            <th>blockNumber</th>
            <th className={classes.txIdContainer}>Time</th>
          </tr>
        </thead>

        <tbody>
          {data.map((el, idx) => {
            return (
              <tr key={"table-row-" + idx}>
                <td>#{el.stakeID}</td>
                <td>
                  <div className={classes.amount}>
                    {formatNumberWithCommas(el.amount)}
                  </div>
                </td>
                <td>{shortenEthereumAddress(el.id)}</td>
                <td>
                  <div>{shortenEthereumAddress(el.user)} </div>
                </td>
                <td>
                  <div>{shortenEthereumAddress(el.transactionHash)}</div>
                </td>
                <td>
                  <span className={classes.blockedNumber}>
                    {el.blockNumber}
                  </span>
                </td>
                <td>
                  <span className={classes.time}>
                    {convertTimestampToFormattedDate(el.blockTimestamp)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
