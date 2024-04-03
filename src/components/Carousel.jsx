import PropTypes from 'prop-types';
import { useState } from "react";

export default function Carousel({idLog, titleId,picturesId}) {
	const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === picturesId.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? picturesId.length - 1 : slide - 1);
  };

	return (
		<div className="carousel">
			<span className="prev" onClick={prevSlide}>{"<"}</span>
			<span className="next" onClick={nextSlide}>{">"}</span>
			{picturesId.map((picture, index) => (
				<img className={slide === index ? "slide" : "slide slide-hidden"} key={idLog-index} src={picture} alt={titleId} />
				))}
		</div>
	);
} 

Carousel.propTypes = {
	picturesId: PropTypes.array,
	idLog: PropTypes.string,
	titleId: PropTypes.string
}