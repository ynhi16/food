import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  description: string;
};

const FeatureCard = ({ image, title, description }: Props) => {
  return (
    <>
      <Image
        src={image}
        width={100}
        height={100}
        alt="icon"
        className="mx-auto object-contain"
      />
      <h1 className="text-center mt-8 text-lg font-bold">{title}</h1>
      <p className="text-gray-700 text-center sm:w-[80%] mx-auto dark:text-gray-300 mt-3">
        {description}
      </p>
    </>
  );
};

export default FeatureCard;
