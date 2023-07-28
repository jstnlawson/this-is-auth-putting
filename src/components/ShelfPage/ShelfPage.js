import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShelfItem from "../ShelfItem/ShelfItem";
import ShelfForm from "../ShelfForm/ShelfForm";

function ShelfPage() {
  // HOOKS
  const shelf = useSelector(state => state.shelf);
  const dispatch = useDispatch();

  // Load the shelf 
  useEffect(() => {
    // GET dispatch
    dispatch({ type: "FETCH_SHELF" });
    // POST dispatch
    //dispatch({ type: 'ADD_ITEM' })
  }, []);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm />
      <p>All of the available items can be seen here.</p>
      {/* Map the shelfList in the ShelfItem components to render in the DOM */}
      {shelf.map(item => {

        return <ShelfItem key={item.id} item={item} />;

      })}
    </div>
  );
}

export default ShelfPage;
