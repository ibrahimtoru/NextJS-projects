import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDir); // it return an array of strings, an array of filenames in this case
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); // this will return an object with two properties, with a data property for metadata as object and a content property which contains the markdown as string

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
