chrome.tabs.getSelected(null, function (tab) {
    console.log(tab.url);
    $('#qrcode').attr('src','https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+tab.url);
});
