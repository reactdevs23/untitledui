import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";

import { logo, zap } from "../../images";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navItems = [
    { navItem: "Home", to: "/" },
    { navItem: "Dashboard", to: "/dashboard" },
    { navItem: "Projects", to: "/projects" },
    { navItem: "Tasks", to: "/tasks" },
    { navItem: "Reporting", to: "/reporting" },
    { navItem: "Users", to: "/user" },
  ];
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
          <h3 className={styles.logoText}>Untitled UI</h3>
        </div>{" "}
        <div className={[styles.navItems, sidebar && styles.sidebar].join(" ")}>
          {navItems.map((el, i) => (
            <NavLink
              to={el.to}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? [styles.navActive, styles.navItem].join(" ")
                  : styles.navItem
              }
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </NavLink>
          ))}{" "}
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              {" "}
              <img src={zap} alt="#" className={styles.zapIcon} /> Connect
              Wallet
            </button>
          </div>
        </div>
        {sidebar ? (
          <IoMdClose
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <AiOutlineAlignRight
            className={styles.icon}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
