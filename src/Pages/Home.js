import Swiper from "../components/Swiper/Swiper";
import SwiperMobile from "../components/Swiper/SwiperMobile";
import SwiperBlog from "../components/Swiper/SwiperBlog";

function Home() {
  return (
    <>
      <section className="container mt-16 md:flex ">
        <div className="w-full md:w-1/3">
          <img
            src="images/darkTopSectionLeft.webp"
            alt="img"
            className="p-10"
          />
        </div>
        <div className="w-full md:w-1/3 text-white text-center self-center">
          <h1 className="text-5xl font-black">Zero to Hero</h1>
          <h5 className="text-xl">Programming Course</h5>
        </div>
        <div className="hidden md:block md:w-1/3 ">
          <img
            src="images/darkTopSectionLeft.webp"
            alt="img"
            className="p-10"
          />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <Swiper />
      <section className="flex mt-[25vh]">
        <div className="w-full md:w-1/2">
          <SwiperMobile />
        </div>
        <div className="w-full md:w-1/2">
          <SwiperBlog />
        </div>
      </section>
      <h2 className="text-2xl text-white text-center mt-8">
        Flip through the pages to see more
      </h2>
      <br />
      <br />
      <br />
      <hr />
    </>
  );
}

export default Home;
