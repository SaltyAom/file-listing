$(document).ready(function(){    
    request();
})

const request = (input,returnValue) => {
    $.ajax({
        url: "app/read.php",
        method: "POST",
        type: "POST",
        data: {dir:input,return:returnValue},
        cache: false,
        success: function(dir){
            $("#directory-wrapper").empty().html(dir);
            $(".tab.folder").on("click",function(){
                var dir = $(this).attr("dir");
                var returnValue = $(this).attr("returnvalue");
                if(returnValue == undefined){ returnValue = 0;}
                request(dir,returnValue);
            });
        },
        error: function (jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            $('.directory-container').html(msg);
        }
    })        
}
