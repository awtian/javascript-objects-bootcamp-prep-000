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


console.log ((updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi")).)