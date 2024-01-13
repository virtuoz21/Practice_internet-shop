import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from "../../styles/Footer.module.css";
import LOGO from "../../images/logo.svg";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <NavLink to={ROUTES.HOME}>
          <img src={LOGO} alt="" />
        </NavLink>
      </div>

      <div className={styles.rights}>All rights reserved</div>

      <div className={styles.socials}>
        <a href="#!" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="#!" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="#!" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
