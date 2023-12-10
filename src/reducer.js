export const reducer = (state, { type, payload }) => {
  switch (type) {
    case AGENTS_LIST:
      return { ...state, info: payload };

    case AGENT_UUID:
      return { ...state, agent: payload };

    default:
      return state;
  }
};






