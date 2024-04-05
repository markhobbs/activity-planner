import React from "react";
import Burger from "./Burger";
import MenuItems from "./MenuItems";


const Menu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef<HTMLDivElement>(null);

  return (
      <div  
        data-testid="menu-items"
        ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuItems open={open} setOpen={setOpen} />
      </div>
  );
};

export default Menu;
