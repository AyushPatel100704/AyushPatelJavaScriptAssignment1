// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.getElementById('speak');
var storyElement = document.getElementById('story');

// Arrays for generating random phrases
var nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher','The elephant','The cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnot like','kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking','a fat'];
var anotherNouns = ['goat', 'monkey', 'fish', 'cow', 'frog','bug','worm'];
var places = ['on the moon', 'on the chair', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var speech = new SpeechSynthesisUtterance(string);
	// speak the text
	synth.speak(speech);
}

function getRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function updateStory() {
	textToSpeak = `${getRandomElement(nouns)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(anotherNouns)} ${getRandomElement(places)}`;
	storyElement.textContent = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */
// On click the button speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

document.getElementById('noun').onclick = function() {
	textToSpeak += ' ' + getRandomElement(nouns);
	storyElement.textContent = textToSpeak;
}

document.getElementById('verb').onclick = function() {
	textToSpeak += ' ' + getRandomElement(verbs);
	storyElement.textContent = textToSpeak;
}

document.getElementById('adjective').onclick = function() {
	textToSpeak += ' ' + getRandomElement(adjectives);
	storyElement.textContent = textToSpeak;
}

document.getElementById('another-noun').onclick = function() {
	textToSpeak += ' ' + getRandomElement(anotherNouns);
	storyElement.textContent = textToSpeak;
}

document.getElementById('place').onclick = function() {
	textToSpeak += ' ' + getRandomElement(places);
	storyElement.textContent = textToSpeak;
}

document.getElementById('generate-story').onclick = function() {
	updateStory();
}

document.getElementById('reset').onclick = function() {
	textToSpeak = '';
	storyElement.textContent = 'Your story will appear here...';
}