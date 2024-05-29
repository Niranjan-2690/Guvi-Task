let obj1 = {
    name: "Person",
    age: 5
}
let obj2 = {
    age: 5,
    name: "Person"
}

function compare(object1, object2){
    const compareobject1 = JSON.stringify(object1, Object.keys(object1).sort())
    const compareobject2 = JSON.stringify(object2, Object.keys(object2).sort())
    return compareobject1 === compareobject2
}

if (compare(obj1, obj2)){
    console.log("Same")
} else{
    console.log("different")
}