import Image from "next/image";
import banner from "@/assets/hero_img.jpg";

export default function BannerPage() {
  return (
    <div className="grid grid-cols-2 items-center px-20 py-18  gap-4 container mx-auto bg-gray-300 rounded-3xl">
      <div className="space-y-10">
        <h2 className="font-bold text-6xl">
          Book to freshen up your bookshelf{" "}
        </h2>
        <button className="btn btn-success">View tha task</button>
      </div>
      <div>
        <Image src={banner} alt=" banner img " />
      </div>
    </div>
  );
}
