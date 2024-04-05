"use client"
import React, { useEffect, useState } from 'react'
import RecentPost from './RecentPost';
import axios from "axios"

const RecentPosts =  () => {
    const [posts, setPosts] = useState([]);
    const [recentSize] = useState(-3);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const postResponse = await axios.get(`/api/Posts`);
            setPosts(postResponse.data.posts.slice(recentSize));    
         
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

    fetchData();
}, [recentSize]);

    return (
        <>
            <div class=" w-full rounded-[10px] border border-gray-3 p-4 sm:p-7">
                <h4 class="font-semibold text-custom-4 text-dark mb-3">
                    پست های اخیر
                </h4>
                {posts && (
                    <div class="grid grid-cols-1  gap-y-5 gap-x-3 items-start ">
                        {posts?.map((Post, _index) => (
                            <RecentPost id={_index} key={_index} post={Post} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default RecentPosts