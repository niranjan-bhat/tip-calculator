tipPercentage = billAmount = noOfPerson = 0
document.querySelector('.reset-btn').addEventListener('click', () => {
    Reset();
})
document.querySelector('#noOfPeople').addEventListener('keyup', (event) => {
    noOfPerson = event.target.value;
    if (noOfPerson == 0) {
        document.querySelector('.error').style.display = 'block';
        return;
    }
    document.querySelector('.error').style.display = 'none';

    CalculateTip();
});

document.querySelector('#bill-amount').addEventListener('keyup', (event) => {
    billAmount = event.target.value;
    CalculateTip();
});

document.querySelector('.custom-input').addEventListener('keyup', (event) => {
    tipPercentage = event.target.value;
    RemoveActiveClass();
    CalculateTip();
});

btnArray = document.querySelectorAll('.btn').
forEach(input => input.addEventListener('click', (event) => {

    tipPercentage = event.target.dataset.tippercentage;
    RemoveActiveClass();
    event.target.classList.add('active');
    CalculateTip();
}));


function RemoveActiveClass() {
    document.querySelectorAll('.btn').
    forEach(input => input.classList.remove('active'));
}

function CalculateTip() {
    if (noOfPerson && billAmount && tipPercentage) {
        document.querySelector('.tip-per-person').innerHTML = '$' + (billAmount * tipPercentage / 100);
        document.querySelector('.tip-total').innerHTML = '$' + (billAmount * tipPercentage / 100) * noOfPerson;
    }
}

function Reset() {
    document.querySelector('.tip-per-person').innerHTML = '$0';
    document.querySelector('.tip-total').innerHTML = '$0';
    RemoveActiveClass();
    document.querySelector('#noOfPeople').value = null;
    document.querySelector('#bill-amount').value = null;
    document.querySelector('.custom-input').value = null;

    tipPercentage = billAmount = noOfPerson = 0
}