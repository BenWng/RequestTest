/**
 * Created by Ben_Big on 8/4/16.
 */
'use strict'

var request=require ('request');
var q=require('q');


request.post('http://localhost:8080/login',
    {form:{username:'butters@gmail.com',password:'Stotch'}},
    function(err,httpResponse,body){
        var rawCookie=(httpResponse.headers['set-cookie'])[0];
        
    }
)

var j=request.jar();
var cookie=request.cookie(rawCookie);
var url='http://localhost:8080/user';
j.setCookie(cookie,url);
request({url:url, jar: j},function(err,httpResponse,body){
    console.log(body);
})

