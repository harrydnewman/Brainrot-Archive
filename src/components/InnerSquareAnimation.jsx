import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/rectangleScroll.module.scss';

const InnerSquareAnimation = React.forwardRef((props, ref) => {
  let { scrollYProgress, color, image } = props;

  const videoUrl = "https://api.brainrot.harrydnewman.com" + image;

  // Animate height based on scroll progress
  const innerSquareStyle = useSpring({
    height: scrollYProgress.to((val) => `${val * 100}%`),
    backgroundColor: color,
  });

  // Use the placeholder image if the video URL is invalid or empty
  const hasValidVideo = image && image.length > 0;

  return (
    <div
      className={styles.outerSquare}
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {hasValidVideo ? (
        <video
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1, // Add z-index to ensure video is visible
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('/blacksquare.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1, // Add z-index
          }}
        />
      )}
      <animated.div
        className={styles.innerSquare}
        style={{
          ...innerSquareStyle,
          zIndex: 2, // Place overlay above video
          pointerEvents: 'none', // Allow clicks to pass through if needed
        }}
      />
    </div>
  );
});

// Set display name for easier debugging
InnerSquareAnimation.displayName = 'InnerSquareAnimation';

export default InnerSquareAnimation;