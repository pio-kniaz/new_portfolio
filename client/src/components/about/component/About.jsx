import React from "react";
import { Link } from "react-router-dom";
class About extends React.Component {
  componentDidMount() {
    const { getAboutData } = this.props;
    getAboutData();
  }
  renderPlContent = () => {
    const {
      about: { aboutData }
    } = this.props;
    const content = aboutData["pl"].reduce((acc, item) => {
      acc[item.field] = item.text;
      return acc;
    }, {});
    console.log(content,'content');
    return (
      <div className="jumbotron About__content content-wrapper">
        <h1 className="display-3 About__title">
          {`Hey I'm`} <span className="About__syntax">{`<`}</span>Piotr
          <span className="About__syntax">{`>`}</span>
        </h1>
        <p className="lead About__descritpion About__descritpion--top ">
          {content.description_top_pl}
        </p>
        <hr className="my-4" />
        <p className="About__descritpion About__descritpion--bottom">
          {content.description_bottom_pl}
        </p>
        <p className="lead">
          <Link
            to="/contact"
            className="mt-3 btn btn-primary btn-lg btn__green"
          >
            Contact!
          </Link>
        </p>
      </div>
    );
  };
  renderEngContent = () => {
    const {
      about: { aboutData }
    } = this.props;
    const content = aboutData["eng"].reduce((acc, item) => {
      acc[item.field] = item.text;
      return acc;
    }, {});
    return (
      <div className="jumbotron About__content content-wrapper">
        <h1 className="display-3 About__title">
          {`Hey I'm`} <span className="About__syntax">{`<`}</span>Piotr
          <span className="About__syntax">{`>`}</span>
        </h1>
        <p className="lead About__descritpion About__descritpion--top ">
          {content.description_top_eng}
        </p>
        <hr className="my-4" />
        <p className="About__descritpion About__descritpion--bottom">
          {content.description_bottom_eng}
        </p>
        <p className="lead">
          <Link
            to="/contact"
            className="mt-3 btn btn-primary btn-lg btn__green"
          >
            Contact!
          </Link>
        </p>
      </div>
    );
  };
  render() {
    const {
      about: { aboutData, aboutFailure },
      currentLanguage
    } = this.props;
    console.log(currentLanguage, "currentLanguage");
    return (
      <section className="About">
        {aboutData && !aboutFailure ? (
          <div>
            {currentLanguage === "PL" ? (
              <>{this.renderPlContent()}</>
            ) : (
              <>{this.renderEngContent()}</>
            )}
          </div>
        )
        : <p>Loading....</p>
      }
      </section>
    );
  }
}
export default About;
