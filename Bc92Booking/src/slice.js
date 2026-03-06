import { createSlice } from "@reduxjs/toolkit"
import Data from "./../data.json"

const initialState = {
    listSeats: Data,
    selectedSeat: [],
}

const findSeat = (selectedSeat, seat) => {
    return selectedSeat.findIndex((item) => item.soGhe === seat.soGhe);
}


const BookingTicketSlice = createSlice({
    name: "BookingTicketSlice",
    initialState,
    reducers: {
        selectedSeatAction: (state, action) => {
            const seat = action.payload;
            const updateSelected = [...state.selectedSeat];
            const index = findSeat(updateSelected, seat);
            if (index === -1) {
                updateSelected.push(seat);
            } else {
                updateSelected.splice(index, 1);
            }
            state.selectedSeat = updateSelected;


        },

        removeSeatAction: (state, action) => {
            const seat = action.payload;
            const updateSelected = [...state.selectedSeat];
            const index = findSeat(updateSelected, seat);

            if (index !== -1) {
                updateSelected.splice(index, 1);
            }
            state.selectedSeat = updateSelected;
        },

        removeAllAction: (state, action) => {
            const updateSelected = [...state.selectedSeat];
            updateSelected.splice(0, updateSelected.length);
            state.selectedSeat = updateSelected;
        }
    }
})

export const { selectedSeatAction, removeSeatAction, removeAllAction } = BookingTicketSlice.actions;

export default BookingTicketSlice.reducer;