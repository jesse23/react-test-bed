
export const RoutePage = ({ routes }: { routes: Record<string, unknown> }) => {
  return (
    <>
      <h1>React Test Bed</h1>
      <ul>
        {Object.keys(routes).map((path) => (
          <li key={path}>
            <a href={`#/${path}`}>{path}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RoutePage;