import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


export default function Content() {
    return (
        <div className="flex w-full mx-auto h-[880px]">
            <div className="w-1/2">
                <LeftContent />
            </div>
            <div className="w-1/2">
                <RightContent />
            </div>
        </div >
    )
}
