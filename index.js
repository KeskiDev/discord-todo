const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "bot token goes here";

var todo_list = [];

function showList(msg){
	for(var j = 0; j < todo_list.length; j++){
		msg.channel.send(j + " - " + todo_list[j]);
	}
}


bot.login(TOKEN);

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
	if(msg.content.includes('!')){
		var info = msg.content.split(",");
		var command = info[0];
		var task = info[1];
		//var remindTime = info[2];

		if(command === "!add"){
			//add new task to list
			if(task){
				todo_list.push(task);
				msg.channel.send("task added.");
			}
			else{
				msg.channel.send("invalid task, nothing added");
			}
		}
		else if(command === "!done"){
			//still need a check if the input in blank
			var position = task.replace(/ /g,'');
			if(task.trim() === "all"){
				todo_list = [];
				msg.channel.send("all tasks marked done. look at you go!");
				showList(msg)
			}
			else if(todo_list[position] !== 0){
				todo_list.splice(position,1);
				msg.channel.send("task marked done! Crushed it!");
				showList(msg);
			}
			else{
				msg.channel.send("invalid, nothing removed.");
			}
		}
		else if(command === "!list"){
			//show the whole list
			if(todo_list.length === 0){
				msg.channel.send("all done for now!");
			}
			else{
				showList(msg);
			}
		}
	}
});
