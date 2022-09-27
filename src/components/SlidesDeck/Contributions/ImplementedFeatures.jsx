import React from "react";

import {
  SlideTitleContent,
  SlideBlank,
  SubListItemsDisplay,
} from "@components";

import "@components/SlidesDeck/Contributions/Contributions.scss";

export const FeatureOne = () => {
  return (
    <SlideTitleContent>
      <div className="featureone__title">Implemented Features</div>
      <div className="featureone__content">
        <div className="feature__backup">
          <h3 className="slide-subheading">Backup feature:</h3>
          <div>
            <ul className="list_items">
              <li>
                Allows to take backup of the configuration of the networking
                device
              </li>
              <li>
                In case of networking device failure or breakdown, the device's
                backup file is used to bring the device back to working
                condition 
              </li>
              <li>
                Contributions:
                <div className="feature__contribution">
                  <SubListItemsDisplay
                    items={[
                      `User interfaces implementation. Adhered to design principles and
            patterns`,
                      `REST API implementation`,
                      `Unit and Integrating testing using Jest`,
                    ]}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideTitleContent>
  );
};

export const FeatureThree = () => {
  return (
    <SlideBlank>
      <div className="featuretwo__content">
        <div className="feature_restore">
          <h3 className="slide-subheading">Restore feature:</h3>
          <ul>
            <li>Allows restoration of configuration of a networking device</li>
          </ul>
        </div>
        <div className="spacer" />
        <div className="feature__usermanagement">
          <h3 className="slide-subheading">User management feature:</h3>
          <ul>
            <li>
              Allows the creation of different types of users, resetting the
              password, and disabling the user
            </li>
          </ul>
        </div>
      </div>
    </SlideBlank>
  );
};
