const bestActors = [
    {
      actor: "Forest Whitaker",
      film: "The Last King of Scotland",
      age: 45
    }, {
      actor: "Daniel Day-Lewis",
      film: "There Will Be Blood",
      age: 50
    }, {
      actor: "Sean Penn",
      film: "Milk",
      age: 48
    }, {
      actor: "Jeff Bridges",
      film: "Crazy Heart",
      age: 60
    }, {
      actor: "Colin Firth",
      film: "The King's Speech",
      age: 50
    }, {
      actor: "Jean Dujardin",
      film: "The Artist",
      age: 39
    }, {
      actor: "Daniel Day-Lewis",
      film: "Lincoln",
      age: 55
    }, {
      actor: "Matthew McConaughey",
      film: "Dallas Buyers Club",
      age: 44
    }, {
      actor: "Eddie Redmayne",
      film: "The Theory of Everything",
      age: 33
    }, {
      actor: "Leonardo DiCaprio",
      film: "The Revenant",
      age: 41
    }
  ]

  const wrapInTag = (content,tag) => `<${tag}>${content}</${tag}>`;

  bestActors.sort(function(a,b) {
    return a.age - b.age;
  });
  
  bestActors.reverse();

  console.log(bestActors);

  document.write(`<ul>`);
  bestActors.forEach(actor => document.write(wrapInTag(actor.actor+`( ${actor.age})`,`li`)));
  document.write(`</ul>`);
  console.log(`Accumulated age:`, bestActors.reduce((total,actor) => total + actor.age,0));



  // const calculateAvailable = theatre => {
  //   theatre.available = theatre.capacity -  theatre.occupied;
  //   return theatre;
  // };
  
  // console.log(`Theatres:`, theatres.length);
  // console.log(`Total capacity:`, theatres.reduce((total, theatre) => total + theatre.capacity, 0));
  // console.table(theatres.map(theatre => calculateAvailable(theatre)));
  




  // document.write(`<ul>`);
  // bestActor.forEach(actor => document.write(wrapInTag(actor,"li")));
  // document.write(`</ul`);



//   const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

// const parseMovieData = movie =>
//   wrapWithTag(movie.title, `p`) +
//   wrapWithTag(movie.year, `p`) +
//   wrapWithTag(movie.director, `p`);

// const createList = movies => {
//   return `<ul>${movies
//     .map(movie => wrapWithTag(parseMovieData(movie), `li`))
//     .join(``)
//   }</ul>`;
// };

// document.write(createList(movies));
