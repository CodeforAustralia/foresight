export const toggleLayer = (index) => {
  return {
    type: 'TOGGLE_LAYER',
    index: index
  }
}

export const switchIndicators = (index) => {
  return {
    type: 'SWITCH_ACTIVE_INDICATOR',
    index: index
  }
}
