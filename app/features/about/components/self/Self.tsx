import { IoMdArrowDropdownCircle } from "react-icons/io";
import styles from "./self.module.css";
import Image from "next/image";
// import { useState } from "react";
const { selfButton, open, selfToggle } = styles;

type SelfListItem = {
  title: string;
  list: string[];
  image: string;
  isOpen: boolean;
  toggleExclusive: () => void;
};

export const Self = ({
  title,
  list,
  image,
  isOpen,
  toggleExclusive,
}: SelfListItem) => {
  // const [state, setState] = useState(false)
  // const handleClick = () => {
  //   setState(prev => !prev)
  // }
  return (
    <li>
      <button
        type="button"
        className={`${selfButton} ${isOpen ? open : ""}`}
        onClick={toggleExclusive}
      >
        <h3>
          <IoMdArrowDropdownCircle />
          {title}
        </h3>
        <div className={selfToggle}>
          <div>
            <ul>
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Image src={image} alt={title} width={300} height={500} />
          </div>
        </div>
      </button>
    </li>
  );
};
