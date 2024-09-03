import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampersById } from "../../redux/campers/operations.js";
import { useParams } from "react-router-dom";
import { selectCamper } from "../../redux/campers/selectors.js";
import DetailsCamper from "../../components/DetailsCamper/DetailsCamper.jsx";

export default function CamperPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampersById(id));
  }, [dispatch, id]);

    
    const camper = useSelector(selectCamper);
    if (!camper ) {
        dispatch(fetchCampersById(id));
    }
    
    
  return (
    <>
      <Helmet>
        <title>Camper Page</title>
      </Helmet>

      <AppBar />

          <DetailsCamper camper={camper} />
    </>
  );
}
