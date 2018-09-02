<template>
  <v-toolbar color="cyan" dark fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="mr-4">TODO List</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat>
        <v-icon>playlist_add_check</v-icon>
        Projects</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="mr-2" to="/register"><v-icon>fingerprint</v-icon>
        Register</v-btn>
      <v-btn flat class="mr-2" to="/login"><v-icon>account_box</v-icon>
        Login</v-btn>
      <v-btn flat class="mr-2" to="/logout"><v-icon>exit_to_app</v-icon>
        Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style>
</style>
