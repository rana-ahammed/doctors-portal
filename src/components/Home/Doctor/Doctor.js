import React from 'react';
import doctor from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Doctor = () => {
  return (
    <div className="col-md-4 text-center">
      <img className="img-fluid mb-3" src={doctor} alt="" />
      <h5>Dr. Caudi</h5>
      <p className="text-secondary"><FontAwesomeIcon className="text-primary" icon={faPhone} />+61 452 200 126</p>
    </div>
  );
};

export default Doctor;