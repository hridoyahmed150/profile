import { Component, OnInit } from '@angular/core';

import SwiperCore, { Swiper, SwiperOptions, Virtual, Pagination, Scrollbar, Mousewheel } from 'swiper';
SwiperCore.use([Mousewheel, Pagination]);

import { MoveDirection, ClickMode, HoverMode, OutMode, Engine } from "tsparticles-engine";
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit {
  visibleScrollbars = window.scrollbars.visible;
  id = "tsparticles";
  nav = document.getElementById('site-menu');
  header = document.getElementById('top');

  config: SwiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,

    freeMode: true,
    speed: 800,

    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true
    }
  };

  particlesOptions = {
    background: {
      color: {
        value: "#000"
      }
    },
    fpsLimit: 120,
    interactivity: {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 2,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 0
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 0,
        enable: true,
        opacity: 0.1,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 },
      }
    },
    detectRetina: true
  };


  constructor(
  ) { }

  ngOnInit(): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }





}