const schoolLookup = document.querySelector('#info')
const schoolPlchd = document.querySelector('#input')

schoolLookup.addEventListener('click', ()=> {
    console.log(schoolLookup.classList)
    if(schoolLookup.classList == "infoName") {
        schoolLookup.innerText = "I'd like to look up my Agency by name"
        schoolPlchd.placeholder = "School's name"
        
        schoolLookup.classList.add('infoSchool')
        schoolLookup.classList.remove('infoName')
    } else if (schoolLookup.classList == "infoSchool") {
        schoolLookup.innerText = "I'd like to look up my Agency by school"
        schoolPlchd.placeholder = "Agency's name"
        schoolLookup.classList.add('infoName')
        schoolLookup.classList.remove('infoSchool')
    }
    
})

