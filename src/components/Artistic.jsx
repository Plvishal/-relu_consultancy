import { Link } from 'react-router-dom';
import Artists from './Artists';

function Artistic() {
  return (
    <>
      <div className="flex justify-around">
        <Link>Artists</Link>
        <Link>Photographers</Link>
      </div>
      <div>
        <Artists />
      </div>
    </>
  );
}

export default Artistic;
