import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters"
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard"
import { Stack } from "@mui/material"

export const HotelSearchList = () => {
    return (
        <Stack direction={"row"} spacing={2} sx={{ marginTop: "40px", marginBottom: "40px"}}>
            <HotelSearchFilters />
            <HotelDetailsCard />
        </Stack>
    )
}
