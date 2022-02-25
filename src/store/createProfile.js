import { createSignal, createResource } from 'solid-js';

export default function createProfile(agent, actions, state, setState) {
  const [username, setUsername] = createSignal();
  const [profile] = createResource(username, agent.Profile.get);
  Object.assign(actions, {
    loadProfile: setUsername,
    async update() {
      try {
        await agent.Profile.update(state.profile);
      } catch (err) {
        setState(profile);
      }
    },
  });

  return profile;
}
