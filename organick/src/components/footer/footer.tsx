import { FooterBottom } from "./footer-bottom"
import { FooterTop } from "./footer-top"

export const Footer = () => {
    return <footer className="flex flex-col gap-[147px]">
        <FooterTop />
        <FooterBottom />
    </footer>
}