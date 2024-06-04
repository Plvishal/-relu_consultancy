import { artisticData } from '../../utils/ArtisticData';

function Artists() {
  return (
    <>
      {artisticData.map((dt) => (
        <div className="w-full mt-3 relative  overflow-hidden" key={dt.title}>
          <img
            src={dt.cover}
            alt="coverError"
            className="w-[246px] h-[126px] object-cover rounded-lg opacity-1 "
          />
          <div className="w-[48px] h-[48px]  bg-white absolute top-16 left-4  rounded-lg">
            <span className="w-[10px] h-[10px]  bg-[#0EC297] absolute top-[-1px] right-[-1px] rounded-full"></span>
            <img
              src={dt.icon}
              alt="iconError"
              className="w-[48px] h-[48px] object-cover rounded-lg overflow-hidden border-2 border-white"
            />
          </div>
          <div className="absolute bottom-4 left-20 text-white">
            <h1 className="text-[1rem] font-semibold text-[#FFFFFF]">
              {dt.title}
            </h1>
            <p className="text-[12px] text-[#FFFFFF]">@thewildwithyou</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Artists;
