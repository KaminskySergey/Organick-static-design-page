import React from "react"
import { cn } from "./utils"

interface ISection {
    children: React.ReactNode
    className: string
}
export const Section = ({ children, className }: ISection) => {
    return <section className={cn("py-[120px]", className)}>
        {children}
    </section>
}