import React from "react";
import { SKILLS } from "@/data/Constants";

import { SlideBlank, ListItemsDisplay } from "@components/";

import "@components/SlidesDeck/WorkExperience/WorkExperienceTwo.scss";
export const WorkExperienceTwo = () => {
  const skills = { items: SKILLS.slice(1, SKILLS.length) };
  console.log("WorkExperience , skills", skills);
  return (
    <SlideBlank>
      {/* Content */}
      <div className="workexperiencetwo__content">
        <ListItemsDisplay {...skills} />
      </div>
    </SlideBlank>
  );
};
