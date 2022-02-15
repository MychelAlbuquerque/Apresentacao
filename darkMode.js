let dark = false;

function darkMode() {

  let bodyDark = '#101418';
  let bodyBright = '#c7c7c7';

  let backgroundDark = '#0a0e16';
  let backgroundBright = '#c2ecfd';

  let shadowDarkMode = '#004768';
  let shadowBrightMode = '#cad5da';

  let logoDarkMode = '#cad5da';
  let logoBrightMode = '--boxColor';

  let buttonBrightMode = '#FF7816';
  let buttonDarkMode = '#4967A3';

  let letterDarkMode = '#F5FBFD';
  let letterBrightMode = '#222222';


  if (!dark) {
    dark = true;

    /*change body color*/
    document.body.style.setProperty('background-color', bodyDark);
    /*change section color*/
    document.body.style.setProperty('--background', backgroundDark);
    /*change box shadow color*/
    document.body.style.setProperty('--shadow', shadowDarkMode);
    /*change logo color*/
    document.body.style.setProperty('--logo', logoDarkMode);
    /*change button color*/
    document.body.style.setProperty('--button', buttonDarkMode);
    /*change letter color*/
    document.body.style.setProperty('--letter', letterDarkMode);
  } else {
    dark = false;

    /*change color body*/
    document.body.style.setProperty('background-color', bodyBright);
    /*change color sections*/
    document.body.style.setProperty('--background', backgroundBright);
    /*change color box shadow*/
    document.body.style.setProperty('--shadow', shadowBrightMode);
    /*change logo color*/
    document.body.style.setProperty('--logo', logoBrightMode);
    /*change button color*/
    document.body.style.setProperty('--button', buttonBrightMode);
    /*change letter color*/
    document.body.style.setProperty('--letter', letterBrightMode);
  }
}