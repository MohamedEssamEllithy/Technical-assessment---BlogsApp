import { useContext} from "react";
import Card from "../Card/Card";
import Post from "../../interface/post.interface.ts"
import { postContext } from "../../context/postContext.tsx";


export default function Home() {

  let {allPosts,isLoading} = useContext(postContext)

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <i className="fa fa-spin fa-spinner fa-5x relative"></i>
        </div>
      ) : (
        <>
          <div className="relative items-center w-full px-5 md:py-28 xs:py-48 mx-auto md:px-12 lg:px-24 max-w-8xl">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4">
              {allPosts.map((post: Post) => (
                <Card key={post.id} postDetails={post}  />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
