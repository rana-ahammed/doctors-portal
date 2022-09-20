// import React from 'react';

// const Testimonial = ({testimonial}) => {
//   return (
//     <div className="card d-flex">

//       <div className="card-body shadow-sm">
//         <p className="card-text text-center">{testimonial.quote}</p>
//       </div>

//       <div className=" card-footer d-flex align-items-center">

//          <img src={testimonial.img} alt="" />

//         <div>
//           <h6 className="text-primary">{testimonial.name}</h6>
//           <p>{testimonial.from}</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Testimonial;



import React from 'react';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card w-25 shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;