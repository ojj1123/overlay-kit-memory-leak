import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Home: demo with overlay-kit</h1>

      <Link to='/page-1'>page1</Link>
      <Link to='/page-2'>page2</Link>
      <Link to='/page-3'>page3</Link>
      <Link to='/page-4'>page4</Link>
      <Link to='/page-5'>page5</Link>
      <Link to='/outside-overlay-provider'>Outside OverlayProvider</Link>
    </div>
  );
}

export default Home;
