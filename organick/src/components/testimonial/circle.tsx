

interface ICircle {
    quantity: string,
    title: string
}

export const Circle = ({quantity, title}: ICircle) => {
    return <div className="w-[250px] h-[250px] bg-[#7EB693] rounded-full p-[6px]">
        <div className="w-full h-full bg-white rounded-full p-[6px]">
            <div className="flex justify-center items-center flex-col w-full  h-full bg-[#F1F1F1] rounded-full font-roboto text-[#274C5B]">
                <p className="text-[42px] font-bold leading-[55px]">{quantity}</p>
                <span className="font-opensans leading-[32px] text-[18px] font-bold">{title}</span>
            </div>
        </div>
    </div>
}
