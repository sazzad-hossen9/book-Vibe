const BookLoading = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading Skeleton */}
      <div className="my-5 flex flex-col items-center gap-3">
        <div className="skeleton h-10 w-56"></div>
        <div className="skeleton h-4 w-80"></div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
          >
            {/* Image */}
            <div className="relative h-80">
              <div className="skeleton h-full w-full rounded-none"></div>

              {/* Category */}
              <div className="absolute left-4 top-4">
                <div className="skeleton h-7 w-20 rounded-full"></div>
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4">
                <div className="skeleton h-7 w-14 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
              {/* Title */}
              <div className="skeleton h-6 w-3/4"></div>

              {/* Author */}
              <div className="skeleton h-4 w-1/2"></div>

              {/* Book Info */}
              <div className="flex items-center justify-between">
                <div className="skeleton h-4 w-24"></div>
                <div className="skeleton h-4 w-12"></div>
              </div>

              {/* Tags */}
              <div className="flex gap-2">
                <div className="skeleton h-6 w-20 rounded-full"></div>
                <div className="skeleton h-6 w-20 rounded-full"></div>
              </div>

              {/* Button */}
              <div className="skeleton h-12 w-full rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookLoading;
