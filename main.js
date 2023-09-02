const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]

const randomNoteButton = document.querySelector("#random-note-button");
const generatedNote = document.querySelector("#generated-note");

randomNoteButton.addEventListener("click", () => {
  const randomNoteIndex = Math.floor(Math.random() * notes.length);
  generatedNote.innerText = notes[randomNoteIndex]
})
