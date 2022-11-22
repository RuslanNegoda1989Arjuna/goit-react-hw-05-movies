import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'tools/Api';

export const Reviews = () => {
  const { Id } = useParams();

  const [review, setReview] = useState([]);

  useEffect(() => {
    try {
      const cast = fetchReviews(Id);

      cast.then(data => {
        return setReview(data);
      });
    } catch (error) {
      console.warn(error);
    }
  }, [Id]);

  // console.log('review ARRAY:', review);

  return (
    <main>
      <ul>
        {review.length !== 0 ? (
          review.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Athor: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We do not have any reviews for this movie.</p>
        )}
      </ul>
    </main>
  );
};
