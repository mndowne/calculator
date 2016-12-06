$(document).ready(function(){

		var screenString = "";
		var pie = 3.141592;

		function factorial(n){
		var f1=n;
		n = n-1;
		while (n>0){
		if (n == 1 || n == 0){
		return f1;
		} else if(n < 0){
		screenString = "syntex error";
		return "syntex error";
		}
		f1 = n * f1;
		n = n-1;
		}//end of while
		}//end of factorial function
		//////////FUNCTIONS FOR ENTERING THE BUTTONS WHEN PRESSED//////
		function enterZero(){
			$("#scre").append("0");
			screenString = screenString + "0";

		}
		function enterOne(){
			$("#scre").append("1");
			screenString = screenString + "1";
		}
		function enterTwo(){
			$("#scre").append("2");
			screenString = screenString + "2";
		}
		function enterThree(){
			$("#scre").append("3");
			screenString = screenString + "3";
		}
		function enterFour(){
			$("#scre").append("4");
			screenString = screenString + "4";
		}
		function enterFive(){
			$("#scre").append("5");
			screenString = screenString + "5";
		}
		function enterSix(){
			$("#scre").append("6");
			screenString = screenString + "6";
		}
		function enterSeven(){
			$("#scre").append("7");
			screenString = screenString + "7";
		}
		function enterEight(){
			$("#scre").append("8");
			screenString = screenString + "8";
		}
		function enterNine(){
			$("#scre").append("9");
			screenString = screenString + "9";
		}
		function enterExp(){
			$("#scre").append("^");
			screenString = screenString + "^";
		}
		function enterCloseParen(){
			$("#scre").append(")");
			screenString = screenString + ")";
		}
		function enterOpenParen(){
			$("#scre").append("(");
			screenString = screenString + "(";
		}
		function enterDivide(){
			$("#scre").append("÷");
			screenString = screenString + "÷";
		}
		function enterBackSpace(){
			screenString = screenString.split("");
			screenString.pop();
			screenString = screenString.join("");
			$("#scre").html(screenString);
		}
		function enterPlus(){
			$("#scre").append("+");
			screenString = screenString + "+";
		}
		function enterTimes(){
			$("#scre").append("*");
			screenString = screenString + "*";
		}
		function enterMinus(){
			$("#scre").append("–");
			screenString = screenString + "–";
		}
		function enterDecimal(){
			$("#scre").append(".");
			screenString = screenString + ".";
		}
		function enterFactorial(){
			$("#scre").append("!");
			screenString = screenString + "!";
		}
		function enterEnter(){
			screenString = orderOfOperations(screenString);
			$("#scre").html(screenString);
		}
		/////////KEYPRESS CALLS \\\\\\\\\\\\\\\\\\\\\\
		$(document).keypress(function(key){
				console.log(key.keyCode);
				switch (key.keyCode){
				case 13:
				enterEnter();
				break;
				case 33:
				enterFactorial();
				break;
				case 40:
				enterOpenParen();
				break;
				case 41:
				enterCloseParen();
				break;
				case 42:
				enterTimes();
				break;
				case 43:
				enterPlus();
				break;
				case 45:
				enterMinus();
				break;
				case 46:
				enterDecimal();
				break;
				case 48:
				enterZero();
				break;
				case 49:
				enterOne();
				break;
				case 50:
				enterTwo();
				break;
				case 51:
				enterThree();
				break;
				case 52:
				enterFour();
				break;
				case 53:
				enterFive();
				break;
				case 54:
				enterSix();
				break;
				case 55:
				enterSeven();
				break;
				case 56:
				enterEight();
				break;
				case 57:
				enterNine();
				break;
				case 92:
				enterDivide();
				break;
				case 94:
				enterExp();
				break;
				}
		});

		$("#0").click(function(){
				enterZero();
				});

		$("#1").click(function(){
				enterOne();
				});

		$("#2").click(function(){
				enterTwo();
				});

		$("#3").click(function(){
				enterThree();
				});

		$("#4").click(function(){
				enterFour();
				});

		$("#5").click(function(){
				enterFive();
				});

		$("#6").click(function(){
				enterSix();
				});

		$("#7").click(function(){
				enterSeven();
				});

		$("#8").click(function(){
				enterEight();
				});

		$("#9").click(function(){
				enterNine();
				});


		$("#exp").click(function(){
				enterExp();
				});

		$("#closeParen").click(function(){
				enterCloseParen();
				});

		$("#openParen").click(function(){
				enterOpenParen();
				});

		$("#divide").click(function(){
				enterDivide();
				});

		$("#pi").click(function(){
				$("#scre").append("π");
				screenString = screenString + pie;
				//$("")
				});

		$("#backSpace").click(function(){
				enterBackSpace();
				});

		$("#plus").click(function(){
				enterPlus();
				});

		$("#times").click(function(){
				enterTimes();
				});

		$("#minus").click(function(){
				enterMinus();
				});

		$("#decimal").click(function(){
				enterDecimal();
				});

		$("#factorial").click(function(){
				enterFactorial();
				});

		$("#negative").click(function(){
				$("#scre").append("-");
				screenString = screenString + "-";
				//$("")
				});
		//PEDMAS
		function orderOfOperations(n) {
			var screenStrin = n;
			var operations = [];
			var firstOperation = screenStrin.indexOf("(");
			var secondOperation = screenStrin.indexOf(")");
			var thirdOperation = screenStrin.indexOf("^");
			var thirdhalfOperation = screenStrin.indexOf("!");
			var fourthOperation = screenStrin.indexOf("÷");
			var fifthOperation = screenStrin.indexOf("*");
			var sixthOperation = screenStrin.indexOf("–");
			var seventhOperation = screenStrin.indexOf("+");
			for (i=0; i<screenStrin.length; i++){
				if (screenStrin.charAt(i) === "("||
						screenStrin.charAt(i) === ")"||
						screenStrin.charAt(i) === "^"||
						screenStrin.charAt(i) === "!"||
						screenStrin.charAt(i) === "*"||
						screenStrin.charAt(i) === "÷"||
						screenStrin.charAt(i) === "+"||
						screenStrin.charAt(i) === "–")
				{
					operations.push(i);
				}//end of if

			}//end of for loop

			if (firstOperation !== -1){
				var operator = operations.indexOf(firstOperation);
				var currentOperator = operations[operator];

				var count = 1;
				var j = currentOperator + 1;

				while (count > 0){

					if (screenStrin.charAt(j) === "("){
						count = count + 1;

						if (count > 3){
							screenStrin = "Error close paren";
							$("#scre").html(screenStrin);
							return "error";
						}
					}else if (screenStrin.charAt(j) === ")"){
						count = count - 1;
					}//end of else if
					j++;
					if (j > 30){
						$("#scre").html(screenStrin);
						return "close Paren error";
					}
				}//end of for loop
				var endParen = j;//////////////////////////////////////////
				//think about the current operator
				var inParen = screenStrin.substring(currentOperator + 1,endParen - 1 );
				inParen = orderOfOperations(inParen);
				screenStrin = screenStrin.split("");
				if (inParen.includes("(") ||inParen.includes("+") ||inParen.includes("–") ||inParen.includes("÷") ||inParen.includes("*") ||inParen.includes("!") ||inParen.includes("^") ){
					screenStrin.splice(currentOperator + 1,endParen-currentOperator -2 ,inParen);
					screenStrin = screenStrin.join("");
					return screenStrin;
				}
				else {//'(' not next to ')'

					screenStrin.splice(currentOperator ,endParen-currentOperator ,inParen);
					screenStrin = screenStrin.join("");
					return screenStrin;
				}
			}

			else if (thirdOperation !== -1){

				var operator = operations.indexOf(thirdOperation);
				var currentOperator = operations[operator];

				var earlyOperator = operations[operator - 1];

				if (earlyOperator == undefined){earlyOperator = -1;}

				var laterOperator = operations[operator + 1];

				if (laterOperator == undefined){laterOperator = screenStrin.length;}

				//var answer =
				var firstArg = Number(screenStrin.substring(earlyOperator+1,currentOperator));
				var secondArg = Number(screenStrin.substring(currentOperator+1,laterOperator));
				answer = Math.pow(firstArg,secondArg);


				screenStrin = screenStrin.split("");
				screenStrin.splice(earlyOperator+1,laterOperator - (earlyOperator+1),answer);
				screenStrin = screenStrin.join("");
				return screenStrin;
				//screenString = screenStrin;

			}
			else if (thirdhalfOperation !== -1){

				var operator = operations.indexOf(thirdhalfOperation);
				var currentOperator = operations[operator];

				var earlyOperator = operations[operator - 1];

				if (earlyOperator == undefined){earlyOperator = -1;}


				var firstArg = Number(screenStrin.substring(earlyOperator+1,currentOperator));

				answer = factorial(firstArg);

				screenStrin = screenStrin.split("");
				screenStrin.splice(earlyOperator+1,currentOperator - (earlyOperator),answer);
				screenStrin = screenStrin.join("");
				return screenStrin;
				//screenString = screenStrin;

			}
			else if (fourthOperation !== -1){

				var operator = operations.indexOf(fourthOperation);
				var currentOperator = operations[operator];

				var earlyOperator = operations[operator - 1];

				if (earlyOperator == undefined){earlyOperator = -1;}

				var laterOperator = operations[operator + 1];

				if (laterOperator == undefined){laterOperator = screenStrin.length;}

				var answer = Number(screenStrin.substring(earlyOperator+1,currentOperator))/Number(screenStrin.substring(currentOperator+1,laterOperator));

				screenStrin = screenStrin.split("");
				screenStrin.splice(earlyOperator+1,laterOperator - (earlyOperator+1),answer);
				screenStrin = screenStrin.join("");
				return screenStrin;
				//screenString = screenStrin;

			}
			else if (fifthOperation !== -1){

				var operator = operations.indexOf(fifthOperation);
				var currentOperator = operations[operator];

				var earlyOperator = operations[operator - 1];

				if (earlyOperator == undefined){earlyOperator = -1;}

				var laterOperator = operations[operator + 1];

				if (laterOperator == undefined){laterOperator = screenStrin.length;}

				var answer = Number(screenStrin.substring(earlyOperator+1,currentOperator))* Number(screenStrin.substring(currentOperator+1,laterOperator));

				screenStrin = screenStrin.split("");
				screenStrin.splice(earlyOperator+1,laterOperator - (earlyOperator+1),answer);
				screenStrin = screenStrin.join("");
				return screenStrin;
				//screenString = screenStrin;
			}
			else if (sixthOperation !== -1){

				var operator = operations.indexOf(sixthOperation);
				var currentOperator = operations[operator];

				var earlyOperator = operations[operator - 1];

				if (earlyOperator == undefined){earlyOperator = -1;}

				var laterOperator = operations[operator + 1];

				if (laterOperator == undefined){laterOperator = screenStrin.length;}

				var answer = Number(screenStrin.substring(earlyOperator+1,currentOperator))- Number(screenStrin.substring(currentOperator+1,laterOperator));

				screenStrin = screenStrin.split("");
				screenStrin.splice(earlyOperator+1,laterOperator - (earlyOperator+1),answer);
				screenStrin = screenStrin.join("");
				return screenStrin;
				//screenString = screenStrin;
			}

			else if(seventhOperation !== -1){

				var operator = operations.indexOf(seventhOperation);
				var currentOperator = operations[operator];

				var earlyOperator = operations[operator - 1];

				if (earlyOperator == undefined){earlyOperator = -1;}

				var laterOperator = operations[operator + 1];

				if (laterOperator == undefined){laterOperator = screenStrin.length;}

				var answer = Number(screenStrin.substring(earlyOperator+1,currentOperator))+ Number(screenStrin.substring(currentOperator+1,laterOperator));

				screenStrin = screenStrin.split("");
				screenStrin.splice(earlyOperator+1,laterOperator - (earlyOperator+1),answer);
				screenStrin = screenStrin.join("");
				return screenStrin;
			}
		}//end of orderOfOperations function

		$("#enter").click(function(){
				enterEnter(); 
				});

		$("#clear").click(function(){
				screenString = "";
				$("#scre").html("");
				});//end of clear click

});//end of document ready
