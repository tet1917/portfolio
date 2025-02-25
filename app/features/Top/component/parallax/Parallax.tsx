import { ParallaxImage } from "./ParallaxImage";
import styles from "./parallax.module.css";
const { parallax } = styles;

const images = [
  { src: "/about/1.jpg", speed: 3 },
  { src: "/about/2.jpg", speed: 2 },
  { src: "/about/3.jpg", speed: 1.5 },
  { src: "/about/4.jpg", speed: 2.5 },
  { src: "/about/5.jpg", speed: 1 },
  { src: "/about/6.jpg", speed: 1 },
  { src: "/about/7.jpg", speed: 1 },
  { src: "/about/8.jpg", speed: 0.8 },
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
