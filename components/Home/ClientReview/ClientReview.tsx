"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";
import { useEffect, useState } from "react";
// import clientPromise from "../../../lib/mongodb";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

type Comment = {
  _id?: string;
  title: string;
  content: string;
  author: string;
  position: string;
  rating: number;
};

const ClientReview = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setComments(data.data);
    };
    fetchComments();
  }, []);

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Khách hàng nói gì về chúng tôi
      </h1>
      <div className="mt-16 w-[80%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {comments.map((comment, i) => {
            return (
              <div key={i}>
                <ClientReviewCard
                  userImage="/images/c1.png"
                  reviewTitle={comment.title}
                  userName={comment.author}
                  roles={comment.position}
                  reviewContent={comment.content}
                  rating={comment.rating}
                />
              </div>
            );
          })}

          {/* <ClientReviewCard
            userImage="/images/c2.png"
            reviewTitle="Creative Work!"
            userName="Jany Doe"
            roles="Web Developer"
          /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
