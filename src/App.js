import React, { useState } from "react";
const items = [
  {
    id: 1,
    name: "Item 1"
  },
  {
    id: 2,
    name: "Item 2"
  },
  {
    id: 3,
    name: "Item 3"
  },
  {
    id: 4,
    name: "Item 4"
  },
  {
    id: 5,
    name: "Item 5"
  },
  {
    id: 6,
    name: "Item 6"
  },
  {
    id: 7,
    name: "Item 7"
  },
  {
    id: 8,
    name: "Item 8"
  },
  {
    id: 9,
    name: "Item 9"
  },
  {
    id: 10,
    name: "Item 10"
  },
  {
    id: 11,
    name: "Item 11"
  },
  {
    id: 12,
    name: "Item 12"
  },
  {
    id: 13,
    name: "Item 13"
  },
  {
    id: 14,
    name: "Item 14"
  }
];
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setSelectedPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setSelectedPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {items
        .slice((currentPage - 1) * 5, currentPage * 5)
        .map((item, index) => (
          <div key={item.id}>{item.name}</div>
        ))}

      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>

      {[...Array(Math.ceil(items.length / 10))].map((_, i) => (
        <button
          key={i}
          style={{ backgroundColor: i + 1 === selectedPage ? "lightblue" : "" }}
          onClick={() => handleClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={handleNextClick}
        disabled={currentPage === Math.ceil(items.length / 10)}
      >
        Next
      </button>
    </div>
  );
}
