"use client"; // Ensure this is a client component
import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from '@react-spring/web';
import styles from '../styles/ScrollTesting.module.css';
import Scroll from './Scroll';
import fetchIndividualVideo from '../api/fetchIndividualVideo';

const PAGE_COUNT = 3;

export default function ScrollHolder() {
  const [timer, setTimer] = useState(null); // Remove TypeScript-specific type
  const containerRef = useRef(null); // Remove TypeScript-specific type

  const [videoData, setVideoData] = useState(null);

  const fetchNewVideo = async () => {
    console.log("fetching new video")
    const data = await fetchIndividualVideo();
    setVideoData(data);
    hardResetScroll();
};

const scrollToNextPage = () => {
  console.log("scrollToNextPage")
  if (containerRef.current) {
    const nextScrollPosition = (containerRef.current.scrollTop + window.innerHeight) * 3;
    containerRef.current.scrollTo({
      top: nextScrollPosition,
      behavior: 'smooth',
    });
  }
  else {
    console.log("error");
  }
};


useEffect(() => {
  // Fetch a new video when the page is first loaded
  fetchNewVideo();
}, []);


  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      // console.log("scrollyprogress: ", scrollYProgress);
      if (scrollYProgress === 1) {
        console.log("scrollyprogress = 1");
        setTimer(setTimeout(() => {
          console.log("Running load next page");
          fetchNewVideo();
        }, 1500));
      } 
    },
  });

  const resetScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const hardResetScroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
  };

  const handleScroll = React.useCallback(() => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const scrollHeight = containerRef.current.scrollHeight;
      const clientHeight = containerRef.current.clientHeight;
      const scrollProgress = scrollTop / (scrollHeight - clientHeight);
      // console.log("Scroll Progress:", scrollProgress);
    }
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(() => {
      resetScroll();
    }, 1000));
  }, [timer]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (timer) clearTimeout(timer);
      };
    }
  }, [handleScroll, timer]);

  return (
    <div ref={containerRef} className={styles.body} style={{ height: '100vh', overflowY: 'auto' }}>
      <div className={styles.squareContainer}>
        {/* <p>Hello World</p> */}
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div key={index} className={styles.full__page} style={{ height: '100vh' }}>
          {/* Page {index + 1} */}
        </div>
      ))}
      <div className={styles.overlay}>
        <Scroll scrollYProgress={scrollYProgress} videoData={videoData} onVideoEnd={scrollToNextPage}/>
      </div>
    </div>
  );
}

