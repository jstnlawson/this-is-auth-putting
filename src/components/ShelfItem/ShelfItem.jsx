import React from "react";

const ShelfItem = ({ item }) => {
  return (
    <div>
      <ul>
        <li>
          <img src={item.image_url} />
          <p>{item.description}</p>
        </li>
      </ul>
    </div>
  );
};

export default ShelfItem;
