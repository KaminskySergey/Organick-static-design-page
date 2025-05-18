import { Container } from "../utils/container"
import { List } from "../utils/list"
import { Section } from "../utils/section"
import { TextGreen } from "../utils/text-green"

export const UnderHeroSection = () => {
    return <Section className="py-[140px]">
        <Container className="px-[30px]">
            <List className="flex gap-[50px]">
                <li className="relative">
                    <img src="/left.jpg" alt="left" />
                    <div className="absolute top-1/2 left-[50px] -translate-y-1/2 text-start">
                        <TextGreen className="text-white" text="Natural!!" />
                        <p className=" text-[40px] leading-[50px] text-white">Get Garden</p>
                        <p className=" text-[40px] leading-[50px] text-white">Fresh Fruits</p>

                    </div>
                </li>
                <li className="relative">
                    <img src="/right.jpg" alt="right" />
                    <div className="absolute top-1/2 left-[50px] -translate-y-1/2 text-start">
                        <TextGreen  text="Offer!!" />
                        <p className=" text-[40px] leading-[50px] text-[#274C5B]">Get 10% off</p>
                        <p className=" text-[40px] leading-[50px] text-[#274C5B]">on Vegetables</p>

                    </div>
                </li>
                
            </List>
        </Container>
    </Section>
}