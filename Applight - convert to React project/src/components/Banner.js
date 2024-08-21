import appstore from '../images/appstore.png';
import playstore from '../images/playstore.png';
import applight from '../images/applight-wave.svg';
import iphone from '../images/iphone-screen.png';

const Banner = () => {
    return (
        <section className="banner" data-scroll-index='0'>
            <div className="banner-overlay">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                    <div className="banner-text">
                        <h2 className="white">Best App Website Template</h2>
                        <h6 className="white">This awesome template designed by <a href="http://w3Template.com" target="_blank" rel="noreferrer" className="weblink">W3 Template</a>.</h6>
                        <p className="banner-text white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit neque massa, sit amet tristique ante porta ut. In sodales et justo vel vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <ul>
                        <li><a href="#"><img src={appstore} className="wow fadeInUp" data-wow-delay="0.4s" alt='appstore'/></a></li>
                        <li><a href="#"><img src={playstore} className="wow fadeInUp" data-wow-delay="0.7s" alt='playstore'/></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-12"> <img src={iphone} className="img-fluid wow fadeInUp" alt='example iphone look'/> </div>
                </div>
                </div>
            </div>
            <span className="svg-wave"> <img className="svg-hero" src={applight} alt='wave'/> </span>
        </section>
    )
}

export default Banner;