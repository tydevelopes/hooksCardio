import React, { useState, useEffect, useRef } from "react";

const Pagination = ({ items, itemsPerPage, filterState }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToRender, setItemsToRender] = useState([]);
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState(filterState);

  const pageRef = useRef();

  const renderPage = (page, target = null) => {
    if (active) {
      // active.style.backgroundColor = "";
      active.classList.remove("active");
    }
    const counter = Math.min(items.length, page * itemsPerPage);
    let itemsToRender = [];

    for (let i = (page - 1) * itemsPerPage; i < counter; i++) {
      itemsToRender.push(items[i]);
    }
    setCurrentPage(page);
    setItemsToRender(itemsToRender);
    if (target) {
      // e.persist();
      setActive(target);
      // target.style.backgroundColor = "rgb(218, 90, 81)";
      target.classList.add("active");
    }
  };

  const gotoPrevPage = currentPage => {
    if (currentPage === 1) {
      return;
    }
    // current page number is "currentPage - 1" and - 1 to access the index
    renderPage(currentPage - 1, pageRef.current[currentPage - 2]);
  };

  const gotoNextPage = currentPage => {
    if (currentPage === Math.ceil(items.length / itemsPerPage)) {
      return;
    }
    renderPage(currentPage + 1, pageRef.current[currentPage]);
  };

  useEffect(() => {
    pageRef.current = document.querySelectorAll(".page");
    console.log("pages", pageRef.current);

    if (filterState !== filter) {
      renderPage(1, pageRef.current[currentPage - 1]);
    } else {
      renderPage(currentPage, pageRef.current[currentPage - 1]);
    }
  }, [items, currentPage]);

  const len = Math.ceil(items.length / itemsPerPage);
  const pages = Array.from({ length: len }, (_, i) => i).map((item, index) => {
    return (
      <span
        className="page"
        onClick={e => {
          renderPage(index + 1, e.target);
          setFilter(filterState);
        }}
        key={index}
      >
        {index + 1}
      </span>
    );
  });

  console.log("<Pagination/> rendered");
  return (
    <div className="paginated">
      <ul className="paginated_lists">{itemsToRender}</ul>
      <div className="paginated_pages">
        <span
          onClick={() => {
            gotoPrevPage(currentPage);
            setFilter(filterState);
          }}
        >
          {"<<"}
        </span>
        {pages}
        <span
          onClick={() => {
            gotoNextPage(currentPage);
            setFilter(filterState);
          }}
        >
          {">>"}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
