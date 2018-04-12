import { findDisplayTimeFromAvailableTimes, getMostFrequentDuration, getIntervals } from '../time_utils.js'

let available_times_object = {
  points: ["2018-04-05T15:00:00Z","2018-04-05T18:00:00Z"],
  contained_points: {"2018-04-05T15:00:00Z": 0,"2018-04-05T16:00:00Z": 0,"2018-04-05T18:00:00Z": 1,"2018-04-05T19:00:00Z": 1},
  intervals: [
    {point_at: "2018-04-05T15:00:00Z", starting_at: "2018-04-05T15:00:00Z", ending_at: "2018-04-05T16:59:59Z", contained_periods: ["2018-04-05T15:00:00Z", "2018-04-05T16:00:00Z"]},
    {point_at: "2018-04-05T18:00:00Z", starting_at: "2018-04-05T18:00:00Z", ending_at: "2018-04-05T19:59:59Z", contained_periods: ["2018-04-05T18:00:00Z", "2018-04-05T19:00:00Z"]}
  ]
}

describe('findDisplayTimeFromAvailableTimes', ()=>{
  it("returns undefined when the display time is not within the available times", ()=>{
    expect(
      findDisplayTimeFromAvailableTimes("2018-04-05T17:00:00Z", available_times_object)
  ).toEqual(undefined)
  })
  it("returns the display time of a time within an available time interval", ()=>{
    expect(
      findDisplayTimeFromAvailableTimes("2018-04-05T19:00:00Z", available_times_object)
    ).toEqual("2018-04-05T18:00:00Z")
  })
  it("returns the display time of an available time", ()=>{
    expect(
      findDisplayTimeFromAvailableTimes("2018-04-05T18:00:00Z", available_times_object)
    ).toEqual("2018-04-05T18:00:00Z")
  })
})

describe('getMostFrequentDuration', ()=>{
  it("finds the most frequent distance between time points in an array", ()=>{
    let time_array = ["2018-02-04T00:00Z", "2018-02-04T03:00Z", "2018-02-04T06:00Z", "2018-02-04T09:00Z", "2018-02-04T15:00Z"]
    expect(
      getMostFrequentDuration(time_array)
    ).toEqual("PT180M")
  })
})

describe('getIntervals', ()=>{
  let time_points = ["2018-02-02T00:00Z", "2018-02-04T00:00Z", "2018-02-04T03:00Z", "2018-02-04T06:00Z", "2018-02-04T09:00Z", "2018-02-04T15:00Z", "2018-02-04T16:00Z"]
  let valid_times = ["2018-02-04T00:00Z", "2018-02-04T01:00Z", "2018-02-04T02:00Z", "2018-02-04T03:00Z", "2018-02-04T06:00Z", "2018-02-04T07:00Z", "2018-02-04T08:00Z", "2018-02-04T09:00Z", "2018-02-04T15:00Z"]
  let duration = "PT180M"
  it("removes times that aren't within the valid time set", ()=>{
    expect(
      getIntervals(time_points, duration, valid_times).all_valid_periods
    ).not.toEqual(
      expect.objectContaining({"2018-02-02T00:00Z": expect.anything()})
    )
  })
  it("periods end at whatever is smaller of: one minute before the next data period starts, or the most frequent period", ()=>{
    expect(
      getIntervals(time_points, duration, valid_times).interval_objects
    ).toEqual(
      expect.arrayContaining([expect.objectContaining(
        {"starting_at": "2018-02-04T00:00:00.000Z",
        "ending_at": "2018-02-04T02:59:00.000Z",
        "point_at": "2018-02-04T00:00:00.000Z"}
      )])
    )
    expect(
      getIntervals(time_points, duration, valid_times).interval_objects
    ).toEqual(
      expect.arrayContaining([expect.objectContaining(
        {"starting_at": "2018-02-04T15:00:00.000Z",
        "ending_at": "2018-02-04T15:59:00.000Z",
        "point_at": "2018-02-04T15:00:00.000Z"}
      )])
    )
  })
})
