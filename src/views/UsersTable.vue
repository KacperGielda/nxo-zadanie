<template>
  <div class="users-table ma-16">
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-4"
      :loading="loading"
      loading-text="Ładowanie... Proszę czekać"
    >
      <template v-slot:top>
        <v-card-title>
          Lista użytkowników:
          <v-spacer />
          <v-btn color="primary" class="ml-4 mr-4 font-weight-medium">Dodaj</v-btn>
        </v-card-title>
      </template>
      <template v-slot:item.name="{ item }">
        <v-btn text  color="primary" link :to="`/user/${item.id}`"> {{item.name}} </v-btn>
    </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogDelete" max-width="600px">
      <v-card>
        <v-card-title >Czy napewno usunąć użytkownika?</v-card-title>
        <v-card-subtitle class="headline mt-1">{{selectedUser.name}}</v-card-subtitle>
        <v-card-text>
          <v-alert type="warning">Zostaniesz wylogowany i utracisz dostęp do systemu</v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text >Anuluj</v-btn>
          <v-btn color="error" text>Usuń</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  data(): Record<string, unknown> {
    return {
      loading: false,
      users: [],
      dialogDelete: false,
      selectedUser: {},
      headers: [
        { text: "lp", value: "id" },
        { text: "Imię Nazwisko", value: "name" },
        { text: "E-mail", value: "email" },
        { text: "Numer Telefonu", value: "phone" },
        { text: "Nazwa Firmy", value: "company.name" },
        { text: "akcje", value: "actions" }
      ]
    };
  }

  async fetchUsers(): Promise<void> {
    try {
      this.$data.users = await this.$store.dispatch("fetchUsers");
    } catch (err) {
      console.log(err);
    }
  }
  deleteItem(user : Record<string, unknown> ): void {
    this.$data.selectedUser = user;
    this.$data.dialogDelete = true;
  }
  mounted(): void {
    const usersFromState = this.$store.getters["users"];
    if (usersFromState.length <= 0) {
      this.fetchUsers();
    } else {
      this.$data.users = usersFromState;
    }
  }
}
</script>
