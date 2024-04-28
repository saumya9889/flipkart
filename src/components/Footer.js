import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faSquareInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f2f0f1]">
        <div className="container-wrapper">
          <div className="footer-content ">
            <div className="footer-content-wrapper mt-[2rem] h-[100%] ">
              <div className="footer flex justify-between gap-2 pt-[2rem] bg-[#212121] h-full px-4 ">
                <div className="">
                  <p className="text-[14px] text-[#a4a1aa]">
                    We have clothes that suits your style and
                    <br /> which you're proud to wear. From <br /> women to men.
                  </p>
                  <div className="flex gap-8 mt-[2rem]">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      beat
                      style={{ color: "#14ccf1" }}
                    />
                    <FontAwesomeIcon
                      icon={faFacebook}
                      beat
                      style={{ color: "#14ccf1" }}
                    />
                    <FontAwesomeIcon
                      icon={faSquareInstagram}
                      beat
                      style={{ color: "#14ccf1" }}
                    />
                    <FontAwesomeIcon
                      icon={faGithub}
                      beat
                      style={{ color: "#14ccf1" }}
                    />
                  </div>
                </div>
                <div className="left-side">
                  <h2 className="text-base font-semibold tracking-wider leading-tight  uppercase">
                    Company
                  </h2>
                  <ul className="flex flex-col gap-[10px] mt-[1rem] capitalize text-gray-500 font-serif text-base font-normal leading-5">
                    <li>about</li>
                    <li>Features</li>
                    <li>works</li>
                    <li>careers</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-base font-semibold tracking-wider leading-tight  uppercase">
                    help
                  </h2>
                  <ul className="flex flex-col gap-[10px] mt-[1rem] capitalize text-gray-500 font-serif text-base font-normal leading-5">
                    <li>customer support</li>
                    <li>delivery details </li>
                    <li>terms & conditions </li>
                    <li>privacy policy</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-base font-semibold tracking-wider leading-tight  uppercase">
                    faq
                  </h2>
                  <ul className="flex flex-col gap-[10px] mt-[1rem] capitalize text-gray-500 font-serif text-base font-normal leading-5">
                    <li>account </li>
                    <li>manage deliveries </li>
                    <li>orders</li>
                    <li>payments </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-base font-semibold tracking-wider leading-tight  uppercase">
                    resources
                  </h2>
                  <ul className="flex flex-col gap-[10px] mt-[1rem] capitalize text-gray-500 font-serif text-base font-normal leading-5">
                    <li>Free-eBooks</li>
                    <li>development tutorial</li>
                    <li>how to - blog</li>
                    <li>youtube playlist</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class=" mx-auto h-px bg-[#0000001a]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
