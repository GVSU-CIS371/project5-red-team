<template>
  <v-card>
    <v-card-title>{{  product.data.name }}</v-card-title>
    <v-img height="150" :src="product.data.image"  contain></v-img>
    <v-card-text>{{ product.data.description }}</v-card-text> 
    <v-card-subtitle>Price: ${{product.data.price}}</v-card-subtitle>
    <v-card-subtitle>Rating: {{product.data.rating}} / 5</v-card-subtitle>
    <v-card-subtitle>Stock: {{product.data.stock}}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts" setup>
import { ProductDoc } from '../types/product.ts';
import { defineProps } from 'vue';
defineProps<{
  product: ProductDoc;
}>();
</script>
