import React from "react";
import { useParams } from "react-router-dom";
import { branchData } from "../../content/branchData";

const BranchContent = () => {

    const {branch} = useParams();
    const data = branchData[branch];

    return (
        <>
            <h1 className="text-center mt-14 mb-10 text-6xl w-[80%] m-auto">{data.page_title}</h1>
            <img src={data.banner_img} alt={data.name} />
            {data.component}
        </>
    )
}


export default BranchContent;