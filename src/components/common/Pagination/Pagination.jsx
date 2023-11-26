import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import clsx from "clsx";

import { usePagination, DOTS } from "./usePagination";

import classes from "./Pagnination.module.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={clsx("pagination-container", classes.pagination, {
        [className]: className,
        [classes.mobile]: isMobile, // Add a CSS class for mobile styling
      })}
    >
      {!isMobile && (
        <li
          className={clsx(
            classes.dekstopArrow,
            currentPage === 1 && classes.disabled
          )}
          onClick={onPrevious}
        >
          <div className={clsx(classes.arrow, classes.left)}>
            <FaArrowLeft className={classes.arrowIcon} /> Prev
          </div>
        </li>
      )}
      {isMobile ? (
        <>
          <li
            className={clsx(
              classes.mobileArrow,
              currentPage === 1 && classes.disabled
            )}
            onClick={onPrevious}
          >
            <div className={clsx(classes.arrow, classes.left)}>
              <FaArrowLeft className={classes.arrowIcon} /> Prev
            </div>
          </li>
          <li
            className={clsx(
              classes.mobileArrow,
              currentPage === lastPage && classes.disabled
            )}
            onClick={onNext}
          >
            <div className={clsx(classes.arrow, classes.right)}>
              Next <FaArrowRight className={classes.arrowIcon} />
            </div>
          </li>
        </>
      ) : (
        <div
          className={clsx("pagination-container", classes.pageNumberContainer, {
            [className]: className,
            [classes.mobile]: isMobile, // Add a CSS class for mobile styling
          })}
        >
          {paginationRange.map((pageNumber, idx) => {
            if (pageNumber === DOTS) {
              return (
                <li
                  key={"pag-dot-" + idx}
                  className={clsx(
                    classes.paginationItem,
                    "pagination-item dots"
                  )}
                >
                  &#8230;
                </li>
              );
            }

            return (
              <li
                key={"pag-dot-" + idx}
                className={clsx(
                  classes.paginationItem,
                  pageNumber === currentPage && classes.active
                )}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
        </div>
      )}
      {!isMobile && (
        <li
          className={clsx(
            classes.dekstopArrow,
            currentPage === lastPage && classes.disabled
          )}
          onClick={onNext}
        >
          <div className={clsx(classes.arrow, classes.right)}>
            Next <FaArrowRight className={classes.arrowIcon} />
          </div>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
