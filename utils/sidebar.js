import {
  heart,
  home,
  notification,
  message,
  setting,
  profile,
  favorite,
  wallet,
} from './imageExport';

export const sidebar = [
  {
    titile: 'Home',
    src: home,
    path: '/home',
  },
  {
    titile: 'Notifications',
    src: notification,
    path: '/notification',
  },
  {
    titile: 'Shop',
    src: heart,
    path: '/shop',
  },
  {
    titile: 'Converstion',
    src: message,
    path: '/conversation',
  },
  {
    titile: 'Wallet',
    src: wallet,
    path: '/wallet',
  },
  {
    titile: 'Subscription',
    src: favorite,
    path: '/subscriptions',
  },
  {
    titile: 'My Profile',
    src: profile,
    path: 'my-profile',
  },
  {
    titile: 'Settings',
    src: setting,
    path: '/settings',
  },
];
