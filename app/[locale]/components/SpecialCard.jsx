"use client"
import React from 'react'
import useDataFetching from './useDataFetching';
import SpecialCardSkeleton from './SpecialCardSkeleton';

const SpecialCard = () => {
    const { data, loading } = useDataFetching("fa/api/Posts", -1, 5);

    if (loading) {
        return <SpecialCardSkeleton />
    }
    return (
        <div>
            {data?.map((post) => (
                <>
                    <a href={`/Posts/${post._id}`}>
                        <div className="h-56 bg-cover rounded-lg text-center overflow-hidden"
                            style={{ backgroundImage: `url(${post.imgurl})` }}
                            title={post.title}>
                        </div>
                    </a>
                    <div
                        className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            <a href={`/Posts/${post._id}`}
                                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                                {post.title}</a>
                            <p className="text-gray-700 text-xs mt-2">{post.description}</p>
                        </div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default SpecialCard