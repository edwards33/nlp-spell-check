var natural = require('natural')
var fs = require('fs')
var tokenizer = new natural.WordTokenizer()

var text = fs.readFileSync('words.txt', 'utf-8')
var corpus = tokenizer.tokenize(text)
var spellcheck = new natural.Spellcheck(corpus)

var sentence = "Englash spiilling cn be trecky, even for Englsh spukers".split(" ")

sentence.forEach((word) => {
    console.log(spellcheck.getCorrections(word, 2))
})
