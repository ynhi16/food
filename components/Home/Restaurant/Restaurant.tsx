import React from "react";
import RestaurantCard from "./RestaurantCard";
import { getMenus } from "@/lib/db-utils";
import Link from "next/link";

const Restaurant = async () => {
  const menus = await getMenus();

  return (
    <div className="pt-6 pb-16 ">
      {/* section heading */}
      <div className="text-xl sm:text-2xl text-center font-extrabold">
        Nhà Hàng Gần Bạn
      </div>
      <div className="w-[80%] mx-auto grid md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
        {menus.slice(0, 6).map((menu, i) => (
          <div key={i}>
            <RestaurantCard
              image={menu.image}
              title={menu.title}
              tags={menu.tags}
            />
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link href="/restaurant">
          <button className="px-9 py-2.5 sm:px-12 sm:py-2.5 cursor-pointer rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white dark:text-black hover:bg-cyan-950 transition-all duration-300 dark:bg-cyan-300 dark:hover:bg-cyan-200">
            Xem thêm &rarr;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Restaurant;
