import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import PropTypes from 'prop-types';
import Error404 from "./Error404";

export default function HousingCard ({listHousings, isLoading}) {
  const {id} = useParams();
	const idHousing = listHousings.find(housing => housing.id === id);
	
  return (
		<>
      {idHousing ? (
          <>
            <Carousel key={idHousing.title} idHousing={idHousing}/>

						<Details key={idHousing.location} idHousing={idHousing}/>
          </>
        ) : (
					!isLoading && <Error404 />
				)
			}
    </>
  );
}

HousingCard.propTypes = {
	listHousings: PropTypes.array,
	isLoading: PropTypes.bool
}