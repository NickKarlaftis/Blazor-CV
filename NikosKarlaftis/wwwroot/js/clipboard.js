{
    window.clipboardCopy = {
        copyText: function (dotNetHelper, text) {
            navigator.clipboard.writeText(text).then(function () {
                dotNetHelper.invokeMethodAsync('ShowToast', 'Email copied to clipboard!', 0);
                /*alert("Copied to clipboard!");*/
            })
                .catch(function (error) {
                    dotNetHelper.invokeMethodAsync('ShowToast', error, 3);
                    /*alert(error);*/
                });
        }
    };
}