<template>
  <Panel title="Projects">
    <div
      class="project mt-2"
      v-for="project in projects"
      :key="project.id"
    >
      <EditableRecord
        :isEditMode="project.isEditMode"
        :title="project.title"
        @onInput="setProjectTitle({
          project,
          title: $event,
        })"
        @onEdit="setEditMode(project)"
        @onSave="saveProject(project)"
      />
    </div>
    <CreateRecord
      placeholder="My project name...."
      @onInput="setNewProjectName"
      :value="newProjectName"
      @create="createProject"
    />
  </Panel>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('projects', [
      'currentProject',
    ]),
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapActions('projects', [
      'createProject',
      'saveProject',
    ]),
  },
};
</script>
