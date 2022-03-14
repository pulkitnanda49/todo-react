const defaultState = {
  todos: [],
  isModalopen: false,
  modalTitle: "",
  modalContent: "",
};
export const TodoReducer = (state = defaultState, action: any) => {
  if (action.type === "ADD_TODO") {
    const newTODO = [...state.todos, action.payload];
    return {
      ...state,
      todos: newTODO,
      isModelOpen: true,
      modalTitle: "TODO ADDED",
      modalContent: "one added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  throw new Error("no matching action type");
};
