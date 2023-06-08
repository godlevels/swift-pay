import { Collapse } from 'react-collapse'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Accordion = ({ open, toggle, title, desc }) => {
    return (
        <div>
            <div className="bg-whyte py-[10px] px-[30px] outline outline-graye rounded-sm flex justify-between items-center cursor-pointer lg:w-[1050px]" onClick={toggle}>
                <p className="text-[20px] font-semibold">{title}</p>
                <div className="text-[20px]">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className='bg-whyte px-[50px] pt-10 pb-[25px]'>{desc}</div>
            </Collapse>
        </div>
    )
}

export default Accordion
