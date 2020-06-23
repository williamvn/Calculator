

    var listHist = [];
    var currentResult = 0;
    var currentNumber = 0;
    var lastOp = 'sum';
    leftOp = 0;

    function AddNumber(id){
        currentNumber = currentNumber * 10 + id;
        document.getElementById('screen').value = currentNumber;
    };

    function RemoveNumber(){
        currentNumber = parseInt(currentNumber/10);
        document.getElementById('screen').value = currentNumber;

    }

    function getResult(cmd)
    {
        listHist.push(leftOp + " " + cmd + " " + currentNumber);
        lastOp = cmd;
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
                break;
        };
        screen = document.getElementById('screen');
        screen.value = currentResult;
        leftOp = currentResult
        currentNumber = 0
    };

    function Sum(){
        getResult('+')
        // listHist.push(leftOp + " + " + rightOp  + " = " + currentResult + "</br>");
    };
    
    function Substraction(){
        getResult('-')
        // listHist.push(leftOp + " + " + rightOp  + " = " + currentResult + "</br>");
    };
    
    function Mult(){
        getResult('*')
        // listHist.push(leftOp + " + " + rightOp  + " = " + currentResult + "</br>");
    };

    function Division(){
        getResult('/')
        // listHist.push(leftOp + " + " + rightOp  + " = " + currentResult + "</br>");
    };

    function Pow(){
        getResult('^')
        // listHist.push(leftOp + " + " + rightOp  + " = " + currentResult + "</br>");
    };

    function Result(){
        getResult(lastOp);
    }

