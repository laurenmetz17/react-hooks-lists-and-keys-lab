import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksComp  = links.map(link => {
    return <a key={link} href={`#${link}`}>{link}</a>;
  });
  return  (
    <nav>
      {linksComp}
    </nav>
  )
}

export default NavBar;
