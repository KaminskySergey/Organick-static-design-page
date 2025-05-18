import { FaArrowAltCircleRight } from "react-icons/fa"
import { Button } from "../utils/button"
import { Container } from "../utils/container"
import { Section } from "../utils/section"
import { TextGreen } from "../utils/text-green"
import { TitleSection } from "../utils/title-section"
import { List } from "../utils/list"
import { products } from "../../const/organic"
import { ItemProduct } from "../organic/item-product"


export const ProductsSection = () => {
    return <Section className="py-[140px] bg-[#274C5B]">
        <Container className="px-[30px] flex flex-col gap-[45px]">
            <div className="flex justify-between items-end">
                <div>
                    <TextGreen text="Offer Products" />
                    <TitleSection className="text-white" title="We Offer Organic for You" />
                </div>
                <div>
                    <Button className="w-[267px] h-[82px] bg-[#EFD372]">
                        <p>View All products</p>
                        <FaArrowAltCircleRight />
                    </Button>
                </div>
            </div>
            <div>
                <List className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {[...products]
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 3)                      
                        .map((el) => (
                            <li key={el.id} className="relative">
                                <ItemProduct
                                    title={el.title}
                                    image={el.image}
                                    priceOld={el.priceOld}
                                    priceNew={el.priceNew}
                                    rating={el.rating}
                                    category={el.category}
                                />
                            </li>
                        ))}
                </List>
            </div>
        </Container>
    </Section>
}