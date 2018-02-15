
/** 
	Standart input and standard output 
	Using process object for input and output
	Simple program that asks questions from the questions arr
	Stores the user input to answers arr and prints out a message
*/

var questions= [
	"What is your name?",
	"What is your fav hobby?",
	"What is your preferred programming language?"
	];

var answers =[];

function ask(i){

	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write("  >  ");

}

process.stdin.on('data',function(data){

	answers.push(data.toString().trim());

	if(answers.length <questions.length ){

		ask(answers.length);

	}
	else {

		process.exit();

	}
	
});

process.on('exit',function(){

	process.stdout.write("\n\n\n\n");

	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

	process.stdout.write("\n\n\n\n");

});

ask(0);