import { Button } from "../utils/button"
import { Section } from "../utils/section";
import { TextGreen } from "../utils/text-green"
import { TitleHero } from "../utils/title-hero"
import { FaArrowAltCircleRight } from "react-icons/fa";

export const HeroSection = () => {
    return (
        <Section
            className="bg-[url('/src/assets/hero.jpg')] ml-auto mr-auto max-w-[1440px] py-0  w-full bg-contain bg-center bg-no-repeat h-[913px] flex items-center justify-center">
            <div className=" w-full h-full px-[30px] py-[44px] flex  items-center">
                <div className="">
                    <div className="mb-[14px]">
                        <TextGreen text="Made with nature" />
                    </div>
                    <TitleHero />
                    <div className="mt-[30px]">
                        <Button className="bg-[#EFD372] w-[220px]">
                            <p>Explore Now</p>
                            <FaArrowAltCircleRight />

                        </Button>
                    </div>
                </div>
            </div>
        </Section >
    )
}