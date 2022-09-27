import React, { useEffect, useRef, useState } from "react";

import "@components/Slider/Slider.scss";
import {
  IntroductionSlide,
  WorkExperienceOne,
  WorkExperienceTwo,
  Contributions,
  FeatureOne,
  FeatureThree,
  FinalSalutation,
} from "@components/SlidesDeck";
import { SlideControls } from "@components/Slider";
import { detectKeyPress } from "@/helpers/commonOperationsHelper";
import { KEYS_CODE } from "@/data/Constants";

const slidesDeck = [
  <IntroductionSlide />,
  <WorkExperienceOne />,
  <WorkExperienceTwo />,
  <Contributions />,
  <FeatureOne />,
  <FeatureThree />,
  <FinalSalutation />,
];

export const Slider = () => {
  // State variable for maintaing slide num
  const [slideNumber, setSliderNumber] = useState(0);

  // Ref to access the updated slideNumber in the callbacks.
  const slideNumberRef = useRef(slideNumber);

  const prevSlide = () => {
    setSliderNumber((prev) => prev - 1);
  };
  const nextSlide = () => {
    setSliderNumber((prev) => prev + 1);
  };

  const slideControlsProps = {
    currentSlideNumber: slideNumber,
    totalSlides: slidesDeck.length,
    prevSlide,
    nextSlide,
  };

  const getSlideNumber = () => {
    const totalSlides = slidesDeck.length;

    // Not displaying slidenumber for first and last slide
    if (slideNumber !== 0 && slideNumber !== totalSlides - 1) {
      return `${slideNumber + 1}/${totalSlides}`;
    }
  };

  useEffect(() => {
    slideNumberRef.current = slideNumber;
  }, [slideNumber]);

  // Arrow-keys functionality for the slides change
  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (
        e.keyCode === KEYS_CODE.leftArrow ||
        e.keyCode === KEYS_CODE.downArrow
      ) {
        if (slideNumberRef.current === 0) {
          return;
        }
        return prevSlide();
      }

      if (
        e.keyCode === KEYS_CODE.rightArrow ||
        e.keyCode === KEYS_CODE.upArrow
      ) {
        if (slideNumberRef.current === slidesDeck.length - 1) {
          return;
        }
        return nextSlide();
      }
    });
    () => window.removeEventListener("keydown");
  }, []);

  return (
    <div className="slider__wrapper">
      <div className="slide_display">
        <div className="slide__content">{slidesDeck[slideNumber]}</div>
        <div className="slide__slidenumber">{getSlideNumber()}</div>
      </div>
      <div className="slide_controls flex-center-row">
        <SlideControls {...slideControlsProps} />
      </div>
    </div>
  );
};
