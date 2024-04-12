import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import PropTypes from 'prop-types';
import Error404 from "./Error404";
import { useState, useEffect } from 'react';

export default function HousingCard ({listHousings}) {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [idHousing, setIdHousing] = useState(null);

  useEffect(() => {
    const foundHousing = listHousings.find(housing => housing.id === id);
    setIdHousing(foundHousing);
    setIsLoading(false);
  }, [listHousings, id]);

  return (
    <>
      {isLoading ? <p>Loading...</p> : (
        !idHousing ? <Error404 /> : (
          <>
            <Carousel key={idHousing.title} idLog={idHousing.id} titleId={idHousing.title} picturesId={idHousing.pictures}/>

            <Details key={idHousing.location} titleId={idHousing.title} locationId={idHousing.location} descriptionId={idHousing.description} hostId={idHousing.host} ratingId={idHousing.rating} equipmentsId={idHousing.equipments} tagsId={idHousing.tags}/>
          </>
        )
      )}
    </>
  );
}

HousingCard.propTypes = {
	listHousings: PropTypes.array
}