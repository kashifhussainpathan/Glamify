import { useState } from "react";
import { getMenProducts } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import {
  Filters,
  Pagination,
  ProductCard,
  ProductLoader,
} from "../../components";

const Products = () => {
  const dispatch = useDispatch();
  const { menProducts, status, totalProducts } = useSelector(
    ({ products }) => products
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(parseInt(totalProducts) / 20) || 20;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(getMenProducts(page));
  };

  return (
    <div className="flex">
      <div>
        <Filters />
      </div>

      <div className="w-[80%] m-auto">
        <div className="flex flex-wrap gap-2 mt-4">
          {status === "loading"
            ? Array.from({ length: totalPages }).map((_, i) => (
                <ProductLoader />
              ))
            : menProducts?.map((product) => (
                <ProductCard {...product} key={product.sku} />
              ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
