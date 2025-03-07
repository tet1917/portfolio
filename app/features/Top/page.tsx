import React from "react";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import styles from "./top.module.css";
import { Name } from "./component/name/Name";
import { Parallax } from "./component/parallax/Parallax";
import { Heading } from "../../component/heading/Heading";
import { MoreButton } from "../../component/buttons/more/MoreButton";
import { SwitchScroll } from "./component/switchScroll/SwitchScroll";
import Image from "next/image";
import { TopBlogList } from "./component/topBlog/TopBlogList";

export const Top = () => {
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

      <section className={styles.about}>
        <Heading ja={"僕について"} en={"about"}></Heading>
        <Parallax />
        <MoreButton href={"/about"}></MoreButton>
      </section>

      <section className={styles.portfolio}>
        <Image src="/about/11.webp" alt="" width={1000} height={700} />
        <Image src="/about/10.jpg" alt="" width={600} height={600} />
        <Heading ja={"実績"} en={"portfolio"} isRight></Heading>
        <div className={styles.body}>
          <h3>ベストよりもベターな選択</h3>
          <p>
            完璧を追い求めるよりも、
            <br />
            その時点での最善を選び取る。
            <br />
            それを積み重ねることで、
            <br />
            結果的により良い未来が生まれると信じています。
          </p>
        </div>
        <SwitchScroll />
      </section>

      <section className={styles.blog}>
        <Heading ja={"ブログ"} en={"blog"}></Heading>
        <TopBlogList />
      </section>
    </>
  );
};