"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
const CustomPagination = ({ currPage, totalPage, setPage }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  const buttonClasses = classNames(
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  );
  useEffect(() => {
    if (currPage < 3) {
      var newarr = [];
      for (let index = 1; index <= totalPage && index <= 3; index++) {
        newarr.push(index);
      }
      setPageNumbers(newarr);
      // console.log(newarr)
    } else {
      var newarr = [];
      for (
        let index = currPage - 1;
        index <= totalPage && index <= currPage + 1;
        index++
      ) {
        newarr.push(index);
      }
      setPageNumbers(newarr);
      // console.log(newarr)
    }
  }, [totalPage, currPage]);

  // console.log(currPage)
  return (
    <div className="flex flex-row text black pl-10 pb-4">
      {currPage > 1 && (
        <div
          className={buttonClasses}
          onClick={() => {
            setPage(currPage - 1);
          }}
        >
          <span aria-hidden="true">&laquo;</span>
        </div>
      )}
      {pageNumbers.map((num) => (
        <div
          key={num}
          className={
            "flex flex-col " +
            classNames(
              " hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
              {
                ["bg-transparent"]: num !== currPage,
                ["bg-blue-500 text-white"]: num === currPage,
              }
            )
          }
          onClick={() => {
            setPage(num);
          }}
        >
          {num}
        </div>
      ))}
      {currPage < totalPage && (
        <div
          className={buttonClasses}
          onClick={() => {
            setPage(currPage + 1);
          }}
        >
          <span aria-hidden="true">&raquo;</span>
        </div>
      )}
    </div>
  );
};

export default CustomPagination;
