import React, { useState, useEffect } from 'react';

import PortfolioData from '../PortfolioData.json';

function PortfolioPage() {

    const [projects, setProjetcs] = useState([]);

    useEffect(() => {
        setProjetcs(PortfolioData);
    }, [])
    return (
        <>
            <div className="filter_projects">
                <div>
                    <p>Filter projects which built with React</p>
                    <button className="buttons" type="submit">React</button>
                </div>
                <div>
                    <p>Filter projects which built with Javascript</p>
                    <button className="buttons" type="submit">Javascript</button>
                </div>
                <div>
                    <p>Filter projects which built with HTML and CSS</p>
                    <button className="buttons" type="submit">Html</button>
                </div>
            </div>
            <section  className="project">
                {projects.map(project => {
                    return (
                        <article key={project.id} className="project_container">
                            <header className="project_heading">
                                <h3 className="project_header">{project.title}</h3>
                            </header>
                            <div className="project_content">
                                <div className="project_description">
                                    <span># {project.type}</span>
                                    <p>{project.description}</p>
                                </div>
                                <div className="project_codes">
                                    <a className="project_code" href={`${project.code}`}>Code</a>
                                    <a className="project_app" href={`${project.app}`}>App</a>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default PortfolioPage