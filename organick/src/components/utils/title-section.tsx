'use client'

import { cn } from "./utils"

interface ITitleSection {
    title: string
    className?: string
}

export function TitleSection({title, className}: ITitleSection) {
    return <h2 className={cn("font-bold text-[#274C5B] text-[45px] leading-[58px]", className)}>{title}</h2>
}
