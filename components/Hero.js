import Image from "next/image";
import frame1 from '../public/img/hero/frame.svg';
import frame2 from '../public/img/hero/frame2.svg';
import frame3 from '../public/img/hero/frame.svg';
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from './Header';


const Hero = () => {
  return (
    <section className="lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[605px]">
      <Header />
      <div className="min-h-[400px] lg:h-[605px]">
        <div className="pt-16 lg:pt-40">
          {/* <div className="hidden lg:flex items-center justify-start">
            <Image src={frame1} alt="" width={500} height={500} />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-[350px] lg:max-w-[733px]">
              <h1 className="text-center text-[45px] leading-[55px] lg:text-[72px] font-extrabold lg:leading-[88px]">Seamless And Easy <br /> Transactions On <br /> The Go</h1>
              <p className="text-center text-[20px] text-[#6D6E6E] my-7">Carry out all financial transaction on one platform, <br /> fast and easy, without hassles.</p>
            </div>
            <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
              <button className="btnlog btn-primary">Login</button>
              <button className="btnget btn-outline flex items-center gap-2">Get Started <span className="flex items-center"><AiOutlineArrowRight /></span></button>
            </div>
            <div>
              <Image src={frame2} width={900} height={900} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
