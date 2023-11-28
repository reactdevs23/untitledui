import React from "react";
import { IoMdMore } from "react-icons/io";

import { numberFormator } from "../common/utils";

import { rewards, staked, withdrawn } from "../../images";
import styles from "./History.module.css";

const History = () => {
  const data = [
    {
      icon: staked,
      heading: "Total Staked Today",
      subHeading: "ALL TOKENS STAKED TODAY",
      amount: 502849.25,
    },
    {
      icon: withdrawn,
      heading: "Total Withdrawn Today",
      subHeading: "Todays Token Withdrawals",
      amount: 5088.57,
    },
    {
      icon: rewards,
      heading: "Total Rewards Today",
      subHeading: "Todays withdrawn reward",
      amount: 70000.0,
    },
  ];

  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")}>
      {data.map((el, i) => (
        <div className={styles.history} key={i}>
          <div className={styles.header}>
            <div className={styles.iconAndDetails}>
              <div className={styles.iconContainer}>
                <img src={el.icon} alt="#" className={styles.icon} />
              </div>
              <div className={styles.headingAndSubheading}>
                <h4 className={styles.heading}>{el.heading}</h4>
                <p className={styles.subHeading}>{el.subHeading}</p>
              </div>
            </div>
            <IoMdMore className={styles.more} />
          </div>{" "}
          <h3 className={styles.amount}>
            {numberFormator(el.amount)[0].toLocaleString()}.
            <span className={styles.light}>{numberFormator(el.amount)[1]}</span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default History;
