import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faHtml5,
  faCss3,
  faJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { Col } from "reactstrap";

const Project = props => {
  const { ...elem } = props;
  return (
    <Col key={elem._id} lg="11" md="11" sm="36" className="Projects__box">
      <h3>{elem.name}</h3>
      <div className="Projects__tech">
        {elem.technologies.map((obj , i)=> {
          return (
            <div key={i}>
              {obj === "js" && <FontAwesomeIcon size="2x" icon={faJs} />}
              {obj === "react" && <FontAwesomeIcon size="2x" icon={faReact} />}
              {obj === "php" && <FontAwesomeIcon size="2x" icon={faPhp} />}
              {obj === "html" && <FontAwesomeIcon size="2x" icon={faHtml5} />}
              {obj === "css" && <FontAwesomeIcon size="2x" icon={faCss3} />}
            </div>
          );
        })
      }
      </div>
    </Col>
  );
};
export default Project;
