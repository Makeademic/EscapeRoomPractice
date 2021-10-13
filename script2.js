function colorChanger(color) {
  switch(color) {
		case "red":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,0,0,0.8), rgba(255,0,0,0.8)), url(https://makeademic.github.io/EscapeRoomNarrative/Find.png)"; 
			break;
      case "cyan":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(0,255,255,0.8), rgba(0,255,255,0.8)), url(https://makeademic.github.io/EscapeRoomNarrative/Find.png)"; 
			break;
      case "yellow":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,255,0,0.8), rgba(255,255,0,0.8)), url(https://makeademic.github.io/EscapeRoomNarrative/Find.png)"; 
			break;
      case "transparent":
document.getElementById("color_box").style.backgroundImage = "linear-gradient(rgba(255,255,0,0), rgba(255,255,0,0)), url(https://makeademic.github.io/EscapeRoomNarrative/Find.png)"; 
			break;
	}
}