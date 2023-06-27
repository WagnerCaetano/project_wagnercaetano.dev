"use client";
import React, { FunctionComponent } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "@/constants/types";
import { FaQuoteLeft } from "react-icons/fa";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

const TestimonialCarousel: FunctionComponent<TestimonialCarouselProps> = ({ testimonials }) => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="flex flex-col bg-backgroundSecundary px-6 py-12 rounded-lg shadow-lg max-w-sm mx-auto gap-4">
              <FaQuoteLeft className="text-primary" size="32px" />
              <p className="text-text">{testimonial.content}</p>
              <p className="text-text font-semibold">
                {testimonial.name} - {testimonial.project} - {testimonial.date}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
