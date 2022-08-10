import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ibrahim.jpg"
          alt="ibrahim's profile pic"
          width={600}
          height={600}
        />
      </div>
      <h1>Hi, I&apos;m Ibrahim</h1>
      <p>
        I blog about web development - especially frontend libraries and
        frameworks like React or Angular
      </p>
    </section>
  );
}
