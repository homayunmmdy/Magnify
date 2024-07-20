"use client";
import RecentPosts from "@/app/(pages)/Posts/[id]/components/RecentPosts";
import { FormatTime } from "@/app/components/layout";
import useReadText from "@/app/hooks/useReadText";
import useSinglePost from "@/app/hooks/useSinglePost";
import { SignIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa6";
import { readingTime } from 'reading-time-estimator';
import PostSeclton from "./PostSkelton";

const Post = () => {
  const post = useSinglePost();
  const text = `${post?.title}. ${post?.body}`
  const { isSpeaking, handleReadText, handleStopReading } = useReadText(text);
  const { user } = useUser();

  if (!user) {
    return (<div className="flex justify-center py-5 mt-10"> <SignIn /></div>)
  }

  if (!post) {
    return <PostSeclton />
  }
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };
  const readingTimeEstimate = readingTime(text, 100, "en")

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-indigo-500 pt-10">
          <div className="w-[94%] md:w-[92%] mx-auto px-4 py-8">
            <h1 className="text-4xl text-center font-extrabold text-white">{post.title}</h1>
            <p className="text-lg  text-center my-3 text-white"><FormatTime timestamp={post.createdAt} options={options} /></p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="w-[94%] md:w-[92%] mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4 ">
              <Image
                className="w-full py-3 aspect-video rounded-3xl"
                src={post.imgurl}
                width={880}
                height={500}
                title={post.title}
                alt={post.title}
                blurDataURL={post.imgurl}
                placeholder="blur"
                layout="responsive"
                loading="lazy"
              />
              <div className="flex gap-3 items-center justify-between px-3">
                <p className="text-center hover:underline hover:text-indigo-600">{readingTimeEstimate.text}</p>
                <Link href="/" className="btn btn-outline btn-primary rounded-full">Back Home</Link>
                <div>
                  {!isSpeaking ? (
                    <button
                      onClick={handleReadText}
                      className="px-4 py-2 btn text-white btn-primary rounded-full"
                    >
                      <FaPlay />
                    </button>
                  ) : (
                    <button
                      onClick={handleStopReading}
                      className="px-4 py-2 btn text-white btn-primary rounded-full"
                    >
                      <FaStop />
                    </button>
                  )}
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="p-3 text-lg leading-9	">
                  {post.body}
                </p>
              </div>
                <div class="w-full mx-auto">
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
        </svg>
        <div class="space-y-2">
          <p class="text-slate-800">Hi, my name is Homayoun. I am the founder of Magnitify. At Magnitify, we write articles about AI, business, and self-improvement. We share insights from books, document our experiences, and explore what we learn about these three topics. I hope you enjoy our content!</p>
        </div>
      </div>
    </div>
  </div>
            </div>
            <div className="w-full md:w-1/4 py-3">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Post;
