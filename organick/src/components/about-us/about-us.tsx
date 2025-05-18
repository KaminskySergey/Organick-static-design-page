import { FaArrowAltCircleRight } from "react-icons/fa";
import { Button } from "../utils/button";
import { Container } from "../utils/container";
import { PTag } from "../utils/ptag";
import { Section } from "../utils/section";
import { TextGreen } from "../utils/text-green";
import { TitleSection } from "../utils/title-section";
import { AboutUsSecond } from "./about-us-second";

interface IAboutUsSection { }

export function AboutUsSection({ }: IAboutUsSection) {
    return <Section className="bg-[#F9F8F8] pt-[130px] pb-[140px]">
        <Container className="flex  gap-[30px]">
            <div className="w-1/2">
                <img src="/src/assets/about-us.png" alt="about-us" />
            </div>
            <div className="flex flex-col w-1/2">
                {/* first */}
                <div className="text-start">
                    <TextGreen text="About Us" />
                    <TitleSection title="We Believe in Organic" />
                    <TitleSection title="Foods For Strong Health" />
                    <PTag className="mt-[20px]">
                        Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.
                    </PTag>
                </div>
                {/* second */}
                <AboutUsSecond />
                {/* third */}
                <Button className="w-[200px] h-[82px] bg-[#274C5B] text-white mt-[50px]">
                    <p>Explore Now</p>
                    <FaArrowAltCircleRight />
                </Button>
            </div>
        </Container>
    </Section>
}
