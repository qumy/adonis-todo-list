<template>
  <v-layout row wrap>
    <v-flex xs9 class="text-xs-left">
      <slot></slot>
      <span
        @click="$emit('onClick')"
        v-if="!isEditMode">
          {{title}}
      </span>
      <v-text-field
        v-if="isEditMode
        :value="title"
        @keyup.enter="$emit('onSave')"
        @input="$emit('onInput', $event)"
        ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'isEditMode',
    'title',
    'record',
  ],
};
</script>

<style>
</style>
