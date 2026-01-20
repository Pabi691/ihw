import React, { useEffect, useState } from "react";
import NavTop from '../components/layoutParts/NavTop';
import Footer from '../components/layoutParts/Footer';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useGlobal } from "../global/GlobalContext";

const MainLayOut = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const { accessoriesCat, planters, container, loadingCategories, token } = useGlobal();


  return (
    <>
      <NavTop />
      <div>{children}</div>

      {/* Mobile Footer */}
      <div className="block md:hidden mb-12">
        <div
          className="bg-[#203466] p-4 text-white font-medium border-b flex justify-between text-base"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span>More About Indian Hair World</span>
          <span className="text-2xl">
            {showMenu ? <BiChevronUp /> : <BiChevronDown />}
          </span>
        </div>
        {showMenu && 
        <Footer
            accessoriesCat={accessoriesCat}
            planters={planters}
            container={container}
            loading={loadingCategories}
          />
        }
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Footer
            accessoriesCat={accessoriesCat}
            planters={planters}
            container={container}
            loading={loadingCategories}
          />
      </div>
    </>
  );
};

export default MainLayOut;
