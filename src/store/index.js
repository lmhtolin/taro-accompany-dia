import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = { user };

const store = configureStore({
  reducer: rootReducer,
});

const dynamicReducers = {};

export const addReducer = (reducer) => {
  const nameSpace = reducer.name;
  if (!nameSpace) {
    throw new Error(`reducer must have a namespace.`);
  }
  if (Object.prototype.toString.call(reducer) !== '[object Object]') {
    throw new Error(`reducer must be a object.`);
  }
  Object.keys(reducer).forEach((key) => {
    if (dynamicReducers[key]) {
      throw new Error(`reducer ${key} is existed.`);
    }
  });
  const { reducer: newReducer, actions } = createSlice(reducer);
  Object.assign(dynamicReducers, { [nameSpace]: newReducer });
  store.replaceReducer(combineReducers({ ...rootReducer, ...dynamicReducers }));
  return actions;
};

export default store;
