import Image from "next/image";
import React from "react";
import clientPromise from "../../../lib/mongodb";

const About = async () => {
  const client = await clientPromise;
  const db = client.db("restaurant");
  const aboutInfo = await db.collection("about").find({}).toArray();

  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <Image src="/images/a.png" width={800} height={800} alt="image" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            Chúng tôi giao hàng nhanh như siêu nhân
          </h1>
          <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
            Chúng tôi không chỉ dừng lại ở việc giao đồ ăn nhanh chóng, mà còn
            cam kết mang đến cho bạn trải nghiệm đặt món tiện lợi, an toàn và
            hoàn toàn bảo mật. Đặt món bất cứ lúc nào, tận hưởng bữa ăn ngon chỉ
            sau vài phút chờ đợi.
          </p>
          <div className="mt-8">
            {aboutInfo.map((info, i) => {
              return (
                <div key={i} className="flex mt-8 items-center space-x-6">
                  <p className="text-3xl md:text-5xl opacity-40 font-bold">
                    {info.number}
                  </p>
                  <div>
                    <h1 className="text-base sm:text-lg font-extrabold">
                      {info.title}
                    </h1>
                    <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
