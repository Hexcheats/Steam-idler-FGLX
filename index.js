
const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'frostgamerlordx',
	password: 'frost502005'		
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 
	user.gamesPlayed([730]);    
});