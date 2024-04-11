
<template>
  <v-card>
    <v-card-title>{{ product.data.name }}</v-card-title>
    <v-row>
      <v-col cols="3">
        <v-rating :value="product.data.rating" max="5" readonly dense size="20">
          <template #item="{ index }">
            <v-icon v-if="index < product.data.rating" color="#FFA726" size="20">mdi-star</v-icon>
            <v-icon v-else color="grey" size="20">mdi-star</v-icon>
          </template>
        </v-rating>
      </v-col>
      <v-col cols="2">
        <v-icon color="green">mdi-cash</v-icon> ${{ product.data.price }}
      </v-col>
      <v-col cols="2">
        <v-icon color="blue">mdi-package-variant-closed</v-icon> {{ product.data.stock }}
      </v-col>
    </v-row>
    <v-img height="300" :src="product.data.image" contain></v-img>
    <v-card-text>{{ product.data.description }}</v-card-text> 
  </v-card>
</template>

<script lang="ts" setup>
import { ProductDoc } from '../types/product.ts';
import { defineProps } from 'vue';
defineProps<{
  product: ProductDoc;
}>();
</script>




