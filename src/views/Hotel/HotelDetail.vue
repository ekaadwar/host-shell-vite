<template>
  <HotelDetail />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HotelDetail = defineAsyncComponent(() => import('hotels/HotelDetail'))
</script>
