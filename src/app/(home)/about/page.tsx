import Image from "next/image";
import styles from "./aboutpage.module.css";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutMeContainer}>
        <p>About Me</p>
        <p>
          I’m a full-stack developer with a sharp focus on architectural clarity
          and system design. My academic foundation and hands-on experience have
          shaped a methodical, principle-driven approach to building scalable,
          maintainable software.
        </p>

        <p>
          I’ve worked with Python, Flask, JavaScript, HTML, CSS, TypeScript,
          React, Next.js, Heroku, PostgreSQL, and more — always pushing for
          clean logic and purposeful design. I approach development with
          discipline and curiosity, constantly refining my skills and aligning
          with best practices.
        </p>
        <p>
          I’m actively seeking a full-time role where I can grow as a teammate
          and deliver high-impact code.
        </p>
        <p>
          I’m driven to master full-stack development end-to-end — from initial
          concept and layout architecture to deployment and optimization. I
          believe in understanding every layer of the stack, not just using it.
        </p>
        <p>
          I’m excited to contribute to a company that values clarity, intent,
          and technical excellence as much as I do.
        </p>
      </div>
    </div>
  );
}
