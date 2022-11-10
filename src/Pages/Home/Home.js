import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ControlledCarousel from './ControlledCarousel';
import Firstsection from './Firstsection';
import Seconsection from './Seconsection';
import Threeservicecard from './Threeservicecard';

const Home = () => {

    useTitle('Home')
    return (
        <div className='container'>
            <ControlledCarousel></ControlledCarousel>
            <Firstsection></Firstsection>
            <Threeservicecard></Threeservicecard>
            <Seconsection></Seconsection>
        </div>
    );
};

export default Home;