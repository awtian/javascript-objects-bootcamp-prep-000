var playlist = {
  keyaki: "Futari Saison"
};

function updatePlaylist (playlist, artist, song) {
  playlist.artist = song
  return playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist
  return playlist
}
console.log (playlist.keyaki)
console.log (updatePlaylist({}, playlist, jancok, perek))
