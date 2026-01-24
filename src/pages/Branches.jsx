import React from "react";
import MainLayOut from "../layout/MainLayOut";
import { DesktopNav } from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import SingleSlider from "../components/SingleSlider";
import BranchContent from "../components/branches/BranchContent";


const Branches = () => {
    return (
        <>
            <MainLayOut>
                <DesktopNav />
                <HeroSection />
                <BranchContent />
                <SingleSlider slug_name="get_slug_data/men" title="MEN’S HAIR PRODUCTS" />
                <SingleSlider slug_name="get_slug_data/women" title="WOMEN’S HAIR PRODUCTS" />
            </MainLayOut>
        </>
    )
}

export default Branches;