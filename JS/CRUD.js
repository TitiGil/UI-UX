

function ReadJSON(url){
   var result = fetch(url)
    .then((res)=>{
        if(res.status === 200)
        return res.json();
        else{
        return res.status+" - " + res.statusText;
    }
    })
    .then((data) =>{
     //   console.log(data);
        return data;
    })
    .catch(error=>{
        console.log("Error in fetching data : "+error);
    })
 return result;
}

function CreateJSON(url,input){
    var result = fetch(url,
        {method: 'POST',
         body: JSON.stringify(input),
         headers : {
             "Content-type": 'applicaton/json; charset=UTF-8'
            }
        }
        )
    .then((res)=>{
       
            if(res.status === 200)
              return res.json();
            else{
              return res.status+" - " + res.statusText;
        
            }
    })
    .then((data) =>{
     //   console.log(data);
        return data;
    })
    .catch(error=>{
        console.log("Error in fetching data : "+error);
    })
 return result;
}

function UpdateJSON(url,input){
    var result = fetch(url,
        {method: 'PUT',
         body: JSON.stringify(input),
         headers : {
             "Content-type": 'applicaton/json; charset=UTF-8'
            }
        }
        )
    .then((res)=>{
       
            if(res.status === 200)
              return res.json();
            else{
              return res.status+" - " + res.statusText;
        
            }
    })
    .then((data) =>{
     //   console.log(data);
        return data;
    })
    .catch(error=>{
        console.log("Error in fetching data : "+error);
    })
 return result;
}


function Delete(url,input){
    var result = fetch(url,
        {method: 'DELETE',
         body: JSON.stringify(input),
         headers : {
             "Content-type": 'applicaton/json; charset=UTF-8'
            }
        }
        )
    .then((res)=>{
       
            if(res.status === 200)
              return res.json();
            else{
              return res.status+" - " + res.statusText;
        
            }
    })
    .then((data) =>{
     //   console.log(data);
        return data;
    })
    .catch(error=>{
        console.log("Error in fetching data : "+error);
    })
 return result;
}


/******************************************************/
////TEST ////
/*  The CRUD functions return result as .then promise function type */
function testCreate(){
    console.log("test");
    let url="https://reqres.in/api/users";
    console.log(CreateJSON(url,{"name":'amin',"job":'programmer'}).then(res=>{
        if(typeof(res)==="object"){
            // handle data base on demand
            console.log(res);


        }else if(typeof(res)==='string'){
            // print data if response with  a code except 200 
            console.log( res );
        }
        else{
            // if response is not in normal state
            console.log("the result fromserver is NOT identified - status code is  : "+res);
        }
    }));
}
function testRead(){
    console.log("test");
    let url="https://reqres.in/api/users/10";
    console.log(ReadJSON(url).then(res=>{
        // Handle THe kind of response
        if(typeof(res)==="object"){
            // handle data base on demand
            console.log(res);


        }else if(typeof(res)==='string'){
            // print data if response with  a code except 200 
            console.log( res );
        }
        else{
            // if response is not in normal state
            console.log("the result fromserver is NOT identified - status code is  : "+res);
        }
        
    }));

}

function testUPDATE(){
    console.log("test");
    let url="https://reqres.in/api/users/15";
    console.log(UpdateJSON(url,{"name":'amin',"job":'programmer'}).then(res=>{
        if(typeof(res)==="object"){
            // handle data base on demand
            console.log(res);


        }else if(typeof(res)==='string'){
            // print data if response with  a code except 200 
            console.log( res );
        }
        else{
            // if response is not in normal state
            console.log("the result fromserver is NOT identified - status code is  : "+res);
        }
    }));

}
