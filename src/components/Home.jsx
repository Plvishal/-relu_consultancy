import { useState } from 'react';
import {
  comment,
  cover1L,
  heart,
  heart2,
  icon1,
  share,
} from '../../utils/imageExport';
import { cardData } from '../../utils/mainCarData';

function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return cardData.map((dt) => (
    <div
      className="h-[600px] shadow-md bg-white p-6 rounded-2xl  flex flex-col justify-around mb-4"
      key={dt.name}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src={dt.icon}
            alt="iconError"
            className="w-[48px] h-[48px] rounded-xl"
          />
          <div className="flex flex-col">
            <span className="text-[20px] font-bold">{dt.name}</span>
            <span className="text-[14px] font-normal text-[#8D8D8D]">
              {dt.subname}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 overflow-hidden">
          <span className="w-[5px] h-[5px] bg-black rounded-full"></span>
          <span className="w-[5px] h-[5px] bg-black rounded-full"></span>
          <span className="w-[5px] h-[5px] bg-black rounded-full"></span>
        </div>
      </div>
      <div className="">
        <p>
          {isExpanded
            ? dt.description
            : `${dt.description.slice(0, maxLength)}..`}
          <button
            onClick={toggleReadMore}
            className="text-blue-500 hover:underline"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </p>
      </div>
      <div className="relative top-0">
        <img
          src={dt.image}
          alt="cover_img_error"
          className=" w-full h-[306px] object-cover rounded-xl"
        />
        <div className="absolute top-8 right-8">
          <img src={heart2} alt="" className="w-[23.52px] h-[21.77px]" />
        </div>
      </div>
      <div className="flex w-full gap-10">
        <p className="flex gap-3">
          <img src={heart} alt="error" className="w-[23.52px] h-[21.77px]" />
          9.8k
        </p>
        <p className="flex gap-3">
          <img src={comment} alt="error" className="w-[23.52px] h-[21.77px]" />
          8.6k
        </p>
        <p className="flex gap-3">
          <img src={share} alt="error" className="w-[23.52px] h-[21.77px]" />
          7.2k
        </p>
      </div>
    </div>
  ));
}

export default Home;
