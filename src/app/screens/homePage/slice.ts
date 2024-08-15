import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../lib/types/screen";

// Initial state for Homepage slice of redux store
const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  // createSlice is function from redux toolkit
  name: "homePage",
  initialState,
  reducers: {
    setPopularDishes: (state, action) => {
      state.popularDishes = action.payload;
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions; // tashqarida ishlatish uchun export qildik

const HomePageReducer = homePageSlice.reducer; // store da ishlatish un export qldik
export default HomePageReducer;
