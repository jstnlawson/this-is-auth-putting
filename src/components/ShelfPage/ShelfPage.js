import React from 'react';
import { useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfPage() {
  const shelfList = useSelector(state => state.shelfList);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {/* Map the shelfList in the ShelfItem components to render in the DOM */}
      {shelfList.map((item) => {
        return(
          <ShelfItem item={item}/>
        );
      })}
    </div>
  );
}

export default ShelfPage;
