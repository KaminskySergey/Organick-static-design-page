import { Container } from "../utils/container";
import { List } from "../utils/list";
import { Section } from "../utils/section";
import { Circle } from "./circle";
import { SwiperReview } from "./swiper-review";
import { TestimonialTitle } from "./testimonial-title";
const circleInfo = [
    {
        quantity: "100%",
        title: "Organic"
    },
    {
        quantity: "285",
        title: "Active Product"
    }, {
        quantity: "385+",
        title: "Organic Orchads"
    }, {
        quantity: "25+",
        title: "Years of Farming"
    }
]

export function TestimonialSection() {
    return <Section className="bg-[url('/testimonial.webp')] ml-auto mr-auto max-w-[1440px] w-full h-[1248px] bg-contain bg-center bg-no-repeat pt-[130px] pb-[150px]">
        <Container className="flex flex-col items-center">
            <TestimonialTitle />
            <div className="mt-[60px]">
                <SwiperReview />
            </div>
            <div className="w-[966px] h-[2px] bg-[#E0E0E0] mt-[80px] mb-[100px]"/>
            <div>
                <List className="flex gap-[26px]">
                    {
                        circleInfo.map((el, idx) => (
                            <li key={idx}>
                                <Circle quantity={el.quantity} title={el.title} />
                            </li>
                        ))
                    }
                </List>
            </div>
        </Container>
    </Section>
}
