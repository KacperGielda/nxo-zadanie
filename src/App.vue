<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-title 
      app
    
      >
        <span class="text-h5">
        LOGO
        </span>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
    app
  
    height="100%"
    clipped>
    <template>

      <v-treeview :items="nav" activatable light></v-treeview>

    </template>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',


  data: () => ({
    nav:[
      {
      name:'Administracja',
      children:[
        {
          name: 'Użytkownicy'
        }
      ]
      }
    ]
  }),
});
</script>
