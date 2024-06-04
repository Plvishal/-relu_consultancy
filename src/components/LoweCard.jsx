import { star } from '../../utils/imageExport';
import { data } from '../../utils/lowerCardData';

function LoweCard() {
  return (
    <>
      {data.map((dt, index) => (
        <div className="w-1/2" key={index}>
          <img
            src={dt.img}
            alt=""
            className="w-[252px] h-[180px] object-cover rounded-xl"
          />
          <p>Modern Wall Decor Framed Painting</p>
          <div className="flex justify-between items-center">
            <span>$199.99</span>
            <div className="flex gap-2">
              <img
                src={star}
                alt="error"
                className="w-[14.47px] h-[13.95px] object-cover"
              />
              <img
                src={star}
                alt="error"
                className="w-[14.47px] h-[13.95px] object-cover"
              />
              <img
                src={star}
                alt="error"
                className="w-[14.47px] h-[13.95px] object-cover"
              />
              <img
                src={star}
                alt="error"
                className="w-[14.47px] h-[13.95px] object-cover"
              />
              <img
                src={star}
                alt="error"
                className="w-[14.47px] h-[13.95px] object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LoweCard;
