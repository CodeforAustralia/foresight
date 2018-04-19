import reducer from '../play'

process.env.REACT_APP_PLAY_DELAY_MS = "3000"

it('shows the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {playing: false, speed: "3000", next_time: undefined, timer: undefined}
  )
})

describe('TOGGLE_PLAYING', ()=> {
  it('stops playing if it was playing', ()=>{
    expect(reducer({playing: true, speed: "3000", next_time: undefined, timer: undefined}, {type: 'TOGGLE_PLAYING'})).toEqual(
      {playing: false, speed: "3000", next_time: undefined, timer: undefined}
    )
  })
  it('starts playing if it was not playing', ()=>{
    expect(reducer({playing: false, speed: "3000", next_time: undefined, timer: undefined}, {type: 'TOGGLE_PLAYING'})).toEqual(
      {playing: true, speed: "3000", next_time: undefined, timer: undefined}
    )
  })
  it('clears the timer', ()=>{
    expect(reducer({playing: true, speed: "3000", next_time: undefined, timer: 102}, {type: 'TOGGLE_PLAYING'})).toEqual(
      {playing: false, speed: "3000", next_time: undefined, timer: undefined}
    )
  })
})

describe('STOP_PLAYING', ()=> {
  it('stops playing if it was playing', ()=>{
    expect(reducer({playing: true, speed: "3000", next_time: undefined, timer: undefined}, {type: 'STOP_PLAYING'})).toEqual(
      {playing: false, speed: "3000", next_time: undefined, timer: undefined}
    )
  })
  it('keeps stopped if it was not playing', ()=>{
    expect(reducer({playing: false, speed: "3000", next_time: undefined, timer: undefined}, {type: 'STOP_PLAYING'})).toEqual(
      {playing: false, speed: "3000", timer: undefined}
    )
  })
  it('clears the timer and next time', ()=>{
    expect(reducer({playing: true, speed: "3000", next_time: "2017-02-03T00:00:00.000Z", timer: 102}, {type: 'STOP_PLAYING'})).toEqual(
      {playing: false, speed: "3000", next_time: undefined, timer: undefined}
    )
  })
})


describe('SET_TIMER', ()=> {
  it('sets the timer', ()=>{
    expect(reducer({playing: true, speed: "3000", next_time: undefined, timer: undefined}, {type: 'SET_TIMER', next_time: "2017-02-03T00:00:00.000Z", timer: 102})).toEqual(
      {playing: true, speed: "3000", next_time: "2017-02-03T00:00:00.000Z", timer: 102}
    )
  })
  it('does not change whether it was playing', ()=>{
    expect(reducer({playing: false, speed: "3000", next_time: undefined, timer: undefined}, {type: 'SET_TIMER', next_time: "2017-02-03T00:00:00.000Z", timer: 102})).toEqual(
      {playing: false, next_time: "2017-02-03T00:00:00.000Z", speed: "3000", timer: 102}
    )
  })
})
