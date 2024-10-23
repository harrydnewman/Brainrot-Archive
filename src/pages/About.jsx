import React from 'react'
import styles from '../styles/About.module.css'
const About = () => {
  const phoneticText = "/bɹeɪnɹɑt/"
  return (
    <div className={styles.mainDiv}>
      <div className={styles.definitionDiv}>
        <h1>Brainrot</h1>
        <h2><strong>brain·rot</strong> • <i>{phoneticText}</i>• n</h2>
        <h3><strong>1. Internet slang:</strong> Low-quality or mindless online content that is perceived to offer little to no educational, artistic, or substantive value. Often associated with viral videos, memes, and trends that spread rapidly across platforms like TikTok or Instagram and disappear just as quickly.</h3>
        <h3><strong>2. Colloquial usage:</strong> A humorous term used to describe the cognitive decline or mental fatigue resulting from consuming large amounts of trivial or repetitive digital content. The phrase conveys how this content can reduce attention spans and cause cognitive overload.</h3>
      </div>
      <div className={styles.archiveInfoDiv}>
        <h1>The Archive</h1>
        <p>The Brainrot Archive is dedicated to preserving a unique aspect of internet culture often labeled "brainrot," capturing viral videos, strange clips, and bizarre content that reflect the chaotic and ever-changing digital landscape. These videos often surface without context, spread rapidly, and disappear just as quickly, lost in the constant evolution of online platforms. The mission of this archive is to prevent these moments of internet history from being lost forever.</p>
        <p>These pieces of content, while unconventional and often absurd, capture the raw creativity and humor of the online world. Many of these videos have shaped trends, influenced internet language, or become defining moments in online humor and culture. The Brainrot Archive is committed to saving these digital artifacts, offering a space where they can be appreciated for their cultural significance long after they vanish from mainstream visibility.</p>
        <p>Brainrot, as a culture, thrives on the bizarre, the unexpected, and the chaotic nature of the internet. It embodies the internet’s unpredictable humor, pushing the boundaries of what is considered traditional entertainment. Brainrot isn’t just content—it’s a way of engaging with media that challenges conventions, blending irony, absurdity, and creativity. This archive aims to preserve that culture, ensuring that these digital expressions of creativity remain a testament to how online spaces continually redefine popular culture.</p>
        <p>As platforms change and trends come and go, The Brainrot Archive aims to create a space where these moments of brainrot can be saved and remembered, keeping a part of internet culture alive for future generations.</p>
      </div>
      <div className={styles.disclaimerDiv}>
        <h1>Content Disclaimer</h1>
        <p>While the content preserved in The Brainrot Archive captures a unique facet of internet culture, it may be viewed as offensive or inappropriate by some. The Archive's goal is not to promote or endorse all the material it houses, but rather to preserve it as a significant part of online history and educate people about the evolution of digital media and culture. The content archived does not always align with the personal values or beliefs of the creators of the Archive, but it remains crucial to document the wide range of expressions and influences that have shaped the online world. By doing so, the Archive ensures that these cultural artifacts are available for analysis and reflection, contributing to a better understanding of internet culture.</p>
      </div>
      <div className={styles.workInProgress}>
        <h1>Archive Completeness</h1>
        <p><strong>The Brainrot Archive</strong> is a work in progress. While it houses a wide array of content, it is not complete. The eventual goal is to implement a feature that allows users to upload and contribute to the archive themselves, ensuring that even more of internet culture's hidden corners are preserved and remembered for future generations.</p>
      </div>
    </div>
  )
}

export default About