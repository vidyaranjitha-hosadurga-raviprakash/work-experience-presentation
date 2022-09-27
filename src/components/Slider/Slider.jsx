import React, { useState } from "react";

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
  const [slideNumber, setSliderNumber] = useState(4);

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
