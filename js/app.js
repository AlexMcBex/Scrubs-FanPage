const bioButtons = document.querySelectorAll('.bio')
const jobsButtons = document.getElementsByClassName('jobs')
const characters = document.getElementsByClassName('character')

  const showBio=(e)=>{
   console.log(e)
  }


// console.log()
bioButtons.forEach(button => {
    button.addEventListener('click', showBio)
})