import formatToDDMMYYYY from '../../../helpers/dateFormatter';

interface IProps {
  language: string;
  rating: {
    average: number;
  };
  runtime: number;
  status: string;
  network: {
    name: string;
  };
  premiered: string;
}

const showPremieredDateFormatted = (premiered: string) => {
  if (!premiered) {
    return 'N/A';
  }
  return formatToDDMMYYYY(premiered);
};

export default function SubInfo({ language, rating, runtime, status, network, premiered }: React.FC<IProps>) {
  return (
    <>
      <div>
        <h4>Language</h4>
        <p>{language}</p>
      </div>
      <div>
        <h4>Rating</h4>
        <p>{rating?.average || 'N/A'}</p>
      </div>
      <div>
        <h4>Runtime</h4>
        <p>{runtime}</p>
      </div>
      <div>
        <h4>Status</h4>
        <p>{status}</p>
      </div>
      <div>
        <h4>Network</h4>
        <p>{network?.name}</p>
      </div>
      <div>
        <h4>Premiered</h4>
        <p>{showPremieredDateFormatted(premiered)}</p>
      </div>
    </>
  );
}
