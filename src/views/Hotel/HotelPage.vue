<template>
  <HotelApp />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HotelApp = defineAsyncComponent(() => import('hotels/HotelApp'))
</script>
