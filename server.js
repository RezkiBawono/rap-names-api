//inputing express npm module

const { response } = require('express');
const express =  require('express')
const app =  express()


//create an api
const rappers = {
    '21 savage' : {
        'age' : 29, 
        'birthName' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
    },
    'chance the rapper' : {
        'age' : 29, 
        'birthName' : 'Chancelor Bennett',
        'birthLocation' : 'Chicago, Illianois'
    },
    'unknown' : {
        'age' : 'unknown',
        'birthName' : 'unknown',
        'birthLocation' : 'unknown'
    }
}

// changing port name 
const PORT = 8000;

// accepting request from client and respond it with data
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//request data from api
app.get('/api/:name', (request, response) => {
    
//request data spesific to their name
    const rapperName = request.params.name.toLowerCase()  

    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else{
        response.json(rappers['unknown'])
    }
})

// make sure that the server is running with a log
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
})