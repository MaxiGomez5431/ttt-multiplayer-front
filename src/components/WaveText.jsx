export default function WaveText() {
  const text = 'Tic Tac Toe';

  const colors = ['#4AE887', '#389df9', '#fb4777'];

  return (
    <h1 style={{ fontFamily: 'Exotica' }} className="text-9xl flex gap-1">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-wave"
          style={{
            color: colors[index % colors.length],
            animationDelay: `${index * 0.1}s`,
            fontFamily: 'Exotica'
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};