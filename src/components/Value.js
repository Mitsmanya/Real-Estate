import './Value.css'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from './Accordion.js'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src="https://www.naturallywood.com/wp-content/uploads/PH1-building-exterior-credit-Ishot2.jpg" alt='' />
                </div>
            </div>
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value We give to You</span>
                <span className='secondaryText'>We are always ready to help by providing the best services for you.<br />We believe a good place to live can make your life better.</span>

                <Accordion className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                {data.map((item, i) => {
                    return(
                        <AccordionItem className="accordionItem" key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionButton">
                                <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value