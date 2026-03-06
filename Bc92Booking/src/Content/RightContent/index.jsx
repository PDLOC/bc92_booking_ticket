import { useSelector, useDispatch } from 'react-redux'
import { removeSeatAction, removeAllAction } from "./../../slice"


export default function RightContent() {
    const { selectedSeat } = useSelector((state) => state.bookingTicketReducer)

    const dispatch = useDispatch();
    const formatPrice = (price) => price.toLocaleString("vi-VN");

    const renderSelectedSeat = () => {
        return selectedSeat.map((seat, id) => {
            return (
                <tr key={id}>
                    <td className="border border-white px-4 py-2 text-yellow-500 font-bold">{seat.soGhe}</td>
                    <td className="border border-white px-4 py-2 text-yellow-500">{formatPrice(seat.gia)}</td>
                    <td className="border border-white px-4 py-2 text-center text-red-500"><button className="px-2 py-1" onClick={() => dispatch(removeSeatAction(seat))}>X</button></td>
                </tr>
            );
        });
    }

    const totalPrice = () => {
        return selectedSeat.reduce(function (accumulator, value) {
            return accumulator + value.gia;
        }, 0);
    }

    return (
        <div className="px-4">
            <h1 className='text-2xl text-white font-bold text-center mb-5'>Danh sách ghế bạn chọn</h1>
            <div className="flex">
                <div className="gheDaDat"></div>
                <div className="text-white font-bold text-lg leading-10">Ghế đã đặt</div>
            </div>
            <div className="flex">
                <div className="gheDangChon"></div>
                <div className="text-white font-bold text-lg leading-10">Ghế đang chọn</div>
            </div>
            <div className="flex">
                <div className="gheChuaDat"></div>
                <div className="text-white font-bold text-lg leading-10">Ghế chưa đặt</div>
            </div>
            <table className="border border-collapse text-white mt-4 mb-8">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-center">Số ghế</th>
                        <th className="border px-4 py-2 text-center">Giá</th>
                        <th className="border px-4 py-2 text-center">Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSelectedSeat()}
                    <tr>
                        <td className="border border-white px-4 py-2 text-yellow-500">Tổng tiền</td>
                        <td className="border border-white px-4 py-2 text-yellow-500">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice())}</td>
                        <td className="border border-white px-4 py-2 text-red-500 font-bold text-center"><button className="px-2 py-1" onClick={() => dispatch(removeAllAction())}>Xóa tất cả</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
