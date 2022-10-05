import React from "react";
export const ListItemsDisplay = ({ items }) => {
  return (
    <ul className="list__items">
      {items.map(({ item, subItem }, index) => {
        return (
          <li key={index}>
            {`${item}`}
            <SubListItemsDisplay items={subItem} />
          </li>
        );
      })}
    </ul>
  );
};

export const SubListItemsDisplay = ({ items }) => {
  return (
    <div className="list_subitems">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            // style={{ lineHeight: "0.7", margin: "1rem 0rem 0rem 1rem" }}
          >
            {`- ${item}`}
          </div>
        );
      })}
    </div>
  );
};
