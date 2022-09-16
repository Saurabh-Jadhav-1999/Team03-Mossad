import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    filters: [],
    budgetFilters: [],
    filteredHotels: []
}

export const filterSlice = createSlice({
    name: "filterSlice",
    initialState: initialState,
    reducers: {
        setFilters: (state = initialState, action) => {
            state.filters.push(action.payload);
        },
        unSetFilters: (state = initialState, action) => {
            const index = state.filters.indexOf(action.payload);
            if (index > -1) state.filters.splice(index, 1);
        },
        setBudgetFilters: (state = initialState, action) => {
            state.budgetFilters.push(action.payload);
        },
        unSetBudgetFilters: (state = initialState) => {
            state.budgetFilters = []
        },
        setFilteredHotels: (state = initialState, action) => {
            state.filteredHotels.push(action.payload)
        },
        clearFilteredHotels: (state = initialState) => {
            state.filteredHotels = []
        }
    },
    extraReducers: {}
})

export const { setFilters, unSetFilters, setBudgetFilters, unSetBudgetFilters, setFilteredHotels, clearFilteredHotels } = filterSlice.actions;
export default filterSlice.reducer;