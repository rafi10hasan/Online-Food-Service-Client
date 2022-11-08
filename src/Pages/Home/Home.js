import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ControlledCarousel from './ControlledCarousel';
import Firstsection from './Firstsection';
import Threeservicecard from './Threeservicecard';

const Home = () => {

    useTitle('Home')
    return (
        <div className='container'>
            <ControlledCarousel></ControlledCarousel>
            <Firstsection></Firstsection>
            <Threeservicecard></Threeservicecard>
        </div>
    );
};

export default Home;