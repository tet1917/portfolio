import React from "react";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import styles from "./top.module.css";
import { Name } from "./component/Name";

const Top = () => {
  return (
    <>
      <div className={styles.sns}>
        <a target="_blank" href="">
          <FaInstagram />
        </a>
        <a target="_blank" href="">
          <FaXTwitter />
        </a>
        <a target="_blank" href="">
          <FaGithub />
        </a>
      </div>
      <section className={styles.hero}>
        <p className={styles.scroll}>Scroll</p>
        <Name text="Tetsu Kazui" />
      </section>
    </>
  );
};

export default Top;
