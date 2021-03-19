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
  data(): Record<string, unknown> {
    return {
      loading: false,
      users: [],
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
