import { useState } from "react";
import Image from "next/image";
import servImage1 from '../public/img/services/one.svg'
import servImage2 from '../public/img/services/two.svg'
import servImage3 from '../public/img/services/three.svg'
import servImage4 from '../public/img/services/four.svg'

const services = [
  {
    id: '1',
    image: servImage1,
    tit: 'Security',
    des: 'SwiftPay comes with advanced security features such as two-factor authentication, encryption, and fraud monitoring, which can help keep your financial information safe.',
  },
  {
    id: '2',
    image: servImage2,
    tit: 'Convenience',
    des: 'SwiftPay offers easy and convenient access to your finances, allowing you to manage your money from your smartphone or tablet anytime and anywhere.',
  },
  {
    id: '3',
    image: servImage3,
    tit: 'Budgeting and Tracking',
    des: 'SwiftPay comes with budgeting and tracking tools that can help you keep track of your spending and savings goals.',
  },
  {
    id: '4',
    image: servImage4,
    tit: 'Cost-effectiveness',
    des: 'SwiftPay have lower fees than traditional banking institutions, which can save you money in the long run.',
  },
]

const Services = () => {

  const [index, setIndex] = useState(1)

  return (
    <section className="bg-blue min-h-[400px] lg:min-h-[500px]">
      <div className="container mx-auto">
        <div className="text-center py-6 lg:py-12">
          <h1 className="text-gray text-[25px] lg:text-[56px] font-bold">Why Use SwiftPay</h1>
          <p className="text-center text-graye text-[15px] lg:text-[20px] font-semibold leading-5 py-2 lg:py-4">All the amazing features we offer our <br /> customers at <span className="text-primary">SwiftPay</span></p>
        </div>

        <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[25px] pb-10 lg:pb-0">
          {services.map((serv, servIndex)=> {
            const { image, tit, des } = serv
            return (
              <div key={servIndex}>
                <div onClick={()=> setIndex(servIndex)} className={`${index === servIndex && 'bg-gray shadow-2xl'} max-w-[700px] h-[250px] flex flex-col justify-center mx-auto px-[20px] rounded-[12px] cursor-pointer transition-all bg-whyte`}>
                  <Image className="w-[30px] lg:w-[50px]" src={image} alt="" />
                  <div className={`${index === servIndex && 'text-blue'} text-[16px] text-primary font-bold`}>{tit}</div>
                  <p className="text-[14px] text-graye font-bold leading-5">{des}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default Services;
