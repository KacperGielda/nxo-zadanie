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
       <v-list>
      <v-list-group
        v-for="item in navMenu"
        :key="item.name"
        no-action 
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.children"
          :key="child.name"
          link  
          :to="child.link"
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
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
    navMenu:[
      {
      name:'Administracja',
      children:[
        {
          name: 'Użytkownicy',
          link:"/users",
        }
      ]
      }
    ]
  }),
});
</script>
