import { Link } from 'react-router-dom';
import Artists from './Artists';

function Artistic() {
  return (
    <>
      <div className="flex justify-around sticky top-0 z-10">
        <Link className="font-semibold font-serif">Artists</Link>
        <Link>Photographers</Link>
      </div>
      <div className="">
        <Artists />
      </div>
    </>
  );
}

export default Artistic;
