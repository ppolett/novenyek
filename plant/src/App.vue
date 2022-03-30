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
  <ul>
    <li v-for="noveny in novenyek" :key="noveny.id">{{noveny.tipus}} {{noveny.szin}}</li>
  </ul>
</template>

<style>

</style>
