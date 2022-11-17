import fetchTrending from 'tools/Api';

export const App = () => {
  const data = fetchTrending();
  data.then(data => {
    console.log(data);
  });
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
