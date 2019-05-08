import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/layout/component/loader/Loader';

class About extends React.Component {
  state = {
    skew: 0,
    delta: 0,
    clientWidth: null,
  }

  static propTypes = {
    getAboutData: PropTypes.func.isRequired,
    about: PropTypes.object.isRequired,
    currentLanguage: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { getAboutData } = this.props;
    const { clientWidth } = this.state;
    getAboutData().then(() => {
      const { about: { aboutData } } = this.props;
      if (clientWidth === null) {
        this.updateWindowDimensions();
      }
      window.addEventListener('resize', this.updateWindowDimensions);
      if (aboutData) {
        const wrapper = document.querySelector('.About__wrapper');
        wrapper.addEventListener('mousemove', e => this.calculateSkew(e));
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    const wrapper = document.querySelector('.About__wrapper');
    wrapper.removeEventListener('mousemove', e => this.calculateSkew(e));
  }


  calculateSkew = (e) => {
    const { clientWidth } = this.state;
    if (clientWidth < 992) return;
    const topLayer = document.querySelector('.About__top');
    const { skew, delta } = this.state;
    this.setState({
      skew: 992,
      delta: (e.clientX - window.innerWidth / 2) * 0.5,
    });
    topLayer.style.width = `${e.clientX + skew + delta}px`;
  }

  updateWindowDimensions = () => {
    this.setState({ clientWidth: window.innerWidth });
  };

  customLayerRender = (currentLanguage) => {
    const {
      about: { aboutData },
    } = this.props;
    const { clientWidth } = this.state;
    const content = aboutData[currentLanguage].reduce((acc, item) => {
      acc[item.fieldName] = item.text;
      return acc;
    }, {});
    return (
      <div className="About__skewed">
        <div className="About__layer About__bottom">
          <div className="About__content-wrap">
            {clientWidth > 992
              && (
                <div className="About__content-body About__content-body--top">
                  <h2>{content.title_back}</h2>
                  <p>{content.description_back_top}</p>
                  <p>{content.description_back_bottom}</p>
                </div>
              )
            }

            <div className="About__frame About__frame--white">
              <p>Hi I am Piotr</p>
              <span>
                <strong>Back</strong>
                {' '}
                end Developer
              </span>
            </div>
          </div>
        </div>

        <div className="About__layer About__top">
          <div className="About__content-wrap">
            {
              clientWidth > 992
              && (
                <div className="About__content-body About__content-body--bottom">
                  <h2>{content.title_front}</h2>
                  <p>{content.description_front_top}</p>
                  <p>{content.description_front_bottom}</p>
                </div>
              )
            }
            <div className="About__frame About__frame--black">
              <p>Hi I am Piotr</p>
              <span>
                {
                  clientWidth > 992 ? <strong>Front</strong> : <strong />
                }
                {' '}
                end Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      about: { aboutData, aboutFailure },
      currentLanguage,
    } = this.props;
    return (
      <section className="About Blur">
        {aboutData && !aboutFailure ? (
          <div className="About__wrapper">
            {this.customLayerRender(currentLanguage)}
          </div>
        )
          : <Loader />
        }
      </section>
    );
  }
}
export default About;
