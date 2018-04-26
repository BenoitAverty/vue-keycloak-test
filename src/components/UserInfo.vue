<template>
  <div>
    <p v-if="$store.state.keycloak.authenticated">yo {{ $store.state.keycloak.username }} ({{ $store.state.keycloak.token }})</p>
    <p v-else>You are not authenticated.</p>
  </div>
</template>
