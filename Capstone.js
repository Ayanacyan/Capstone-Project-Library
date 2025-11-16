function myLibrary(){
  
}
 

var myForm= document.getElementById("myForm");
            var input= document.getElementById("thing");
            var Item= document.getElementById("list");
            myForm.addEventListener("submit", 
            function(event){
                event.preventDefault()
                createItem(thing.value)
            })
            function createItem(inputItems){
                var items=`<li>${inputItems}
                    <button onclick="deleteElement(this)">delete</button> </li>`
                    Item.insertAdjacentHTML("beforeend", items)
                    input.value=""
                    input.focus()
            }
            function deleteElement(ElementToDelete){
                ElementToDelete.parentElement.remove()
            }