import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="text-white">
      {/* SECTION 1 */}
      <div
        className="HomePage bg-black lg:mt-[-6rem] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 bg-cover h-[auto] md:h-[50rem]"
        id="HomePage"
        style={{ backgroundImage: "url(/banner1.png)" }}
      >
        <div className="text-center lg:mt-[-5rem] md:text-left">
          <h1 className="text-[32px] md:text-[50px] md:w-[30rem] mt-12 w-full">
            Elevate Your Spirit with Victory Scented Fragrances!
          </h1>
          <p className="text-[16px] md:text-[20px] w-[18rem] md:w-[22rem] mx-auto md:mx-0 mt-4">
            Shop now and embrace the sweet smell of victory with Local Face.
          </p>
          <button className="h-[45px] w-[120px] md:h-[50px] md:w-[140px] bg-[#AB572D] rounded-lg mt-10 font-bold lg:mt-7 md:mt-14 hover:bg-[#a14e25]">
            Shop Now
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src="/HomeImage.png"
            alt="profile"
            width={300}
            height={300}
            className="w-[250px] md:w-[400px] h-auto"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div
        className="flex flex-col items-center justify-center h-[35rem] px-5 lg:px-0 text-white text-center bg-black bg-opacity-60 bg-blend-overlay bg-no-repeat"
        id="AboutPage"
        style={{ backgroundImage: "url(/aboutBanner.png)" }}
      >
        <div className="opacity-80 max-w-2xl lg:max-w-4xl">
          <h1 className="text-[#AB572D] text-[30px] lg:text-[50px]">
            Welcome to Local Face
          </h1>
          <p className="mt-5 lg:mt-10 text-[14px] lg:text-[16px]">
            Welcome to Local Face Perfumes, where the spirit of victory and
            triumph come alive through scents that empower and inspire. Our
            curated collection, aptly named &quot;Victory Scented,&quot; is a celebration
            of success and elegance, designed to unleash your victorious
            essence. Indulge in the sweet taste of triumph with captivating
            fragrances that tell the tale of your achievements. At Local Face,
            we believe that every victory deserves a signature scent, and we are
            dedicated to providing unforgettable fragrances that elevate your
            spirit and empower your journey.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div
        className="lg:h-[40rem] md:h-[50rem] sm:h-auto h-auto px-6 md:px-10 gap-10 flex flex-col md:flex-row items-center justify-center bg-no-repeat bg-cover py-10"
        style={{ backgroundImage: "url(/banner.png)" }}
      >
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/greenBotal.png"
            alt="user"
            width={700}
            height={500}
            className="w-[80%] sm:w-[550px] md:w-[500px] h-auto md:h-[450px]"
          />
        </div>

        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Values
          </h1>
          <p className="w-full sm:w-[30rem] mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
            At Local Face, our perfume retail store is built on a foundation of
            passion and authenticity. We believe in celebrating the individuality of
            every customer, providing a diverse collection of scents that resonate
            with their unique personality and style. Our dedicated team of fragrance
            enthusiasts is committed to creating a welcoming and inclusive environment,
            where connections are forged, and inspiration thrives.
          </p>

          <br />

          <p className="w-full sm:w-[30rem] mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
            Embracing sustainability and continuous learning, Local Face strives to
            be more than just a shopping destination; we are a community that inspires
            and empowers individuals on their fragrance journey.
          </p>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="bg-black h-auto py-10 flex flex-col items-center justify-center">
        <h1 className="text-center text-[#AB572D] text-2xl md:text-4xl">
          Best selling products
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 mt-10">
          <div
            className="h-[20rem] w-[10rem] md:h-[22rem] md:w-[12rem] rounded-lg flex flex-col items-center p-4 bg-cover bg-center"
            style={{ backgroundImage: "url(/banner.png)" }}
          >
            <Image
              src="/p1.png"
              alt="product"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <h1 className="text-center text-sm md:text-base">
              Luxurious Elixir Rough
            </h1>
            <p className="text-center text-xs md:text-sm">
              <span className="text-[#AB572D]">$ 220.00</span> 100ml
            </p>
          </div>
          {/* Additional product cards follow the same structure */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
