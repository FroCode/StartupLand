import React from 'react'
import {blogs} from '../Assets/icons'
import avatar  from '../Assets/avatar.webp'
import Blogimg from '../Assets/medicine-8287535_1280.webp'
function Blog() {
    return (
        <div className="blog ">
            <div className="container m-auto pb-20">
                <div className="texts text-center pt-20">
                    <h3 className="text-[#5B2B9D] mb-5 font-bold text-lg">
                        Latest newsfeed
                    </h3>
                    <h3 className="text-[#0F2137] font-black text-[16px] text-xl">
                        Our recent blog post that updated
                    </h3>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    {blogs.map((blog) => {
                        return (
                            <div className="card  p-5 rounded m-5">
                                <div className="blogImage">
                                    <img src={Blogimg} className='rounded' alt="" srcset="" width="100%" />
                                </div>
                                <div className="blogTexts">
                                    <h4 className='text-[#0F2137] font-bold text-lg  mt-5 '>{blog.title}</h4>
                                    <p className='leading-7'>{blog.paragraph}</p>
                                    
                                        <div className="">
                                            <img src={blog.clock} alt="" srcset="" width="20%" />
                                            <h4 className='text-[#0F2137] font-bold text-sm  pt-5 '>{blog.date}</h4>
                                            <a className='font-bold text-base text-[#5B2B9D] 	'>Learn More...</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blog
