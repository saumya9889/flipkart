import Carousel from "react-bootstrap/Carousel";
import Flight from "../assets/images/flight.png";
import Lappy from "../assets/images/lappy.png";
import Iphone from "../assets/images/iphone.png";
import Intel from "../assets/images/intel.png";
import Internationalflights from "../assets/images/internationalflights.png";
import Shopnow from "../assets/images/shopnow.png";
import Tv from "../assets/images/tv.png";


const BannerCarousel = () => {
  const handleSlide = (e) => {
    console.log(e,"e_++++++")
  }
  return (
    <Carousel onSlide={handleSlide}>
      <Carousel.Item>
        <img className="d-block w-100" src={Flight} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Iphone} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Lappy} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Shopnow} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Internationalflights} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Intel} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Tv} />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerCarousel;
