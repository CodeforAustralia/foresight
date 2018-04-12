import { sortAlphabeticallyByDisplayName } from "../layer_utils"

describe('sortAlphabeticallyByDisplayName', ()=>{
  it("sorts by the displayName property", ()=>{
    let unsorted_layers = [{displayName: "zyx"}, {displayName: "abc"}, {displayName: "ghi"}]
    expect(sortAlphabeticallyByDisplayName(unsorted_layers)).toEqual(
      [{displayName: "abc"}, {displayName: "ghi"}, {displayName: "zyx"}]
    )
  })
})
