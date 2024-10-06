window.addEventListener('error', (e) => {
    e.preventDefault()
    console.log(`Custom error handler: Error in ${e.filename} at line ${e.lineno}: ${e.message}`);
    return true
})


const txtAreaElement = document.querySelector('#reviewComment')
const currentCountElement = document.querySelector('#currentCount')
const maxChar = 100

const limitChar = function () {
    try {
        const currentCount = txtAreaElement.textLength
        currentCountElement.textContent = currentCount
        if( currentCount > maxChar) {
            txtAreaElement.value = txtAreaElement.value.slice(0, maxChar)
            throw "You have exceeded the character limit"
        }else{
            document.querySelector('#errorMessage').innerHTML = ''
        }
    } catch (error) {
        document.querySelector('#errorMessage').innerHTML = error
    }

}







txtAreaElement.addEventListener('keyup',limitChar)