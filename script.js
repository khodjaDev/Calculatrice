    const calculatorContainer = document.getElementById("calculator");
    const display = document.getElementById("display");
    const buttons = document.getElementById("buttons");
    const buttonList = [

        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C', '(', ')', '%'
    ];
    buttonList.forEach(buttonText => {
    const button = document.createElement("button");
    button.innerText = buttonText;
    button.addEventListener("click", () => handleButtonClick(buttonText));
    buttons.appendChild(button);
    });
    
    function handleButtonClick(buttonText) {
    if (buttonText === 'C') {
    display.value = '';
    } else if (buttonText === '=') {
    try {
    display.value = eval(display.value);
    } catch (error) {
    display.value = 'Error';
    }
    } else {
    display.value += buttonText;
    }
    }