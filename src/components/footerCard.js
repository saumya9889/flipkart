import React from 'react';
import Gpay from "../assets/images/gpay.png";
import Applepay from "../assets/images/applepay.png";
import MasterCard from "../assets/images/mastercard.png";
import Visa from "../assets/images/visa.png";
import Paypal from "../assets/images/paypal.png";


const footerCard = () => {
  return (
    <>
    <div className="bg-[#212121]">
    <div className="container-wrapper">
          <div className="flex justify-between items-center pt-8 ">
                  <span className='text-[14px] leading-5  text-gray-500'>Shop.co © 2000-2023, All Rights Reserved </span>
                  <div className='flex justify-between '>
                    <figure>
                        <img src={Gpay} alt="gpay" />
                    </figure>
                    <figure>
                        <img src={Applepay} alt="gpay" />
                    </figure>
                    <figure>
                        <img src={MasterCard} alt="gpay" />
                    </figure>
                    <figure>
                        <img src={Paypal} alt="paypal" />
                    </figure>
                    <figure>
                        <img src={Visa} alt="visa" />
                    </figure>
                  </div>
                  </div>
                </div>
                </div>
    </>
  )
}

export default footerCard