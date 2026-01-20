import React from "react";
import HowItWorkCard from "./HowItWorkCard";

const HowItWork = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Let see how it works
      </h1>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div>
          <HowItWorkCard
            num="01"
            image="/images/w1.png"
            title="Trở thành tài xế giao hàng"
            description="Kiếm thu nhập ổn định, làm việc tự do bất cứ lúc nào, bất cứ nơi đâu."
          />
        </div>
        <div>
          <HowItWorkCard
            num="02"
            image="/images/w2.png"
            title="Hợp tác cùng chúng tôi"
            description="Mở rộng kinh doanh và tiếp cận thêm nhiều khách hàng tiềm năng."
          />
        </div>
        <div>
          <HowItWorkCard
            num="03"
            image="/images/w3.png"
            title="Tải Ứng Dụng Android/iOS"
            description="Trải nghiệm đặt đồ ăn tiện lợi nhất với tính năng theo dõi đơn hàng trực tuyến."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
