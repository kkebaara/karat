/*  We have a catalog of song titles (and their lengths) that we play at a local radio station.  We have been asked to play two of those songs in a row, and they must add up to exactly seven minutes long.  

Given a list of songs and their durations, write a function that returns the names of any two distinct songs that add up to exactly seven minutes.  If there is no such pair, return an empty collection. 
 */

function songTimes(songs) {

	//simplify the song length
	var songLength = songs.length;

	//iterate through a song 
	for (let i = 0; i < songLength; i++) {

		//iterate through another song + 1
		for (let j = i + 1; j < songLength; j++) {
			
			//separate the 2 songs
			let song1 = songs[i];
			let song2 = songs[j];

			//split the songs up into 2 sides
			let song1split = song1[1].split(':');
			//convert the minute section to seconds
			let song1min = parseInt(song1split[0]) * 60;
			//add the seconds and minutes of the song 
			let song1sec = song1min + parseInt(song1split[1]);

			let song2split = song2[1].split(':');
			let song2min = parseInt(song2split[0]) * 60;
			let song2sec = song2min + parseInt(song2split[1]);

			let songSum = song1sec + song2sec;

			if (songSum === 7 * 60) {
				return [song1[0], song2[0]];
			}
		}
	}
	return [];
}

const songTimes1 = [
	['Stairway to Heaven', '8:05'],
	['Immigrant Song', '2:27'],
	['Rock and Roll', '3:41'],
	['Communication Breakdown', '2:29'],
	['Good Times Bad Times', '2:48'],
	['Hot Dog', '3:19'],
	['The Crunge', '3:18'],
	['Achilles Last Stand', '10:26'],
	['Black Dog', '4:55'],
];
const songTimes2 = [
	['Stairway to Heaven', '8:05'],
	['Immigrant Song', '2:27'],
	['Rock and Roll', '3:41'],
	['Communication Breakdown', '2:29'],
	['Good Times Bad Times', '2:48'],
	['Black Dog', '4:55'],
	['The Crunge', '3:18'],
	['Achilles Last Stand', '10:26'],
	['The Ocean', '4:31'],
	['Hot Dog', '3:19'],
];
const songTimes3 = [
	['Stairway to Heaven', '8:05'],
	['Immigrant Song', '2:27'],
	['Rock and Roll', '3:41'],
	['Communication Breakdown', '2:29'],
	['Hey Hey What Can I Do', '4:00'],
	['Poor Tom', '3:00'],
	['Black Dog', '4:55'],
];
const songTimes4 = [
	['Hey Hey What Can I Do', '4:00'],
	['Rock and Roll', '3:41'],
	['Communication Breakdown', '2:29'],
	['Going to California', '3:30'],
	['Black Mountain Side', '2:00'],
	['Black Dog', '4:55'],
];
const songTimes5 = [
	['Celebration Day', '3:30'],
	['Going to California', '3:30'],
];

const songTimes6 = [
	['Rock and Roll', '3:41'],
	['If I lived here', '3:59'],
	['Day and night', '5:03'],
	['Tempo song', '1:57'],
];

console.log(songTimes(songTimes1));
console.log(songTimes(songTimes2));
console.log(songTimes(songTimes3));
console.log(songTimes(songTimes4));
console.log(songTimes(songTimes5));
console.log(songTimes(songTimes6));
