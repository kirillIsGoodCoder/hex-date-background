window.onload = function () {
  // this.document.body.style.opacity = ".7"
  setInterval( function () {
  var today = new Date();
  var h = today.getHours()
      m  = today.getMinutes(),
      s  = today.getSeconds(),
      ms = today.getMilliseconds();
      ms = ms.toString().substr(0, 2);
  var crStringHEX = '#'+h.toString()+m.toString()+s.toString();
  var hexCode = document.getElementById('hex-code');
  console.log(crStringHEX);

  hexCode.dataset.text = crStringHEX;

    document.body.style.background = crStringHEX;
    document.getElementById('cont').style.background = crStringHEX;
  }, 1000);
  // console.log("minutes "+m)
  // console.log("seconds "+s);
  // console.log("milliseconds "+ms);
  // console.log('crStringHEX  '+crStringHEX);

}

