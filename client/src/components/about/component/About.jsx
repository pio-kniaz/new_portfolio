import React from "react";
import { Link } from "react-router-dom";
class About extends React.Component {
  componentDidMount() {
    const { getAboutData } = this.props;
    getAboutData();
  }
  render() {
    const {
      about: { aboutData, aboutFailure, aboutRequest }
    } = this.props;
    console.log(aboutData, "aboutData");
    console.log(this.props);
    return (
      <section className="About">
        {aboutData && !aboutFailure && (
          <div className="jumbotron About__content">
            <h1 className="display-3 About__title">
              {`Hey I'm`} <span className="About__syntax">{`<`}</span>Piotr
              <span className="About__syntax">{`>`}</span>
            </h1>
            <p className="lead About__descritpion About__descritpion--top ">{aboutData.topDescription}</p>
            <hr className="my-4" />
            <p className="About__descritpion About__descritpion--bottom">{aboutData.bottomDescription}</p>
            <p className="lead">
              <Link
                to="/contact"
                className="mt-3 btn btn-primary btn-lg btn__green"
              >
                Contact!
              </Link>
            </p>
          </div>
        )}
      </section>
    );
  }
}
export default About;
