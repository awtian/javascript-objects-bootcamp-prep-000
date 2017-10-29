var playlist {
  keyaki: "Futari Saison",
  gd: "That XX",
  logic: "1-800"
};

function updatePlaylist (playlist, artist, song) {
  playlist.artist = song
  return playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist
  return playlist
}