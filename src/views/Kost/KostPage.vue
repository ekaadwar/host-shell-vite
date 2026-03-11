<template>
  <section class="page">
    <header class="page-header">
      <div>
        <p class="eyebrow">Host Route</p>
        <h2>Kost Micro App</h2>
        <p class="desc">
          Halaman ini memuat remote component dari project <strong>mfe-kost-v2</strong>.
        </p>
      </div>
    </header>

    <Suspense>
      <template #default>
        <KostApp />
      </template>
      <template #fallback>
        <div class="fallback">Loading remote kost app...</div>
      </template>
    </Suspense>
  </section>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const KostApp = defineAsyncComponent(() => import('kost/KostApp'))
</script>

<style scoped>
.page {
  display: grid;
  gap: 16px;
}
.page-header {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 16px;
  text-align: left;
}
.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
  color: #6b7280;
}
h2 {
  margin: 0;
}
.desc {
  margin: 8px 0 0;
  color: #6b7280;
}
.fallback {
  border: 1px dashed #d1d5db;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
}
</style>
