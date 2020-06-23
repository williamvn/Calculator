

    var listHist = document.getElementById("history");
    var currentResult = 0;
    var currentNumber = 0;
    var isFractional = false;
    var lastOp = 'undefined';
    var clear = true;
    leftOp = 0;

    function AddNumber(id){
        stringNumber = document.getElementById('screen').value;
        if(clear){
            stringNumber = isFractional? "0." :"";
        }
        if(currentNumber > 0 || isFractional){
            stringNumber += id
        }
        else{
            stringNumber = id;
        }
        currentNumber = parseFloat(stringNumber);
        clear = false;
        document.getElementById('screen').value = stringNumber;
    };

    
    // function AddFractionalDigit(digit){
    //     currentNumber = currentNumber + (digit / mantissaLength);
    //     mantissaLength *= 10;
    // };

    // function AddNumericalDigit(digit){
    //     currentNumber = parseFloat(currentNumber * 10 + digit);
    // };

    function RemoveNumber(){
        currentNumber = parseInt(currentNumber/10);
        document.getElementById('screen').value = currentNumber;
    }


    function getResult(cmd)
    {
        switch (cmd) {
            case "+":
                currentResult = leftOp + currentNumber;
                break;
            case "-":
                currentResult = leftOp - currentNumber;
                break;
            case "*":
                currentResult = leftOp * currentNumber;
                break;
            case "/":
                currentResult = leftOp / currentNumber;
                break;
            case "^":
                currentResult = leftOp ** currentNumber;
                break;
            default:
                currentResult = currentNumber
                break;
        };
        let li = document.createElement('li');
        li.innerText = (lastOp) != "undefined"? leftOp + " " + cmd + " " + currentNumber + " = " + currentResult: "clear";
        listHist.appendChild(li);
       
        lastOp = cmd;
        show(currentResult);
        leftOp = currentResult
        currentNumber = 0
    };

    function show(value){
        screen = document.getElementById('screen');
        screen.value = value;
    };

    function Sum(){
        if(lastOp == "undefined"){
            leftOp = currentNumber;
            currentNumber = 0;
        }
        else{
            getResult(lastOp)
        }
        lastOp = "+";
        isFractional = false;
    };
    
    function Substraction(){
        if(lastOp == 'undefined'){
            leftOp = currentNumber;
            currentNumber = 0;
        }
        else{
            getResult(lastOp)
        }
        lastOp = "-";
        isFractional = false;
    };
    
    function Mult(){
        if(lastOp == 'undefined'){
            leftOp = currentNumber;
            currentNumber = 0;
        }
        else{
            getResult(lastOp)
        }
        lastOp = "*";
        isFractional = false;
    };

    function Division(){
        if(lastOp == 'undefined'){
            leftOp = currentNumber;
            currentNumber = 0;
        }
        else{
            getResult(lastOp)
        }
        lastOp = "/";
        isFractional = false;
    };

    function Pow(){
        if(lastOp == 'undefined'){
            leftOp = currentNumber;
            currentNumber = 0;
        }
        else{
            getResult(lastOp)
        };
        lastOp = "^";
        isFractional = false;
    };

    function Dot(){
        if(clear){
            currentNumber = 0;
        }
        if(!isFractional){
            isFractional = true;
            document.getElementById('screen').value = currentNumber + ".";
        }
    }

    function Result(){
        getResult(lastOp);
        lastOp = "undefined";
        currentNumber = currentResult;
        clear = true
    }

    function Reset(){
        currentResult = 0;
        currentNumber = 0;
        lastOp = 'undefined';
        leftOp = 0;
        show(currentResult);
        mantissaLength = 0;
    }

