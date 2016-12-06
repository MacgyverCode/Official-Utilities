var macgyver = window.macgyver || {};

macgyver.options = {
        publicKey: "",
        timeOut: 1e4,
        timeOutCallback: function () {}
};

macgyver.query = function (obj) {

        var r = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();

        r.open("POST", "https://macgyver.services", true);
        r.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        r.send(JSON.stringify(obj.payload));

        r.onreadystatechange = function () {
                if (r.readyState == 4 && r.status == 200) {
                        obj.success(JSON.parse(r.response));
                }
        };

        setTimeout(function () {
                r.abort();
                macgyver.options.timeOutCallback();
                return;
                return false;
        }, macgyver.options.timeOut);
}
