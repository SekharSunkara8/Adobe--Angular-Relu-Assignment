import { useState } from "react";
import withPrivate from "../hoc/withPrivate";
import img1 from '../assets/reghtSidebar/pexels-ekaterina-12203460.png'
import profile1 from '../assets/reghtSidebar/pexels-anastasia-shuraeva-4406721.png'
import img2 from '../assets/reghtSidebar/pexels-genaro-servín-763210.png'
import profile2 from '../assets/reghtSidebar/pexels-andrea-piacquadio-3771118.png'
import img3 from '../assets/reghtSidebar/pexels-pixabay-164455.png'
import profile3 from '../assets/reghtSidebar/pexels-antoni-shkraba-4442102.png'
import img4 from '../assets/reghtSidebar/pexels-steve-johnson-1269968.png'
import profile4 from '../assets/reghtSidebar/pexels-anastasia-shuraeva-4406721.png'
import img5 from '../assets/reghtSidebar/pexels-fiona-art-5022849.png'



const RightSidebar = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: img1,
      user: {
        name: "Thomas Edward",
        tag: "@thewildwithyou",
        photo: profile1,
      },
    },
    {
      id: 2,
      image: img2,
      user: {
        name: "Chris Doe",
        tag: "@thewildwithyou",
        photo: profile2,
      },
    },
    {
      id: 3,
      image: img3,
      user: {
        name: "Emilie Jones",
        tag: "@thewildwithyou",
        photo: profile3,
      },
    },
    {
      id: 4,
      image: img4,
      user: {
        name: "Jessica Williams",
        tag: "@thewildwithyou",
        photo: profile4,
      },
    },
    {
      id: 5,
      image: img5,
      user: {
        name: "Thomas Edward",
        tag: "@thewildwithyou",
        photo: profile4,
      },
    },
  ]);

  return (
    <div className="hidden md:flex md:flex-col md:ml-10 ">
    <div className="flex items-center bg-[#88C2BB] shadow-md h-20 rounded-md pl-10 m-2">
          <button
            className="text-white item-center font-medium text-normal duration-200"
          >
            Become a Seller
          </button>
        </div>
    <div className=" bg-gray-100 p-4">
      <h2 className="text-lg mb-4"><span className="font-bold mr-2">Arists</span>Photographers</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center mb-4  relative">
          <img src={item.image} alt={item.name} className="w-full h-200 rounded-md relative bg-cover" />
          
            <div className="flex  absolute left-2 bottom-2">
              <img src={item.user.photo} alt={item.user.name} className="w-8 h-8 rounded-md mr-2 " />
              <div className="flex flex-col">
              <span className="text-sm text-[#FFFFFF] font-bold">{item.user.name}</span>
              <span className="text-sm text-[#FFFFFF]">{item.user.tag}</span>
              </div>
          </div>
        </div>
        
      ))}
    </div>
    <div className="flex font-light text-xs bg-white fixed bottom-0">
      <p className="p-2">Privacy</p>
      <p className="p-2">Ternms of Services</p>
      <p className="p-2">Cookie Notice</p>
    </div>
    </div>
  );
};
export default withPrivate(RightSidebar);