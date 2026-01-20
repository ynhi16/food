import React from "react";
import clientPromise from "../../../lib/mongodb";

const Category = async () => {
  const client = await clientPromise;
  const db = client.db("restaurant");
  const categories = await db.collection("categories").find({}).toArray();

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Danh mục món ăn phổ biến
      </h1>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, i) => {
            return (
              <span
                key={i}
                className="lg:px-6 lg:py-3 p-2.5 text-sm rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-300 bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900 font-semibold lg:text-lg"
              >
                {category.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
