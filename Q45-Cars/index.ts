//Cars: Write a function that stores information about a car in a Object. The function
// should always receive a manufacturer and a model name. It should then accept an arbitrary
// number of keyword arguments. Call the function with the required information and two other 
// name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly

     function cars(manufacturer:string,model:string,...extraOption:{[key:string]:any}[]){
        let carInfo ={
            manufacturer,
            model,
            ...Object.assign({}, ...extraOption)



        }
        
        return carInfo;
    
        };
        let carsInfo=cars("toyota","civic",{color:"black"},{features:["power window"]});

        console.log(carsInfo);
        let carsInfo2=cars("honda","civic",{color:"red"},{features:["auto drive","tube less tire"]})
       console.log(carsInfo2);
       let carsInfo3=cars("ferrari","modena",{color:"blue"},{features:["high speed","fully automated"]})
       console.log(carsInfo3);