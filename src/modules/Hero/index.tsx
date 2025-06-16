import "./hero.scss"


const Hero = () => {
    return (
        <section className="hero-sectio">
            <div className="containers">
                <div className="hero">
                    <div className="hero_content-wrapper">
                        <h2 className="hero__title"><b>Work at the speed
                            of thought</b></h2>
                        <p className="hero__text">Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                        <div className="hero__btn-wrapper btns">
                            <button className="btns__btn-start" type="submit">
                                <a href="#">
                                    <ul>
                                        <li>Get started</li>
                                    </ul>
                                </a>
                            </button>
                            <button className="btns__btn-watch" type="submit" >
                                <div className="btns__box">
                                    <img src="src/assets/images/Triangle Copy 6.svg" alt="" />
                                    <a href="#">
                                        <ul>
                                            <li>
                                                Watch the Video
                                            </li>
                                        </ul>
                                    </a>
                                </div>
                            </button>
                        </div>
                    </div>
                    <img className="hero__img" src="src/assets/images/amico.svg" alt="" />
                </div>
                <div className="feature">
                    <h2 className="feature__title" >Product  was Built Specifically
                        for You</h2>
                    <img src="src/assets/images/Card.svg" alt="photo" />
                    <button className="feature__btn">SIGN UP NOW</button>
                </div>
                <div className="management">
                    <div className="management__text">
                        <p className="management__p">Effortless Validation for</p>
                        <h2 className="management__h2"><b>Management</b></h2>
                        <h5 className="management__title">Accessory makers</h5>
                        <p className="management__desc" >While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h5 className="management__title">Alterationists</h5>
                        <p className="management__desc" >If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    </div>
                    <img className="management__docs-img" src="src/assets/images/docs.png" alt="docs photo" />
                </div>
            </div>
        </section>
    )
}

export default Hero