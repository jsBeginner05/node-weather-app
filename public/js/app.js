console.log('Client side javascript file is loaded!')

//Use of Fetch api; cannot be used in node js
// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     console.log(response)
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         } else {
//             console.log(data)
//         }
        
//     })
// })

const weatherForm = document.querySelector('form')
const locationInput = document.querySelector('input')
const message_1 = document.querySelector('#message_1')
const message_2 = document.querySelector('#message_2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const finalLoc = locationInput.value
    const url = `http://localhost:3000/weather?address=${finalLoc}`


    message_1.textContent='Data is loading...'
    message_2.textContent=''

    fetch(url).then((response) => {
    console.log(response)
    response.json().then((data) => {
        if(data.error){
            message_1.textContent=''
            message_2.textContent=data.error
        } else {
            message_1.textContent=`Actual Temperature: ${data.forecast.temperature}`
            message_2.textContent=`Feels Like: ${data.forecast.feelslike}`
        }
        
    })
})

})