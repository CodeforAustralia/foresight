export const sortAlphabeticallyByDisplayName = function(layers) {
  return(layers.sort(function(a, b){
      if(a.displayName < b.displayName) return -1;
      if(a.displayName > b.displayName) return 1;
      return 0;
  }))
}
