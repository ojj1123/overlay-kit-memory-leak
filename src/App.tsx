import { overlay, useOverlayData } from 'overlay-kit';
import { Modal } from './modal';

function App() {
  const overlayData = useOverlayData();
  console.log({ overlayData });

  return (
    <div>
      <p>Demo with overlay-kit</p>
      <button
        onClick={() => {
          // I don't use unmount callback
          overlay.open(({ isOpen, close }) => {
            return (
              <Modal isOpen={isOpen}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <p>MODAL CONTENT</p>
                  <button onClick={close}>close modal</button>
                </div>
              </Modal>
            );
          });
        }}
      >
        open modal
      </button>
    </div>
  );
}

export default App;
