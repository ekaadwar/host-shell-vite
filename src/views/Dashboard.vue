<template>
  <div class="grid">
    <section class="panel">
      <h3 class="title">Hotel Micro App</h3>
      <HotelApp />
    </section>

    <section class="panel">
      <h3 class="title">Coliving Micro App</h3>
      <ColivingApp />
    </section>

    <section class="panel panel-full">
      <h3 class="title">Kost Micro App</h3>
      <KostApp />
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HotelApp = defineAsyncComponent(() => import('hotels/HotelApp'))
const ColivingApp = defineAsyncComponent(() => import('coliving/ColivingApp'))
const KostApp = defineAsyncComponent(() => import('kost/KostApp'))
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.panel-full {
  grid-column: 1 / -1;
}
.panel {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 12px;
}
.title {
  margin: 0 0 10px;
  color: slategray;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
