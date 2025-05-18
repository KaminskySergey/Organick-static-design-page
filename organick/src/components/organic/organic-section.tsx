import { Container } from "../utils/container"
import { List } from "../utils/list"
import { TextGreen } from "../utils/text-green"
import { TitleSection } from "../utils/title-section"
import { ItemProduct } from "./item-product"
import { products } from "../../const/organic"

export const OrganicSection = () => {
    return <section className="py-[120px]">
        <Container>
            <div className="flex flex-col items-center mb-[42px]">
                <TextGreen text="Organic" />
                <TitleSection title="Our Products" />
            </div>
            {/* gallery */}
            <div>
                <List className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {products.map((el) => (
                        <li key={el.id} className="relative">
                            <ItemProduct title={el.title} image={el.image} priceOld={el.priceOld} priceNew={el.priceNew} rating={el.rating} category={el.category} />
                        </li>
                    ))}
                </List>
            </div>
        </Container>
    </section>
}