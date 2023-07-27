// - REDUCERS -
// * Reducer for the shelf list
const shelfList = (state = [], action) => {
    switch(action.type) {
        case "SET_SHELF":
            return action.payload
    default:
        return state;
    }
}; // * end shelfList

// - EXPORTING shelfList -
export default shelfList;