$(function() {
    var docMode = document.documentMode;
    if (!docMode) {
        docMode = "You are not running IE in compatability view."
    }
    $("#documentMode").html(docMode);
    console.log("docMode:" + docMode);
});

