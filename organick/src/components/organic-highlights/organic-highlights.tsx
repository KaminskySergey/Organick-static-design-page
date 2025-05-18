import { organicHighlights } from "../../const/organic-highlights"
import { Container } from "../utils/container"
import { List } from "../utils/list"
import { Section } from "../utils/section"

export const OrganicHighlights = () => {
    return <Section className="bg-[#EFF6F1] py-[140px]">
        <Container className="p-0">
           <List className="flex gap-[30px]">
           {
            organicHighlights.map((el, idx) => (
                <li key={idx} className="">
                      <img src={`/src/assets/${el.img}.webp`} alt={el.text} />
                </li>
            ))
           }
           </List>
        </Container>
    </Section>
}