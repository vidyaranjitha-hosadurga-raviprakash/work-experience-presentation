import React from "react";

import {
  SlideTitleContent,
  ListItemsDisplay,
  SubListItemsDisplay,
} from "@components";
import "@components/SlidesDeck/Contributions/Contributions.scss";

export const Contributions = () => {
  const contributions = {
    items: [
      {
        item: `Translating wireframes to user interfaces and customized UI
              controls`,
        subItem: [],
      },
      {
        item: `Features implementation:`,
        subItem: ["Backup", "Restore", "User managment"],
      },
      {
        item: `Web application performance analysis using Lighthouse, React
              DevTools Profiler and optimization`,
        subItem: [],
      },
      {
        item: `Analyzing and resolving the defects`,
        subItem: [],
      },
    ],
  };
  return (
    <SlideTitleContent>
      <div className="contributions__title">Contributions</div>
      <div className="contributions__content" style={{ marginTop: "0rem" }}>
        <div>{<ListItemsDisplay {...contributions} />}</div>
      </div>
    </SlideTitleContent>
  );
};
