"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Carousels } from "react-responsive-carousel";
import Image from "next/image";

const images = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

export default function Carousel() {
  return (
    <div className="hero-carousel">
      <Carousels
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {images.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={480}
            height={480}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousels>

      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={168}
        height={168}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
}
