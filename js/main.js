window.onload = () => {
    request("");
}

const request = (dir,returnValue) => {
    let request = new XMLHttpRequest();

    request.open("POST", "app/read.php", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.onload = function(){
        if (this.status >= 200 && this.status < 400) {
            document.getElementById("directory-wrapper").innerHTML = request.responseText;
            [].forEach.call(document.querySelectorAll(".tab.folder"), folder => {
                let dir = folder.getAttribute("dir");
                let returnValue = folder.getAttribute("returnvalue");
                if(returnValue == undefined){ returnValue = 0;}
                folder.addEventListener("click",() => {
                    requestHandle(dir,returnValue);
                })
            })
        }
    }
    request.onerror = function() {
        var msg = '';
        if (request.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (request.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (request.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + request.responseText;
        }
        document.getElementById("directory-container").innerHTML = msg;
    }
    request.send(`dir=${dir}&return=${returnValue}`)
    return;
}

const requestHandle = (dir,returnValue) => {
    request(dir,returnValue);
}