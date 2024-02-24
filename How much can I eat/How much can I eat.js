 document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const guests = parseInt(document.getElementById('guests').value);
    const occasion = document.getElementById('occasion').value;
    const duration = parseInt(document.getElementById('duration').value);
    const foodConsumption = document.getElementById('foodConsumption').value;
    const pizzaTypes = parseInt(document.getElementById('pizzaTypes').value);
    const date = document.getElementById('date').value;
    
    let response = `Hello ${firstName}! `;
    response += `Thank you for your input. `;
    
    if (guests <= 0 || isNaN(guests) || isNaN(duration) || isNaN(pizzaTypes) || !date) {
      response += 'Please enter valid numbers for guests, duration, date and pizza types.';
    } else {
      let totalPizza = guests * pizzaTypes;
      let totalSlices = totalPizza * (duration < 2 ? 2 : duration); // At least 2 slices per hour
      if (foodConsumption === 'low') {
        response += `Based on the information you provided, you'll need ${totalSlices} slices of pizza.`;
      } else if (foodConsumption === 'medium') {
        response += `Considering average consumption, prepare ${totalSlices * 1.5} slices of pizza.`;
      } else if (foodConsumption === 'high') {
        response += `Expect high consumption; make at least ${totalSlices * 2} slices of pizza.`;
      }

      if (occasion !== 'none') {
        response += ` This is a ${occasion === 'birthday' ? 'birthday' : 'anniversary'} event. `;
      }
      
      response += `We will contact you via email at ${email} for further details about the reservation on `+ date;
    }
    
    document.getElementById('response').innerText = response;
  });