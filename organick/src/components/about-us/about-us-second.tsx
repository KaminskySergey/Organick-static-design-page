'use client'

import { OrganicFoods } from "../icons/organic-foods";
import { QualityStandards } from "../icons/quality-standards";
import { List } from "../utils/list";
import { PTag } from "../utils/ptag";


const aboutUsItems = [
    {
        icon: <OrganicFoods />,
        title: "Organic Foods Only",
        text: "The Product that you ordered will be verified that we have or not if have we will start to move on with the next step."
    },
    {
        icon: <QualityStandards />,
        title: "Quality Standards",
        text: "Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product."
    }
];

export function AboutUsSecond() {
    return <div className="mt-[56px]">
        <List className="flex flex-col gap-[30px]">
            
            {
                aboutUsItems.map((el, idx) => (
                    <li key={idx} className="flex gap-[20px]">
                <div className="flex justify-center items-center rounded-[20px] bg-white w-[100px] h-[100px]">
                    {el.icon}
                </div>
                <div className="text-start w-[575px]">
                    <h3 className="leading-9 text-[25px] text-[#274C5B] font-roboto mb-[5px]">{el.title}</h3>
                    <PTag>
                        {el.text}
                    </PTag>
                </div>
            </li>
                ))
            }
        </List>
    </div>
}
