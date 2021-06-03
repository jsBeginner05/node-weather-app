const request = require('request')

const forecast = (coordinateA, coordinateB, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=9563ba0cc2017e72a0a20006af34df2b&query=${coordinateA},${coordinateB}`
    
    request({
        url: url,
        json: true
    }, (error, {body}) => {
        if(error){
            callback('Unable to connect to network!', undefined)
        } else if(body.error){
            callback('Unable to find location, try another search!', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
               
            })
        }
    })


}

module.exports = forecast