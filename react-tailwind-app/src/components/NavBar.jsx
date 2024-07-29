import React from "react";
import { AiOutlineAlert, AiOutlineMenu} from "react-icons/ai";


function NavBar() {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
      <h1 className="text-3xl text-white">Vohoo</h1>
      <ul className="flex">
        <li className="p-4 text-yellow-100">Home</li>
        <li className="p-4 text-yellow-100">Home</li>
        <li className="p-4 text-yellow-100">Home</li>
        <li className="p-4 text-yellow-100">About</li>
        <li className="p-4 text-yellow-100">Contact</li>
          </ul>
          <div>
              <AiOutlineMenu />
          </div>
    </div>
  );
}

export default NavBar;
