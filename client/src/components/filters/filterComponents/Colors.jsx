import { useDispatch } from "react-redux";

import { setFilters } from "@redux";
import { IoCheckmark } from "react-icons/io5";
import { useFiltersState } from "@hooks";

const Colors = () => {
  const dispatch = useDispatch();

  const { filters, colors } = useFiltersState();

  const handleColorClick = (color) => () => {
    dispatch(setFilters({ color }));
  };

  const calculateBrightness = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return brightness;
  };

  const checkMarkColor = (color) => {
    if (calculateBrightness(color) > 0.5 || color === "#FFF") return "black";
    else return "white";
  };

  return (
    <div className="flex flex-wrap gap-5">
      {colors?.map((colorGroup) => {
        const color = colorGroup.split(";")[1];
        return (
          <div
            key={color}
            className=" w-8 h-8 rounded-full shadow-lg border cursor-pointer flex justify-center items-center text-lg"
            style={{ backgroundColor: color }}
            onClick={handleColorClick(colorGroup)}
          >
            {filters?.colors?.includes(colorGroup) && (
              <IoCheckmark
                style={{
                  color: checkMarkColor(color),
                }}
                className="text-2xl"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Colors;
