// say holla so we know shit is working
// alert('Holla this is JS bitch titties');

// console.log('IM IN THE JAVASCRIPT!');
 windows = [];
// var loaded = false;
 counter;
function openWindow() {
  var winSize = 240
  for(i=0; i < 6; i++) {
    counter = 1;
    var windowName = "window" + i
    var left_pos = i*winSize
    var right_pos = winSize + (i*winSize)
    var p1 = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no'
    var p2 = 'location=no, width='+winSize+',height='+winSize+',left=' + left_pos + 'right=' + right_pos
    // var win = open('story.html', windowName, p1+p2)
    var win = open("", windowName, p1+p2);
    // win.document.write('<html><head><title></title>');
    win.document.write('<link rel="stylesheet" href="css/styles.css">');
    switch (i) {
        case 0:
          win.document.write("<div id='pop1'><h2>LONG</h2></div>");
          break;
        case 1:
          win.document.write("<div id='pop1'><h2>TIME</h2></div>");
          break;
        case 2:
          win.document.write("<div id='pop1'><h2>COMING</h2></div>");
          break;
        case 3:
          win.document.write("<div id='pop1'><h2>BUT</h2></div>");
          break;
        case 4:
          win.document.write("<div id='pop1'><h2>COMPLETELY</h2></div>");
          break; 
        case 5:
          win.document.write("<div id='pop1'><h2>UNEXPECTED</h2></div>");
          break; 
        default:
            win.document.write("<div id='pop1'><h2>ERR</h2></div>");    
    }



    //add info to array windows
    window.windows[i] = windowObj = {
                              'name': windowName,
                              'left': left_pos,
                              'right': right_pos,
                              'positioning': p2,
                              'windowVar': win             
                            };
    console.log('Here is my windows array');
    console.log(windows[i]);

      if(i === 5) {
        nextStory();
      }
  }
  
} 

function nextStory() {
    if (counter === 1){
    console.log("i'm in next story counter is one")
    setTimeout(closeStory, 5000)
    setTimeout(openStory2, 5500)
    }
    if (counter === 2){
      console.log("i'm in next story counter is two")
    setTimeout(closeStory, 5000)
    setTimeout(openStory3, 5500)
    }
    if (counter === 3) {
      console.log("i'm in next story counter is three")
      setTimeout(closeStory, 5000)
    }
}

function closeStory() {
    for(i = 0; i < windows.length; i++){
      console.log("i'm in close story shit should be closing");
      var oldWindow = windows[i]['windowVar']
      oldWindow.close();
      delete windows[i]
    }
}

function openStory2() {
    counter = 2;
    var winSize = 240
  for(i=0; i < 6; i++) {

    var windowName = "window" + i
    var left_pos = i*winSize
    var right_pos = winSize + (i*winSize)
    var p1 = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no'
    var p2 = 'location=no,top=250, width='+winSize+',height='+winSize+',left=' + left_pos + 'right=' + right_pos
    // var win = open('story2.html', windowName, p1+p2)
    var win = open("", windowName, p1+p2);
    // win.document.write('<html><head><title></title>');
    win.document.write('<link rel="stylesheet" href="css/styles.css">');
    switch (i) {
        case 0:
          win.document.write("<div id='pop2'><h2>THE</h2></div>");
          break;
        case 1:
          win.document.write("<div id='pop2'><h2>ONLY</h2></div>");
          break;
        case 2:
          win.document.write("<div id='pop2'><h2>BRIDGE</h2></div>");
          break;
        case 3:
          win.document.write("<div id='pop2'><h2>BETWEEN</h2></div>");
          break;
        case 4:
          win.document.write("<div id='pop2'><h2>TWO</h2></div>");
          break; 
        case 5:
          win.document.write("<div id='pop2'><h2>WORLDS</h2></div>");
          break; 
        default:
            win.document.write("<div id='pop2'><h2>ERR</h2></div>");    
    }
    //add info to array windows
    windows[i] = windowObj = {
                              'name': windowName,
                              'left': left_pos,
                              'right': right_pos,
                              'positioning': p2,
                              'windowVar': win             
                            };
    console.log('Here is my windows array');
    console.log(windows[i]);

      win.onload = function() {
        var div = win.document.createElement('div')
        div.innerHTML = '<h1>HOLA</h1>'
        div.style.fontSize = '30px'
        win.document.body.insertBefore( div, win.document.body.firstChild )
        
      }
      if(i === 5) {
        nextStory();
      }
  }
}

function openStory3() {
    counter = 3;
    var winSize = 240
  for(i=0; i < 6; i++) {

    var windowName = "window" + i
    var left_pos = i*winSize
    var right_pos = winSize + (i*winSize)
    var p1 = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no'
    var p2 = 'location=no, top=500, width='+winSize+',height='+winSize+',left=' + left_pos + 'right=' + right_pos

    var win = open("", windowName, p1+p2);
    // win.document.write('<html><head><title></title>');
    win.document.write('<link rel="stylesheet" href="css/styles.css">');
    switch (i) {
        case 0:
          win.document.write("<div id='pop3'><h2>RED</h2></div>");
          break;
        case 1:
          win.document.write("<div id='pop3'><h2>WINE</h2></div>");
          break;
        case 2:
          win.document.write("<div id='pop3'><h2>WHITE</h2></div>");
          break;
        case 3:
          win.document.write("<div id='pop3'><h2>CARPET</h2></div>");
          break;
        case 4:
          win.document.write("<div id='pop3'><h2>FIRST</h2></div>");
          break; 
        case 5:
          win.document.write("<div id='pop3'><h2>IMPRESSION</h2></div>");
          break; 
        default:
            win.document.write("<div id='pop3'><h2>ERR</h2></div>");    
    }

    //add info to array windows
    windows[i] = windowObj = {
                              'name': windowName,
                              'left': left_pos,
                              'right': right_pos,
                              'positioning': p2,
                              'windowVar': win             
                            };
    console.log('Here is my windows array');
    console.log(windows[i]);

      win.onload = function() {
        var div = win.document.createElement('div')
        div.innerHTML = '<h1>HOLA</h1>'
        div.style.fontSize = '30px'
        win.document.body.insertBefore( div, win.document.body.firstChild )
        
      }
      if(i === 5) {
        nextStory();
      }
  }
}



