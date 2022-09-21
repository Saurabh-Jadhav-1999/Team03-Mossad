import InputAdornment from '@mui/material/InputAdornment';
import styles from "./HotelSearchFilters.module.css"
import { Box, Checkbox, FormControlLabel, Typography, TextField, Stack } from "@mui/material"
import { SearchOutlined } from "@material-ui/icons"
import { InputSlider } from './PriceRangeFilter'
import { setFilters, unSetFilters, setBudgetFilters, unSetBudgetFilters } from "../../slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredHotels } from "../../slices/searchSlice";
import { useState } from "react";
import { useEffect } from 'react';

// Popular Filter Properties available for Hotels
const FiltersData = [
    {
        id: 101,
        filterType: 'Popular Hotels',
        filterProperties: [
            {
                id: 1,
                filterName: 'Hotels',
                defaultChecked: true
            },
            {
                id: 2,
                filterName: 'Breakfast and Dinner',
                defaultChecked: false,
            }, {
                id: 3,
                filterName: 'Free Cancellation',
                defaultChecked: false
            },
            {
                id: 4,
                filterName: 'No Prepayment',
                defaultChecked: false,
            }]
    },
    {
        id: 103,
        filterType: 'Facilties',
        filterProperties: [
            {
                id: 1,
                filterName: 'Outdoor Sports',
                defaultChecked: false
            },
            {
                id: 2,
                filterName: 'Barbeque',
                defaultChecked: false
            }, {
                id: 3,
                filterName: 'Living Room',
                defaultChecked: false
            },
            {
                id: 4,
                filterName: 'Room Service',
                defaultChecked: false
            },
            {
                id: 5,
                filterName: 'Infinity Pool',
                defaultChecked: false
            },
            {
                id: 6,
                filterName: 'Spa',
                defaultChecked: false
            },
        ]
    },
]

// // Budget Filter Properties available for Hotels
const yourBudgetFilterData = [
    {
        id: 102,
        filterType: 'Your Budget',
        filterProperties: [
            {
                id: 1,
                filterName: 'Less than $75',
                range: [50, 75]
            },
            {
                id: 2,
                filterName: '$75 to $300',
                range: [75, 300]
            },
            {
                id: 3,
                filterName: '$300 to $500',
                range: [300, 500]
            },
            {
                id: 4,
                filterName: '$500 to $1000',
                range: [1000, 500]
            },
            {
                id: 5,
                filterName: 'Greater than $1000',
                defaultChecked: [1000, 100000]
            }
        ]
    },
]

// Mapping Filter properties with data recieved from Hotel Details Object
const filterValueArr = {
    "No Prepayment": "no_prepayment",
    "Free Cancellation": "free_cancellation",
    "Breakfast and Dinner": "breakfastAndDinner",
    "Outdoor Sports": "out_door_sport",
    "Barbeque": "barbeque",
    "Living Room": "living_room",
    "Room Service": "room_service",
    "Infinity Pool": "swimming_pool",
    "Spa": "spa",
    "Less than $75": [50, 75],
    "$75 to $300": [75, 300],
    "$300 to $500": [300, 500],
    "$500 to $1000": [500, 1000],
    "Greater than $1000": [1000, 10000]
}

