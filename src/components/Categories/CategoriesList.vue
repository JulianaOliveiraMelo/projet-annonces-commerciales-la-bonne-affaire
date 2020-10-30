<template>
  <div class="container d-flex flex-row flex-wrap justify-content-center">
    <div v-for="categorie in categories" :key="categorie.id" >
  <router-link :to="categorie.link">
  <b-card class="m-2" 
    overlay
    :img-src="categorie.img"
    :img-alt="categorie.alt"
    text-variant="white"
    :title="categorie.title"
    >
  </b-card>
  </router-link>
      </div>
</div>
</template>

<script>
import decorationImage from '../../assets/manja-vitolic-7tOV35hnkao-unsplash.jpg'
import informatiqueImage from '../../assets/andreas-palmer-UJSjxFNLFWY-unsplash.jpg'
import booksImage from '../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import carsImage from '../../assets/nico-bistolfi-9nvOQHjrOS0-unsplash.jpg'
import clothesImage from '../../assets/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg'
import furnitureImage from '../../assets/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg'
import homeApplianceImage from '../../assets/pexels-photomix-company-213162.jpg'
import animalsImage from '../../assets/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg'



export default {
data(){
    return {
        categories: {
            0: {
                id: 1,
                title: 'Décoration',
                img: decorationImage,
                alt: `image décrivant la catégorie décoration`,
                link: '/decoration',
                },
            1: {
                id: 2,
                title: 'Informatique',
                img: informatiqueImage,
                alt: `image décrivant la catégorie informatique`,
                link: '/informatique',
                },
            2: {
                id: 3,
                title: 'Livres',
                img: booksImage,
                alt: `image décrivant la catégorie livres`,
                link: '/livres',
                },
            3: {
                id: 4,
                title: 'Voitures',
                img: carsImage,
                alt: `image décrivant la catégorie voitures`,
                link: '/voitures',
                },
            4: {
                id: 5,
                title: 'Vêtements',
                img: clothesImage,
                alt: `image décrivant la catégorie vêtements`,
                link: '/vetements',
                },
            5: {
                id: 6,
                title: 'Ameublement',
                img: furnitureImage,
                alt: `image décrivant la catégorie ameublements`,
                link: '/ameublement',
                },
            6: {
                id: 7,
                title: 'Électroménagers',
                img: homeApplianceImage,
                alt: `image décrivant la catégorie électroménager`,
                link: '/electromenager',
                },
            7: {
                id: 8,
                title: 'Animaux',
                img: animalsImage,
                alt: `image décrivant la catégorie animaux`,
                link: '/animaux',
                },
        }
    }
}
}
</script>

<style lang="scss" scoped>
$imageHeigth: 130px;
.card {
    max-width: 200px;
    height: $imageHeigth;
}
.card-img {
    height: $imageHeigth;
}

img {
    object-fit: cover;
}

.card-img-overlay {
    background-color: rgba(0, 0, 0, 0.315);
}

.card-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>