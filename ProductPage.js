import React from 'react';

import Hero from './hero';
import LeftSection from './left_section';
import RightSection from './right_section';
import Universe from './Universe';

import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
            <Footer />
        </div>
    );
}

export default ProductPage;