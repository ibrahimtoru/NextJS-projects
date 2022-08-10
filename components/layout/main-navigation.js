import Link from "next/link";

import classes from "./main-navigation.module.css";
import Logo from "./logo";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
        {/* we need to pass anchor tags here because Link will not render that for aything other than text */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
