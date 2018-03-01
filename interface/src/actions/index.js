export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const toggleLayer = (index) => {
  return {
    type: 'TOGGLE_LAYER',
    index: index
  }
}
