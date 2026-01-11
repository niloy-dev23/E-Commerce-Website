import Container from "./Container"
import Flex from "./Flex"


const Header = () => {
  return (
    <>
        <div className="w-full py-3 bg-black text-white">
            <Container>
                <Flex className='justify-center gap-15'>
                    <div className="w-[75%]">
                        <Flex className='block'>
                            <p className="ml-auto font-normal text-[14px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                            <a className="font-semibold text-[14px] underline">ShopNow</a>
                        </Flex>
                    </div>
                    <div className="w-[25%]">
                        <select className="block ml-auto font-normal text-[14px]" name="language">
                            <option value="English">English</option>
                            <option value="Bangla">Bangla</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Header