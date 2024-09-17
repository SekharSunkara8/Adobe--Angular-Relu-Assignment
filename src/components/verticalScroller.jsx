import React from 'react';
import { data } from './mockData';
import star from '../assets/star.svg';

// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function VerticalScroller() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className='relative flex items-center'>
        {/* <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} /> */}
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item, index) => (
            <div key={index} className='inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>
              <img
                className='w-[220px] h-[150px] bg-cover rounded-md'
                src={item.img}
                alt='/'
              />
              <div className='flex justify-between'>
              <p className='mr-2'>{item.title}</p>
              <p className='flex'><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></p>
              </div>
            </div>
          ))}
        </div>
        {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} /> */}
      </div>
    </>
  );
}

export default VerticalScroller;
