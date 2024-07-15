import { Button, Space } from "antd";
import React, { useEffect } from "react";

const Filter = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  allProducts,
}) => {
  useEffect(() => {
    if (activeCategory === 1) {
      setFiltered(allProducts);
      return;
    }
    const filtered = allProducts.filter((p) =>
      p.category.includes(activeCategory)
    );

    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <div className="container text-center  p-4">
      <Space>
        <Button
          className={activeCategory === 1 ? "active" : ""}
          onClick={() => setActiveCategory(1)}
        >
          All
        </Button>
        <Button
          className={activeCategory === 2 ? "active" : ""}
          onClick={() => setActiveCategory(2)}
        >
          1
        </Button>
        <Button
          className={activeCategory === 3 ? "active" : ""}
          onClick={() => setActiveCategory(3)}
        >
          2
        </Button>
        <Button
          className={activeCategory === 4 ? "active" : ""}
          onClick={() => setActiveCategory(4)}
        >
          3
        </Button>
      </Space>
    </div>
  );
};

export default Filter;
