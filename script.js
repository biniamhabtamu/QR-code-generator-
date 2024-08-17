function generateQRCode() {
    const textInput = document.getElementById('text-input').value;
    const qrcodeContainer = document.getElementById('qrcode');
    
    if (textInput.trim() === '') {
        alert('Please enter some text or URL.');
        return;
    }

    qrcodeContainer.innerHTML = ''; // Clear previous QR code
    
    QRCode.toCanvas(textInput, { width: 200 }, function (err, canvas) {
        if (err) console.error(err);
        qrcodeContainer.appendChild(canvas);
    });
}


