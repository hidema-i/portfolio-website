import React from "react";

interface MenuItemProps {
  image: string;
  name: string;
  price: number;
}

const MenuItem = ({ image, name, price }: MenuItemProps) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
