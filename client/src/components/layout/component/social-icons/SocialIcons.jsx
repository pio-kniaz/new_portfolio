import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const SOCIAL = [
  {
    id: 0,
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/piotr-knia%C5%BA-8b4484151/',
  },
  {
    id: 1,
    icon: faInstagram,
    url: 'https://www.instagram.com/freedomcode_/',
  },
  {
    id: 2,
    icon: faGithub,
    url: 'https://github.com/pio-kniaz',
  },
];

const SocialIcons = () => (
  <div className="SocialIcons">
    {SOCIAL.map(({ id, icon, url }) => (
      <a key={id} href={url} target="_blank" rel="noopener noreferrer" className="SocialIcons__icon">
        <FontAwesomeIcon
          icon={icon}
          size="3x"
        />
      </a>
    ))}
  </div>
);

export default SocialIcons;
