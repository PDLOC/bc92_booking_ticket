import { configureStore } from "@reduxjs/toolkit"
import bookingTicketReducer from "../slice"

const store = configureStore({
    reducer: {
        bookingTicketReducer,

    }
})

export default store;