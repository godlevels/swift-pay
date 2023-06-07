import Image from "next/image"
import testImg1 from '../public/img/testimony/jean.svg'
import testImg2 from '../public/img/testimony/jan.svg'
import testImg3 from '../public/img/testimony/ado.svg'
import testImg4 from '../public/img/testimony/div.svg'
import testBg from '../public/img/testimony/bgs.svg'


const testone = [
    {
        image: testImg1,
        name: 'Morrison Jean',
        desc: 'SwiftPay comes with advanced security features such as two-factor authentication, encryption, and fraud monitoring, which can help keep your financial information safe.',
    },
    {
        image: testImg2,
        name: 'Janice Fowler',
        desc: 'SwiftPay comes with advanced security features such as two-factor authentication, encryption, and fraud monitoring, which can help keep your financial information safe.',
    },
]

const testtwo = [
    {
        image: testImg3,
        name: 'Dennis Ado',
        desc: 'SwiftPay comes with advanced security features such as two-factor authentication, encryption, and fraud monitoring, which can help keep your financial information safe.',
    },
    {
        image: testImg4,
        name: 'Divine Adeshina',
        desc: 'SwiftPay comes with advanced security features such as two-factor authentication, encryption, and fraud monitoring, which can help keep your financial information safe.',
    },
]
const Testimonilas = () => {
    return (
        <section className="bg-primary min-h-[400px] lg:min-h-[700px] pt-4 pb-8">
            <div className="container mx-auto">
                <p className="lg:text-[48px] text-center text-whyte font-semibold lg:leading-[60px] py-10">What Our SwiftPay Citizenship Say <br /> About Us</p>
                
                <div className="flex flex-col gap-y-[10px] md:flex-row gap-x-32 mt-6">
                    <div className="flex flex-col gap-y-6">
                        {testone.map((test, i)=> {
                        const { image, name, desc } = test
                        return (
                            <div key={i} className="h-[250px] lg:max-w-[450px] lg:h-[230px] flex flex-col justify-center mx-auto px-[20px] rounded-[12px] cursor-pointer transition-all bg-whyte">
                                <div>
                                    <Image src={image} />
                                </div>
                                <div>
                                    <h1 className="text-[16px] text-primary font-bold">{name}</h1>
                                    <p className="text-[14px] text-graye font-bold leading-5">{desc}</p>
                                </div>
                            </div>
                        )
                        })}
                    </div>

                    <div>
                        <Image className="hidden lg:flex items-center justify-center w-[350px] lg:w-[400px] lg:my-36" src={testBg} />
                    </div>

                    <div className="flex flex-col gap-y-6">
                        {testtwo.map((test, i)=> {
                        const { image, name, desc } = test
                        return (
                            <div key={i} className="h-[250px] lg:max-w-[450px] lg:h-[230px] flex flex-col justify-center mx-auto px-[20px] rounded-[12px] cursor-pointer transition-all bg-whyte">
                                <div>
                                    <Image src={image} />
                                </div>
                                <div>
                                    <h1 className="text-[16px] text-primary font-bold">{name}</h1>
                                    <p className="text-[14px] text-graye font-bold leading-5">{desc}</p>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonilas
