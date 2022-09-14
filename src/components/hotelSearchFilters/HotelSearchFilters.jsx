import { Box, Checkbox, FormControlLabel, Typography, TextField, Stack } from "@mui/material"
import { SearchOutlined } from "@material-ui/icons"
import { InputSlider } from './PriceRangeFilter'
import styles from "./HotelSearchFilters.module.css"
import InputAdornment from '@mui/material/InputAdornment';

export const HotelSearchFilters = () => {

    const getCheckedFilterProperties = event => {
        if (event.target.checked) {
         
        }
    }

    const filtersData = [
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
                    defaultChecked: false
                }, {
                    id: 3,
                    filterName: 'Free Cancelation',
                    defaultChecked: false
                },
                {
                    id: 4,
                    filterName: 'No Prepayment',
                    defaultChecked: false
                }]
        },
        {
            id: 102,
            filterType: 'Your Budget',
            filterProperties: [
                {
                    id: 1,
                    filterName: 'Less than $75',
                    defaultChecked: false
                },
                {
                    id: 2,
                    filterName: '$75 to 300',
                    defaultChecked: false
                },
                {
                    id: 3,
                    filterName: '$300 to 500',
                    defaultChecked: false
                },
                {
                    id: 4,
                    filterName: '$500 to 1000',
                    defaultChecked: false
                },
                {
                    id: 5,
                    filterName: 'Greater than $1000',
                    defaultChecked: true
                }
            ]
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
                    defaultChecked: true
                },
                {
                    id: 6,
                    filterName: 'Spa',
                    defaultChecked: false
                },
            ]
        },
    ]

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
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                        }}></TextField>
                </Box>
            </Box>
            {/* {Search property input box Container END} */}

            {/* {Search filters Container} */}
            <Box className={styles.searchFiltersContainer}>
                {filtersData.map((filters) => {
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
                                            <FormControlLabel key={filter.id} label={filter.filterName} control={<Checkbox value={filter.filterName} defaultChecked={filter.defaultChecked ? true : false} onChange={getCheckedFilterProperties} sx={{ fontSize: '12px', color: '#A4A2A2' }} />} />
                                        </div>
                                    )
                                })}
                                {/* {Search filters options END} */}

                                {filters.filterType === 'Popular Hotels' && <Box className="priceRangeFilterContainer">
                                    <hr style={{ marginLeft: '-0px', width: '90%', color: '#D1D4D9', marginTop:"8%" }} />
                                    <Typography className={styles.searchPropertyHeader} sx={{marginTop:"8%"}}>
                                        Price Range
                                    </Typography>
                                    <InputSlider />
                                </Box>
                                }
                            </Stack>
                            <hr className={styles.divider}/>
                        </Box>
                    )
                })}
            </Box >
            {/* {Search filters Container END} */}
        </Box>
    )
}
