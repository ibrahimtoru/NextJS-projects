import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Ibrahimtoru&apso; Blog</title>
        <meta
          name="description"
          content="I post about programming and web dev"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
