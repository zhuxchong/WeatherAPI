// to disable same origin policy in Chrome use one of the following commands

//windows
//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//Mac
//open -a Google\ Chrome --args --disable-web-security --user-data-dir
//Linux
//google-chrome --disable-web-security



//example of an ajax call to the weather api (demo purpose only)
/*

$.ajax({
            url: 'http://api.apixu.com/v1/forecast.json?key=b35221898d3a492da3983251192102&q=Brisbane&days=5',
            success: function(res){
                console.log(res)
            },
            error: function(err){console.log(err);}  //network error
        });
        $.ajax({
            url: 'http://api.apixu.com/v1/forecast.json?key=b35221898d3a492da3983251192102&q=Melbourne&days=5',
            success: function(res){
                console.log(res)
            },
            error: function(err){console.log(err);}  //network error
        });
        $.ajax({
            url: 'http://api.apixu.com/v1/forecast.json?key=b35221898d3a492da3983251192102&q=-36.5000,148.3333&days=5',
            success: function(res){

                console.log(res)
            },
            error: function(err){console.log(err);}  //network error
        });
*/

//for more information about the weather api https://market.mashape.com/weatherbit/weather