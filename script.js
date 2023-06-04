const form = document.querySelector('.add');

const Ulist = document.querySelector('.todos');  // 'ul' is also fine but there are mnay ul so avoid confusion 

const searchTask = document.querySelector('.search input');

// console.log(form);

const newAdd = (value) => {
    return  `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${value}</span>
    <i class="far fa-trash-alt delete"></i>
  </li> `;
}

// adding the new element in the list 

form.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log('rahul');   
  // console.log( form.add.value.trim());  // trim is an Js method to remove extra space from the string 

   const valueString = form.add.value.trim();

   if(valueString.length){
   Ulist.innerHTML+=newAdd(valueString);

   form.reset();}

});

// delete the element from the list 

Ulist.addEventListener('click', e =>{
    //   if(e.target.classList.contains('delete')){
    //     e.target.classList.parentElement.remove();          // bug in this don't use class list which is an array 
    //   }


      if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
      }
} );

// now we are working on searching which is the main task 


// filterd the search add the filtered class those who don't match and remove the filtered class those who match 
// there is no need to add filtered if the search list contains the value 
const filterSearch = term =>{
    // console.log(Array.from(Ulist.children));
     Array.from(Ulist.children)
     .filter(todos =>  !todos.textContent.toLowerCase().includes(term)) 
     .forEach(todos =>{
           todos.classList.add('filtered');
     });

     Array.from(Ulist.children)
     .filter(todos =>  todos.textContent.toLowerCase().includes(term)) 
     .forEach(todos =>{
           todos.classList.remove('filtered');
     });

     



}
searchTask.addEventListener('keyup', (e) =>{

      // console.log(e.key);      
    
    
    const searchValue = searchTask.value.trim().toLowerCase(); // searchTask.search.value ; you can also use it 
   // console.log(searchValue);
   filterSearch(searchValue);

});

// include is used for string 
// contains is used for class
