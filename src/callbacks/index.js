function sum (num1, num2){
    return num1+num2
}
function calc(num1, num2, callback){
    return callback( num1, num2);
}

console.log(calc(8,9,sum));

function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
  }
  
  function logQuote(frase){
    console.log(frase);
  }
  
  createQuote("eat your vegetables!", logQuote);

  function serverRequest(query, callback){
    setTimeout(function(){
      var response = query + "full!";
      callback(response);
    },5000);
  }
  
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);
  
  function date (dat, callback){
      console.log((new Date).toLocaleTimeString());
      setTimeout(function(){
          let date = dat  + (new Date).toLocaleTimeString();
          callback( date )
      },1500)
  }

  function printDate( show){
      console.log(show)
  };

  date("Happy ",printDate);