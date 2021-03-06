import {Box} from '@chakra-ui/react';
import Slider from 'react-slick';
import '../../slider/slider.css';
import {IntroSliderItem} from './IntroSliderItem';
import {useSelector} from 'react-redux';
import {settings} from './sliderSettings';
import {useEffect, useState} from 'react';

export const IntroSlider = () => {
  const movies = useSelector((state) => state.nowPlaying.movies.results);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    if (movies) {
      setPopular([movies[0], movies[1], movies[2]]);
    }
  }, [movies]);

  return (
    <Box as={'section'}>
      <Slider {...settings}>
        {popular.map((movie, idx) => (
          <IntroSliderItem key={idx} movie={movie} />
        ))}
      </Slider>
    </Box>
  );
};
