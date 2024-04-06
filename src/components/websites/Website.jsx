import React from 'react';
import styles from '../../../styles/components/website.module.css'
import Language from '../../common/Language';

function Website() {
  return (
    <div className={`${styles.website}`}>
      <Language/>
    </div>
  )
}

export default Website