export const particleOption = {
  particles: {
    number: {
      value: 3,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    shape: {
      type: 'images',
      images: [
        {
          src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png',
          width: 100,
          height: 100,
        },
        {
          src: 'https://cdn.iconscout.com/icon/free/png-256/nodejs-6-569582.png',
          width: 100,
          height: 100,
        },
        {
          src: 'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
          width: 100,
          height: 100,
        },
        {
          src: 'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
          width: 100,
          height: 100,
        },
        // {
        //   src: 'homer.svg',
        //   width: 100,
        //   height: 100,
        // },
      ],
    },
    opacity: {
      value: 0.5602948255589136,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 31.565905665290902,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 0,
      color: '#12896d',
      opacity: 0.05524033491425909,
      width: 1.736124811591,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'remove',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 2000,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 5,
      },
    },
  },
};
