'/vite.svg';
import './App.css';
import { filter, search } from '../utils/imageExport';
import Sidebar from './components/Sidebar';
import ContentComponents from './components/ContentComponents';
import Artistic from './components/Artistic';
import { Route, Routes, useLocation } from 'react-router';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  const location = useLocation();
  if (location.pathname == '/' || location.pathname == '/login') {
    return (
      <>
        <div>
          <Routes>
            <Route
              path="https://relu-consultancy-navy.vercel.app/"
              element={<Registration />}
            ></Route>
            <Route
              path="https://relu-consultancy-navy.vercel.app/login"
              element={<Login />}
            ></Route>
          </Routes>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col  bg-[#F5F5F5]">
          <div className="flex w-full gap-2 px-2 sticky top-1 opacity-1 z-10">
            <div className="w-[22%] h-[80px] bg-white shadow-md rounded-xl flex justify-center items-center">
              <h1 className="text-[2rem] font-bold font-sans uppercase bg-gradient-to-t from-red-300 via-pink-500 to-blue-400 text-transparent bg-clip-text">
                Logo
              </h1>
            </div>
            <div className="w-[55%] h-[80px] bg-white shadow-md rounded-2xl flex justify-between items-center px-6">
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
            <div className="w-[23%] h-[80px] shadow-md rounded-2xl bg-[#88C2BB] flex justify-center items-center">
              <span className="text-white font-semibold">Become a Seller</span>
            </div>
          </div>
          <div className="flex  md:flex-row flex-col justify-between w-full gap-2 p-2  ">
            <div className="md:w-[22%]  p-2 md:h-[572px] md:sticky  relative left-0 md:top-32 md:mt-0 mt-48  shadow-2xl rounded-2xl bg-white ">
              <Sidebar />
            </div>
            <div className="md:w-[55%] relative md:mt-9 mt-2 opacity-1">
              <ContentComponents />
            </div>
            <div className="md:w-[23%] w-full md:h-[572px] p-2  md:sticky  right-0 md:top-32 top-2 shadow-2xl rounded-2xl overflow-scroll">
              <Artistic />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
