import React from "react";

const ShelfItem = ({ item }) => {
  return (
    <div>
      <ul>
        <li>{item.image_url}</li>
        <li>{item.description}</li>
      </ul>
    </div>
  );
};

export default ShelfItem;
