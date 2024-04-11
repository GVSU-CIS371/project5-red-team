Cricket — Today at 11:39 AM
<template>
<v-container> 
  <v-row> 
    <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
        <store-item :product="product" :style="{height: '380px', width: '340px'}"></store-item>
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts" setup>
// your answer

import StoreItem from './StoreItem.vue';
import { useProductStore } from '../stores/ProductStore';

const ProdStore = useProductStore();
ProdStore.init();
const products = ProdStore.products;

</script>
