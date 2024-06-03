var data = {
    "name": "Niranjan",
    "contact no": "9566092441",
    "e-mail": "rpniranjan@hotmail.com",
    "Experiance": {
        "company_name": "Fivebrains Software Services Pvt Ltd",
        "role": "Software Engineer",
        "Total years of Experiance": 4,
        "projects": {
            "project name": "Primetec Industries",
            "from": "5-August-2021",
            "to": "30-April-2023",
            "tools": {
                "front end": ["HTML", "CSS", "Bootstrap", "React"],
                "API": "Axios",
                "back end": ["Node", "MySQL", "Express"]
            }
        }
    },
    "Education": {
        "UG/PG": {
            "degree": "BE",
            "specalization": "Computer Science",
            "year": 2013,
            "percentage": "61.5%"
        },
        "HSC": {
            "schooling": "Dhanish Matric Hr Sec School",
            "specalization": "Science",
            "year": "2007",
            "percentage": "54%"
        },
        "SSLC":{
            "schooling": "Dhanish Matric Hr Sec School",
            "specalization": "Social Science",
            "year": "2005",
            "percentage": "67%"
        }
    },
    "Skills": ["Html", "CSS", "BootStrap", "JavaScript", "React", "Node", "MySQL", "SQL Server", "MangoDB", "GITHub"],
    "Certification": "FullStack Developer"
}

//--------For Loop--------------
for (let i = 0; i < data.Skills.length; i++){
    console.log(data.Skills[i])
}
//--------For in----------------

for(let key in data.Skills){
    console.log(data.Skills[key])
}

//--------For of----------------

for (let key of data.Skills){
    console.log(key)
}
//--------ForEach-----------------

Object.keys(data.Skills).forEach(key => {
    console.log(data.Skills[key]);
});