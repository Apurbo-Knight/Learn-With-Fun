import img1 from "../assets/std1.jpg";
import img2 from "../assets/std2.jpg";
import img3 from "../assets/std3.jpg";
import img4 from "../assets/std4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src={img1}
          className="w-full max-h-screen object-cover brightness-50"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col space-y-4 justify-center items-center">
            <div className="font-bold text-5xl text-white">Speak Hindi with Confidence</div>
          <div className="font-light text-xl text-gray-300">
            Learn everyday Hindi words and phrases through fun activities.
          </div>
          </div>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full max-h-screen object-cover brightness-50"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col space-y-4 justify-center items-center">
            <div className="font-bold text-5xl text-white">Master Hindi Vocabulary Fast</div>
          <div className="font-light text-xl text-gray-300">
            Boost your vocabulary with engaging exercises and challenges.
          </div>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full max-h-screen object-cover brightness-50"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col space-y-4 justify-center items-center">
            <div className="font-bold text-5xl text-white">Learn Hindi the Fun Way</div>
            <div className="font-light text-xl text-gray-300">
              Interactive lessons and games make language learning exciting.
            </div>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full max-h-screen object-cover brightness-50"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col space-y-4 justify-center items-center">
            <div className="font-bold text-5xl text-white">From Beginner to Fluent</div>
            <div className="font-light text-xl text-gray-300">
              Step-by-step lessons designed to take you from basics to fluency.
            </div>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
