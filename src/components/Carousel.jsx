import PropTypes from 'prop-types';
import { useState } from "react";

export default function Carousel({idLog, titleId, picturesId}) {
	const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === picturesId.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? picturesId.length - 1 : slide - 1);
  };

	return (
		<div className="carousel">
			<span className="prev" onClick={prevSlide}><img src="/src/assets/arrow-right.png" /></span>
			<span className="next" onClick={nextSlide}><img src="/src/assets/arrow-right.png" /></span>
			<span className="counter">{slide + 1}/{picturesId.length}</span>
			{picturesId.map((picture, index) => (
				<img className={slide === index ? undefined : "slide-hidden"} key={`${idLog}-${index}`} src={picture} alt={titleId} />
				))}
				
		</div>
	);
} 

Carousel.propTypes = {
	picturesId: PropTypes.array,
	idLog: PropTypes.string,
	titleId: PropTypes.string
}