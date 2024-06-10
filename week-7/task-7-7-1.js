function splitWords(paragraph) {
  // Remove the periods, commas and convert each word into lowercase in the paragraph.
  const modifiedParagraph = paragraph.replaceAll(".", "").replaceAll(",", "").toLowerCase();

  // Using the `split` function, split the paragraph into array of words. Return the array
  const arrayOfWords = modifiedParagraph.split(' ');

  return arrayOfWords;
}
const paragraph = "I walked through the bustling city streets, dodging crowds of people as I went. The sounds of car horns and chatter filled the air, and I couldn't help but feel energized by the vibrancy of the city. The rain was pouring down in sheets, drenching everything in its path. I huddled under my umbrella, feeling grateful for its protection as I made my way home."
console.log(splitWords(paragraph));