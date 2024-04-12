export const handleDragStart = (e, index) => {
  e.dataTransfer.setData("index", index);
};
