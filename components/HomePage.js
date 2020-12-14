import React from 'react';
import Clopedia from '../img/clopedia.JPG';

export default function HomePage() {
    return (
        <>
            <header>
                <div>
                    <h1>Clopedia Nomenjanahary</h1>
                    <p className="mission">Frontend developer.</p>
                </div>

            </header>
            
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
                    <img className="my_image" src={Clopedia} alt="My image" />
                </div>
            </main>
        </>
    )
}