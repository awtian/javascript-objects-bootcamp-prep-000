var playlist = {
  keyaki: "Futari Saison",
  gd: "That XX",
  logic: "1-800"
};

function updatePlaylist (playlist, artist, songTitle) {
  playlist.artist = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist
  return playlist
}

console.log (updatePlaylist({}, jancok, perek))
