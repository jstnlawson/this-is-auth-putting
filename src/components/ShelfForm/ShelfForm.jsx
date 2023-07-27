import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function ShelfForm () {
    const dispatch = useDispatch();
    let [itemToAdd, setItemToAdd] =useState({description: '', image_url: '', user_id: 2});

    const handleDescription = (event) => { 
        setItemToAdd({
            ...itemToAdd,
            description: event.target.value,
        })
    }

    const handleURL = (event) => {
        setItemToAdd({
            ...itemToAdd,
            image_url: event.target.value,
        })

    }

    const addNewItem = (event) => {
        event.preventDefault()
        dispatch({
            type: 'ADD_ITEM',
            payload: itemToAdd
        })

    }

    return (
        <form onSubmit={(event) => addNewItem(event)}>
          <input
            onChange={handleDescription}
            type='text'
            value={itemToAdd.description}
            placeholder='description'
          />
    
          <input
            onChange={handleURL}
            type='text'
            placeholder='url'
            value={itemToAdd.image_url}
          />
    
          <button type='submit'>Submit</button>
        </form>
      );

}

export default ShelfForm