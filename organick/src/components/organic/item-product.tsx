import ReactStars from "react-stars"

interface IItemProduct {
    id?: number,
      title: string,
      image: string,
      priceOld: number,
      priceNew: number,
      rating: number,
      category: string,
}


export const ItemProduct = ({ title, image, priceOld, priceNew, rating, category}: IItemProduct) => {
    return (
        <>
            <div className=" flex flex-col gap-[20px] bg-[#F9F8F8] rounded-[30px] h-[590px] w-full px-[30px] pt-[67px] pb-[35px]">
                {/* image */}
                <div className="h-[378px] w-full overflow-hidden rounded-[20px]">
                    <img
                        src={`/organic/${image}.webp`}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* description */}
                <div className="flex flex-col gap-[12px] items-start">
                    <div className="border-b-2 border-[#B8B8B8] w-full text-start pb-[20px]">
                        <h3 className="text-[22px] font-normal text-[#274C5B]">{title}</h3>
                    </div>
                    <div className="w-full flex justify-between">
                        {/* price */}
                        <div className="flex items-center gap-[10px] font-opensans">
                            <div>
                                <p className=" font-normal text-[17px] line-through text-[#B8B8B8]">{priceOld}.00$ USD</p>
                            </div>
                            <div>
                                <p className="font-bold text-[18px] text-[#274C5B]">{priceNew}.00$ USD</p>
                            </div>
                        </div>
                        {/* stars */}
                        <div>
                            <ReactStars
                                className="flex justify-between"
                                count={5}
                                size={115 / 5}
                                value={rating}
                                edit={false}
                                color1={'#ccc'}
                                color2={'#FFA858'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[30px] left-[30px] flex items-center bg-[#274C5B] h-[37px] text-white font-opensans font-bold text-[15px] px-[20px] py-[5px] rounded-[8px]">
                <p>{category}</p>
            </div>
        </>
    )
}