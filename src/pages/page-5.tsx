import { overlay } from 'overlay-kit';
import { Modal } from '../modal';
import { Link } from 'react-router-dom';

export function Page5() {
  return (
    <div>
      <h1>Page5</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}