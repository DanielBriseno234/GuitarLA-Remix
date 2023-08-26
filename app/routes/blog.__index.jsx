import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import ListadoBlog from "../components/listado-blog";

export function meta() {
  return [
    { title: "GuitarLa - Nuestro blog" },
    { description: "GuitarLA, nuestras guitarras, venta de guitarras" },
  ];
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const posts = useLoaderData();

  return <ListadoBlog posts={posts} />;
}

export default Blog;
