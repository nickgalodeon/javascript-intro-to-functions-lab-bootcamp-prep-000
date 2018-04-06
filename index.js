function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(`${string.toUpperCase()}`)
}
function logWhisper(string) {
  console.log(`${string.toLowerCase()}`)
}
<<<<<<< HEAD
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return ("I can't hear you!")
  }
  else if (string.toUpperCase() === string) {
    return ('YES INDEED!')
  }
  else {
    return ('I love you, too.')
=======
var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedcase = 'Hi there!'
function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase) {
    return ("I can't hear you!")
  }
  else if (uppercase.toUpperCase() === uppercase) {
    return ('YES INDEED!')
  }
  else {
    return ('I love you, too!')
>>>>>>> 0fa62747f9ff6ce2c95fdf949730964bba17fb5b
  }
}