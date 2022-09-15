import { useReducer } from "react";
const initialState = { tipList: [], filterValue: "" };

function Reducer(state, action) {
  switch (action.type) {
    case "addTipToTipList":
      return { tipList: [...state.tipList, action.payload] };
    case "setFilteredValue":
      return { filterValue: action.payload };
    default:
      return state;
  }
}
export const useTipReducer = () => {
  return useReducer(Reducer, initialState);
};
