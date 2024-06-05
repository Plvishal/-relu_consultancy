import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Notification from './Notification';
import Shop from './Shop';
import Conversation from './Conversation';
import Wallet from './Wallet';
import Subscription from './Subscription';
import My_Profile from './My_Profile';
import Setting from './Setting';

function ContentComponents() {
  return (
    <>
      <Routes>
        <Route
          path="https://relu-consultancy-navy.vercel.app/home"
          element={<Home />}
        ></Route>
        <Route
          path="https://relu-consultancy-navy.vercel.app/notification"
          element={<Notification />}
        ></Route>
        <Route
          path="https://relu-consultancy-navy.vercel.app/shop"
          element={<Shop />}
        ></Route>
        <Route
          path="https://relu-consultancy-navy.vercel.app/conversation"
          element={<Conversation />}
        ></Route>
        <Route
          path="https://relu-consultancy-navy.vercel.app/wallet"
          element={<Wallet />}
        ></Route>
        <Route
          path="https://relu-consultancy-navy.vercel.app/subscriptions"
          element={<Subscription />}
        ></Route>
        <Route
          path="https://relu-consultancy-navy.vercel.app/my-profile"
          element={<My_Profile />}
        ></Route>
        <Route
          path="https://relu-consultancy-navy.vercel.app/settings"
          element={<Setting />}
        ></Route>
      </Routes>
    </>
  );
}

export default ContentComponents;
