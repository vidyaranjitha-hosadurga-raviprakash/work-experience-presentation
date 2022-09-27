import React from "react";
export const ListItemsDisplay = ({ items }) => {
  return (
    <>
      {items.map(({ type, value }, index) => {
        return (
          <ul key={index} className="list_items">
            <li>
              {`${type}:`}
              <SubListItemsDisplay items={value} />
            </li>
          </ul>
        );
      })}
    </>
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
