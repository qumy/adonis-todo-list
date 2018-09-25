<template>
  <Panel title="Tasks">
    <div
      class="tasks mt-2"
      v-for="task in tasks"
      :key="task.id"
    >
    </div>
    <CreateRecord
      placeholder="I need to..."
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    />
  </Panel>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';

export default {
  components: {
    CreateRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  methods: {
    ...mapActions('tasks', [
      'createTask',
      'saveTask',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
    ]),
    checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style>
</style>
