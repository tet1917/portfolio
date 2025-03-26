// "use client";

import Image from "next/image";
// import { useCallback, useState } from "react";
import styles from "./about.module.css";
import { Self } from "./components/self/Self";
import { Skill } from "./components/skill/Skill";
import { skillItemData } from "./itemData/skillData";
import { selfInfoItem } from "./itemData/selfData";
import { Heading } from "@/app/components/heading/Heading";
import { LowerHero } from "@/app/components/lowerHero/LowerHero";

const { profile, selfIntroduction, selfHead, row, self, selfList, skill } =
  styles;

export const About = () => {
  // const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const toggleExclusive = useCallback((i: number) => {
  //   setOpenIndex((prev) => (prev === i ? null : i));
  // }, []);

  return (
    <>
      <LowerHero en="about" ja="僕について" />

      <section className={profile}>
        <div className={selfIntroduction}>
          <div className={selfHead}>
            <h2>
              Tetsu <span>K</span>azui
            </h2>
            <dl>
              <div className={row}>
                <dt>birth</dt>
                <dd>1999年2月</dd>
              </div>
              <div className={row}>
                <dt>from</dt>
                <dd>福岡県</dd>
              </div>
              <div className={row}>
                <dt>live</dt>
                <dd>福岡県</dd>
              </div>
              <div className={row}>
                <dt>MBTI</dt>
                <dd>INFP</dd>
              </div>
              <div className={row}>
                <dt>animal</dt>
                <dd>情熱的な黒豹</dd>
              </div>
            </dl>
          </div>
          <Image
            src={"/about/about-bg.webp"}
            width={300}
            height={500}
            alt=""
          ></Image>

          <p>
            サイトを見ていただき、ありがとうございます！
            <br />
            私は、数井
            哲と申します。PMやSEとして主に活動しています。Web開発をメインとし、クライアントに寄り添った開発ができるように努めています！！
            <br />
            大学生の頃にエンジニアという分野に興味を持ち、今の会社でPMやSEというポジションでクライアントが何を求めているのかをモットーに開発を手掛けてきました。
            <br />
            今後の目標は、趣味や自分の好きなものをもっと世の中に広めていけるような開発をしていくことです。
            もし僕に興味を持っていただけた人がいれば、お気軽にご連絡をいただけると嬉しいです！！
          </p>
        </div>
        <div className={self}>
          <Image
            src={"/about/about-profile.jpg"}
            width={300}
            height={500}
            alt="self-image"
          ></Image>
          <ul className={selfList}>
            {selfInfoItem.map((item) => (
              <Self
                {...item}
                // toggleExclusive={() => toggleExclusive(i)}
                // isOpen={openIndex === i}
                key={item.title}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className={skill}>
        <Heading ja="スキル" en="Skill" />
        <ul>
          {skillItemData.map((item) => (
            <Skill {...item} key={item.title} />
          ))}
        </ul>
      </section>
    </>
  );
};