const movieList= [`MARTIN EDEN`,`LA BELLE ÉPOQUE`,`STEMMEN VAN WEERSTAND`,`MIJN BIJZONDER RARE WEEK MET TESS`,`THE MUSTANG`,`
JOKER`,`DOWNTON ABBEY`,`PARASITE`,`ONCE UPON A TIME… IN HOLLYWOOD`,`HORS NORMES`,`EVEREST: DE JONGE YETI`,`MINUSCULE 2: HET TROPISCH AVONTUUR` ];

const wrapWithTag = (content,tag) => `<${tag}>${content}</${tag}>`;

document.write("<ul>");
movieList.forEach(show => document.write(wrapWithTag(show,"li")));
document.write("</ul>");