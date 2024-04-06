import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/components/sidebar.module.css";

function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.head}`}>
        <h2>What do you want to Translate?</h2>
      </div>

      <div className={`${styles.tabs} `}>
        <ul style={{ listStyleType: "none" }}>
          <li className={`${styles.tabLi}`}>
            <Link className={`${styles.tabLink}`} to="/text">
              Text
            </Link>
          </li>
          <li className={`${styles.tabLi}`}>
            <Link className={`${styles.tabLink}`} to="/images">
              Images
            </Link>
          </li>
          <li className={`${styles.tabLi}`}>
            <Link className={`${styles.tabLink}`} to="/documents">
              Documents
            </Link>
          </li>
          <li className={`${styles.tabLi}`}>
            <Link className={`${styles.tabLink}`} to="/websites">
              Websites
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
