/*
//	Made with <3 by Marcus Bizal
//	github.com/marcbizal
//	linkedin.com/in/marcbizal
*/

$(document).ready(function() {
		"use strict";

		// UTILITY
		function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
		}
		// END UTILITY

		// COMMANDS
		function clear() {
				terminal.text("");
		}

		function help() {
				terminal.append(
					"ls [-l] [-a] \n" +
					"	list files and directories\n\n" +
					"cat [filename]\n" +
					"	output file content\n\n" +
					"vivi [-name] [-sex] [-cup] [-size] [-skills] [-hobby] [-power] [-contact] [-serivce]\n" +
					"	output the information of vivi\n\n" +
					"rm [filename]\n" +
					"	delete file or directory\n\n" +
					"clear \n" +
					"	clear terminal screen\n\n"
				);
				terminal.scrollTop(terminal.prop("scrollHeight"));
		}
	
		function echo(args) {
				var str = args.join(" ");
				terminal.append(str + "\n");
				terminal.scrollTop(terminal.prop("scrollHeight"));
		}

		function rm(){
			terminal.append(
			'                                                                _ \n' +
			'   __  ______  __  __   ____ _________     _________     ____  (_)\n' +
		   	'  / / / / __ \\\/ / / /  / __ `/ ___/ _ \\\   / ___/ __ \\\   / __ \\\/ / \n' +
		  	' / /_/ / /_/ / /_/ /  / /_/ / /  /  __/  (__  ) /_/ /  / /_/ / /  \n' +
		  	' \\\__, /\\\____/\\\__,_/   \\\__,_/_/   \\\___/  /____/\\\____/  / .___/_/   \n' +
		 	'/____/                                               /_/          \n'
			);
			terminal.scrollTop(terminal.prop("scrollHeight"));
		}

		function ls(args){
			if(args == ""){
				terminal.append("about.txt\n");
			}
			else if (args == "-l"){
				terminal.append("-rw-r--r--   1 root root     0 Jul 18 09:33 about.txt\n");
			}
			else if(args == "-a"){
				terminal.append(
					"about.txt        .key        \n"
				);
			}
			else if((args[0] == "-l" && args[1] == "-a") || (args[0] == "-a" && args[1] == "-l")){
				terminal.append(
					"-rw-r--r--   1 root root     0 Jul 18 09:33 about.txt\n"+
					"-rw-r--r--   1 root root     0 Jul 18 07:52 .key\n");
			}
			else {
				terminal.append("invalid options");
				
			}
			terminal.scrollTop(terminal.prop("scrollHeight"));
		}

		function cat(args){
			if(args == "key.txt"){
				terminal.append("0927\n");
			}
			else if(args == "about.txt") {
				terminal.append(
					"key 中的数字并不是任何人的生日。但是这个数字是有来源的，估计这辈子都碰不到一个人能猜到它的来源，因为真的是很无关紧要的数字\n\n" +
					"使用这种方式来介绍自己，总感觉会友尽。其实我这人挺随和，一点都不高冷的，如果能以这种方式交到朋友，真的挺令人开心的\n\n" +
					"此页面改编自项目：https://codepen.io/marcbizal/pen/VLKoam\n\n" +
					"我修改之后的程序放在了：https://codepen.io/chenvivi/pen/NBNzYj\n\n" +
					"所以如果你找不到正确的打开方式，可以开挂看源码作弊\n"
				);
			}
			else {
				terminal.append("no such file\n");
			}
			terminal.scrollTop(terminal.prop("scrollHeight"));
		}

		var needChecking = true;
		var isChecking = false;

		function vivi(args){
			if (args == '-name')
			 	terminal.append("基本上所有的游戏 ID 都叫 ViVi酱\n");
			else if(args == "-sex") {
				if(needChecking) terminal.append("男\n");
				else terminal.append("女\n");
			}
			else if (args == "-cup")
				terminal.append("A-\n");
			else if (args == "-size")
				terminal.append("length * width * height = 50cm * 50cm * 50cm\n");
			else if (args == '-skills'){
				terminal.append(
					"Android----从整个大学四年一直玩到现在，水平海渴溢？\n\n" +
					"HTML-------不愿意学任何框架只用 jQuery 做点小东西的懒人，偶尔抄下模板，逛逛 opencode\n\n" +
					"Java-------用 SSH 写过 API 和网站，不考虑并发没有安全性可言那种\n\n" +
					"Php--------人家才不会去拍黄片呢，讨厌~\n\n" +
					"Linux------用 Linux 当平时使用的操作系统这种事情已经放弃了，平时也就买点 vps，然后放着吃灰\n"
				);
			}
			else if (args == '-power'){
				if (needChecking) {
					terminal.append('input key word:\n');
					isChecking = true;
				}
				else {
					terminal.append(
						"会用糙汉音读小拳拳捶胸口，会用男高音唱军歌，咱当兵的人那种\n\n" +
						"会唱部分英文歌和几首日语歌，在五十音都不会的情况下生撸恋爱循环一个月学会了，也生撸过一首西语歌，虽然实际上唱歌并不好听\n\n" +
						"由于小时牢固的基础，练就了普通妹子无法匹敌的小臂力量，小学帮妈妈提电瓶，一拳锤坏了破旧的带锁铁箱，到了大学负责搬寝室水桶\n\n" +
						"几乎所有游戏的操作水平高于一般水平，并被默认为小哥哥\n\n" +
						"饭量略低于一般水平，饭局第一个放筷子，吃自助永远占不到便宜，还会胖 10 斤\n\n" +
						"在物理性质上是个软妹子,没有专门去练瑜伽和舞蹈，但是身体柔韧性优于大部分普通人，体前屈 28cm\n\n" +
						"跑十圈即可治愈一般强度的生理不适，包括轻度感冒、鼻炎、头疼、姨妈疼等\n"
					);
				}
			}
			else if (args == '-hobby'){
				if (needChecking) {
					terminal.append('input key word:\n');
					isChecking = true;
				}
				else {
					terminal.append(
						"听歌：中文粤语英文日语韩文西语俄语以及非人类语言来者不拒，民谣摇滚乡村电音二次元黑炮爵士蓝调chill甚至老年disco以及非主流杀马特各种风格" +
						"除了当下流行歌曲以外的所有歌啥都爱听，像是小幸运或纸短情长这种歌者其他人听的不知道什么东西其实也挺好听，就是耳朵茧有点厚所以自己不会去听当下流行歌曲了\n\n" +
						"唱歌：因为太喜欢听歌了就希望可以跟着歌自嗨，水平高于五音不全的人，但是仍然会出现大量跑调以及自认为声音难听，并没有达到能在酒席上唱歌赚钱的水平，在 KTV 里是小透明的存在\n\n" +
						"写代码：虽然目前没有拿的出手的东西，但好歹在努力的填坑，目标是在 Gayhub 社交平台拥有更多同性好友（其实男性好友和女性好友本质上都是同性好友了23333）\n\n" +
						"打游戏：Steam 喜加一玩家，轻度破产。目前已经不玩 PC 网游了。手机游戏玩过一些大众网游以及高质量的付费单机。没有钱买任何主机，以后会买\n\n" +
						"看番剧：口味不挑，高人气的番都会看看，没有最喜欢的番或者类型\n\n" +
						"声控：好听女声的话我貌似不挑，萝莉少女御姐元气病娇傲娇都挺喜欢的，是钉宫病的说。可是男声的话，鬼知道为什么，反正我只钟爱低音炮。偶尔会听小姐姐们的电台和看她们的直播\n\n" +
						"看UFC：去年才入的坑，被嘴炮风骚的走姿以及同样风骚的拳法吸引住了，然后发现综合格斗真好看，其他格斗风格的选手也好棒。" +
						"说自高颜值的肌肉帅哥对我一点吸引力都没有绝对是假话，但我看 UFC 还是主要看格斗，而不是帅哥，问心无愧\n"
					);
				}
			}
			else if (args == "-contact"){
				if (needChecking) {
					terminal.append('input key word:\n');
					isChecking = true;
				}
				else {
					terminal.append(
						"QQ / 微信：932942491\n\n" +
						"电话：15069177909\n\n" +
						"伊妹儿：valorachen@163com\n\n" +
						"微博：https://weibo.com/3101937447/profile\n\n" +
						"Github：https://github.com/ChenViVi\n\n" +
						"网易云：https://music.163.com/#/user/home?id=44404168\n\n" +
						"Steam：https://steamcommunity.com/profiles/76561198300793241\n\n" +
						"------------------------------------------------------------------\n" +
						"微信用来支付和与那些习惯用微信或者只用微信的人聊天，可能会出现延迟(忘了回复)甚至宕机(忘了回干脆不回)的现象\n"
					);
				}
			}
			else if (args == "-service") {
				if (needChecking) {
					terminal.append('input key word:\n');
					isChecking = true;
				}
				else terminal.append("目前没有杀必死，等哪天心情好再说吧\n");
			}
			else terminal.append('invalid option\n');
			terminal.scrollTop(terminal.prop("scrollHeight"));
		}

		// END COMMANDS

		var title = $(".title");
		var terminal = $(".terminal");
		var prompt = "➜";
		var path = "~";

		var commandHistory = [];
		var historyIndex = 0;

		var command = "";
		var commands = [{
						"name": "clear",
						"function": clear
				}, {
						"name": "help",
						"function": help
				},
				{
						"name": "echo",
						"function": echo
				},
				 {
						"name": "rm",
						"function": rm
				},
				{
					   "name": "ls",
					   "function": ls
			   	},
				{
					   "name": "cat",
					   "function": cat
			   	},
				{
					   "name": "vivi",
					   "function": vivi
			   	}
			];

function processCommand() {
		var isValid = false;

		// Create args list by splitting the command
		// by space characters and then shift off the
		// actual command.

		var args = command.split(" ");
		var cmd = args[0];
		args.shift();

		// Iterate through the available commands to find a match.
		// Then call that command and pass in any arguments.
		for (var i = 0; i < commands.length; i++) {
			if(isChecking){
				isValid = true;
				if (cmd === '0927'){
					terminal.append("authentication success\n");
					isChecking = false;
					needChecking = false;
					break;
				}
				else {
					terminal.append("invalid key word\n");
					isChecking = false;
					break;
				}
			}
			else if (cmd === commands[i].name) {
				commands[i].function(args);
				isValid = true;
				break;
			}
		}
		

		// No match was found...
		if (!isValid) {
				terminal.append("-bash: command not found: " + command + "\n");
		}
		terminal.scrollTop(terminal.prop("scrollHeight"));

		// Add to command history and clean up.
		commandHistory.push(command);
		historyIndex = commandHistory.length;
		command = "";
}

function displayPrompt() {
		terminal.append("<span class=\"prompt\">" + prompt + "</span> ");
		terminal.append("<span class=\"path\">" + path + "</span> ");
}

// Delete n number of characters from the end of our output
function erase(n) {
		command = command.slice(0, -n);
		terminal.html(terminal.html().slice(0, -n));
}

function clearCommand() {
		if (command.length > 0) {
				erase(command.length);
		}
}

function appendCommand(str) {
		terminal.append(str);
		command += str;
}

/*
	//	Keypress doesn't catch special keys,
	//	so we catch the backspace here and
	//	prevent it from navigating to the previous
	//	page. We also handle arrow keys for command history.
	*/

$(document).keydown(function(e) {
		e = e || window.event;
		var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

		// BACKSPACE
		if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
				e.preventDefault();
				if (command !== "") {
						erase(1);
				}
		}

		// UP or DOWN
		if (keyCode === 38 || keyCode === 40) {
				// Move up or down the history
				if (keyCode === 38) {
						// UP
						historyIndex--;
						if (historyIndex < 0) {
								historyIndex++;
						}
				} else if (keyCode === 40) {
						// DOWN
						historyIndex++;
						if (historyIndex > commandHistory.length - 1) {
								historyIndex--;
						}
				}

				// Get command
				var cmd = commandHistory[historyIndex];
				if (cmd !== undefined) {
						clearCommand();
						appendCommand(cmd);
				}
		}
});

$(document).keypress(function(e) {
		// Make sure we get the right event
		e = e || window.event;
		var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

		// Which key was pressed?
		switch (keyCode) {
				// ENTER
				case 13:
						{
								terminal.append("\n");

								processCommand();
								displayPrompt();
								break;
						}
				default:
						{
								appendCommand(String.fromCharCode(keyCode));
						}
		}
});

// Set the window title
title.text("visitor@VM_35_240_centos:~");

// Get the date for our fake last-login
var date = new Date().toString(); date = date.substr(0, date.indexOf("GMT") - 1);

// Display last-login and promt
terminal.append("Last login: " + date + " on ttys000\n"); displayPrompt();
});