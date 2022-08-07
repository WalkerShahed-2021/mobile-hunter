// document.getElementById('Error-Messege').style.display = 'none';
// search Box 
const getInputSearch = () =>{
    const searchText = document.getElementById('input-filed');
    const searchvalue = searchText.value;
    searchText.value = '';
    
    document.getElementById('Error-Messege').style.display = 'none';
    if(searchvalue == ''){
        document.getElementById('Error-Messege').style.display = 'block';
   }else{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchvalue}`)
    .then(res => res.json())
    .then(data => displayClickSearch(data.data))
    .catch(error => displayError(error));
     loadingSpinner('block')
   }
}
// Add spinner Result not found
const loadingSpinner = displayStyle =>{
     document.getElementById('spinner').style.display = displayStyle;
}
// display Error reault not found
const displayError = () => {
     document.getElementById('Error-Messege').style.display = 'block';
}

// search result show Ui
const displayClickSearch = (phones) =>{
    const searchResult = document.getElementById('search-reault');
     nophoneFound('block')
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
            nophoneFound('none')
            searchResult.appendChild(div);
        }
         loadingSpinner('none')
       
};

// phone Not Found
const nophoneFound = phoneResult => {
    document.getElementById('No-result').style.display = phoneResult;
}

// click phone detailes show
const handleClickDetailes = event => {
  const url = `https://openapi.programming-hero.com/api/phone/${event}`
  fetch(url)
  .then(res => res.json())
  .then(data => singleDitailsPhone(data.data))
  .catch(error => displayError(error));
}

// single phone details card ui
const singleDitailsPhone = (phone) => {
      console.log(phone);
      const displayId = document.getElementById('single-detiles');
      displayId.textContent = '';
      const div = document.createElement('div');
      div.classList.add('details-card');
      div.innerHTML = `
      <img src=${phone.image} alt="">
      <h2>Name: ${phone.name}</h2>
      <h3>Name: ${phone.brand}</h3>
      <p>Display: ${phone.mainFeatures.displaySize}</p>
      <p>Memory: ${phone.mainFeatures.memory}</p>
      <h4>Storage: ${phone.mainFeatures.storage}</h4>
     `
     displayId.appendChild(div);
}