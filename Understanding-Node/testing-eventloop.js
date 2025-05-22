const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myFile.runContents();

function shouldContinue() {
  // check one: Any pending setTimeout, setInterval, setImmediate ?
  // check two: Any pending OS task ? server listenein to port
  // check three : Any pending long running operations  ? like fs modules

  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// event occurs here
while (shouldContinue()) {

  // node looks at pendingTimers and sees if any functions are ready to be called
  // setTimeout, setInterval

  // node looks at pendingOSTasks and Operations and calls relevant callbacks

  // pause eexecution. Continue when 
    //  - a new pendingOSTask is done
    //  - a new pendingOperation is done
    //  - a timer is about to complete


  // look at pendingTimers. Call any setImmediate

  // handle any close events 

  
}
