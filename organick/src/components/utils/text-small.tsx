import { ReactNode } from "react"
import { cn } from "./utils"

export const TextSmall = ({ children, className }: { children: ReactNode, className?: string }) => {
    return <p className={cn("font-opensans text-start font-normal text-[18px] text-[#525C60] leading-[32px]", className)}>{children}</p>
}