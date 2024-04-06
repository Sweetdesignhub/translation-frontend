import React from "react";
import styles from "../../../styles/components/text.module.css";
import Language from "../../common/Language";

function Text() {
  return (
    <div className={`${styles.text}`}>
      <div className="container px-4 text-center">
        <Language/>
        
        <div className="row gx-5">
          <div className="col-md-6">
            <textarea className={`${styles.noramlText}`} />
          </div>
          <div className="col-md-6">
            <textarea className={`${styles.convertedText}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
