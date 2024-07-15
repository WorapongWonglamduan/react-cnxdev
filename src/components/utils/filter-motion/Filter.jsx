import { Button, Space } from "antd";
import React, { useEffect } from "react";

const Filter = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  allProducts,
}) => {
  useEffect(() => {
    if (activeCategory === 0) {
      setFiltered(allProducts);
      return;
    }
    const filtered = allProducts.filter((p) =>
      p.category.includes(activeCategory)
    );

    setFiltered(filtered);
  }, [activeCategory]);

  const allCategory = allProducts
    .flatMap((item) => item.category)
    .sort((a, b) => a - b);
  const uniqueCategory = [...new Set(allCategory)];

  return (
    <div className="container text-center  p-4">
      <Space>
        <Button
          className={activeCategory === 0 ? "active" : ""}
          onClick={() => setActiveCategory(0)}
        >
          All
        </Button>
        {uniqueCategory.map((item, index) => {
          return (
            <Button
              key={index}
              className={activeCategory === item ? "active" : ""}
              onClick={() => setActiveCategory(item)}
            >
              {"Group" + item}
            </Button>
          );
        })}
      </Space>
    </div>
  );
};

export default Filter;
