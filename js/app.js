const getInputSearch = () =>{
    const searchText = document.getElementById('input-filed');
    const searchvalue = searchText.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchvalue}`)
    .then(res => res.json())
    .then(data => displayClickSearch(data.data))
}

const displayClickSearch = (phones) =>{
    const searchResult = document.getElementById('search-reault');
    searchResult.textContent = '';
    for(const phone of phones){
        const div = document.createElement('div');
        div.classList.add('style-card');
        div.innerHTML = `
         <img src=${phone.image} alt="">
         <h2>Name: ${phone.phone_name}</h2>
         <h2>Brand: ${phone.brand}</h2>
         <button id=${phone.slug} onClick="handleClickDetailes(this.id)" class="btn">Details</button> 
        `
        searchResult.appendChild(div);
    }
};

const handleClickDetailes = event => {
  const url = `https://openapi.programming-hero.com/api/phone/${event}`
  fetch(url)
  .then(res => res.json())
  .then(data => singleDitailsPhone(data.data))
}

const singleDitailsPhone = (phone) => {
      console.log(phone);
      const displayId = document.getElementById('single-detiles');
      displayId.textContent = '';
      const div = document.createElement('div');
      div.classList.add('details-card');
      div.innerHTML = `
      <img src=${phone.image} alt="">
      <h2>Name: ${phone.name}</h2>
      <h2>Brand: ${phone.brand}</h2>
     `
     displayId.appendChild(div);
    
}