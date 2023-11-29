import { Helmet } from "react-helmet-async";
import pic from "../Logo/page/blog.webp"

const Blog = () => {
    return (
        <div>
        <Helmet>
                <title>
                    TH || Blogs
                </title>
            </Helmet>

            <div className="flex justify-center items-center p-5">
      <img src={pic} alt="" />
       </div>
        </div>
    );
};

export default Blog;