import Accordion from "./Accordion";
import { useState } from "react";

const accordionData = [
  {
    title: 'What services does SwiftPay Offer?',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, numquam autem obcaecati natus nesciunt consequuntur atque minus non dolorem magnam ipsam nemo et, impedit expedita! Tenetur possimus laudantium totam odit ex perferendis, quod magni aperiam modi! Repellendus totam necessitatibus ad doloremque, aliquid cum quidem quos molestiae nemo, nam ab maiores.',
  },

  {
    title: 'What services does SwiftPay Offer?',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, distinctio aliquid? Quam voluptates perspiciatis natus beatae architecto ea repudiandae quidem sapiente. Ratione quasi soluta, iste explicabo pariatur vero voluptatem, officiis provident nesciunt veniam delectus dolorum optio repellendus in distinctio laboriosam esse iure. Voluptates veniam quo aliquam blanditiis eius perspiciatis reprehenderit commodi provident numquam est ullam magni, voluptatum libero eum rerum at excepturi temporibus ratione vel. Atque ratione enim, facere accusamus optio nobis rem ea, sequi esse odio cupiditate facilis et.',
  },

  {
    title: 'What services does SwiftPay Offer?',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, distinctio aliquid? Quam voluptates perspiciatis natus beatae architecto ea repudiandae quidem sapiente. Ratione quasi soluta, iste explicabo pariatur vero voluptatem, officiis provident nesciunt veniam delectus dolorum optio repellendus in distinctio laboriosam esse iure. Voluptates veniam quo aliquam blanditiis eius perspiciatis reprehenderit commodi provident numquam est ullam magni.',
  },

  {
    title: 'What services does SwiftPay Offer?',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, distinctio aliquid? Quam voluptates perspiciatis natus beatae architecto ea repudiandae quidem sapiente. Ratione quasi soluta, iste explicabo pariatur vero voluptatem, officiis provident nesciunt veniam delectus dolorum optio repellendus in distinctio laboriosam esse iure. Voluptates veniam quo aliquam blanditiis eius perspiciatis reprehenderit commodi provident numquam est ullam magni, voluptatum libero eum rerum at excepturi temporibus ratione vel. Atque ratione enim, facere accusamus optio nobis rem ea, sequi esse odio cupiditate facilis et.',
  },

  {
    title: 'What services does SwiftPay Offer?',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, distinctio aliquid? Quam voluptates perspiciatis natus beatae architecto ea repudiandae quidem sapiente.',
  },

  {
    title: 'What services does SwiftPay Offer?',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, distinctio aliquid? Quam voluptates perspiciatis natus beatae architecto ea repudiandae quidem sapiente. Ratione quasi soluta, iste explicabo pariatur vero voluptatem, officiis provident nesciunt veniam delectus dolorum optio repellendus in distinctio laboriosam esse iure. Voluptates veniam quo aliquam blanditiis eius perspiciatis reprehenderit commodi provident numquam est ullam magni, voluptatum libero eum rerum at excepturi temporibus ratione vel. Atque ratione enim, facere accusamus optio nobis rem ea, sequi esse odio cupiditate facilis et.',
  },
]

const Faq = () => {

  const [open, setOpen] = useState(false)

  const toggle = (i) => {
    if(open === i) {
      return (
        setOpen(null)
      )
    }
    setOpen(i)
  }

  return (
    <section className="bg-blue min-h-[400px] lg:min-h-[500px]">
      <div className="container mx-auto pt-14">
        <h1 className="text-[48px] text-gray text-center font-bold">Frequently Asked Questions (FAQs)</h1>

        <div className="px-[40px] max-w-[800px] flex flex-col gap-y-6 py-20">
          {accordionData.map((data, i) => {
            return (
              <Accordion key={i} open={i === open} title={data.title} desc={data.desc} toggle={()=>toggle(i)} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
