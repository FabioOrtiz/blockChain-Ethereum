/* const taskForm = document.querySelector("#taskForm")

document.addEventListener("DOMContentLoaded", () =>{
    App.init()
})

taskForm.addEventListener("submit", e=>{
    e.preventDefault()

    App.createTask(
        taskForm['title'].value,
        taskForm['description'].value
    )
}) */

const inscriptionForm = document.querySelector("#inscriptionForm")

document.addEventListener("DOMContentLoaded", () =>{
    App.init()
})

inscriptionForm.addEventListener("submit", e=>{
    e.preventDefault()

    App.createInscription(
        parseInt(inscriptionForm['title'].value),
        parseInt(inscriptionForm['code'].value),
        parseInt(inscriptionForm['numberCurriculum'].value),
        inscriptionForm['emailStudent'].value,
        parseInt(inscriptionForm['numberInvestigationGroup'].value),
        parseInt(inscriptionForm['directorTeacher'].value),
        inscriptionForm['objectiveProject'].value
    )
})