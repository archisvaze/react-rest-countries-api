import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
if (localStorage.getItem("rest-countries-state") === null) {
    initialState = { theme: "light", countries: [], country: {} };
} else {
    initialState = JSON.parse(localStorage.getItem("rest-countries-state"))
}


const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        toggleTheme: (state, action) => {
            if (state.theme === "light") {
                state.theme = "dark"
            } else state.theme = "light";
        },
        setCountries: (state, action) => {
            state.countries = action.payload
        },
        setCountry: (state, action) => {
            state.country = action.payload
        }
    }

})


export const { toggleTheme, setCountries, setCountry } = mySlice.actions;
export default mySlice.reducer;