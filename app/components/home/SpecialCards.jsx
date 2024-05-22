"use client"
import React from 'react'
import useDataFetching from '../layout/useDataFetching';
import SpecialCardsSkeleton from './SpecialCardsSkeleton';
import Link from 'next/link';
import FormattedTimestamp from '../layout/FormattedTimestamp';

const SpecialCards = () => {
    const { data, loading } = useDataFetching("/api/Posts", -3, 6);

    if (loading) {
        return <SpecialCardsSkeleton />
    }
    const options = {
        month: "2-digit",
        day: "2-digit",
    };
    return (
        <div>
            {data?.map((post) => (
                <div className="flex items-start mb-3 pb-3">
                    <Link href={`/Posts/${post._id}`} className="inline-block mr-3">
                        <div className="w-20 h-20 bg-cover bg-center ml-3 rounded-xl"
                            style={{ backgroundImage: `url(${post.imgurl})` }}
                            title={post.title}>
                        </div>
                    </Link>
                    <div className="text-sm">
                        <p className="text-gray-600 text-xs"><FormattedTimestamp timestamp={post.createdAt} options={options} /></p>
                        <Link href={`/Posts/${post._id}`} className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default SpecialCards