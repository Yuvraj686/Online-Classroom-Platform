const scriptURL='https://script.google.com/macros/s/AKfycbyZweRWavaqoUxTiXdOMHYyBXUwSWquS_dnR8F8NJJ7Mm6zDXak86s1GwTDGkvRfHLU/exec'
const form = document.forms['google-sheet']

forms.addEventListner('submit',e =>{e.preventDefault()
    fetch(scripURL, {method: 'POST',body:new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! we will contact you soon.."))
})