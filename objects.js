var playlist = {
  keyaki: "Futari Saison"
};

function updatePlaylist (playlist, artist, song) {
  playlist.artist = song
  return playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.Kanye
  return playlist
}
