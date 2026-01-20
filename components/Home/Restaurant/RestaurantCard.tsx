import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  tags: [];
};

const RestaurantCard = ({ image, title, tags }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="img"
        width={400}
        height={400}
        className="w-full h-[250px] object-cover"
      />
      <h1
        className="mt-4 w-fit dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-200 
      cursor-pointer text-base sm:text-lg font-bold"
      >
        {title}
      </h1>
      <div className="flex items-center font-medium mt-3 space-x-2">
        {tags.map((tag, i) => {
          return (
            <p
              key={i}
              className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white"
            >
              {tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantCard;
