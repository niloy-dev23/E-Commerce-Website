import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Arrival1 from '../assets/Arrival1.png'
import Arrival2 from '../assets/Arrival2.png'
import Arrival3 from '../assets/Arrival3.png'
import Arrival4 from '../assets/Arrival4.png'
import Service from './Service'
import Service1 from '../assets/Services1.png'
import Service2 from '../assets/Services2.png'
import Service3 from '../assets/Services3.png'
import Flex from './Flex'

const NewArrival = () => {
  return (
    <>
        <Container>
            <div className='w-fit mx-auto mb-15'>
                <SectionHead
                    subtitle='Featured'
                    title='New Arrival'
                />
            </div>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-7.5 w-full h-150 lg:mb-34">
                <div className="col-span-2 row-span-2"><img src={Arrival1} alt="Arrival"/></div>
                <div className="col-span-2 col-start-3 w-fit h-fit"><img src={Arrival2} alt="Arrival"/></div>
                <div className="col-start-3 row-start-2"><img src={Arrival3} alt="Arrival"/></div>
                <div className="col-start-4 row-start-2 w-fit h-fit"><img src={Arrival4} alt="Arrival"/></div>
            </div>
            <Flex className='lg:w-235.75 mx-auto justify-start lg:justify-between mb-35 flex-col lg:flex-row gap-y-10 lg:gap-0 items-center '>
                <Service
                imgSrc={Service1}
                feature='FREE AND FAST DELIEVERY'
                details='Free delivery for all orders over $140'
                />
                <Service
                    imgSrc={Service2}
                    feature='24/7 CUSTOMER SERVICE'
                    details='Friendly 24/7 customer support'
                />
                <Service
                    imgSrc={Service3}
                    feature='MONEY BACK GUARANTEE'
                    details='We reurn money within 30 days'
                />
            </Flex>
        </Container>
    </>
  )
}

export default NewArrival