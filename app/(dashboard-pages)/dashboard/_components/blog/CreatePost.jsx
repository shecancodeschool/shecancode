import Image from "next/image";
import { getArticleById } from "../../_actions/articlesActions";
import { getCategories } from "../../_actions/blogCategoryActions";
import PostForm from "./PostForm";
import { getStoredImages } from "../../_actions/storedImageActions";

export default async function CreatePost({ id }) {
  const allCategories = await getCategories();
  const categories = JSON.parse(allCategories);
  const fetchedPost = await getArticleById(id);
  const fetchedStoredImages = await getStoredImages();
  const storedImages = JSON.parse(fetchedStoredImages);
  var post = {};
  if (fetchedPost) {
    post = JSON.parse(fetchedPost);
  }

  return (
    <div className="mb-48">
      {post?.createdAt && <h4 className="text-lg font-bold">Created on: {new Date(post.createdAt).toUTCString()}</h4>}
      {post?.image &&<Image src={post?.image} alt={post?.title} width={500} height={200} className="my-4 border-white border-2 rounded-md" /> }
      <PostForm 
        categories={categories} 
        storedImages={storedImages}
        id={id}
        post={post}  
      />
    </div>
  )
}
