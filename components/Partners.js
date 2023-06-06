import Image from 'next/image'
import Part1 from '../public/img/partners/bnl.svg'

const partners = [
  {
    id: 1,
    image: Part1
  },
  {
    id: 2,
    image: Part1
  },
  {
    id: 3,
    image: Part1
  },
  {
    id: 4,
    image: Part1
  }
]

const Partners = () => {
  return (
    <section className="bg-primary mt-6 lg:mt-40 relative">
      <div className="container mx-auto py-5 flex flex-col">
        <h1 className="text-center text-whyte capitalize text-[20px] lg:text-[24px] font-bold">our growth partners</h1>
        <div className='flex flex-col lg:flex-row'>
          <div className='relative flex items-center'>
            <div className='flex justify-center md:px-40 gap-4 lg:gap-32'>
              {partners.map((part, i)=> {
                return (
                  <div className='cursor-pointer relative py-3' key={i}>
                    <Image className='w-[120px] lg:w-[290px] mt-3' src={part.image} /> 
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
