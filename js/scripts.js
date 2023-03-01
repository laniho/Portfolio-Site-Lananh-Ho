console.log("Hello world");

function menuToggle() {
    var x = document.getElementById('myNavtoggle'); /*searches document for ID; assign as variable x*/
    var isMobileBreakpoint = window.innerWidth <= 640
    if (x.className === 'navtoggle' && isMobileBreakpoint) {
      x.className += ' responsive'; /*adds responsive classname to x (show menu)*/
    } else { /*if class name is currently navtoggle responsive*/
      x.className = 'navtoggle'; /*change className back to navtoggle*/
    }
}