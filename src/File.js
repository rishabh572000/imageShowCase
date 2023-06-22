import { Pannellum } from "pannellum-react";
import { useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";

export default function File() {
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

  const [scene, setScene] = useState(Scenes.image1);

  return (
    <div>
      <Pannellum
        width={"100%"}
        height={"100vh"}
        title={scene.title}
        image={scene.image}
        pitch={0.28}
        yaw={0}
        hfov={130}
        autoLoad
        showControls={false}
        showFullscreenCtrl={false}
        showZoomCtrl={false}
        orientationOnByDefault={true}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={15}
          yaw={100}
          name="image1"
          handleClick={(evt, name) => setScene(Scenes.image1)}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={15}
          yaw={-1}
          name="image2"
          handleClick={(evt, name) => setScene(Scenes.image2)}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={15}
          yaw={60}
          name="image3"
          handleClick={(evt, name) => setScene(Scenes.image3)}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={15}
          yaw={140}
          name="image4"
          handleClick={(evt, name) => setScene(Scenes.image4)}
        />

        <Pannellum.Hotspot
          type="custom"
          pitch={15}
          yaw={250}
          name="image5"
          handleClick={(evt, name) => setScene(Scenes.image5)}
        />
      </Pannellum>
    </div>
  );
}
