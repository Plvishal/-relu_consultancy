import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        <NavLink
          to={'/'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/notification'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          Notification
        </NavLink>
        <NavLink
          to={'/shop'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={'/conversation'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          Conversation
        </NavLink>
        <NavLink
          to={'/wallet'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          Wallet
        </NavLink>
        <NavLink
          to={'/subscriptions'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          Subscriptions
        </NavLink>
        <NavLink
          to={'/my-profile'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          My Profile
        </NavLink>
        <NavLink
          to={'/settings'}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: 'blue',
                  borderRadius: '10px',
                  padding: '5px',
                  color: 'white',
                  fontFamily: 'serif',
                  font: 'bold',
                }
              : undefined
          }
        >
          Settings
        </NavLink>
      </div>
      <div>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
