import Image from "next/image";
import banner from "@/assets/hero_img.jpg";

export default function BannerPage() {
  return (
    <div className=" mt-2 container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-8 py-12 md:px-16 md:py-16 lg:px-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-7">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            📚 Discover Your Next Read
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Book to freshen up your
            <span className="block text-emerald-600">bookshelf</span>
          </h2>

          <p className="max-w-lg text-base leading-7 text-gray-600 md:text-lg">
            Explore thousands of amazing books and find your next favorite
            story. Build a collection that inspires you every day.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="btn btn-success rounded-full px-7 text-white shadow-lg shadow-emerald-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              View The Books →
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600">
              Explore More
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Decorative circle */}
          <div className="absolute h-72 w-72 rounded-full bg-emerald-200/50 blur-2xl md:h-96 md:w-96"></div>

          <div className="relative z-10 w-full max-w-lg transition duration-500 hover:-translate-y-2">
            <Image
              src={banner}
              alt="Books banner"
              className="w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
