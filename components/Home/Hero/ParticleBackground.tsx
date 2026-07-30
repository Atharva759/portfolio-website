"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, {
  initParticlesEngine,
} from "@tsparticles/react";

import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";


export default function ParticleBackground() {
  const [initialized, setInitialized] = useState(false);


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInitialized(true);
    });
  }, []);



  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },


      fpsLimit: 60,


      detectRetina: true,


      background: {
        color: "transparent",
      },


      interactivity: {
        events: {

          onHover: {
            enable: true,
            mode: "grab",
          },

          onClick: {
            enable: true,
            mode: "push",
          },

        },


        modes: {

          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },


          push: {
            quantity: 3,
          },

        },
      },



      particles: {

        number: {
          value: 45,

          density: {
            enable: true,
            area: 900,
          },
        },


        color: {
          value: [
            "#22d3ee",
            "#3b82f6",
            "#818cf8",
          ],
        },


        links: {
          enable: true,

          distance: 160,

          color: "#38bdf8",

          opacity: 0.18,

          width: 1,
        },


        move: {

          enable: true,

          direction: MoveDirection.none,

          speed: 0.8,

          random: true,

          straight: false,


          outModes: {
            default: OutMode.out,
          },

        },



        opacity: {

          value: {
            min: 0.15,
            max: 0.45,
          },

          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },

        },



        size: {

          value: {
            min: 1,
            max: 3,
          },


          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
          },

        },


        shape: {
          type: "circle",
        },


        shadow: {
          enable: true,

          color: "#22d3ee",

          blur: 8,
        },

      },


    }),
    []
  );



  if (!initialized) {
    return null;
  }



  return (
    <Particles
      id="portfolio-particles"
      options={options}
    />
  );
}