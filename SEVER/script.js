function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId).innerText;
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert("Đã sao chép: " + copyText);
}