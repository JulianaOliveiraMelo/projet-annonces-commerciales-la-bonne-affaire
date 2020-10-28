<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><router-link to="/">La Bonne Affaire</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Déposer un annonce</b-nav-item>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Rechercher..."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">OK</b-button>
        </b-nav-form>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
          <b-dropdown-item href="#">PT</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <!-- TODO: s'y le utilisateur est connecté || "Se connecter" -->
            <em>Mon Compte</em>
          </template>
          <b-dropdown-item href="#">Mon compte</b-dropdown-item>
          <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style lang="scss" scoped>

a {
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
  }
}

</style>
