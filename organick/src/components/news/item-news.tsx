import { RiAccountCircleFill } from "react-icons/ri";
import { TextSmall } from "../utils/text-small";
import { Button } from "../utils/button";
import { FaArrowAltCircleRight } from "react-icons/fa";


interface IItemNews {
    name: string
    description: string
    title: string
    img: string
}


export const ItemNews = ({ name, description, title, img }: IItemNews) => {
    return <li className="relative ">
        <div>
            <img src={`/${img}.jpg`} alt={img} />
        </div>
        <div className="rounded-[30px] text-start w-[610px] p-[50px] drop-shadow-custom bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-[10px] ">
                <RiAccountCircleFill color="#7EB693" />
                <p className="font-roboto text-[17px] font-normal leading-[23px] text-[#274C5B]">{name}</p>
            </div>
            <h3 className="font-bold font-roboto text-[23px] leading-[32px] mt-[12px] mb-[38px] text-[#274C5B]">{title}</h3>
            <TextSmall>{description}</TextSmall>
            <Button className="bg-transparent w-[155px] pl-0">
                <p>View More</p>
                <FaArrowAltCircleRight />
            </Button>
        </div>
    </li>
}