const link = 'https://github.com/phucnguyen035';

export default function Footer() {
  return (
    <footer className="py-4 text-center">
      Built with &hearts; by{' '}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue hover:underline"
      >
        Phuc Nguyen
      </a>
    </footer>
  );
}
