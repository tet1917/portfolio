import { ParallaxImage } from "./ParallaxImage";
import styles from "./parallax.module.css";
const { parallax } = styles;

const images = [
  { src: "/about/1.webp", speed: 3 },
  { src: "/about/2.webp", speed: 2 },
  { src: "/about/3.webp", speed: 1.5 },
  { src: "/about/4.webp", speed: 2.5 },
  { src: "/about/5.webp", speed: 1 },
  { src: "/about/6.webp", speed: 1 },
  { src: "/about/7.webp", speed: 1 },
  { src: "/about/8.webp", speed: 0.8 },
];

export const Parallax = () => {
  return (
    <div className={parallax}>
      {images.map((image, i) => (
        <ParallaxImage key={i} {...image} />
      ))}
      <h3>
        <span>Design</span>
        {/* <span>Produce</span>
        <span>Make</span>
        <span>Develop</span> */}
        <span>Innovation</span>
        {/* <span>Be</span>
        <span>Innovative</span> */}
      </h3>
    </div>
  );
};
