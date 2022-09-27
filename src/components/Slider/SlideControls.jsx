import React from "react";

export const SlideControls = ({
  currentSlideNumber,
  totalSlides,
  prevSlide,
  nextSlide,
}) => {
  return (
    <>
      <button
        className="btn-round"
        onClick={() => prevSlide()}
        disabled={currentSlideNumber === 0}
      >
        {"<"}
      </button>
      <button
        className="btn-round"
        onClick={() => nextSlide()}
        disabled={currentSlideNumber === totalSlides - 1}
      >
        {">"}
      </button>
    </>
  );
};
