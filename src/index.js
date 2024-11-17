function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);