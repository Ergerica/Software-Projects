document.addEventListener("keydown", callFunction);
function callFunction() {
  const synth = new Tone.AMSynth().toDestination();
  switch (event.code) {

    case "KeyA":
      document.getElementById("ka").style.backgroundColor = green;

      break;
    case "KeyS":

      synth.triggerAttackRelease("D4", "4n");
    case "KeyD":

      synth.triggerAttackRelease("E4", "4n");
      break;
    default:
    // code block
  }
}