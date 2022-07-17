export default function MoviePage({ movie }) {
  return (
    <div className="movie-page">
      <div className="movie-desc">
        <img 
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http//via.placeholder.com/400"
          }
          alt={movie.title}
        />
        <div className="movie-info">
            <h2>{movie.Title} Summary</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste natus
            ipsa asperiores debitis modi officiis, deleniti temporibus soluta
            voluptas illo odio mollitia voluptates fugit corrupti animi nam totam
            facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti quo nemo recusandae! Obcaecati ex, tempora, dolor delectus
            molestias saepe ea deleniti sint a tenetur illum unde atque, natus
            ratione doloremque?
            </p>
        </div>
      </div>
      <div className="movie-date">
        <h3>Title: {movie.Title}</h3>
        <h3>Year : {movie.Year}</h3>
      </div>
    </div>
  );
}
