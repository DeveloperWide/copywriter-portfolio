let sideMenu = document.getElementById("sidemenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbweFD6aqKeYPZdDayYOBGY9Tf1H7wre55lYrR8QeQsa1qjjXOhBm7uv0PnBQ9DlJmz1/exec'

  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent successfully"
        setTimeout(function () {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

