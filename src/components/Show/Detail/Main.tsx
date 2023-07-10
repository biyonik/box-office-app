interface IProps {
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
}

export default function Main({ name, image, summary, genres }: React.FC<IProps>) {
  return (
    <>
      <div>
        <img src={image?.original} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div>
        <h4>Genres</h4>
        <ul>
          {genres?.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
