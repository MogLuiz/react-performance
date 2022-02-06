// Packages
import React from "react";

export interface IAddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

const AddProductToWishlist: React.FC<IAddProductToWishlistProps> = ({
  onAddToWishlist,
  onRequestClose,
}) => {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
};

export default AddProductToWishlist;
