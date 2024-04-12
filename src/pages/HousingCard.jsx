import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import PropTypes from 'prop-types';
import Error404 from "./Error404";
import { useState, useEffect } from 'react';

export default function HousingCard ({listHousings, isLoading}) {
  const {id} = useParams();
  
  const [idHousing, setIdHousing] = useState(null);
  useEffect(() => {
    const foundHousing = listHousings.find(housing => housing.id === id);
    setIdHousing(foundHousing);
  }, [listHousings, id]);
	console.log(isLoading);

  return (
    <>
      {isLoading ? <p>Loading...</p> : (
        !idHousing ? <Error404 /> : (
          <>
            <Carousel key={idHousing.title} idHousing={idHousing}/>

						<Details key={idHousing.location} idHousing={idHousing}/>
          </>
        )
      )}
    </>
  );
}

HousingCard.propTypes = {
	listHousings: PropTypes.array,
	isLoading: PropTypes.bool,
	setIsLoading: PropTypes.func
}