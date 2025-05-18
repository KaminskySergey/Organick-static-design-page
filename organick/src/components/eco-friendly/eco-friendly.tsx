import { ecoFriendly } from "../../const/eco-friendly"
import { Container } from "../utils/container"
import { List } from "../utils/list"
import { Section } from "../utils/section"
import { TextGreen } from "../utils/text-green"
import { TextSmall } from "../utils/text-small"
import { TitleSection } from "../utils/title-section"

export const EcoFriendly = () => {
    return <Section className="p-0">
        <Container className="flex p-0">
            <div className="w-1/2 h-[704px] bg-[url('/src/assets/field.webp')] bg-contain bg-center bg-no-repeat">

            </div>
            <div className="w-1/2 relative">
                <div className="flex flex-col gap-[30px] pt-[40px] pb-[55px] pr-[40px] pl-[60px] rounded-xl absolute top-[40px] left-[-60px] bg-white">
                    <div className="flex flex-col items-start">
                        <TextGreen text="Eco Friendly" />
                        <TitleSection title="From our Farm" />
                        <TitleSection title="To your Home." />
                    </div>
                    <div>
                        <List className="flex flex-col gap-[15px]">
                            {
                                ecoFriendly.map((el, idx) => (
                                    <li className="flex flex-col items-start gap-[4px]" key={idx}>
                                        <h3 className="font-bold font-roboto text-[23px] leading-[32px] text-[#274C5B]">{el.title}</h3>
                                        <TextSmall>{el.description}</TextSmall>
                                    </li>
                                ))
                            }
                        </List>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
}