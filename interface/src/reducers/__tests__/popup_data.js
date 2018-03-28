import reducer from '../popup_data'

it('shows the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    expect.objectContaining(
      {value: null, indicator: {}, point: {}}
    )
  )
})

it('populates point details', () => {
  expect(
    reducer(
      undefined,
      {type: "POPULATE_POINT_DETAILS", value: 3, indicator: {"displayName": "Curing"}, point: {"lat": 1, "lng": 2}}
    )
  ).toEqual(
    expect.objectContaining(
      {value: 3, indicator: {"displayName": "Curing"}, point: {"lat": 1, "lng": 2}}
    )
  )
})
