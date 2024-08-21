// app.js

function countVowels() {
    const text = document.getElementById('text').value;
    
    // Data Privacy: Avoid storing or transmitting user text if not necessary.
    // This example does not store or transmit user text to protect privacy.
    
    // Text validation
    if (!text.trim()) {
        alert('Please enter a valid text.');
        return;
    }
    
    const vowelCount = text.match(/[aeiouAEIOU]/g);
    const count = vowelCount ? vowelCount.length : 0;
    
    // Display the result in the result div
    const resultDiv = document.getElementById('result');
    const vowelCountSpan = document.getElementById('vowelCount');
    vowelCountSpan.textContent = count;
    resultDiv.style.display = 'block'; // Show the result div
}

function clearText() {
    document.getElementById('text').value = '';
    document.getElementById('result').style.display = 'none'; // Hide the result div
    
    // Data Privacy: Clear user data from the input field.
}

