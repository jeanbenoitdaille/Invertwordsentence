function reverseSentence(sentence) {
    let chunks = sentence.toLowerCase().replace(".", "").split(" ");
    chunks.reverse();
    let newSentence = chunks.join(" ");
    let firstChar = newSentence.charAt(0).toUpperCase();
    return firstChar + newSentence.slice(1) + "."
}
 
let resultat = reverseSentence("Bonjour tout le monde.")