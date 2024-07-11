import { useRef, type PropsWithChildren } from 'react';

type ModalProps = {
  isOpen?: boolean;
  onExit?: () => void;
};

export function Modal({
  children,
  isOpen = false,
  onExit,
}: PropsWithChildren<ModalProps>) {
  const prevIsOpenRef = useRef(isOpen);

  if (isOpen !== prevIsOpenRef.current) {
    prevIsOpenRef.current = isOpen;

    if (prevIsOpenRef.current === false) {
      setTimeout(() => onExit?.(), 300);
    }
  }

  return (
    <>{isOpen && <ModalContent isOpen={isOpen}>{children}</ModalContent>}</>
  );
}

function ModalContent({ children }: PropsWithChildren<ModalProps>) {
  return (
    <div
      style={{
        zIndex: 100,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          padding: 120,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'gray',
          borderRadius: 12,
        }}
      >
        {children}
      </section>
    </div>
  );
}
