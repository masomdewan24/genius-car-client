import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={service.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service.title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price: {service.price}</p>
    <div className="card-actions justify-end">
    <Link to={`/checkout/${service._id}`}><AiOutlineArrowRight/></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;