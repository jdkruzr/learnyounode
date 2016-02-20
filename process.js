// This is how many arguments we've passed into the program.
process_args = process.argv.length - 2;

// console.log("There are " + process_args + " lights!");

sum = 0;

for (i=0; i < process_args; i++)
	{
	sum += Number(process.argv[i+2]);
	}
	
console.log(sum);

