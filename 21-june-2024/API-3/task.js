function meowFacts(){
    const fact = document.getElementById("meowfacts")

    //Create input
    const textarea = document.createElement("textarea")
    textarea.className = "input"
    textarea.placeholder = "Mewo Facts"
    fact.appendChild(textarea)

    //create button
    const btn = document.createElement('button');
    btn.innerText = "click here for more facts"
    btn.className = "btn"
    fact.appendChild(btn)

    async function fetchMeowFacts(){
    try{
        const response = await fetch("https://catfact.ninja/fact")
        const result = await response.json()
        textarea.value = result.fact
    }catch(error){
        console.log("Error fetching cat fact", error);
        textarea.value = "Error fetching cat fact!";
    }
}
    btn.addEventListener("click", fetchMeowFacts)
    fetchMeowFacts();
}
meowFacts()