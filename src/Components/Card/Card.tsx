import style from "./Card.module.css";
import Post, { author } from "../../interface/post.interface.ts";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import avatarPic from '../../assets/istockphoto-1223671392-612x612.jpg'
import { authorContext } from "../../context/authorContext.tsx";

type propsTypes = {
  postDetails: Post;
};

export default function Card({ postDetails }: propsTypes) {
  
  const [Author, setAuthor] = useState<author>();
  const navigate = useNavigate();
  let authContext = useContext(authorContext)

   useEffect( () => {
  (async () => {

      let {data} = await authContext.getAuthor(postDetails.user_id);
        setAuthor(data.user);
     
  } )()
  
   }, []);


  const originalDate = new Date(postDetails.created_at);
  const formattedDate = originalDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const readMore =(id:number)=>{
  navigate(`/posts/${id}`)
}

  return (
    <div
      className={` ${style.card}  max-w-sm   rounded-3xl shadow-lg hover:shadow-2xl `}
    >
      <div className="relative">
        <img
          className={` rounded-t-3xl cursor-pointer transition-all duration-300 rounded-lg `}
          src={postDetails.photo_url}
          alt=""
        />
        <p className="absolute top-3 ml-3 bg-zinc-300 bg-opacity-50 text-white py-0.5 px-3 rounded-3xl">
          {postDetails.category}
        </p>
      </div>

      <div
        className={`${style.content} p-5 flex flex-col justify-around relative  `}
      >
        <div className="flex justify-between items-center mb-2">
          {Author ? (
            <>
              <div className="flex items-center">
                <img
                  src={Author.profile_picture}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold">
                    {Author.first_name + " " + Author.last_name}
                  </span>
                  <span className=" text-gray-400  font-normal text-base">
                    {Author.job}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center">
              <img
                src={avatarPic}
                alt="Avatar"
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
              <span className="text-gray-800 font-semibold"></span>
            </div>
          )}

          <span className="text-gray-500 text-xs mb-5">{formattedDate}</span>
        </div>

        <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-gray-700 cursor-pointer">
          {postDetails.title}
        </h5>

        <p className="mb-5 font-normal text-gray-700">
          {postDetails.description}
        </p>

        <a
          className="inline-flex items-center  px-3 py-2 text-sm  font-medium text-center text-zinc-800 bg-zinc-200 rounded-xl hover:bg-zinc-400 cursor-pointer  "
          onClick={() => readMore(postDetails.id)}
        >
          Read more
          <svg
            className="rtl:rotate-180  w-3.5  h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
