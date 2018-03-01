import reducer from '../layers'
import layers from '../../config/layers'

it('shows the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {layers: layers}
  )
})

it('handles the toggle action', () => {
  expect(
    reducer(
      {layers: [{active: true}, {active: false}]},
      {type: "TOGGLE_LAYER", index: 1})
    ).toEqual(
      {layers: [{active: true}, {active: true}]})
})
