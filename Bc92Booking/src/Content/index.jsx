import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


export default function Content() {
    return (
        <div className="flex min-h-screen">
            <div className="flex-[2]">
                <LeftContent />
            </div>
            <div className="flex-1">
                <RightContent />
            </div>
        </div >
    )
}
