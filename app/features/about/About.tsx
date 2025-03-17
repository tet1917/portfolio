import { Heading } from "@/app/component/heading/Heading";
import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import Self from "./component/self/Self";
import Skill from "./component/skill/Skill";
import { skillItemData } from "./itemData/skillData";
import { selfInfoItem } from "./itemData/selfData";

const {profile,selfIntroduction,self,selfList,skill} = styles;

const About = () => {
  return (
    <>
      <section className={profile}>
        <div className={selfIntroduction}>
          <h2>Tetsu Kazui</h2>
          <p>1999年2月生まれ、福岡県出身、福岡県在住</p>
          <p>
            サイトを見ていただき、ありがとうございます！
            <br />
            私は、数井　哲と申します。PMやSEとして主に活動しています。Web開発をメインとし、クライアントに寄り添った開発ができるように努めています！！
            <br />
            大学生の頃にエンジニアという分野に興味を持ち、今の会社でPMやSEというポジションでクライアントが何を求めているのかをモットーに開発を手掛けてきました。
            <br />
            今後の目標は、趣味や自分の好きなものをもっと世の中に広めていけるような開発をしていくことです。
            もし僕に興味を持っていただけた人がいれば、お気軽にご連絡をいただけると嬉しいです！！
          </p>
        </div>
        <div className={self}>
          <Image src={"/about/about-profile.jpg"} width={300} height={500} alt=""></Image>
          <ul className={selfList}>
            {selfInfoItem.map((item) => (
              <Self {...item}  key={item.title}/>
            ))}
          </ul>
        </div>
      </section>
      <section className={skill}>
        <Heading ja="スキル" en="Skill" />
        <ul>
          {skillItemData.map((item) => (
            <Skill {...item} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default About;
