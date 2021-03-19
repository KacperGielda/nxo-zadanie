<template>
  <div class="user-info">
    <v-card class="ma-4">
      <v-toolbar elevation="1">
        <v-toolbar-items>
          <v-btn icon class="mr-3" @click="$router.go(-1)">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-title>{{user.name}}</v-toolbar-title>
      </v-toolbar>
      <template>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="(value, name) in user" :key="name">
                <td>{{ convertString(name) }}</td>
                <td v-if="typeof value == 'object' ">
                  <v-simple-table>
                    <template>
                      <tbody>
                        <tr v-for="(value1, name1) in value" :key="name1">
                          <td>{{convertString(name1)}}</td>
                          <td v-if="name1 == 'geo'">
                            <v-simple-table>
                              <template>
                                <tbody>
                                  <tr v-for="(value2, name2) in value1" :key="name2">
                                    <td>{{convertString(name2)}}</td>
                                    <td>{{value2}}</td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>
                          </td>
                          <td v-else class="pl-8">{{value1}}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </td>
                <td v-else class="pl-8">{{ value }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class UserInfo extends Vue {
  @Prop() readonly id!: string;
  data(): Record<string, unknown> {
    return {
      loading: true,
      user: {}
    };
  }
  mounted() {
    this.$data.loading = true;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then(({ data }) => {
        this.$data.user = data;
        this.$data.loading = false;
      });
  }
  convertString(str: string): string {
    const spaced = str.replace(/([A-Z])/g, " $1");
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  }
}
</script>