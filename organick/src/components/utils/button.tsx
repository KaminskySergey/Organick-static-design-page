import { cn } from "./utils"

interface IButton {
    className: string
    children: React.ReactNode
}

export const Button = ({ className, children }: IButton) => {
    return <button className={cn("py-[25px] pl-[33px] pr-[25px] text-[#274C5B] flex justify-between items-center text-[20px] leading-[32px] font-roboto l rounded-2xl	 cursor-not-allowed", className)} type="button">
        {children}
    </button>
}