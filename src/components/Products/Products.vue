<template>
<div >
  <b-card-group class="container">
      <div class="d-flex flex-row flex-wrap justify-content-center">
          <router-link :to="'/product/' + product.id"  v-for="product in products" :key="product.id" style="text-decoration: none; color: #2c3e50">

    <b-card :title="product.title" :img-src="product.imageUrl" :img-alt="product.imageDescription" img-top class="text-left">
      <b-card-text>
            <p class="priceColor">Prix: {{ product.price + ' €'}}</p>
          <div class="contentBox d-flex flex-column justify-content-end">
            <p class="categoryColor">{{ product.category }}</p>
            <p>{{ product.placement.village }} {{ product.placement.zipCode }}</p>
          </div>
      </b-card-text>
      <template #footer>
        <small class="text-muted">Date d'ajout: {{ product.dateOfCreation }}</small>
      </template>
    </b-card>
          </router-link>
      </div>
  </b-card-group>
</div>
</template>

<script>
import firstImage from '../../assets/placeimg_640_480_animals.jpg'
import secondImage from '../../assets/animal2.jpg'
import thirdImage from '../../assets/techOne.jpg'
import fourthImage from '../../assets/jardinageOne.jpg'
import fifthImage from '../../assets/decorationOne.jpg'
import sixthImage from '../../assets/sportOne.jpg'
import seventhImage from '../../assets/carOne.jpg'
import eighthImage from '../../assets/toasterOne.jpg'
import ninthImage from '../../assets/dressOne.jpg'
import tenthImage from '../../assets/washerOne.jpg'

