import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

export default function PostDetailsPage({ post }) {
  // if (!post) return <p>Loading...</p>; // for fallback: true
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;

  const postData = getPostData(params.slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 300,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
