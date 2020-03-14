import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc"; //wrapping element

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}> 
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i} 
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)} //inline binding
        />
      ))}
    </div>
  );
});
export default DraggableColorList;