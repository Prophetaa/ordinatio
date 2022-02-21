import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import createAgent from './createAgent';
import createAuth from './createAuth';
import createProfile from './createProfile';
import createRouteHandler from './createRouteHandler';

const StoreContext = createContext();
const RouterContext = createContext();

export function Provider(props) {
  let profile, currentUser;
  const router = createRouteHandler(''),
    [state, setState] = createStore({
      get profile() {
        return profile();
      },
      get currentUser() {
        return currentUser();
      },
      token: localStorage.getItem('jwt'),
    }),
    actions = {
      setToken: (value) => localStorage.setItem('jwt', value),
    },
    store = [state, actions],
    agent = createAgent(store);

  profile = createProfile(agent, actions, state, setState);
  currentUser = createAuth(agent, actions, setState);

  return (
    <RouterContext.Provider value={router}>
      <StoreContext.Provider value={store}>
        {props.children}
      </StoreContext.Provider>
    </RouterContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}

export function useRouter() {
  return useContext(RouterContext);
}
