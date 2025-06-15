export default function WaveText() {
  const text = 'Tic Tac Toe';
  const colors = ['#4AE887', '#389df9', '#fb4777'];
  const words = text.split(' ');

  return (
    <h1
      style={{ fontFamily: 'Exotica' }}
      className="lg:text-9xl text-8xl flex flex-wrap justify-center gap-4"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="flex">

          {word.split('').map((char, charIndex) => {
            const globalIndex = wordIndex * word.length + charIndex;
            return (
              <span
                key={charIndex}
                className="inline-block animate-wave"
                style={{
                  color: colors[globalIndex % colors.length],
                  animationDelay: `${globalIndex * 0.1}s`,
                  fontFamily: 'Exotica',
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
