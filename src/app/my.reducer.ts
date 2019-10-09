import { List } from "./list.model";
import * as MyActions from "./my.actions";

export interface State {
  list: List[]
}
export const initialState = {
  list: [new List('','',[])]
};
export function myReducer(state:State = initialState, action: MyActions.MyActions) {
  console.log(state, action);
  switch(action.type){
    case MyActions.ADD_LIST: 
    return {
      ...state,
      list: [...state.list, action.payload]
    };
    case MyActions.UPDATE_LIST:
      const listObj = state.list[action.index];
      const updatedListObj = {
        ...listObj,
        ...action.payload
      };
      const updatedList = [...state.list];
      updatedList[action.index] = updatedListObj;

      return {
        ...state,
        list: updatedList
      };

    default:
      return state;
  }
}
