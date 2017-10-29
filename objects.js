var playlist = {
  keyaki: "Futari Saison",
  gd: "That XX",
  logic: "1-800"
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist
  return playlist
}

console.log (updatePlaylist({}, jancok, perek))
