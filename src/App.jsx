'/vite.svg';
import './App.css';
import { filter, search } from '../utils/imageExport';

function App() {
  return (
    <>
      <div className="flex flex-col  bg-[#F5F5F5]">
        <div className="flex w-full gap-2 px-2 sticky top-1 opacity-1 z-10">
          <div className="w-[20%] h-[80px] bg-white shadow-md rounded-xl flex justify-center items-center">
            <h1 className="text-[2rem] font-bold font-sans uppercase bg-gradient-to-t from-red-300 via-pink-500 to-blue-400 text-transparent bg-clip-text">
              Logo
            </h1>
          </div>
          <div className="w-[60%] h-[80px] bg-white shadow-md rounded-2xl flex justify-between items-center px-6">
            <div className="flex gap-2">
              <img
                src={search}
                alt="error"
                className="w-[25px] h-[25px] boject-contain"
              />
              <input
                type="text"
                placeholder="search here.."
                className="outline-none"
              />
            </div>
            <div className="flex gap-2 font-semibold font-serif items-center justify-center">
              <img
                src={filter}
                alt="error"
                className="w-[25px] h-[25px] boject-contain"
              />
              <spna>Filters</spna>
            </div>
          </div>
          <div className="w-[20%] h-[80px] shadow-md rounded-2xl bg-[#88C2BB] flex justify-center items-center">
            <span className="text-white font-semibold">Become a Seller</span>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col justify-between w-full gap-2 p-2  ">
          <div className="md:w-[20%]  p-2 md:h-[572px] md:sticky  relative left-0 md:top-32 md:mt-0 mt-48  shadow-2xl rounded-2xl bg-white ">
            sidebar
          </div>
          <div className="md:w-[60%] relative md:mt-9 mt-2 shadow-2xl rounded-xl bg-white opacity-1">
            content
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
            <p>sfjhfhrefj</p>
          </div>
          <div className="md:w-[20%] w-full md:h-[572px] p-2  md:sticky  right-0 md:top-32 top-2 shadow-2xl rounded-2xl">
            Artitic
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
