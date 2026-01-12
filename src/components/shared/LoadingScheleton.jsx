import React from 'react';
import ServiceCardSkeleton from '../skeleton/ServicesSkeleton';

const LoadingSkeleton = () => {
    return (
        <div className="grid gap-8 grid-cols-1 p-8 sm:grid-cols-2 lg:grid-cols-4">
            {
                Array.from({length:12}).map((_,i)=> < ServiceCardSkeleton key={i}></ServiceCardSkeleton>)
            }
        </div>
    );
};

export default LoadingSkeleton;









