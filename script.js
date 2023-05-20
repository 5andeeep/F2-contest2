let database = [
            {
                id:1,
                name:"john",
                age:"18",
                profession:"developer"
            },
            {
                id:2,
                name:"jack",
                age:"20",
                profession:"developer"
            },
            {
                id:3,
                name:"karen",
                age:"19",
                profession:"admin"
            }
];

let infoData = document.getElementById("insert");
function display(){
    for(let i=0;i<database.length;i++){
    let elements = document.createElement("div");
    elements.className = "insertedNames";
    elements.innerText = "ID: "+database[i].id + " Name: "+database[i].name  + " Profession: "+database[i].profession +" Age: "+ database[i].age;
    infoData.append(elements)
    }
}
display();

let nextIndex = 4;
function addUserData(){
    let values = document.getElementsByTagName("input");
    if(values[0].value === "" || values[1].value === "" || values[2].value === ""){
        alert("Please enter information");
    }
    else{

        let obj = {id:"",name:"",age:"",profession:""};
        obj.id = nextIndex++;
        obj.name = values[0].value;
        obj.profession = values[1].value;
        obj.age = values[2].value;
        database.push(obj);
        
        
        let elements = document.createElement("div");
        elements.className = "insertedNames";
        elements.innerText = "ID: "+obj.id + " Name: "+obj.name  + " Profession: "+obj.profession +" Age: "+ obj.age;
        infoData.append(elements);
        
        alert("successfully added");
        values[0].value = "";
        values[1].value = "";
        values[2].value = "";
    }
}




let forSelect = document.getElementById("forProfession");
console.log(forSelect)
function filter(){
    let output = database.filter(function(element,index,database){
        return element.profession=="developer";
    })

    
    console.log(output);
}