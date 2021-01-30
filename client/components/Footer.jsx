import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.upper_wrapper}>
        <div className={styles.upper_container}>
          <hr className={styles.hr}/>
          <div className={styles.email_header}>Sign Up for REI emails</div>
          <div className={styles.email_subheader}>Co-op offers, events & cool new gear</div>
          <div className={styles.email_input_wrapper}>
            <a className={styles.email_input_label}>Email</a>
            <div className={styles.email_input_container}>
              <input className={styles.email_input} placeholder="Enter your email address"/>
              <button className={styles.email_button}>Sign me up!</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower_wrapper}>
        <div className={styles.lower_container}>
          <div className={styles.info_wrapper}>
            <div className={styles.info_container}>
              <div className={styles.info_title}>Who We Are</div>
              <p className={styles.info_text}>
                At REI, we believe that a life outdoors is a life well lived. We've been sharing our passion for the outdoors since 1938.
                &nbsp;
                <a className={styles.info_link}>Read our story</a>
              </p>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <div className={styles.info_container}>
              <div className={styles.info_title}>Become A Member</div>
              <p className={styles.info_text}>
                Join the REI Co-op community to get an annual dividend, access exclusives and give back. Lifetime membership is just $20.
                &nbsp;
                <a className={styles.info_link}>Learn more and join us</a>
              </p>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <div className={styles.info_container}>
              <div className={styles.info_title}>Apply For REI Co-op Mastercard®</div>
              <p className={styles.info_text}>
                Earn a $100 REI Gift Card when you apply, get approved and make any purchase within 60 days of card approval.
                &nbsp;
                <a className={styles.info_link}>Details</a>
              </p>
              <p className={styles.info_text}>
                Have it?
                &nbsp;
                <a className={styles.info_link}>Manage your card</a>
              </p>
            </div>
          </div>
          <hr className={styles.hr}/>
          <div className={styles.link_wrapper}>
            <div className={styles.link_container}>
              <div className={styles.link_link}>Return Policy</div>
              <div className={styles.link_link}>Return Instructions</div>
              <div className={styles.link_link}>Your Online Account</div>
              <div className={styles.link_link}>Purchase Status</div>
              <div className={styles.link_link}>Shipping Info</div>
              <div className={styles.link_link}>Membership</div>
              <div className={styles.link_link}>Find Member Number</div>
              <div className={styles.link_link}>Annual Dividend Lookup</div>
            </div>
            <div className={styles.link_container}>
              <div className={styles.link_link}>Expert Advice</div>
              <div className={styles.link_link}>Classes, Tours & Events</div>
              <div className={styles.link_link}>Store Events</div>
              <div className={styles.link_link}>REI Adventures Trips</div>
              <div className={styles.link_link}>Co-op Journal</div>
              <div className={styles.link_link}>Conversations</div>
            </div>
            <div className={styles.link_container}>
              <div className={styles.link_link}>Virtual Outfitting</div>
              <div className={styles.link_link}>Gift Cards</div>
              <div className={styles.link_link}>Gift Registry</div>
              <div className={styles.link_link}>Wish Lists</div>
              <div className={styles.link_link}>Coupons, Rebates & Discounts</div>
              <div className={styles.link_link}>Free Shipping Details</div>
            </div>
            <div className={styles.link_container}>
              <div className={styles.link_link}>About REI</div>
              <div className={styles.link_link}>Stewardship</div>
              <div className={styles.link_link}>Jobs</div>
              <div className={styles.link_link}>Newsroom</div>
              <div className={styles.link_link}>Technology Blog</div>
              <div className={styles.link_link}>Sell at REI</div>
              <div className={styles.link_link}>Affiliate Program</div>
              <div className={styles.link_link}>Corporate & Group Sales</div>
              <div className={styles.link_link}>Store Locator</div>
            </div>
          </div>
          <hr className={styles.hr}/>
          <div className={styles.contact_wrapper}>
            <div className={styles.contact_container}>
              <div className={styles.contact_title}>Help Center</div>
              <p className={styles.contact_description}>Find answers online anytime.</p>
            </div>
            <div className={styles.contact_container}>
              <div className={styles.contact_title}>Live Chat</div>
              <p className={styles.contact_description}>Mon-Fri, 5am-10pm PT</p>
              <p className={styles.contact_description}>Sat-Sun, 6am-9pm PT</p>
            </div>
            <div className={styles.contact_container}>
              <div className={styles.contact_title}>1-800-426-4840</div>
              <p className={styles.contact_description}>Mon-Fri, 5am-10pm PT</p>
              <p className={styles.contact_description}>Sat-Sun, 6am-9pm PT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;