import { Logo } from "../icons/logo"
import { Container } from "../utils/container"
import { List } from "../utils/list"
import { TextSmall } from "../utils/text-small"

import { SocialNetworks } from "./social-networks";
import { TitleSection } from "../utils/title-section";
import { contactsUs } from "../../const/contact-us";
import { utilityPages } from "../../const/utility-pages";


export const FooterTop = () => {
    return <Container className="grid grid-cols-[335px_670px_335px] divide-x divide-[#D5D5D5]">
        <div className="text-end pr-[20px]">
            <TitleSection className="text-[30px] mb-[35px]" title="Contact Us" />
            <List className="flex flex-col gap-[40px] items-end">
                {contactsUs.map((el, idx) => (
                    <li key={idx}>
                        <TextSmall className="font-bold text-end">{el.title}</TextSmall>
                        <TextSmall>
                            <a href={el.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {el.value}
                            </a>
                        </TextSmall>
                    </li>
                ))}
            </List>
        </div>
        <div className=" px-[52px] flex flex-col gap-[50px] items-center">
            <div>
                <Logo />
            </div>
            <div>
                <TextSmall className="text-center">
                    We are a popular and farming company aspiring to be a leader in the Organic food industry.
                </TextSmall>
            </div>
            <div>
                <SocialNetworks />
            </div>
        </div>
        <div className="text-start pl-[20px]">
            <TitleSection className="text-[30px] mb-[20px]" title="Utility Pages" />
            <List className="flex flex-col gap-[24px] items-start">
                {utilityPages.map((el, idx) => (
                    <li key={idx}>
                        <TextSmall>
                            <a href="#"
                                onClick={(e) => e.preventDefault()}
                                className="hover:underline text-[#274C5B] cursor-not-allowed">
                                {el.value}
                            </a>
                        </TextSmall>
                    </li>
                ))}
            </List>
        </div>
    </Container>
}