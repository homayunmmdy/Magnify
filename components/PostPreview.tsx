import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <>
    <article
      className="max-w-sm overflow-hidden shadow-xl bg-gray6 y-6 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500"
    >
    <Link href={`/posts/${props.slug}`}>
      <Image className="w-full h-48 m-0 mb-1 rounded-t-xl" src={props.Imgsrc} alt={props.title} title={props.title} width={312} height={175} />
      <div className="p-2">
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      <p >{props.subtitle}</p>
      </div>
      </Link>
    </article>
    <div id="pos-article-display-94407"></div>
    </>
  );
};

export default PostPreview;
