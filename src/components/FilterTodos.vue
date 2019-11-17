<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" data-app cols="6">
          <v-select
           :items="items"
            item-value="src"
            dense
            label="plase select filter"
            @change="filterTodos($event)"
          >
          </v-select>
      </v-col>
    </v-row>
    <v-row>
         <v-tabs
            fixed-tabs
            background-color="indigo"
            >
              <v-tab
                v-for="item in items"
                :key="item"
                @click="filterTodos($event)"
              > {{  item }} 
              </v-tab>
          </v-tabs> 
    </v-row>
  </v-container>
</template>
git remote set-url origin git@github.com:balurides/NovVueChallenge.git



<script>
import { mapActions } from "vuex";

export default {
  name: 'FilterTodos',
  methods: mapActions(["filterTodos"]),
  watch:{
      'selectFilter': function(newValue,oldValue){
          alert(newValue);
          alert(oldValue);
      }
  },
  data() {
    return {
      items: ["200", "100","50","25","10","5"]
    };
  }
};
</script>

<style scoped>
</style>