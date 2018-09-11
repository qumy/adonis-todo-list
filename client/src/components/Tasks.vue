<template>
  <Panel title="Tasks">
    <div
      class="tasks mt-2"
      v-for="task in tasks"
      :key="task.id"
    >
    </div>
  </Panel>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  methods: {
  },
};
</script>

<style>
</style>
