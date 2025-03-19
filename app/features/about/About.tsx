import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import Self from "./components/self/Self";
import Skill from "./components/skill/Skill";
import { skillItemData } from "./itemData/skillData";
import { selfInfoItem } from "./itemData/selfData";
import { Heading } from "@/app/components/heading/Heading";

const { profile, selfIntroduction, selfHead, self, selfList, skill } = styles;

const About = () => {
  return (
    <>
      <section className={profile}>
        <div className={selfIntroduction}>
          <div className={selfHead}>
            <h2>
              Tetsu <span>K</span>azui
            </h2>
            <p>1999年2月生まれ、福岡県出身、福岡県在住</p>
          </div>
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
              <Self {...item} key={item.title} />
            ))}
          </ul>
        </div>
      </section>
      <section className={skill}>
        <Heading ja="スキル" en="Skill" />
        <ul>
          {skillItemData.map((item) => (
            <Skill {...item} key={item.title}/>
          ))}
        </ul>
      </section>
    </>
  );
};

export default About;
