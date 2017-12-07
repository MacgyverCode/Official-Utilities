var macgyver = window.macgyver || {};

macgyver.options = {
    publicKey: "",
    timeOut: 5500,
    timeOutCallback: function() {
        console.log("timeout");
    }
};

macgyver.query = function(obj) {

    var r = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();

    r.open("POST", "/", true);

    r.onreadystatechange = function() {
        if (r.readyState == 4 && r.status == 200) {
            obj.success(r);
        }
    };

    r.send(JSON.stringify(obj.payload));

    setTimeout(function() {
        r.abort();
        macgyver.options.timeOutCallback();
        return;
        return false;
    }, macgyver.options.timeOut);
}









macgyver.query({
    payload: data_obj,
    success: function() {
        alert("worked");
    }
});
