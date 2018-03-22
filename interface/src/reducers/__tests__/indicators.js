import reducer from '../index'
import initial_indicator_config from '../../config/indicators.json'

it('shows the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    expect.objectContaining(
      {indicators: {indicators: initial_indicator_config}}
    )
  )
})

it('handles the indicator switch action', () => {
  expect(
    reducer(
      {indicators: {indicators: [{active: true}, {active: false}]}},
      {type: "SWITCH_ACTIVE_INDICATOR", index: 1})
    ).toEqual(
      expect.objectContaining(
        {indicators: {indicators: [{active: false}, {active: true}]}}
      )
    )
  }
)

describe('populate indicator details', () => {
  let mock_indicators = [
      {
        "prefix": "T_SFC",
        "available_times": [],
        "active": false,
        "available": false
      },
      {
        "prefix": "DF_SFC",
        "available_times": [],
        "active": false,
        "available": false
      }
    ]
  describe('when the indicators returned all match the indicators in the config', ()=> {
    let mock_response = [
      {"prefix":"DF_SFC","url":"meta/DF_SFC.json"},
      {"prefix":"T_SFC","url":"meta/T_SFC.json"}
    ]
    it('marks all indicators as available and includes a meta link', () => {
      expect(
        reducer(
          {indicators: {indicators: mock_indicators}},
          {type: "POPULATE_INDICATOR_DETAILS", indicators: mock_response}
        )
      ).toEqual(
        expect.objectContaining(
          {indicators: { indicators:
            [
              {"prefix": "T_SFC","available_times": [],"active": false,"available": true,"metaLink": "meta/T_SFC.json"},
              {"prefix": "DF_SFC","available_times": [],"active": false,"available": true,"metaLink": "meta/DF_SFC.json"}
            ]
          }}
        )
      )
    })
  })


  describe('when there are indicators returned that are not present in the config', ()=> {
    let mock_response = [
      {"prefix":"MISC_SFC","url":"meta/misc_sfc.json"},
      {"prefix":"T_SFC","url":"meta/T_SFC.json"},
    ]
    it('marks the indicators that are present in both the config and the request as available, adds the MetaLink, and does not add new indicators', () => {
      let reducer_result = reducer(
        {indicators: {indicators: mock_indicators}},
        {type: "POPULATE_INDICATOR_DETAILS", indicators: mock_response}
      )
      expect(reducer_result.indicators).toEqual(
        {
          indicators:
          [
            {
              "prefix": "T_SFC",
              "available_times": [],
              "active": false,
              "available": true,
              "metaLink": "meta/T_SFC.json"
            },
            {
              "prefix": "DF_SFC",
              "available_times": [],
              "active": false,
              "available": false
            }
          ]
        }
      )
    })
  })
})
