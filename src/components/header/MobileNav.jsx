import React, { useState } from "react";
import Navlinks from "./Navlinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

export default function MobileNav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <div className="mobile-nav">
      <GiHamburgerMenu onClick={handleToggle} className="hamburger" />
      {!!openDrawer && (
        <div className={!!openDrawer && "open-drawer"}>
          <AiFillCloseCircle onClick={handleToggle} className="close-drawer" />
          <Navlinks />
        </div>
      )}
    </div>
  );
}
