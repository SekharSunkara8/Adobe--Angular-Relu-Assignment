
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from "../redux/action/auth" 
import withPrivate from '../hoc/withPrivate';
import home from '../assets/leftSidebar/home.svg'
import notification from '../assets/leftSidebar/notification.svg'
import shop from '../assets/leftSidebar/heart.svg'
import conversation from '../assets/leftSidebar/message.svg'
import wallet from '../assets/leftSidebar/message (1).svg'
import subscription from '../assets/leftSidebar/favorite.svg'
import myProfile from '../assets/leftSidebar/profile.svg'
import settings from '../assets/leftSidebar/setting.svg'
import logouticon from "../assets/leftSidebar/logout.png"

const LeftSidebar = () => {
  
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: home },
    { title: "Notification", src: notification },
    { title: "Shop", src: shop },
    { title: "Conversation ", src: conversation },
    { title: "Wallet", src: wallet },
    { title: "Subscription", src: subscription },
    { title: "My Profile", src: myProfile},
    { title: "Settings", src: settings },
  ];

  return (
    <div className="hidden md:flex md:fixed">
      <div
        className={` ${
          open ? "w-72" : "w-10 "
        } bg-dark-purple h-screen relative duration-300`}
      >
        <div className="flex gap-x-4 items-center bg-lightBlue text-gray-800 shadow-md h-20 rounded-md pl-10 m-2">
          <h1
            className={`text-gray-800 origin-left font-medium text-3xl duration-200 sticky ${
              !open && "scale-0"
            }`}
          >
            LOGO
          </h1>
        </div>
        <div className='bg-lightBlue  shadow-md mt-10 rounded-md'>
        <div className="p-6 ">
            <div className='flex flex-col items-center gap-y-4'>
              
            </div>
          {Menus.map((Menu, index) => (
            <div
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-lightBlue  text-sm items-center gap-x-4 pl-4
               ${
                index === 0 && " text-gray-50  dark:text-gray-50"
              } `}
            >
             <img src={`${Menu.src}`} className='w-7 h-7' />
              <Link to="#" className={`${!open && "hidden"} origin-left duration-200 text-lg text-gray-800`}>
              {Menu.title}
              </Link>
            </div>
          ))}
          <div className='flex'>
          <button onClick={handleLogout} className='mt-10 p-6 flex '><span><img src={logouticon} className='w-7 h-7 mr-3' /></span>Logout</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default withPrivate(LeftSidebar);
