<template>
  <div class="users-table ma-16">
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-4"
      :loading="loading"
      loading-text="Ładowanie... Proszę czekać"
      :search="search"
    >
      <template v-slot:top>
        <v-card-title>
          Lista użytkowików:
          <v-spacer />
          <v-btn color="primary" class="ml-4 mr-4 font-weight-medium">Dodaj</v-btn>
        </v-card-title>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  data() {
    return {
      loading: false,
      users: [{
        id: 3,
        name: "imie nazwisko",
        email: 'e@mail.com',
        
      },
      {
        id: 3,
        name: "imie nazwisko",
        email: 'e@mail.com',
        
      }],
       headers: [  
          { text: 'lp', value: 'id' },
          { text: 'Imię Nazwisko', value: 'name' },
          { text: 'E-mail', value: 'email' },
          {text: 'akcje', value: 'actions'}
        ],
    };
  }
}
</script>
