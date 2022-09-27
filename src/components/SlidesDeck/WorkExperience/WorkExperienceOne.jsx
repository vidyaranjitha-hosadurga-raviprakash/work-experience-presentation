import React from "react";
import { SKILLS } from "@/data/Constants";

import { ListItemsDisplay, SlideTitleContent } from "@components";

export const WorkExperienceOne = () => {
  const skills = { items: SKILLS.slice(0, 1) };
  console.log("WorkExperience , skills", skills);
  return (
    <SlideTitleContent>
      {/* Title */}
      <div className="workexperienceone__title"> Work Experience</div>

      {/* Content */}
      <div className="workexperienceone__content">
        <p>
          Major contribution in front-end development of web application, also
          contributed to backend team.
        </p>

        <div className="workexperience__skills">
          <h3 className="slide-subheading">Skills:</h3>
          <ListItemsDisplay {...skills}></ListItemsDisplay>
        </div>
      </div>
    </SlideTitleContent>
  );
};
