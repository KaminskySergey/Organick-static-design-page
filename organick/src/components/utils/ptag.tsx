import { cn } from "./utils";

interface IPTag {
    children: React.ReactNode
    className?: string
}

export const PTag = ({ children, className }: IPTag): JSX.Element => {
    return <p className={cn("font-opensans text-[18px] leading-8 text-[#525C60]", className)}>{children}</p>;
}