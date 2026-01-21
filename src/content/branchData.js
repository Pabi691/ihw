import Durgapur from "../components/branches/Durgapur";
import LakeGarden from "../components/branches/LakeGarden";
import SaltLake from "../components/branches/SaltLake";
import Siliguri from "../components/branches/Siliguri";

export const branchData = {
  kolkata: {
    name: "Lake Gardens",
    phone: "+918910097668",
    image: "/images/lake-garden-office.png",
    page_title:"Kolkata– Best Hair Patch in Lake Gardens Kolkata",
    banner_img:"/images/lake-garden.jpg",
    component: <LakeGarden/>,
  },
  "salt-lake" : {
    name: "Salt Lake",
    phone: "+918961194044",
    image: "/images/salt-lake-office.png",
    page_title:"Best Hair Patch in Salt Lake, Kolkata",
    banner_img:"/images/salt-lake.jpg",
    component: <SaltLake/>,
  },
  durgapur: {
    name: "Durgapur",
    phone: "+919875517402",
    image: "/images/durgapur-office.png",
    page_title:"Durgapur – Best Hair Patch in Durgapur",
    banner_img:"/images/durgapur.jpg",
    component: <Durgapur/>,
  },
  siliguri: {
    name: "Siliguri",
    phone: "+917439436698",
    image: "/images/siliguri-office.png",
    page_title:"Siliguri– Best Hair Patch in Siliguri",
    banner_img:"/images/siliguri.png",
    component: <Siliguri/>,
  },
};