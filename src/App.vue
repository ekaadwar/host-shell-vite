<template>
  <div class="layout">
    <header class="top">
      <div class="brand">🧩 Vue Micro Frontend Demo</div>
      <nav class="nav">
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/hotel">Hotel</RouterLink>
        <RouterLink to="/coliving">Coliving</RouterLink>
        <RouterLink to="/kost">Kost</RouterLink>
        <RouterLink to="/dwp">DWP</RouterLink>
      </nav>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  font-family: system-ui, Arial;
  background: #fafafa;
  min-height: 100vh;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  background: #fff;
  position: sticky;
  top: 0;
}
.brand {
  font-weight: 800;
}
.nav {
  display: flex;
  gap: 12px;
}
.nav a {
  text-decoration: none;
  color: #333;
  padding: 6px 10px;
  border-radius: 10px;
}
.nav a.router-link-active {
  background: #111;
  color: #fff;
}
.main {
  padding: 16px;
}
</style>
