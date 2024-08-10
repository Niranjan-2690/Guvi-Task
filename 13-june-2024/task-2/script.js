let serialNumber = 1
document.getElementById("myForm").addEventListener("submit", (e)=>{
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const city = document.getElementById("city").value
    const state = document.getElementById("state").value
    const postcode = document.getElementById("postcode").value
    const gender = document.getElementById("gender").value
    const foods = Array.from(document.getElementsByName("foods"))
                        .filter(input => input.checked)
                        .map(input => input.value)
                        .join(", ");

    e.preventDefault()

    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `<th scope="row">${serialNumber}</th>
                          <td>${firstname}</td>
                          <td>${lastname}</td>
                          <td>${email}</td>
                          <td>${address}</td>
                          <td>${city}</td>
                          <td>${state}</td>
                          <td>${postcode}</td>
                          <td>${gender}</td>
                          <td>${foods}</td>`
    document.getElementById("myTable").appendChild(tableRow);
    serialNumber++;
    document.getElementById("myForm").reset()
})