import Image from "next/image"
import cardOne from '../public/img/cards/cards.svg'
import cardTwo from '../public/img/cards/card.svg'
import cardThree from '../public/img/cards/cardss.svg'

const cards = [
    {
        id : '1',
        image : cardOne,
    },
    {
        id : '2',
        image : cardTwo
    },
    {
        id : '3',
        image : cardThree
    },
]


const Cards = () => {
    return (
        <section className="bg-transparent min-h-[400px] lg:min-h-[500px]">
            <div className="container mx-auto my-10 lg:my-16">
                <div className="text-center">
                    <h1 className="text-[30px] lg:text-[56px] text-gray font-bold">Our SwiftPay Citizenship Cards</h1>
                    <p className="leading-6 my-6 lg:my-8 text-[15px] lg:text-[20px] font-semibold">Get <span className="text-primary">SwiftPay</span> Virtual and Physical card for <br /> online and offline payments for FREE</p>
                </div>

                <div className="flex flex-col gap-y-5 mx-5 md:flex-row md:gap-10 lg:gap-24 mt-16">
                    {cards.map((card, i)=> {
                    const { image } = card
                        return(
                            <div key={i}>
                                <Image src={image} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Cards
