import { useDispatch } from "react-redux";

import { setFilters } from "@redux";
import { useFiltersState } from "@hooks";

const Price = () => {
  const dispatch = useDispatch();
  const { filters } = useFiltersState();

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setFilters({
        price: { ...filters.priceRange, [name]: value },
      })
    );
  };

  return (
    <div>
      <form className="flex items-center gap-1">
        <span
          className="w-full relative before:content-[attr(data-currency)] before:text-neutral-darkest before:flex before:items-center before:ml-2 before:absolute before:w-full before:h-full before:inset-0 before:top-px before:pointer-events-none"
          data-currency="€"
        >
          <input
            className="py-2 bg-slate-100 !pl-5 hover:border-none focus:border-none outline-none text-sm"
            type="number"
            name="min"
            min="1"
            max="250"
            step="1"
            placeholder="1-250"
            value={filters.priceRange.min}
            onChange={handlePriceChange}
          />
        </span>
        <span> to </span>
        <span
          className="w-full relative before:content-[attr(data-currency)] before:text-neutral-darkest before:flex before:items-center before:ml-2 before:absolute before:w-full before:h-full before:inset-0 before:top-px before:pointer-events-none"
          data-currency="€"
        >
          <input
            className="py-2 bg-slate-100 !pl-5 hover:border-none focus:border-none outline-none text-sm"
            type="number"
            name="max"
            min="250"
            max="500"
            step="1"
            placeholder="250-500"
            value={filters.priceRange.max}
            onChange={handlePriceChange}
          />
        </span>
      </form>
    </div>
  );
};

export default Price;
