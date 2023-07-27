import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function ShelfForm () {
    const dispatch = useDispatch();
    let [itemToAdd, setItemToAdd] =useState({description: '', image_url: ''});

    const handleDescription = (event) => {
        setItemToAdd({
           itemToAdd,
           description: event.target.value,  
        })
    }

    const handleURL = (event) => {
        setItemToAdd({
            itemToAdd,
            image_url: event.target.value,
        })

    }

    const addNewItem = (event) => {
        event.preventDefault()
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                description: description,
                image: image_url,
              },
        })

    }

    return (
        <form onSubmit={(event) => addNewItem(event)}>
          <input
            onChange={handleDescription}
            type='text'
            placeholder='description'
          />
    
          <input
            onChange={handleURL}
            type='text'
            placeholder='url'
          />
    
          <button type='submit'>Submit</button>
        </form>
      );

}

export default ShelfForm