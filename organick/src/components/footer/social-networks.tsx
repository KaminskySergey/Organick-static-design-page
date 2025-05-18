import { List } from "../utils/list"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const SocialNetworks = () => {
    return <List className="flex gap-[20px]">
        <li className="rounded-full bg-[#EFF6F1] p-[20px] flex justify-center items-center">
            <a target="_blank" href="https://www.facebook.com/kaminskijstalker/">
                <FaFacebook />
            </a>
        </li>
        <li className="rounded-full bg-[#EFF6F1] p-[20px] flex justify-center items-center">
            <a target="_blank" href="https://www.linkedin.com/in/serhii-kaminskyi/">
                <FaLinkedin />
            </a>
        </li>
        <li className="rounded-full bg-[#EFF6F1] p-[20px] flex justify-center items-center">
            <a target="_blank" href="https://www.instagram.com/serhii60101/">
                <FaInstagram />
            </a>
        </li>
    </List>
}
