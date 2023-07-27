// - IMPORTING -
import { React, useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";

// - ShelfPage COMPONENT -
function ShelfPage() {
  // * Declaring dispatch
  const dispatch = useDispatch();

  // * Declaring shelfList from store
  const shelfList = useSelector((store) => store.shelfList);

  // * Dispatch action on DOM load
  useEffect(() => {
    dispatch({
      type: "FETCH_SHELF",
    });
  }, []);

  console.log("shelfList is:", shelfList);

  // - RENDERING -
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here below:</p>
      {shelfList.map((item) => {
        return (
          <div key={item.id}>
            <img
              style={{ width: "400px" }}
              src={item?.image_url}
              alt={item?.description}
            />

            <p>{item?.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ShelfPage;
