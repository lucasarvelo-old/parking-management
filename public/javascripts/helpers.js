const generateTicket = () => {
  fetch('/tickets', {
    method: 'POST',
    body: {},
  })
    .then(res => {
      if (res.status !== 200) {
        console.error('Error Status Code: ' + res.status);
        return;
      }

      return res.json();
    })
    .then(ticketNumber => {
      const screen = document.querySelector('#screen');
      const message = isNaN(ticketNumber)
        ? ticketNumber
        : 'Your Ticket Number is ' + ticketNumber;

      screen.textContent = message;
    });
};

const getFee = () => {
  const ticketNumber = document.querySelector('#ticketNumberFee').value;

  fetch('/tickets/' + ticketNumber, {
    method: 'GET',
  })
    .then(res => {
      if (res.status !== 200) {
        console.error('Error Status Code: ' + res.status);
        return;
      }

      return res.json();
    })
    .then(fee => {
      const screen = document.querySelector('#screen');
      const now = new Date().toLocaleString('en-CA');
      const message = isNaN(fee)
        ? fee
        : 'Your parking fee at ' + now + ' is $' + fee;
      screen.textContent = message;
    });
};

const processPayment = () => {
  const ticketNumber = document.querySelector('#ticketNumberPay').value;
  const creditCardNumber = document.querySelector('#creditCardNumber').value;
  const data = { creditCardNumber: creditCardNumber };

  fetch('/payments/' + ticketNumber, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => {
      if (res.status !== 200) {
        console.error('Error Status Code: ' + res.status);
        return;
      }

      return res.json();
    })
    .then(message => {
      const screen = document.querySelector('#screen');

      screen.textContent = message;
    });
};
