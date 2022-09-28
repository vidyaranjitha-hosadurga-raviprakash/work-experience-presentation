import React from "react";

import { SlideTitleContent, SlideBlank } from "@components";

import { ListItemsDisplay } from "@components";
import backupUseCaseDiagram from "@/assets/image/feat_backupUseCaseDiagram.jpg";
import "@components/SlidesDeck/Contributions/Contributions.scss";

const featureBackup = {
  items: [
    {
      item: `Allows to take backup of the configuration of the networking
                device`,
      subItem: [],
    },
    {
      item: `In case of networking device failure or breakdown, the device's
                backup file is used to bring the device back to working
                condition `,
      subItem: [],
    },
    {
      item: `Contributions:`,
      subItem: [
        `User interfaces implementation. Adhered to design principles and
            patterns`,
        `REST API implementation`,
        `Unit and Integrating testing using Jest`,
      ],
    },
  ],
};

const featureRestore = {
  items: [
    {
      item: `Allows restoration of configuration of a networking device`,
      subItem: [],
    },
  ],
};
const featureUserMgmt = {
  items: [
    {
      item: `Allows the creation of different types of users, resetting the
              password, and disabling the user`,
      subItem: [],
    },
  ],
};

const featureContextHelp = {
  items: [
    {
      item: `Online user documentation/manual that provides the right context for a given page`,
      subItem: [],
    },
  ],
};
export const FeatureOne = () => {
  return (
    <SlideTitleContent>
      <div className="featureone__title">Implemented Features</div>
      <div className="featureone__content">
        <div className="feature__backup">
          <h3 className="slide-subheading">Backup feature:</h3>
          <ListItemsDisplay {...featureBackup} />
        </div>
      </div>
    </SlideTitleContent>
  );
};

export const FeatureTwo = () => {
  return (
    <SlideBlank>
      <div className="featuretwo__content">
        <div className="featuretwo_backupfeatDiagram centered-container">
          <img
            src={backupUseCaseDiagram}
            alt="Backup feature use case diagram"
            style={{
              width: "85%",
              border: "var(--border)",
            }}
          ></img>
          <figcaption>Backup feature use case diagram</figcaption>
        </div>
      </div>
    </SlideBlank>
  );
};

export const FeatureThree = () => {
  return (
    <SlideBlank>
      <div className="featuretwo__content">
        <div className="feature_restore">
          <h3 className="slide-subheading">Restore feature:</h3>
          <ListItemsDisplay {...featureRestore} />
        </div>
        <div className="spacer" />
        <div className="feature__usermanagement">
          <h3 className="slide-subheading">User management feature:</h3>
          <ListItemsDisplay {...featureUserMgmt} />
        </div>
        <div className="spacer" />
        <div className="feature__contexthelp">
          <h3 className="slide-subheading">Context-sensitive help:</h3>
          <ListItemsDisplay {...featureContextHelp} />
        </div>
      </div>
    </SlideBlank>
  );
};
