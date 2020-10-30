<template>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 1px 1px 2px #000; color: red"
    :interval="5000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide v-for="img in imgs" :key="img.id"
      :caption="img.caption"
      :img-src="img.url"
      
    >
    <p>{{ img.description }}</p>

    </b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
// import imag to slider and addapt it latter importing information from backend

import firstPhoto from '../../assets/onur-bahcivancilar-wh9I0jokix8-unsplash.jpg'
import secondPhoto from '../../assets/hanson-lu-gGgoDJRD2WM-unsplash.jpg'
import thirdPhoto from '../../assets/drew-coffman-jUOaONoXJQk-unsplash.jpg'

  export default {
    name: "HomePageCarroussel",
    data() {
      return {
        slide: 0,
        sliding: null,
        imgs: {
          0: {
            id:1,
            caption: 'C\'est dificil à trouver ?',
            url: firstPhoto,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.',
          },
          1: {
            id:2,
            caption: 'Vous Cherchée à adopter un Animal?',
            url: secondPhoto,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.'
          },
          2: {
            id:3,
            caption: 'Moi aussi je cherche une ...',
            url: thirdPhoto,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.'
          },
        },
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = true
      }
    }
  }
</script>
