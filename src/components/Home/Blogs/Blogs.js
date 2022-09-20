import React from "react";
import './Blogs.css';
import wilson from "../../../images/people-1.png";
import BlogPost from "../BlogPost/BlogPost";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas ab ad blanditiis quis fuga dolorem facilis! Deserunt, aut cum.",
    author: "Dr Caudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Two time brush can keep you healthy",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, rem saepe rerum ipsam harum sunt dolor impedit nemo quam quia?",
    author: "Dr Caudi",
    authorImg: wilson,
    date: "25 May 2021",
  },
  {
    title: "The Tooth Cancer Is Taking a Chanllenge",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, rem saepe rerum ipsam harum sunt dolor impedit nemo quam quia?",
    author: "Dr Caudi",
    authorImg: wilson,
    date: "25 May 2021",
  },
];

const Blogs = () => {
  return (
    <section className="blogs my-5 py-5">
      <div className="container">
        <div>
          <h5 className="text-primary text-uppercase">OUR BLOG</h5>
          <h2>From Our Blog News</h2>
        </div>

        <div className="card-group mt-5">
          {blogData.map((blog) => (
            <BlogPost blog={blog} key={blog.title}></BlogPost>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
