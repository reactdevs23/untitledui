import React from "react";
import { CiMail, CiCircleQuestion } from "react-icons/ci";
import { sheild } from "../../../images";
import styles from "./SingleLockManager.module.css";

const SingleLockManager = ({
  heading,
  subHeading,
  value,
  setValue,
  handlerFunction,
  buttonText,
}) => {
  return (
    <div className={styles.lockManager}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <img src={sheild} alt="#" className={styles.icon} />
        </div>
        <div className={styles.headingAndSubheading}>
          <h4 className={styles.heading}>{heading}</h4>
          <p className={styles.subHeading}>{subHeading}</p>
        </div>
      </div>{" "}
      <div className={styles.inputWrapper}>
        <label htmlFor={buttonText} className={styles.label}>
          Wallet Address
        </label>
        <div className={styles.inputContainer}>
          <CiMail className={styles.mailIcon} />
          <input
            id={buttonText}
            name={buttonText}
            type="text"
            placeholder="0x00000000....000000"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.input}
          />
          <CiCircleQuestion className={styles.questionMark} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {" "}
        <button className={styles.button} onClick={handlerFunction}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SingleLockManager;