export default {
    data(){
        return {
            products: {
                0: {
                    id: 1,
                    title: 'Vends Chien pure race',
                    imageUrl: firstImage,
                    imageDescription: 'Je suis la description de l\'image Une',
                    description: 'Chien pure race de 6 mois, prix non négociable. Je demande à que le future propriétaire ai un jardin clôturé, car chien très fugueur',
                    price: 1500,
                    dateOfCreation: this.dateToString(),
                    category: 'animal',
                    placement: {
                        zipCode: 82400,
                        adress: 'Rue du chat qui tousse',
                        village: 'Valence d\'Agen',
                    }
                },
                1: {
                    id: 2,
                    title: 'Donne chaton de 3ans',
                    imageUrl: secondImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image deux',
                    description: 'Donne chat contre bon soins',
                    price: 0,
                    dateOfCreation: this.dateToString(),
                    category: 'animal',
                    placement: {
                        zipCode: 82400,
                        adress: 'Rue du chat qui tousse',
                        village: 'Valence d\'Agen',
                    }
                },
                2: {
                    id: 3,
                    title: 'Des ballons de décoration',
                    imageUrl: fifthImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image trois',
                    description: 'Vends ballons de décoration, ils sont en très bon état, payment par paypal accepté',
                    price: 130,
                    dateOfCreation: this.dateToString(),
                    category: 'décoration',
                    placement: {
                        zipCode: 82200,
                        adress: 'Rue du chat qui tousse',
                        village: 'Moissac',
                    }
                },
                3: {
                    id: 4,
                    title: 'Location de terrain de Golfe',
                    imageUrl: sixthImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image quatre',
                    description: 'Je loue mon terrain pour vous parties de golfe, 130€ la demi journée. Terrain entretenue tout les semaines ou tout les trois jours selon la saison',
                    price: 130,
                    dateOfCreation: this.dateToString(),
                    category: 'location',
                    placement: {
                        zipCode: 82200,
                        adress: 'Rue du chat qui tousse',
                        village: 'Moissac',
                    }
                },
                4: {
                    id: 5,
                    title: 'Je offre mes services de jardinier',
                    imageUrl: fourthImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image cinq',
                    description: 'Je cherche du travaille, 40€ de l\'heure, attention je bosse bien',
                    price: 40,
                    dateOfCreation: this.dateToString(),
                    category: 'jardinage',
                    placement: {
                        zipCode: 31300,
                        adress: 'Rue du chat qui tousse',
                        village: 'Fleurance',
                    }
                },
                5: {
                    id: 6,
                    title: 'Vends voiture de course',
                    imageUrl: seventhImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image six',
                    description: 'Je vends ma voiture de course, car je ne courre plu depuis 3ans. Elle est en état de presque neuf, seulement 10ans depuis çà première mise en circulation. Il me arrive par fois aussi de aller faire des courses. Pas de contrôle technique, je le ferait pour la vente',
                    price: 2,
                    dateOfCreation: this.dateToString(),
                    category: 'voiture',
                    placement: {
                        zipCode: 35200,
                        adress: 'Rue du chat qui tousse',
                        village: 'Desespere',
                    }
                },
                6: {
                    id: 7,
                    title: 'Grille pain ou brulle plâts',
                    imageUrl: eighthImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image sept',
                    description: 'Grille pain très salle, mais en état de marche, très bien pour les pièces car il ne fait que cramer mes repas',
                    price: 13,
                    dateOfCreation: this.dateToString(),
                    category: 'électroménager',
                    placement: {
                        zipCode: 82200,
                        adress: 'Rue du chat qui tousse',
                        village: 'Moissac',
                    }
                },
                7: {
                    id: 8,
                    title: 'Iphone pour pièces',
                    imageUrl: thirdImage,
                    imageDescription: 'Je suis la description do produit mis en vente de l\'image huit',
                    description: 'J\'ai trouvé c\'est Iphone quand je fessait mon jogging. Il est cassé. A venir chercher sur place',
                    price: 8.50,
                    dateOfCreation: this.dateToString(),
                    category: 'informatique',
                    placement: {
                        zipCode: 85741,
                        adress: 'Rue du chat qui tousse',
                        village: 'Coteletage',
                    }
                },
                8: {
                    id: 9,
                    title: 'Machine a laver très bon état',
                    imageUrl: tenthImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image deux',
                    description: 'Je vends machine a laver, très peut servi, car je déménage chez ma copine et que elle en à déjà une',
                    price: 356,
                    dateOfCreation: this.dateToString(),
                    category: 'électroménager',
                    placement: {
                        zipCode: 78955,
                        adress: 'Rue du chat qui tousse',
                        village: 'Ramounage',
                    }
                },
                9: {
                    id: 10,
                    title: 'Robe rouge',
                    imageUrl: ninthImage,
                    imageDescription: 'Je suis la description de l\'image de l\'image deux',
                    description: 'Vends robe rouge, porté seulement deux fois, pour plus de photos ne pas me contacter',
                    price: 23,
                    dateOfCreation: this.dateToString(),
                    category: 'vêtements',
                    placement: {
                        zipCode: 46875,
                        adress: 'Rue du chat qui tousse',
                        village: 'Raporter',
                    }
                },
                
            },
        }
    },
    methods: {
        maxLengthDescription(text){
            // adapts the text to the size of the card products and ads '...' to the end, if it goes over 20 characters
            let result = '';
            if(text.length > 40){
                for(let x = 0; x <= 40; x++)
                result += text.charAt(x);
                result = result + '...'
                return result
            }else {
                return result = text
            }
        },
        // maxLengthTite(text){
        //     // adapts the text to the size of the card products and ads '...' to the end, if it goes over 20 characters
        //     let result = '';
        //     if(text.length > 13){
        //         for(let x = 0; x <= 13; x++)
        //         result += text.charAt(x);
        //         result = result + '...'
        //         return result
        //     }else {
        //         return result = text
        //     }
        // },
        dateToString(){
            let date = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('fr-FR', options)
        }
    }
}
</script>

<style lang="scss" scoped>
$imageWidth: 162px;

.contentBox {
    min-height: 60px;
}
.card {
    min-width: $imageWidth;
    max-width: $imageWidth;
    margin: 0 10px;
    justify-content: space-between;
    margin-bottom: 30px !important;
    img {
        min-height: 120px;
        max-height: 120px;
        object-fit: cover;
    }
}
.card-body {
    justify-items: space-between !important;
    padding: 10px;
    height: 140px;
    
    h4.card-title {
        font-size: 16px;
        margin-bottom: 5px;
        font-weight: 700;
        min-height: 40px;
        // adds the '...' at the end of ligne two, so that it won't have a thrid ligne, so that it will alwasys fits the card height
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    };
    p{
        font-size: 14px;
        margin-bottom: 5px;
    }
    .priceColor {
        color: #17a2b8;
    }
    .categoryColor {
        font-size: 11px;
        color: gray;
    }
}
.card-footer {
    padding: 3px 10px;
    .text-muted {
        padding: 0;
        font-size: 10px !important;
    }
}

</style>