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
            <th>id</th>
            <th>user</th>
            <th>transactionHash</th>
            <th>blockNumber</th>
            <th>apr</th>
            <th className={classes.txIdContainer}>Time</th>
            <th>lastWithdrawnTime</th>
            <th>ref1</th>
            <th>ref2</th>
            <th>ref3</th>
            <th>ref4</th>
            <th>unlockTime</th>
            <th>withdrawnAmount</th>
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
                <td>
                  <div>{shortenEthereumAddress(el.id)} </div>
                </td>
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
                <td>{el.apr}</td>
                <td>
                  <span className={classes.time}>
                    {convertTimestampToFormattedDate(el.blockTimestamp)}
                  </span>
                </td>
                <td>
                  <span className={classes.time}>
                    {convertTimestampToFormattedDate(el.lastWithdrawnTime)}
                  </span>
                </td>{" "}
                <td> {shortenEthereumAddress(el.ref1)}</td>
                <td> {shortenEthereumAddress(el.ref2)}</td>
                <td> {shortenEthereumAddress(el.ref3)}</td>
                <td> {shortenEthereumAddress(el.ref4)}</td>
                <td>
                  <span className={classes.time}>
                    {convertTimestampToFormattedDate(el.unlockTime)}
                  </span>
                </td>
                <td>
                  <div className={classes.amount}>
                    {formatNumberWithCommas(el.withdrawnAmount)}
                  </div>
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
