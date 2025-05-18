import { newsItems } from "../../const/news"
import { Button } from "../utils/button"
import { Container } from "../utils/container"
import { List } from "../utils/list"
import { Section } from "../utils/section"
import { TextGreen } from "../utils/text-green"
import { TitleSection } from "../utils/title-section"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ItemNews } from "./item-news"
export const NewsSection = () => {
    return <Section className="pt-[130px] pb-[229px]">
        <Container className="flex flex-col gap-[40px]">
            <div className="flex flex-col">
                <div>
                    <TextGreen text="News" />
                    
                </div>
                <div className="flex justify-between items-center">
                <TitleSection title="Discover The Recent Content About Organic Products" />
                    <Button className="w-[210px] h-[82px] bg-transparent border border-[#274C5B]">
                        <p>More News</p>
                        <FaArrowAltCircleRight />
                    </Button>
                </div>
            </div>
            <div>
            </div>
            <div>
                <List className="flex gap-[30px]">
                    {[...newsItems].sort(() => 0.5 - Math.random())
                        .slice(0, 2) .map((el, idx) => (
                        <ItemNews key={idx} name={el.name} description={el.description} title={el.title} img={el.img}/>
                    ))}
                </List>
            </div>
        </Container>
    </Section>
}