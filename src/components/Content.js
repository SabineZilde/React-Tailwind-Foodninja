import React from 'react'
import Image1 from '../images/ninja1.jpg';
import Image2 from '../images/ninja2.jpg';

function Content() {
    return (
        <>
            <div className="menu-card">
                <img src={Image1} alt="Ninja 1" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Sushi</h2>
                    <p className="mb-2">Crispy, delicious, and nutritious</p>
                    <span>16 EUR</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={Image2} alt="Ninja 2" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Sushi</h2>
                    <p className="mb-2">Crispy, delicious, and nutritious</p>
                    <span>12 EUR</span>
                </div>
            </div>
        </>
    )
}

export default Content
