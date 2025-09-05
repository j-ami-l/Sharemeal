import React from 'react';
import Banner from '../../Components/Banner/Banner';
import FeatureFood from '../../Components/FeatureFood/FeatureFood';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import ImpactStats from '../../Components/ImpactStats/ImpactStats';

const Home = () => {
    return (
        <div className='relative px-2 lg:px-10'>
            <Banner></Banner>
            <FeatureFood></FeatureFood>
            <HowItWorks></HowItWorks>
            <ImpactStats></ImpactStats>
        </div>
    );
};

export default Home;