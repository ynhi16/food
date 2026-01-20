import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export type Props = {
  userImage: string;
  reviewTitle: string;
  userName: string;
  roles: string;
  reviewContent: string;
  rating: number;
};

const ClientReviewCard = ({
  userImage,
  reviewTitle,
  userName,
  roles,
  reviewContent,
  rating,
}: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg md:mr-4">
      <h1 className="text-xl font-bold">{reviewTitle}</h1>
      <div className="mt-2 flex items-center">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rating ? (
            <FaStar key={index} className="text-yellow-500 w-5 h-5" />
          ) : (
            <FaRegStar key={index} className="text-gray-400 w-5 h-5" />
          )
        )}
      </div>
      <p className="mt-4 text-base font-medium text-gray-800 dark:text-gray-300">
        {reviewContent}
      </p>
      <p className="block w-full h-[1px] bg-gray-300 dark:bg-gray-700 mt-6 mb-6"></p>
      <div>
        <div className="flex items-center space-x-4">
          <Image
            src={userImage}
            width={60}
            height={60}
            alt="image"
            className="rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold">{userName}</h1>
            <p className="text-sm sm:text-base">{roles}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
