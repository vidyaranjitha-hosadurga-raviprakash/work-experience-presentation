import React from "react";

import {
  getFullName,
  getCurrentDate,
  getOrdinal,
} from "@/helpers/commonOperationsHelper";

import { TAG_LINE } from "@/data/Constants";
import "@components/SlidesDeck/IntroAndSalutation/IntroAndSalutation.scss";
import { SlideBlank } from "@components/SlideLayouts";

export const IntroductionSlide = () => {
  const [date, ...rest] = getCurrentDate().split(" ");
  return (
    <SlideBlank>
      <div className="centered-container introduction__content">
        <div className="introduction__name">
          <h1 className="heading"> {getFullName()}</h1>
        </div>
        <div className="introduction__tagline">
          <h2 className="subheading">{TAG_LINE}</h2>
        </div>
        <div className="introduction__date">
          {date}
          <sup
            style={{
              fontSize: "1rem",
            }}
          >
            {getOrdinal(date)}
          </sup>
          {` ${rest.join(" ")}`}
        </div>
      </div>
    </SlideBlank>
  );
};

export const FinalSalutation = () => {
  return (
    <SlideBlank>
      <div className="centered-container finalsalutation__content">
        <h2 className="heading">Thank you!</h2>
      </div>
    </SlideBlank>
  );
};
