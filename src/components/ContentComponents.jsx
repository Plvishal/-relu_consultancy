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
        <Route path="/home" element={<Home />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/conversation" element={<Conversation />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path="/subscriptions" element={<Subscription />}></Route>
        <Route path="/my-profile" element={<My_Profile />}></Route>
        <Route path="/settings" element={<Setting />}></Route>
      </Routes>
    </>
  );
}

export default ContentComponents;
