import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/rei-co-op-logo-white.png';

const Header = () => {
  return (
    <div>
      <div className={styles.nav_top_wrapper}>
        <div className={styles.nav_top_container}>
          <div className={styles.services_wrapper}>
            <div className={styles.service}>SHOP REI</div>
            <div className={styles.service}>REI OUTLET</div>
            <div className={styles.service}>USED GEAR</div>
            <div className={styles.service}>REI ADVENTURES</div>
            <div className={styles.service}>CLASSES & EVENTS</div>
            <div className={styles.service}>EXPERT ADVICE</div>
            <div className={styles.service}>CO-OP JOURNAL</div>
            <div className={styles.service}>CONVERSATIONS</div>
            <div className={styles.service}>MEMBERSHIP</div>
          </div>
        </div>
      </div>
      <div className={styles.nav_middle_wrapper}>
        <div className={styles.nav_middle_container}>
          <img className={styles.logo} src={logo}/>
          <div className={styles.nav_middle_right_container}>
            <div>
              <div className={styles.search_container}>
                <input className={styles.search_input} placeholder="Search for great gear & clothing"></input>
                <span className={styles.search_button}>search</span>
              </div>
              <div className={styles.user_options}>
                <span className={styles.user_option}>SIGN IN</span>
                <span className={styles.option_symbol}></span>
                <span className={styles.user_option}>STORES</span>
                <span className={styles.option_symbol}></span>
                <span className={styles.user_option}>CART </span>
                <span className={styles.option_symbol}></span>
              </div>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.categories_wrapper}>
              <div className={styles.category}>Camp & Hike</div>
              <div className={styles.category}>Climb</div>
              <div className={styles.category}>Cycle</div>
              <div className={styles.category}>Paddle</div>
              <div className={styles.category}>Run</div>
              <div className={styles.category}>Fitness</div>
              <div className={styles.category}>Snow</div>
              <div className={styles.category}>Travel</div>
              <div className={styles.category}>Men</div>
              <div className={styles.category}>Women</div>
              <div className={styles.category}>Kids</div>
              <div className={styles.category}>Deals</div>
              <div className={styles.category}>More</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nav_bottom_wrapper}>
        <div className={styles.nav_bottom_container}>
          <li className={styles.breadcrumb}>Footwear</li>
          <div className={styles.breadcrumb_divider}> / </div>
          <li className={styles.breadcrumb}>Unisex Footwear</li>
          <div className={styles.breadcrumb_divider}> / </div>
          <li className={styles.breadcrumb}> Boots </li>
          <div className={styles.breadcrumb_divider}> / </div>
          <li className={styles.breadcrumb}> Hiking Boots </li>
        </div>
      </div>
    </div>
  )
}

export default Header;