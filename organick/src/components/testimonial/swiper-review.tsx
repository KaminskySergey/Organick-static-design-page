import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from 'react-stars'

// Import Swiper styles
import "swiper/css";
import { Avatar } from "../icons/avatar";
import { reviews } from "../../const/reviews";

export const SwiperReview = () => {
    return <div >
        <Swiper className="max-w-[1100px]">
        {reviews.map((review, idx) => (
  <SwiperSlide key={idx}>
    <div className="flex flex-col items-center gap-[30px]">
      <div className="flex flex-col gap-[18px] w-[115px]">
        <div className="w-[115px] h-[115px] rounded-full">
          <Avatar />
        </div>
        <div>
          <ReactStars
            className="flex justify-between"
            count={5}
            size={115 / 5}
            value={review.rating}
            edit={false}
            color1={'#ccc'}
            color2={'#FFA858'}
          />
        </div>
      </div>

      <div>
        <p className="font-opensans font-normal text-[18px] text-[#525C60] w-[942px] mb-[23px]">
          {review.text}
        </p>
        <h3 className="font-bold text-[#274C5B] text-[26px]">{review.name}</h3>
        <p className="text-[#525C60] font-opensans font-normal text-[14px]">{review.role}</p>
      </div>
    </div>
  </SwiperSlide>
))}

        </Swiper>
    </div>
}