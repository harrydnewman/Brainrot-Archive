import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/rectangleScroll.module.scss';

const InnerSquareAnimation = React.forwardRef((props, ref) => {
  let { scrollYProgress, color, image } = props;


  const imageUrl = "https://harrydnewman.com" + image;




  // Animate height based on scroll progress
  const innerSquareStyle = useSpring({
    height: scrollYProgress.to((val) => `${val * 100}%`),
    backgroundColor: color,
  });

  // Use the placeholder image if the image URL is invalid or empty

  const backgroundImage = image && image.length > 0 ? `url(${imageUrl})` : `url('/blacksquare.webp')`;

  return (
    <div
      className={styles.outerSquare}
      ref={ref}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <animated.div
        className={styles.innerSquare}
        style={innerSquareStyle}
      />
    </div>
  );
});

// Set display name for easier debugging
InnerSquareAnimation.displayName = 'InnerSquareAnimation';

export default InnerSquareAnimation;
