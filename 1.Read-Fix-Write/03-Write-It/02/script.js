const movieList= [`MARTIN EDEN`,`LA BELLE ÉPOQUE`,`STEMMEN VAN WEERSTAND`,`MIJN BIJZONDER RARE WEEK MET TESS`,`THE MUSTANG`,`
JOKER`,`DOWNTON ABBEY`,`PARASITE`,`ONCE UPON A TIME… IN HOLLYWOOD`,`HORS NORMES`,`EVEREST: DE JONGE YETI`,`MINUSCULE 2: HET TROPISCH AVONTUUR` ];



const wrapWithTag = (content,tag) => `<${tag}>${content}</${tag}>`;

const lowerCase = movieList.map(movie => movie.toLowerCase());

const reversedLowerCase = lowerCase.reverse();


console.log(lowerCase);

document.write("<ul>");
reversedLowerCase.forEach(movie => document.write(wrapWithTag(movie,"li")));
document.write("</ul>");


// const movies = [
//     `legion`,
//     `sneaky pete`,
//     `santa clarita diet`,
//     `riverdale`,
//     `the young pope`,
//     `a series of unfortunate events`,
//     `taboo`,
//     `colony`,
//     `24: legacy`,
//     `speechless`,
//     `scherlock`,
//     `stranger things`,
//     `this is us`,
//     `timeless`,
//     `the oa`,
//   ];
  
//   document.write(`<ol>`);
//   for (let i = 14; i >= 0; i--) {
//     document.write(`<li>${movies[i]}</li>`);
//   }
//   document.write(`</ol>`);

