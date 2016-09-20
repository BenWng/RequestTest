/**
 * Created by Ben_Big on 8/4/16.
 */
'use strict'

var request=require ('request');
var q=require('q');
var j=request.jar();




var cookiePromise=q.defer();
getCookie(cookiePromise);


function getCookie(promise){
    request.post('http://localhost:8080/login',
        {form:{username:'butters@gmail.com',password:'Stotch'}},
        function(err,httpResponse,body){
            var rawCookie=(httpResponse.headers['set-cookie'])[0];
            promise.resolve(rawCookie);
        }
    )
}


cookiePromise.promise.then(function(rawCookie){
        var cookie=request.cookie(rawCookie);
        var url='http://localhost:8080/user';
        j.setCookie(cookie,url);
        request({url:url, jar: j},function(err,httpResponse,body){
        console.log(body);
        })
    }
)



cookiePromise.promise.then(function(rawCookie){
        var cookie=request.cookie(rawCookie);
        var url='http://localhost:8080/user/item/1';
        j.setCookie(cookie,url);
        request({url:url, jar: j},function(err,httpResponse,body){
        console.log(body);
        })
    }
)
