import React, { useState, useEffect } from "react";

import classes from "./NavBar.module.css";

import Netflix from "../../images/Netflix.png";
import Avatar from "../../images/Avatar.png";

function NavBar() {
  const [handleNavBar, setHandleNavBar] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleNavBar(true);
      } else {
        setHandleNavBar(false);
      }
    });

    return window.removeEventListener("scroll", listener);
  }, []);

  const new_classes = `${classes.nav} ${handleNavBar && classes.nav_back_dark}`;

  return (
    <div className={new_classes}>
      <img className={classes.nav__img} src={Netflix} alt="Netflix" />
      <img className={classes.nav__img} src={Avatar} alt="Avatar" />
    </div>
  );
}

export default NavBar;
