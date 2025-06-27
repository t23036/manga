'use client';

import React, { useState } from 'react'
import styles from "./Checkbox.module.css"

const checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className={styles.checkboxContainer}>
      <div className='relative'>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
          className={styles.checkbox} 
        />
        <span className={styles.customCheckbox}></span> {/* ボタン風に見せるためのカスタムスタイル */}
        <span className={styles.labelText}>
          {isChecked ? 'チェック済み' : 'チェックしてください'}
        </span>
      </div>
    </label>
  )
}

export default checkbox