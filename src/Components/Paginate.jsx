import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import { useSelector } from 'react-redux';

// Example items, to simulate fetching from another resources.


const Paginate = ({ itemsPerPage }) => {

  let allProducts = useSelector((state)=>state.allData.value)
  const items = allProducts
  function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
              <Card 
                    cardData={item}
                    key={index}
                    id={item.id}
                    imgSrc={item.thumbnail}
                    discount={item.discountPercentage}
                    title={item.title}
                    price={item.price}
                    reviews={item.reviews.length}
                    rating={item.rating}
                  />
        ))}
    </>
  );
} 
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + Number(itemsPerPage);
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel=""
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        pageClassName='px-6.25 py-0.5 bg-black text-white w-fit h-fit cursor-pointer'
        className='flex gap-2.5'
      />
    </>
  );

}

export default Paginate



