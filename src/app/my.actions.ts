import { Action } from "@ngrx/store";
import { List } from "./list.model";

export const ADD_LIST = "ADD_LIST";
export const UPDATE_LIST = "UPDATE_LIST";

export class ADD implements Action {
  readonly type = ADD_LIST;

  constructor(public payload: List) {}
}
export class UPDATE implements Action {
  readonly type = UPDATE_LIST;

  constructor(public payload: List, public index: number) {}
}
export type MyActions = 
    | ADD
    | UPDATE;
