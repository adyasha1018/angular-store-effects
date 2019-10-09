import { ActionReducerMap } from '@ngrx/store';

import * as MyReducer from './my.reducer';


export interface AppState {
  categoryList: MyReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    categoryList: MyReducer.myReducer,
};
