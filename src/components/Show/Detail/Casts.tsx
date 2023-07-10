import { Cast } from '../../../models/IShow';

interface IProps {
  casts: Cast[];
}

export default function Casts({ casts }: React.FC<IProps>) {
  return (
    <>
      <div>
        <p>Casts in total: {casts.length}</p>
        {casts.length > 0 && (
          <ul>
            {casts.map((cast: Cast) => (
              <li key={cast.person.id}>
                <div>
                  <p>Character: {cast.character.name}</p>
                  <p>Person: {cast.person.name}</p>
                  <div>
                    {cast.person.image ? (
                      <img src={cast.person.image.medium} alt="Show Poster" />
                    ) : (
                      <img src="../../public/image_not_found.png" height={128} alt={cast.person.name} />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
