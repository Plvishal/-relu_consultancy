import { NavLink } from 'react-router-dom';
import { sidebar } from '../../utils/sidebar';
import { logout } from '../../utils/imageExport';

function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-6 mt-5 p-3">
        {sidebar.map((dt) => (
          <NavLink
            key={dt.titile}
            to={dt.path}
            style={({ isActive }) =>
              isActive
                ? {
                    borderRadius: '10px',
                    padding: '5px',
                    color: 'black',
                    fontFamily: '',
                    font: 'icon',
                  }
                : undefined
            }
          >
            <div className=" flex gap-2 ">
              <img src={dt.src} alt="error" className="w-[16px] h-[17px]" />
              <span className="text-md font-normal text-gray-500">
                {dt.titile}{' '}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col justify-between  gap-7">
        <button className="flex justify-start items-center gap-2 p-3">
          <img src={logout} alt="error" className="w-[16px] h-[17px]" /> Logout
        </button>

        <div className="flex justify-between items-center">
          <p>2024&copy;logoname</p>
          <p>Developed by vishal </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
