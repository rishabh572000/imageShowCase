import { useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

const Scenes = {
  image1: {
    title: "View-1",
    image: image1,
    pitch: -11,
    yaw: -3,
    hotSpot: {
      nexScene: {
        type: "custom",
        pitch: -8,
        yaw: 12,
        cssClass: "moveScene",
        scene: "image2"
      }
    }
  },
  image2: {
    title: "View-2",
    image: image2,
    pitch: 10,
    yaw: 180,
    hotSpot: {
      scene: "image1"
    }
  },

  image3: {
    title: "View-3",
    image: image3,
    pitch: 10,
    yaw: 180,
    hotSpot: {
      scene: "image3"
    }
  },

  image4: {
    title: "View-4",
    image: image4,
    pitch: 10,
    yaw: 180,
    hotSpot: {
      scene: "image4"
    }
  },

  image5: {
    title: "View-5",
    image: image5,
    pitch: 10,
    yaw: 180,
    hotSpot: {
      scene: "image5"
    }
  }
};

export default Scenes;
