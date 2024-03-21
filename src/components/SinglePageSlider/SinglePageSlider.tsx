"use client";


import "keen-slider/keen-slider.min.css";
import slider from '../../assets/images/headphone.png'
import slider2 from '../../assets/images/headphone2.png'
import slider3 from '../../assets/images/headphone3.png'
import slider4 from '../../assets/images/headphone5.png'
import slider5 from '../../assets/images/headphone6.png'
import Image from "next/image";

import React, { MutableRefObject } from "react";
import "./SinglePageSlider.css";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";


function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function SinglePageSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image src={slider} alt="slider" width="500" height="500" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={slider2} alt="slider" width="500" height="500" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={slider3} alt="slider" width="500" height="500" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image src={slider} alt="slider4" width="500" height="500" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image src={slider5} alt="slider" width="500" height="500" />
        </div>
       
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1">
        <Image src={slider} alt="slider" width="500" height="500" /> 
        </div>
        <div className="keen-slider__slide number-slide2">
        <Image src={slider2} alt="slider" width="500" height="500" />
        </div>
        <div className="keen-slider__slide number-slide3">
        <Image src={slider3} alt="slider" width="500" height="500" />
        </div>
        <div className="keen-slider__slide number-slide4">
        <Image src={slider} alt="slider4" width="500" height="500" />
        </div>
        <div className="keen-slider__slide number-slide5">
        <Image src={slider} alt="slider4" width="500" height="500" />
        </div>
       
      </div>
    </>
  );
}
