import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice"; // Importera reducer från projectsSlice.js


export const store = configureStore({
  reducer: {
    projects: projectsReducer, // Lägger till våran slice i store
  },
});

export default store;
