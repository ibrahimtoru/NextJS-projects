import ReactMarkdown from "react-markdown";
import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    // code(code) {
    //   const { language, value } = code;

    //   return (
    //     <SyntaxHighlighter style={atomDark} language={language}>
    //       {value}
    //     </SyntaxHighlighter>
    //   );
    // },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
