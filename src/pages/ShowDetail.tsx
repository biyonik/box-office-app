import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ShowService } from '../services/show.service';
import { Show } from '../models/IShow';
import Main from '../components/Show/Detail/Main';
import SubInfo from '../components/Show/Detail/SubInfo';
import Seasons from '../components/Show/Detail/Seasons';
import Casts from '../components/Show/Detail/Casts';
import styled from 'styled-components';
import { TextCenter } from '../components/Common/TextCenter';

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;

  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;

export default function ShowDetail() {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(['show', { id }], () => ShowService.getShowById(id), {
    refetchOnWindowFocus: false,
  });
  const show = data as Show;

  return isLoading ? (
    <TextCenter>Loading...</TextCenter>
  ) : isError ? (
    <TextCenter>Error: {error?.message}</TextCenter>
  ) : (
    <ShowPageWrapper>
      <BackHomeWrapper>
        <Link to="/">Back to Home</Link>
      </BackHomeWrapper>

      <h3>Show Detail</h3>
      <Main rating={show.rating} name={show.name} image={show.image} summary={show.summary} genres={show.genres} />
      <InfoBlock>
        <h2>Details</h2>
        <SubInfo
          language={show.language}
          rating={show.rating}
          runtime={show.runtime}
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Season</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Casts</h2>
        <Casts casts={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
}
