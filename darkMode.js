let dark = false;

function darkMode() {
  if (!dark) {
    dark = true;
    document.body.style.setProperty('--background', '#33312F');
    document.body.style.setProperty('--letra-escura', '#F5FBFD');
    document.body.style.setProperty('--body', '#33312F');
    
  }else{
    dark = false;
    document.body.style.setProperty('--background', '#a3d9f026');
    document.body.style.setProperty('--letra-escura', '#33312F');
    document.body.style.setProperty('--body', '#fbfeffd8');
  }


}