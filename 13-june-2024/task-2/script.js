document.getElementById("myForm").addEventListener("submit", (e)=>{
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    console.log("Firstname: ", firstname)
    console.log("Lastname: ", lastname)
    e.preventDefault()

    let serialNumber = 1
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `<th scope="row">${serialNumber}</th>
                          <td>${firstname}</td>`
    document.getElementById("myTable").appendChild(tableRow);
    serialNumber++;
})