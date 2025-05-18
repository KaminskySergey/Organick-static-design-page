import { cn } from "./utils"

interface GreenText {
    text: string
    className?: string
}

export const TextGreen = ({text, className}: GreenText) => {
    return <p className={cn("font-yellowtail text-[36px] font-normal text-[#7EB693] leading-[64px] text-start", className)}>{text}</p>
}