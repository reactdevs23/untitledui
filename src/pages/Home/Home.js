import React from "react";
import styles from "./Home.module.css";

import History from "../../components/History/History";
import RewardTable from "../../components/RewardTable/RewardTable";
import WalletLockManager from "../../components/WalletLockManager/WalletLockManager";
import OnStakesTable from "../../components/OnStakesTable/OnStakesTable";
import UnStakesTable from "../../components/UnStakesTable/UnStakesTable";
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <History />
      <WalletLockManager />
      <RewardTable />
      <OnStakesTable />
      <UnStakesTable />
    </div>
  );
};

export default Home;
