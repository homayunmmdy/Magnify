"use client"
import React, { useEffect, useState } from 'react'
import RecentPost from './RecentPost';
import axios from "axios"
import RecentPostSkeleton from './RecentPostSkeleton';
import { POST_API_URL } from '@/app/config/apiConstants';

const RecentPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [recentSize] = useState(-3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const postResponse = await axios.get(POST_API_URL);
                setPosts(postResponse.data.data.slice(recentSize));
                setLoading(false);

            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [recentSize]);

    if (loading) {
        return <RecentPostSkeleton />
    }
    return (
        <>
            <div className=" w-full rounded-[10px] border border-indigo-100 p-4 sm:p-7">
                <h2 className="font-semibold text-custom-4 text-dark mb-3 text-xl text-center">
                    Recent Posts
                </h2>
                {posts && (
                    <div className="grid grid-cols-1  gap-y-5 gap-x-3 items-start ">
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