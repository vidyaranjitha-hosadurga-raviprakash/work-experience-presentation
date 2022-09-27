import React from "react";
export const ListItemsDisplay = ({ items }) => {
  return (
    <div>
      <div>
        {items.map(({ type, value }, index) => {
          return (
            <ul key={index}>
              <li>
                {`${type}:`}
                <SubListItemsDisplay items={value} />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
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
