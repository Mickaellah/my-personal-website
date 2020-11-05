import React from 'react';
import Clopedia from '../img/clopedia.JPG';

export default function HomePage() {
    return (
        <>
            {/* <input type="checkbox" id="checkbox-menu" /> */}
            <header>
                <div>
                    <h1>Clopedia Nomenjanahary</h1>
                    <p className="mission">Frontend developer learner.</p>
                </div>

                {/* <div>
                    <label className="label_menu" htmlFor="checkbox-menu">Menu</label>
                </div> */}
            </header>
            {/* <nav className="navigation_container">
                <ul className="navigation">
                    <li><a className="home_page" href="/">Home</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./portfolio.html">Portfolio</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav> */}
            <main>
                <header>
                    <h2>
                        About
                    </h2>
                </header>
                <div className="content">
                    <p>
                        My name is Clopedia, I started to learn how to code for a year. Before, I didn't have any idea about code, I used a piece of software without understanding the functionality and the component that used to build it.
                    </p>
                    <img src={Clopedia} alt="My image" />
                </div>
            </main>
        </>
    )
}