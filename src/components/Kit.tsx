import React from "react";

interface IKitProps {
  items: { aparatus: string }[];
}

const Kit: React.FC<IKitProps> = ({ items }) => {
  const kitList = items.map((item) => (
    <span key={item.aparatus}>{item.aparatus}</span>
  ));

  return (
    <p>
      <sup>*</sup>
      <small>Optional</small>
      {kitList}
      <small>visit the store</small>
    </p>
  );
};

export default Kit;
