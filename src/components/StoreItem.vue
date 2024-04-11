
<template>
  <v-card class="mx-auto px-2" max-width="1000px" height="600px" @mouseover="isHovered = true" @mouseleave="isHovered = false" :elevation="isHovered ? 12 : 2">
    <v-card-title class="mt-5 ml-6">
      <b>{{ product.data.name }}</b>
    </v-card-title>
    <v-row no-gutters style="width: 475px;">
      <v-col cols="1"></v-col>
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
    <v-img height="350px" :src="product.data.image" contain class="mt-5"></v-img>
    <v-card-text class="ml-6 mr-6 mt-5">{{ product.data.description }}</v-card-text> 
  </v-card>
</template>

<script lang="ts" setup>
import { ProductDoc } from '../types/product.ts';
import { defineProps, ref } from 'vue';
defineProps<{
  product: ProductDoc;
}>();

const isHovered = ref(false);
</script>




