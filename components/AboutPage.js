import React, { useState, useEffect } from 'react';
import AboutData from '../AboutData';

function AboutPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(AboutData);
    }, [])
    return (
        <>
            <header>
                <h1>
                    About me
                </h1>
            </header>
            
            <section className="information">
                    {data.map(item => {
                        return (
                            <article key={item.id} className="about_me">
                                <div className="about-detail">
                                    <header>
                                        <h3 className="about_headers">
                                            {item.title}
                                        </h3>
                                    </header>
                                    <div>
                                        <p>
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                                <div className="about_image">
                                    <img src={item.image} alt="Image" />
                                </div>
                            </article>
                        )
                    })}
            </section>
        </>
    )
}

export default AboutPage