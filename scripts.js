function convertDmsToDd() {
    const degrees = parseFloat(document.getElementById('dmsDegrees').value);
    const minutes = parseFloat(document.getElementById('dmsMinutes').value);
    const seconds = parseFloat(document.getElementById('dmsSeconds').value);
    const direction = document.getElementById('dmsDirection').value;

    const dd = degrees + (minutes / 60) + (seconds / 3600);
    const decimalDegrees = (direction === 'S' || direction === 'W') ? -dd : dd;

    document.getElementById('dmsToDdResult').innerText = `Decimal Degrees: ${decimalDegrees.toFixed(6)}`;
}

function convertDdToDms() {
    let dd = parseFloat(document.getElementById('dd').value);
    const isNegative = dd < 0;
    dd = Math.abs(dd);

    const degrees = Math.floor(dd);
    const minutes = Math.floor((dd - degrees) * 60);
    const seconds = ((dd - degrees - minutes / 60) * 3600).toFixed(2);
    const direction = isNegative ? 'S' : 'N'; // Change according to context

    document.getElementById('ddToDmsResult').innerText = `Degrees: ${degrees}, Minutes: ${minutes}, Seconds: ${seconds}, Direction: ${direction}`;
}