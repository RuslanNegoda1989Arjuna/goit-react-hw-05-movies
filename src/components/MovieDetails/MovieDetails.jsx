import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>Film Title</h2>
    </div>
  );
};
