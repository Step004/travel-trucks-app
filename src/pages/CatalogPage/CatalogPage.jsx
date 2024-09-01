import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";
import CatalogOptions from "../../components/CatalogOptions/CatalogOptions.jsx";
import CamperList from "../../components/CamperList/CamperList.jsx";
import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";


export default function CatalogPage() {
  const dispatch = useDispatch(); 
  useEffect(() => {    
     dispatch(fetchCampers());
  }, [dispatch]);
  
  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
          <AppBar />
          <div className={css.camperSection}>           
      <CatalogOptions />
      <CamperList />
          </div>
    </>
  );
}
