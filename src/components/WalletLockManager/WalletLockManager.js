import React, { useState } from "react";
import styles from "./WalletLockManager.module.css";

import SingleLockManager from "./SigleLockManager/SingleLockManager";

const WalletLockManager = () => {
  const [checkLock, setCheckLock] = useState("");
  const [lockWallet, setlockWallet] = useState("");
  const [unLockWallet, setUnlockWallet] = useState("");
  const checkLockHandler = () => {};
  const lockWalletHandler = () => {};
  const unlockWalletHandler = () => {};
  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")}>
      <h3 className={styles.title}>Wallet Lock Manager</h3>
      <p className={styles.text}>Manage Address Locks</p>
      <div className={styles.lockManagers}>
        <SingleLockManager
          heading="Check the locks!"
          subHeading="Check if a wallet is locked"
          value={checkLock}
          setValue={setCheckLock}
          buttonText="check Lock"
          handlerFunction={checkLockHandler}
        />
        <SingleLockManager
          heading="Lock the wallets!"
          subHeading="Lock a user wallet"
          value={lockWallet}
          setValue={setlockWallet}
          buttonText="Lock Wallet"
          handlerFunction={lockWalletHandler}
        />
        <SingleLockManager
          heading="Unlock the locks!"
          subHeading="Unlock a user wallet"
          value={unLockWallet}
          setValue={setUnlockWallet}
          buttonText="Unlock Wallet"
          handlerFunction={unlockWalletHandler}
        />
      </div>
    </div>
  );
};

export default WalletLockManager;
