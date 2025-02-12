import Image from "next/image";

export default function Card() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border-4 border-red-400">
        <img
          className="w-full h-48 object-cover"
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Beautiful Landscape"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Red Heaven</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.
          </p>
          <div className="mt-4 flex space-x-2">
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">#tailwind</span>
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">#frontendeverything</span>
          </div></div></div>
      </main>
  
  );
}