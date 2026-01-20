import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Image src="/images/app.png" width={800} height={800} alt="mobile" />
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12">
            Kết nối người dùng với ứng dụng iOS & Android. Tải xuống từ iTunes &
            Play Store.
          </h1>
          <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400">
            Chọn một trong các giao diện có sẵn, hoặc tự tạo giao diện riêng với
            trình chỉnh sửa giao diện hiện đại nhất trên bất kỳ công cụ tạo khảo
            sát online nào. Chúng tôi không chỉ dừng lại ở việc hoàn thành dự án
            mà còn luôn tìm kiếm giải pháp tối ưu thông qua website & ứng dụng
            của mình.
          </p>
          <div className="sm:flex space-y-3 sm:space-y-0 mt-8">
            <a
              href="#"
              className="flex w-fit items-center rounded-md bg-gray-950 px-4 py-3 ground border border-gray-400 transition-all duration-300 text-white mr-3"
            >
              <FaApple className="text-2xl transition-all duration-300 mr-2" />
              <div>
                <p className="text-xs transition-all duration-300">
                  Tải ứng dụng trên
                </p>
                <p className="text-sm font-semibold transition-all duration-300">
                  App Store
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex w-fit items-center rounded-md bg-gray-950 px-4 py-3 ground border border-gray-400 transition-all duration-300 text-white"
            >
              <FaGooglePlay className="text-2xl transition-all duration-300 mr-2" />
              <div>
                <p className="text-xs transition-all duration-300">
                  Tải ứng dụng trên
                </p>
                <p className="text-sm font-semibold transition-all duration-300">
                  Google play
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
