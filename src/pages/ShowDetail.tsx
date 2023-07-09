import { useParams } from 'react-router-dom';

export default function ShowDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>show detail</h1>
    </div>
  );
}
