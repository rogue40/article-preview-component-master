var button=document.getElementsByClassName("share")[0];
var share=document.getElementsByClassName("social")[0];

function sociallink(){
  if (share.style.display === "none") {
    share.style.display = "flex";
  } else {
    share.style.display = "none";
  }
    
}

button.onclick=sociallink;