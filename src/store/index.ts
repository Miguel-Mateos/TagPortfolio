import { useSyncExternalStore } from "react";

function createStore<Shape>(initialState: Shape) {
  let currentState = initialState;
  const listeners = new Set<(state: Shape) => void>();
  return {
    getState: () => currentState,
    setState: (newState: Shape) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe: (listener: (state: Shape) => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const store = createStore({
  value1: 1,
  value2: 0,
});

export const useStore = (selector = (state: any) => state) =>
  useSyncExternalStore(store.subscribe, () => selector(store.getState()))

export default store;