// import React from 'react';
// import winson from '../../../images/people-1.png';
// import ema from '../../../images/people-2.png';
// import aliza from '../../../images/people-3.png';
// import Testimonial from '../Testimonial/Testimonial';
// const testimonialData = [
//   {
//     quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum est incidunt ex reprehenderit dignissimos? Fuga optio quaerat inventore recusandae numquam eum, harum incidunt animi. Quo sint ut ullam nam velit laboriosam natus hic similique voluptates quia iste minima iusto tenetur aperiam iure ipsum quos totam blanditiis necessitatibus, eos, maiores quibusdam.',
//     name: 'Winson Herry',
//     from: 'California',
//     img: winson, 
//   },
//   {
//     quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ab distinctio doloribus nihil! Cum enim, nostrum eveniet unde, numquam quam eos minima dolorum deleniti aspernatur fugit dicta ad, blanditiis ullam? Repudiandae dignissimos non dolorum dolore, voluptatum, possimus placeat ab ullam corrupti alias perspiciatis, velit ut id eligendi est laboriosam consectetur.',
//     name: 'Ema Gomez',
//     from: 'California',
//     img: ema,
//   },
//   {
//     quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus, delectus consectetur modi voluptatem minus deleniti ea eum quo aliquam dolorem error sapiente saepe sunt nihil ratione officia aut facilis quisquam temporibus aspernatur consequuntur a? Amet totam tempore nostrum at, neque, atque possimus illo adipisci quo dignissimos necessitatibus illum impedit",
//     name: 'Aliza Ferrari',
//     from: "California",
//     img: aliza,
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section>
//       <div>
//         <h5 className="text-primary">TESTIMONIAL</h5>
//         <h1>What's Our Patients <br /> Says</h1>
//       </div>  
        

//        <div className=" mt-5">
//            {
//             testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
//            }
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import winson from '../../../images/people-1.png';
import ema from '../../../images/people-2.png';
import aliza from '../../../images/people-3.png';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : winson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-group mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;