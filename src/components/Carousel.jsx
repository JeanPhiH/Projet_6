import PropTypes from 'prop-types';
import { useState } from "react";

export default function Carousel({idHousing}) {
	const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === idHousing.pictures.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? idHousing.pictures.length - 1 : slide - 1);
  };

	return (
		<div className="carousel">
			{idHousing.pictures.length > 1 ?
			<div className="nav_carousel">
				<span className="prev" onClick={prevSlide}><img src="/assets/arrow-right.png" /></span>
				<span className="next" onClick={nextSlide}><img src="/assets/arrow-right.png" /></span>
				<span className="counter">{slide + 1}/{idHousing.pictures.length}</span>
			</div>
			: undefined
			}
			<div className="slide"
				style={{ transform: `translateX(-${slide * 100}%)` }}>
				{idHousing.pictures.map((picture, index) => (
					<div key={`${idHousing.id}-${index}`} className="img-container">
						<img src={picture} alt={idHousing.title} />
					</div>
				))}
			</div>
		</div>
	);
} 

Carousel.propTypes = {
	idHousing: PropTypes.object
}