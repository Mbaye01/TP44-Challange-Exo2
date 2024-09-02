<template>
    <div class="container mt-5">
      <div class="jumbotron text-center">
        <h1 class="display-4">Bienvenue sur l'application de Gestion de Recettes</h1>
      
        <router-link class="btn btn-primary btn-lg mt-3" to="/add" role="button">Ajouter vos recettes</router-link>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <h3>Visualiser toutes les recettes</h3>
          <p>
            Accédez à toutes vos recettes en un coup d'œil avec la possibilité de voir les détails de chaque recette.
          </p>
          <router-link class="btn btn-secondary btn-lg" to="/list" role="button">Voir la liste des recettes</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style>
  
  .container {
    max-width: 800px;
  }
  .jumbotron {
    background-color: #f8f9fa;
    padding: 2rem 2rem;
    border-radius: 0.3rem;
  }
  </style>
  