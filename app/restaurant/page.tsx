import React from "react";
import { getMenusPagination } from "@/lib/db-utils";
import RestaurantCard from "@/components/Home/Restaurant/RestaurantCard";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const Restaurant = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const page = Number(params?.page || 1);
  const { data, totalPages } = await getMenusPagination(page, 12);

  return (
    <div className="overflow-hidden">
      <div className="pb-16">
        <div className="w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-14">
          {data.map((menu, i) => (
            <div key={i}>
              <RestaurantCard
                image={menu.image}
                title={menu.title}
                tags={menu.tags}
              />
            </div>
          ))}
        </div>
        <div className="w-[80%] mx-auto flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <a
              key={index}
              href={`?page=${index + 1}`}
              className={`px-3 py-1 border rounded ${
                page === index + 1 ? "bg-gray-800 text-white" : ""
              }`}
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
