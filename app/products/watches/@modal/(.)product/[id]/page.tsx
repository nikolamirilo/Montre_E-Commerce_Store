import React from "react";

const Modal = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  return <div>Modal for product with id: {id}</div>;
};

export default Modal;
