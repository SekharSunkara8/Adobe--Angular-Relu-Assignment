import React from 'react';
import withPrivate from '../hoc/withPrivate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faComment, faEllipsisVertical, faHeart, faShare} from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';
import comment from '../assets/comment.svg'
import heart from '../assets/heart.svg'
import whiteHart from '../assets/whiteHeart.svg'
import share from '../assets/share.svg'
import profileimg1 from '../assets/profile1.png'
import img1 from '../assets/img1.png'
import profile2 from '../assets/profile2.png'
import img2 from '../assets/img2.png'
import VerticalScroller from './verticalScroller';

const Post = ({ username, tag, profilePic, image, likes, comments, description }) => {
  return (
    <div className=''>
    <div className="max-w-full mx-auto bg-lightBlue text-gray-950 rounded-lg shadow-md mb-8 dark:text-gray-50 dark:bg-gray-800 px-4 ">
      <div className=' w-full flex justify-between items-center p-4'>
      <div className="flex items-center">
        <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-md mr-4" />
        <div className='flex flex-col'>
        <span className="font-semibold ">{username}</span>
        <span className="font-semibold opacity-50">{tag}</span>
        </div>
        </div>
        <FontAwesomeIcon className='item-center' icon={faEllipsisVertical} />
        
      </div>
      <div className='mb-2'> <p className="text-gray-800 dark:text-gray-300 mt-4">{description}<span className='text-[#FF5E8A]'>Read More</span></p></div>
      <div className="post-image relative">
        <img src={image} alt="Post" className="w-full rounded-sm" />
        <img src={whiteHart} alt='heart' className='absolute right-10 top-10' />
      </div>
      <div className="p-4 flex ">
        <div className="flex items-center mb-4">
         
          <span className="font-semibold flex"><img src={heart} alt='heart'className='mr-2'/> {likes}</span>
        </div>
        <div className='ml-4'>
          <span className="font-semibold flex"><img src={comment} alt='comment' className='mr-2'/>  {comments} </span>
        </div>
        <div className='ml-4'>
          <span className="font-semibold flex"><img src={share} alt='share' className='mr-2'/>  {comments} </span>
        </div>
      </div>
    </div>
    </div>
  );
};

const InstagramFeed = () => {
  const posts = [
    {
      username: 'Lara Leones',
      tag: "@thewallart",
      profilePic: profileimg1,
      image: img1,
      likes: 120,
      comments: 25,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      username: 'Thomas J.',
      tag : "@thecustomcreater",
      profilePic: profile2,
      image: img2,
      likes: 200,
      comments: 30,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    // Add more posts as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center ">
      
      <div className="flex gap-x-4 items-center bg-lightBlue shadow-md h-20 rounded-md w-full mb-10 m-2 ">
          <SearchBar/>
        </div>
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          tag={post.tag}
          profilePic={post.profilePic}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
          description={post.description}
        />
      ))}
      <div className='w-[700px]'>
        <VerticalScroller />
      </div>
    </div>
  );
};

export default withPrivate(InstagramFeed);
