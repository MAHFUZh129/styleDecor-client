const ServiceCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-base-100 rounded-3xl overflow-hidden
      border border-base-200 shadow-md">

      {/* image skeleton */}
      <div className="h-56 w-full bg-base-300 relative">
        {/* price badge */}
        <div className="absolute top-4 right-4 h-6 w-16 bg-base-200 rounded-full" />
      </div>

      {/* content */}
      <div className="p-6 space-y-4">

        {/* title */}
        <div className="h-6 w-3/4 bg-base-300 rounded-md" />

        {/* rating & modes */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-16 bg-base-300 rounded-md" />
          <div className="flex gap-2">
            <div className="h-5 w-12 bg-base-300 rounded-full" />
            <div className="h-5 w-14 bg-base-300 rounded-full" />
          </div>
        </div>

        {/* description */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-base-300 rounded-md" />
          <div className="h-4 w-5/6 bg-base-300 rounded-md" />
          <div className="h-4 w-4/6 bg-base-300 rounded-md" />
        </div>

        {/* button */}
        <div className="h-11 w-full bg-base-300 rounded-2xl" />
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;
