<template>
  <div>
    <HomePageCarousel></HomePageCarousel>
    <div>
      <div class="backgroundGrey">
        <div class="container">
          <div class="m-4">
          <h1>La Bonne Affaire</h1>
          </div>
          <div class="m-4">
          <h2>Top Catégories</h2>
          </div>
        <CategoriesList></CategoriesList>
        </div>
      </div>
      <div class="backgroundGrey">
      <div class="m-4 text-left">
      <h2>Derniers produits mis en vente</h2>
      </div>
      <Products></Products>
      </div>
      <div class="d-flex flex-column justify-content-center block-content">
      <b-button size="lg" variant="info" class="btn-style">Déposer un annonce</b-button>
      <div>
      </div>
      </div>
    </div>
  </div>
<!-- TODO: ajouter tout les categories en mode carroussel -->
<!-- Ajouter quelques annonces -->
</template>

<script>
// import imag to slider and addapt it latter importing information from backend
import HomePageCarousel from "../../components/Carousel/HomePageCarousel"
import CategoriesList from "../../components/Categories/CategoriesList"
import Products from "../../components/Products/Products"

  export default {
    name: "Home",
    components: {
      HomePageCarousel,
      CategoriesList,
      Products,
    }
    
    
  }
</script>

<style scoped>

.backgroundGrey {
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(232,230,230,1) 100%);
  padding: 35px 0;
  min-height: 100vh;
}

.block-content {
  min-height: 200px;
}

button.btn-style {
  max-width: 500px;
  margin: auto;
  padding: 10px 20px;
  
}
</style>