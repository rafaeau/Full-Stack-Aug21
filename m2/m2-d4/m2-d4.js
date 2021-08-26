function addPerson(event) {
  event.preventDefault()
  
  const li = document.createElement("li")
  li.classList.add("list-group-item")
  li.classList.add("d-flex")
  li.classList.add("align-items-center")
  li.innerHTML = inputName.value
  
  const backBtn = document.createElement("button")
  
  backBtn.classList.add("btn")
  backBtn.classList.add("btn-outline-primary")
  backBtn.classList.add("btn-back")
  backBtn.classList.add("ml-auto")
  
  backBtn.addEventListener("click", function () {
      teamQueue.appendChild(this.parentNode)
  })
  
  backBtn.innerHTML = "⬅"
  
  li.appendChild(backBtn)
  
  teamQueue.appendChild(li)
}