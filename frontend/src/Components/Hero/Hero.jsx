import image1 from "../../assets/Hero/headphone.png";
import image2 from "../../assets/category/macbook.png";
import image3 from "../../assets/category/vr.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Shared/Button";

const Hero = () => {
  const slides = [
    {
      id: 1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "HEADPHONE",
      description: "Enjoy the freedom of wireless listening.",
      image: image1,
    },
    {
      id: 2,
      subtitle: "Apple",
      title: "MacBook",
      title2: "PRO",
      description: "The ultimate laptop experience.",
      image: image2,
    },
    {
      id: 3,
      subtitle: "Google",
      title: "VR",
      title2: "HEADSET",
      description: "Step into virtual reality.",
      image: image3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[650px] hero-bg-color flex justify-center items-center ">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div
                    className="flex flex-col justify-center
                  gap-4 sm:pl-3 sm:pt-0 text-center 
                  sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {slide.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {slide.title}
                    </h1>
                    <h1
                      className="text-5xl uppercase text-white
                    dark:text-white/5 sm:text-[80px] md:text-[100px]
                    xl:text-[150px] font-bold">
                      {slide.title2}
                    </h1>
                    <div>
                      <Button
                        text="Shop By Category"
                        bgcolor="bg-primary"
                        textcolor="text-white"
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] 
                      sm:scale-105 lg:scale-110 object-contain 
                      mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
