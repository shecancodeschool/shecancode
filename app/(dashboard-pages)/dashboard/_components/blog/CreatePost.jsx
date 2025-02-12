import Image from "next/image";
import PostForm from "./PostForm";

export default function CreatePost({ categories, storedImages, slug, post }) {
  
  return (
    <div className="mb-48">
      {post?.createdAt && <h4 className="text-lg font-bold">Created on: {new Date(post.createdAt).toUTCString()}</h4>}
      {post?.image && <Image src={post?.image} alt={post?.title} width={500} height={200} className="my-4 border-white border-2 rounded-md" />}
      <PostForm
        categories={categories}
        storedImages={storedImages}
        id={slug && post?._id}
        post={post}
      />
    </div>
  )
}
