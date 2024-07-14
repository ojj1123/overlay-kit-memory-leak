import { Outlet } from 'react-router-dom';
// maybe you need it
// import { useCurrentOverlay, useOverlayData } from 'overlay-kit';

function App() {
  // NOTE
  // Try to change this comment to the code
  // and then check that values.
  // That values are not GC'd even if unmounting `OverlayProvider`

  // const current = useCurrentOverlay();
  // const overlayData = useOverlayData();
  // console.log({ current, overlayData });

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
