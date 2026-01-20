import React from "react";
import FeatureCard from "./FeatureCard";
import clientPromise from "../../../lib/mongodb";

const Feature = async () => {
  const client = await clientPromise;
  const db = client.db("restaurant");
  const features = await db.collection("features").find({}).toArray();

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Các tính năng đảm bảo chất lượng
      </h1>
      <div className="w-[80%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, i) => {
          return (
            <div key={i}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
