    //Initialization
    var listHist = document.getElementById("history");
    var currentResult = 0;
    var currentNumber = 0;
    var isFractional = false;
    var lastOp = 'undefined';
    var clear = true;
    leftOp = 0;
    //

    //Constructing the input

    function AddNumber(id){
        let stringNumber = document.getElementById('screen').value;
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

    function RemoveNumber(){
        if(clear){
            document.getElementById("screen").value = 0;
        }
        else{
            let stringNumber = document.getElementById('screen').value;
            if(stringNumber[stringNumber.length - 1] == "."){
                isFractional = false;
            }
            if(stringNumber.length == 1){
                stringNumber = "0";
            }
            else{
                stringNumber = stringNumber.substr(0, stringNumber.length - 1);
            }
            currentNumber = parseInt(stringNumber);
            document.getElementById('screen').value = stringNumber;
        }
    };

    function Dot(){
        if(clear){
            currentNumber = 0;
        }
        if(!isFractional){
            isFractional = true;
            document.getElementById('screen').value = currentNumber + ".";
        }
    };
    
    function Reset(){
        currentResult = 0;
        currentNumber = 0;
        lastOp = 'undefined';
        leftOp = 0;
        show(currentResult);
        isFractional = false;
    };

    function DeleteHistory(){
        let hist = document.getElementById("history");
        hist.remove();
        hist = document.createElement("ul");
        hist.setAttribute("class", "list-group");
        li = document.createElement("li");
        li.innerText = "History";
        li.setAttribute("class", "list-group-item active bg-dark list-header");
        hist.appendChild(li);
        let container = document.getElementById("history-container");
        container.appendChild(hist);
    };
    //

    //Operations

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

    function Result(){
        getResult(lastOp);
        lastOp = "undefined";
        currentNumber = currentResult;
        clear = true
    };
    //
    
    //Auxiliar Functions

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
        li.setAttribute("class", "list-group-item");
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
    //