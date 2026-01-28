import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";

const Shop = () => {
  return (
    <>
      <Container className="mt-37.75">
        <Flex>
          <div>
            <h1 className="font-bold text-[20px] mb-3.75">Shop By Category</h1>
            <ul className="flex flex-col gap-4">
              <li>Woman's Fashion</li>
              <li>Man's Fashion</li>
              <li>Electronics</li>
              <li>Home and Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's and Toys</li>
              <li>Groceries</li>
              <li>Health and Beauty</li>
            </ul>
            <h1 className="font-bold text-[20px] mb-3.75">Shop By Category</h1>
            <div>
                <Flex>

                    
                </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop;
