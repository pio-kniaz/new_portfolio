export const particleOption = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: [
        "#fff",
        "#bada55",
        "#c55",
        "#fb1",
        "#d11d05",
        "10aded",
        "#1ce",
        "#c0ff33",
        "#02ac1e",
        "#0ff",
        "#0ff1ce",
        "#b1eb32",
        "#9077e2",
        "#91ea53",
        "#5eabed",
        "#b3f023",
        "#0dd",
        "#c0de25",
        "#B1FF1E",
        "#11F7ED",
        "#D1E",
        "#BAFF1E"
      ]
    },
    shape: {
      type: ["image0", "star", "triangle"],
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image0: {
        src:
          "https://images.vexels.com/media/users/3/147915/isolated/preview/8faf990ee2dd330bd53b0440298f06f2-photo-camera-sketch-by-vexels.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5602948255589136,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 31.565905665290902,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 0,
      color: "#12896d",
      opacity: 0.05524033491425909,
      width: 1.736124811591
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};
