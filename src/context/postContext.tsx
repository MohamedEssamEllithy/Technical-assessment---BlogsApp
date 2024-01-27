import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";
import Post from "../interface/post.interface";

type ContextProps = {
  children: ReactNode,
};

export let postContext = createContext < any > (null);

export default function PostContextProvider({ children }: ContextProps) {
 const [allPosts, setPosts] = useState<Post[]>([]);
 const [isLoading, setLoading] = useState<boolean>(false);
 const getPosts = async () => {
   setLoading(true);
   let { data } = await axios.get(
     `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=10`
   );
   setPosts(data.blogs);   
   setLoading(false);
 };
 

 useEffect(()=>{
   getPosts()
 },[])
  return (
    <postContext.Provider value={{ allPosts,isLoading }}>{children}</postContext.Provider>
  );
}
