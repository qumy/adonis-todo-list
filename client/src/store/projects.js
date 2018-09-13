import HTTP from '../http';

export default {
  state: {
    projects: [],
  },
  actions: {
    saveProject({ commit }, project) {
      return HTTP().patch(`projects/${project.id}`, project)
        .then(() => {
          commit('unsetEditMode', project);
        });
    },
    createProject({ commit, state }) {
      return HTTP.post('/projects', {
        title: state.newProjectName,
      })
        .then(({ data }) => {
          commit('appendProject', data);
          commit('setNewProjectName', null);
        });
    },
  },
};
