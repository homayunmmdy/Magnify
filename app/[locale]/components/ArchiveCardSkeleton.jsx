import React from 'react'

const ArchiveCardSkeleton = () => {
    return (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div
                className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div className="p-2 flex justify-center">
                    <div className="skeleton h-32 w-full"></div>
\
                </div>

                <div className="px-4 pb-3">
                    <div>
                        <h5
                            className="mb-3 text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            <div className="skeleton h-4 w-full mb-2"></div>
                            <div className="skeleton h-4 w-[60%]"></div>
                        </h5>

                        <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all truncate">
                            <div className="skeleton h-4 w-full mb-3"></div>

                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ArchiveCardSkeleton