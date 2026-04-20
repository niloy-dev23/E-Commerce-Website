import React from 'react'
import Container from '../Components/Container'

const About = () => {
  return (
    <>
        <Container className='py-20'>
            <h1 className='text-4xl font-bold'>About Exclusive</h1> <br />
            <p className='text-[18px]'>Welcome to Exclusive — where quality meets style, and shopping becomes an experience, not just a transaction.</p> <br />
            <p className='text-[18px]'>At Exclusive, we believe that everyone deserves access to products that feel premium, look exceptional, and perform reliably — without unnecessary complexity. Our journey started with a simple idea: create a space where customers can discover handpicked items that truly stand out.</p> <br />
            <h1 className='text-4xl font-bold'>Our Mission</h1> <br />
            <p className='text-[18px]'>Our mission is to bring you a curated selection of products that combine innovation, quality, and value. Whether it’s everyday essentials or standout pieces, we aim to deliver items that enhance your lifestyle.</p> <br />
            <h1 className='text-4xl font-bold'>What Makes Us Different?</h1> <br />
            <p className='text-[18px]'>We don’t believe in overwhelming you with endless options. Instead, we focus on:</p>
            <ul className='text-[18px] list-disc ml-8 mt-2'>
                <li>Carefully selected products that meet our standards</li>
                <li>Modern, user-friendly shopping experience</li>
                <li>Transparent pricing and reliable service</li>
                <li>Customer-first approach in everything we do</li>
            </ul>
            <p className='text-[18px]'>Every product you see on Exclusive is chosen with intention — because we know your time and trust matter.</p> <br />
             <h1 className='text-4xl font-bold'>Our Vision</h1> <br />
            <p className='text-[18px]'>We’re building more than just an e-commerce platform. Our vision is to become a brand you rely on — not just for shopping, but for discovering products that genuinely add value to your life.</p> <br />
             <h1 className='text-4xl font-bold'>Why Choose Exclusive?</h1> <br />
            <p className='text-[18px]'>Because here, you’re not just another customer. You’re part of a growing community that values quality over quantity, simplicity over clutter, and trust over trends.</p>
        </Container>
    </>
  )
}

export default About