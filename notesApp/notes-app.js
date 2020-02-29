const notes = [{
    title: 'ImPortant actions',
    body: 'Call Pastor Igbekele. Call Sister Bose'
}, {
    title: 'Personal TargeTs',
    body: 'Complete this course. Get a job'
}, {
    title: 'sPiritual Goals',
    body: 'Get back on track. Pray more'
}]

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
})

const filters = {
    searchText: ''
}

const renderedNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
   })
   document.querySelector('#notes').innerHTML = ''
   filteredNotes.forEach( function (note) {
       const noteEl = document.createElement('p')
       noteEl.textContent = note.title
       document.querySelector('#notes').appendChild(noteEl)
   }); 
}
renderedNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderedNotes(notes, filters)
})
document.querySelector('#new-notes').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})
