import React from 'react';
import '../Blogs/Blogs.css';

const BlogPost = (props) => {
  const {title, description, author, authorImg, date} = props.blog;
  return (
      <div className="card shadow-sm me-5">

        <div className="card-header d-flex">
          <img className="me-3" src={authorImg} alt="" />
          <div>
            <h6 className="text-primary">{author}</h6>
            <p className="text-secondary">{date}</p>
          </div>
        </div>

        <div className="card-body">
          <h5>{title}</h5>
          <p className="text-secondary">{description}</p>
        </div>

      </div>
  );
};

export default BlogPost;