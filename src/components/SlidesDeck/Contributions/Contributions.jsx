import React from "react";

import { SlideTitleContent, SubListItemsDisplay } from "@components";
import "@components/SlidesDeck/Contributions/Contributions.scss";

export const Contributions = () => {
  return (
    <SlideTitleContent>
      <div className="contributions__title">Contributions</div>
      <div className="contributions__content" style={{ marginTop: "0rem" }}>
        <div>
          <ul className="list_items">
            <li>
              Translating wireframes to user interfaces and customized UI
              controls
            </li>
            <li>
              Features implementation:
              <SubListItemsDisplay
                items={["Backup", "Restore", "User managment"]}
              />
            </li>
            <li>
              Web application performance analysis using Lighthouse, React
              Profilers and optimization
            </li>
            <li>Analyzing and resolving the defects</li>
          </ul>
        </div>
      </div>
    </SlideTitleContent>
  );
};
