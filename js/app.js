console.log("app.js is welcoming you")
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
   let addTxt = document.getElementById("addTxt");
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }

   notesObj.push(addTxt.value);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   addTxt.value = " ";
   console.log(notesObj);
   showNotes();


})
// function to show elements from local storage

function showNotes() {
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   let html = "";
   notesObj.forEach(function (element, index) {
      html += ` 
            <div   class="notecard my-2 mx-2 " style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">note ${index + 1}</h5>
              <p class="card-text">${element}</p>
             <button   id="${index} "onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
            </div> `;
   });
   let notesElm = document.getElementById('notes');
   if (notesObj.length != 0) {
      notesElm.innerHTML = html;

   }
   else {
      notesElm.innerHTML = `nothing to show! use Add a note section to add notes`;
   }
}



//  Delete function()..

function deleteNote(index) {
   console.log('im deleting this index', index);
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   notesObj.splice(index, 1);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   showNotes();
}


// Search operation..

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () 
{  let inputVal = search.value.toLowerCase();
   console.log('search is fired',inputVal);
  
   let notecards = document.getElementsByClassName('notecard');
   Array.from(notecards).forEach(function(element)
   {
      let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
      if(cardTxt.includes(inputVal))
      {
         element.style.display = "block";
      }
      else
      {
         element.style.display = "none";
      }
     
   })
      
});