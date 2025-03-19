"use client";

import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import styles from "./self.module.css";
import Image from "next/image";

type SelfListItem = {
  title: string;
  list: string[];
  image: string
};

const { selfButton, isOpen, selfToggle } = styles;

const Self = ({title,list, image}:SelfListItem) => {
  const [state, setState] = useState(false);
  const handleClick = () => setState((prev) => !prev);

  return (
    <li>
      <button
        type="button"
        className={`${selfButton} ${state ? isOpen : ""}`}
        onClick={handleClick}
      >
        <h3>
          <IoMdArrowDropdownCircle />
          {title}
        </h3>
        <div className={selfToggle}>
          <div>
            <ul>
              {list.map(item => <li key={item}>{item}</li>)}
            </ul>
            <Image src={image} alt={title} width={300} height={500}/>
          </div>
        </div>
      </button>
    </li>
  );
};

export default Self;
