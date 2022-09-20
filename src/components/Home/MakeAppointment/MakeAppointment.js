import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="row d-flex">
        <div className="col-md-5">
            <img src={doctor} alt="" />
        </div>
        <div className="col-md-7 py-5">
          <h5 className="text-primary text-uppercase" >appointment</h5>
          <h1 className="my-4">Make an appointment Today</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</p>
          <button className="btn btn-primary">Learn More</button>
        </div>

      </div>
      
    </section>
  );
};

export default MakeAppointment;