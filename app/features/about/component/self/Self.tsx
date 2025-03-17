"use client";

import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import styles from "./self.module.css";

type SelfListItem = {
  title: string;
  text: string;
};

const { selfButton, isOpen, selfToggle } = styles;

const Self = ({title,text}:SelfListItem) => {
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
            <p>{text}</p>
          </div>
        </div>
      </button>
    </li>
  );
};

export default Self;
