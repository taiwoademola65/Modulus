 const count = () => {
      let userInput = document.getElementById('input').value;
      let displayArea = document.getElementById('display')

      for (let i = 1; i <= userInput; i++) {
        // let show = i;
        // console.log(i);
        if (i % 3 == 0 && i % 5 == 0) {
          displayArea.innerHTML += `<p class="text-success">${i} fizz buzz</p>`
        }else if(i % 3 == 0){
          displayArea.innerHTML += `<p class="text-primary">${i} fizz</p>`
        }else if(i % 5 == 0){
          displayArea.innerHTML += `<p>${i} buzz</p>`
        }else{
          displayArea.innerHTML += `<p>${i} neither fizz nor buzz</p>`
        }

          }
            }