export const HotelSearchFilters = () => {

    const budgetFilterState = useSelector((state => state.search.yourBudgetFilters))
    const hotelList = useSelector((state => state.search.hotellist))

    const searchPropertyButtonHandler = (event) => {
        const resultArray = []
        hotelList.map((item) => {
            if ((item.hotel_name).toString().trim().toLowerCase().includes((event.target.value).trim().toLowerCase())) resultArray.push(item)
        })
        dispatch(setFilteredHotels(resultArray))
    }

    const filters = useSelector((state) => state.search.filters)
    const dispatch = useDispatch();
    const [budgetSelector, setBudgetSelector] = useState(budgetFilterState)

    useEffect(() => {
        setBudgetSelector(budgetFilterState)
    }, [budgetFilterState])

    const budgetStateHandler = (event, filterValue) => {
        setBudgetSelector(budgetFilterState)
        setBudgetSelector({ [filterValue]: event.target.checked })
    }

    const getFilterProperties = event => {

        const filterValue = filterValueArr[event.target.value];
        if (event.target.checked) {
            if (!filters.includes(filterValue)) {
                dispatch(setFilters(filterValue))
            }
        }
        else {
            dispatch(unSetFilters(filterValue))
        }
    }

    const getBudgetFilterProperties = event => {

        const filterValue = filterValueArr[event.target.value];

        if (event.target.checked) {
            if (!filters.includes(filterValue)) {
                budgetStateHandler(event, event.target.value)
                dispatch(unSetBudgetFilters())
                dispatch(setBudgetFilters(filterValue))
            }
        }
        else {
            budgetStateHandler(event, event.target.value)
            dispatch(unSetBudgetFilters())
        }
    }

    return (
        <Box className={styles.filterComponentsContainer}>

            {/* {Search property input box Container} */}
            <Box className={styles.searchPropertyContainer}>
                <Typography className={styles.searchPropertyHeader}>
                    Search Property
                </Typography>
                <Box>
                    <TextField
                        id="outlined-basic" label="Search Property" variant="outlined" size="small"
                        onChange={searchPropertyButtonHandler}
                        sx={{
                            border: "1px",
                            borderRadius: "80px",
                            "& input": {
                                textAlign: "center"
                            },
                            paddingRight: "20px"
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <button type='button' style={{ backgroundColor: "white", border: "none" }} >
                                        <SearchOutlined />
                                    </button>
                                </InputAdornment>
                            ),
                        }}></TextField>
                </Box>
            </Box>
            {/* {Search property input box Container END} */}

            {/* {Search filters Container} */}
            <Box className={styles.searchFiltersContainer}>
                {FiltersData.map((filters) => {
                    return (
                        <Box key={filters.id} justifyContent={'center'}>
                            <Stack key={filters.id} className={styles.filterPopularHotels}>

                                {/* {Search filters Header} */}
                                <Typography className={styles.searchPropertyHeader}>
                                    {filters.filterType}
                                </Typography>
                                {/* {Search filters Header END} */}

                                {/* {Search filters options} */}
                                {filters.filterProperties.map((filter) => {
                                    return (
                                        <div key={filter.id}>
                                            <FormControlLabel key={filter.id} label={filter.filterName} control={<Checkbox value={filter.filterName} onChange={getFilterProperties} defaultChecked={filter.defaultChecked ? true : false} disabled={filter.filterName === "Hotels" ? true : false} sx={{ fontSize: '12px', color: '#A4A2A2' }} />} />
                                        </div>
                                    )
                                })}
                                {/* {Search filters options END} */}

                                {filters.filterType == 'Popular Hotels' && <Box className="priceRangeFilterContainer">
                                    <hr style={{ marginLeft: '-0px', width: '90%', color: '#D1D4D9', marginTop: "8%", marginBottom: "2%" }} />
                                    <Typography className={styles.searchPropertyHeader} sx={{ marginTop: "8%" }}>
                                        Price Range
                                    </Typography>
                                    <InputSlider />
                                </Box>
                                }

                                {/* Your Budget Filter */}
                                <hr style={{ marginLeft: '-0px', width: '90%', color: '#D1D4D9', margin: "8% 0" }} />
                                {filters.filterType === 'Popular Hotels' &&
                                    yourBudgetFilterData.map((filters) => {
                                        return (
                                            <Box key={filters.id} justifyContent={'center'}>
                                                <Typography className={styles.searchPropertyHeader}>
                                                    {filters.filterType}
                                                </Typography>
                                                {filters.filterProperties.map((filter) => {
                                                    return (
                                                        <div key={filter.id}>
                                                            <FormControlLabel key={filter.id} label={filter.filterName} control={<Checkbox value={filter.filterName} onChange={getBudgetFilterProperties} checked={budgetSelector[filter.filterName]} sx={{ fontSize: '12px', color: '#A4A2A2' }} />} />
                                                        </div>
                                                    )
                                                })}
                                                {/* {Your Budget Filter END} */}
                                            </Box>
                                        )
                                    })
                                }
                            </Stack>
                            {filters.filterType === 'Popular Hotels' && <hr className={styles.divider} />}
                        </Box>
                    )
                })}
            </Box >
            {/* {Search filters Container END} */}
        </Box>
    )
}
