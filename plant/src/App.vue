<script>
import { useLoadDocs } from "./firebase-db"

export default{
  data(){
    return{
      novenyek: null,
    }
  },
  async mounted(){
    this.novenyek = await useLoadDocs("novenyek")
  },
}
</script>

<template>
    <div id="app">
    <v-app id="inspire">
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">

        <v-img height="250" v-for="noveny in novenyek" :key="noveny.id" srv="{{noveny.kep}}"></v-img>
    
        <v-card-title v-for="noveny in novenyek" :key="noveny.id">{{noveny.tipus}}</v-card-title>
    
        <v-card-text>
          <v-row align="center" class="mx-0">
          <div v-for="noveny in novenyek" :key="noveny.id">{{noveny.leiras}}</div>
          </v-row>
        </v-card-text>
    
        <v-divider class="mx-4"></v-divider>
    
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text>Módosítás</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>

<style>

</style>
