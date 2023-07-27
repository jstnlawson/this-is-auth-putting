import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShelfItem from "../ShelfItem/ShelfItem";

function ShelfPage() {
  // HOOKS
  const shelf = useSelector(state => state.shelf);
  const dispatch = useDispatch();

  // Load the shelf 
  useEffect(() => {
    dispatch({ type: "FETCH_SHELF" });
  }, []);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {/* Map the shelfList in the ShelfItem components to render in the DOM */}
      {shelf.map(item => {
        return <ShelfItem item={item} />;
      })}
    </div>
  );
}

export default ShelfPage;
