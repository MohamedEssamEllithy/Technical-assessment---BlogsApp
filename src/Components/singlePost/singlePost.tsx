
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post, { author } from "../../interface/post.interface";
import { authorContext } from "../../context/authorContext";

export default function SinglePost() {
  const [postDetails, setDetials] = useState<null | Post>(null);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [formattedDate, setformattedDate] = useState<string>();
  const [Author, setAuthor] = useState<author>();
  const [ApiError, setApiError] = useState<string>();
  let authContext = useContext(authorContext);
  const params = useParams();
  const postId = params.id;

  const getSinglePost = (id: string) => {
    setisLoading(true);
    axios
      .get(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
      .then(({ data }) => {
        setDetials(data.blog);
        getAuthorData(data.blog.user_id);
       
      })
      .catch((error) => {
        setApiError(error.message);
        setisLoading(false);
      });
  };

  let getAuthorData = async (id: number) => {
    
       let res  = await authContext.getAuthor(id);
       console.log("data",res);
       if (res == "Request failed with status code 404") {
        setApiError(res)
        setisLoading(false);
      }else{

        setAuthor(res.data.user);
        setisLoading(false);
      }
     
   
  };

  useEffect(() => {
    if (postId) {
      getSinglePost(postId);
    }
  }, []);

  useEffect(() => {
    if (postDetails) {
      const originalDate = new Date(postDetails.created_at);
      const formattedDate = originalDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setformattedDate(formattedDate);
    }
  }, [postDetails]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <i className="fa fa-spin fa-spinner fa-5x relative"></i>
        </div>
      ) : (
        <>
          {ApiError ? (
            <div className="py-32">
              <p className="text-center relative top-56 font-bold text-gray-600">
                {ApiError}
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between md:px-12 sm:px-6 sm:py:32 xs:py-36 mx-auto  max-w-screen-xl  ">
                <article className="mx-auto w-full">
                  <h1 className="mb-1 text-3xl font-extrabold text-center leading-tight text-gray-900 lg:text-4xl uppercase  ">
                    {postDetails?.title}
                  </h1>
                  <p className=" text-base mb-6  text-gray-400 text-center capitalize">
                    {postDetails?.description}
                  </p>
                  <header className="flex mb-6 justify-center">
                    <address className="flex items-center mb-6">
                      <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                        <img
                          className="mr-4 w-16 h-16 rounded-full"
                          src={Author?.profile_picture}
                          alt="Jese Leos"
                        />
                        <div>
                          <a
                            rel="author"
                            className="flex justify-between text-xl font-bold text-gray-900 "
                          >
                            {Author?.first_name + " " + Author?.last_name}
                            <span className=" text-base font-light  text-gray-800 ">
                              {formattedDate}
                            </span>
                          </a>
                          <p className="text-base text-gray-500 ">
                            {Author?.job + " ,"}
                            {" " + Author?.email}
                          </p>
                        </div>
                      </div>
                    </address>
                  </header>
                  <hr className="bg-gray-900 h-1" />

                  <div className="py-5 px-8 ">
                    <div className="  mx-auto  ">
                      <img
                        className=" w-80 md:float-right h-auto md:m-5 xs:mx-auto rounded-lg  "
                        src={postDetails?.photo_url}
                        alt="image description"
                      />
                    </div>
                    <p className="py-4 ">{postDetails?.content_text}</p>
                  </div>
                </article>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
