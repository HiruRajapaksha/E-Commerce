import React from 'react';
import './DescriptionBox.css'; 

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An E-commerce website is an online platform that enables businesses to sell products and services directly to consumers over the internet. These websites typically feature a user-friendly interface where customers can browse products, add items to a shopping cart, and complete purchases through a secure payment gateway. E-commerce sites often include features such as product search, customer reviews, and personalized recommendations to enhance the shopping experience. For businesses, an e-commerce website provides a scalable way to reach a global audience, streamline transactions, and operate 24/7, making it a crucial tool in today's digital economy.</p>
            <p>
            An e-commerce website allows businesses to sell products and services online, providing a convenient shopping experience for customers. With features like product catalogs, secure payment options, and customer reviews, these sites make it easy for users to browse, purchase, and receive items from the comfort of their homes. E-commerce platforms help businesses reach a wider audience, operate around the clock, and manage sales efficiently in the digital age.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox