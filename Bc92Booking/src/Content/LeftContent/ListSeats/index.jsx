import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectedSeatAction } from '../../../slice';

export default function ListSeats() {
    const { listSeats, selectedSeat } = useSelector((state) => state.bookingTicketReducer);

    const dispatch = useDispatch();
    const handleDetailSeat = (ghe) => {
        dispatch(selectedSeatAction(ghe))
    };

    const isSelected = (soGhe) => {
        return selectedSeat.find(seat => seat.soGhe === soGhe);
    }

    const renderListSeats = () => {
        return (
            <div>
                {listSeats.map((hangGhe, index) => {
                    return (
                        <div key={index} className="flex items-center mb-2">
                            <div className="w-8 text-yellow-400 font-bold">
                                {hangGhe.hang}
                            </div>

                            {hangGhe.danhSachGhe.map((ghe, i) => {
                                return (
                                    <button key={i} className={`w-10 h-10 m-1 rounded text-center 
                                    ${hangGhe.hang === "" ? "text-yellow-400 font-bold" :
                                            ghe.daDat === true ? "bg-orange text-white cursor-not-allowed" :
                                                isSelected(ghe.soGhe) ? "bg-green-500 text-white" : "bg-gray-400 text-black"} `} onClick={() => handleDetailSeat(ghe)} disabled={ghe.daDat}>
                                        {ghe.soGhe}
                                    </button>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="mx-auto max-w-2xl">
            {renderListSeats()}
        </div>
    );
}
