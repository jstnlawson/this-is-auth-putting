import React from "react";
import { useSelector } from "react-redux";
const ShelfItem = ({ item }) => {
  const user = useSelector(state => state.user);
  console.log('item: ', item);
  return (
    <div>
        <ul>
        <li>

          <img src={item?.image_url} />
        </li>
        <li>{item?.description}</li>
         {user.id == item.user_id  && <button>Delete</button> }
         
        

      </ul>

    </div>
  );
};

export default ShelfItem;
