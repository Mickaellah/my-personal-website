import React from 'react';
import GhibliMovie from '../img/ghibli-movies.png';
import InputComponent from '../img/input-components.png';
import MyTeamPage from '../img/my-team-page.png';
import TeaTimeTopic from '../img/tea-time-topic.png';

function PortfolioPage() {
    return (
        <>
            <header>
                <h1>
                    My portfolio
                </h1>
            </header>
            <main>
                <header>
                    <h3>
                        Here are some projects that we have done at school. They are made by using HTM, CSS and with React Javascript.
                    </h3>
                </header>
                <nav className="project_screenshot">
                    <ul className="screenshot_naviation">
                        <li className="screenshot_list">
                            <div>
                                <p>
                                    This is an input components where you can find multiple inputs.
                                </p>
                                <img className="screenshot" src={InputComponent} alt="An input component"/>
                            </div>
                        </li>
                        <li className="screenshot_list">
                            <div>
                                <p>
                                    This is a page that we are asked to build by using HTML and CSS positioning.
                                </p>
                                <img className="screenshot" src={MyTeamPage} alt="My team page" />
                            </div>
                        </li>
                        <li className="screenshot_list">
                            <div>
                                <p>
                                    Here is a movie search app, where we can search for movies. It is made by fetching data from API, build with React.
                                </p>
                                <img className="screenshot" src={GhibliMovie} alt="Ghibli movies" />
                            </div>
                        </li>
                        <li className="screenshot_list">
                            <div>
                                <p>
                                    This is a tea time topic app, it is from an API and we asked to fetch the data by using React.
                                </p>
                                <img className="screenshot screenshot__tea-time" src={TeaTimeTopic} alt="Tea time topic" />
                            </div>
                        </li>
                    </ul>
                </nav>
            </main>
        </>
    )
}

export default PortfolioPage