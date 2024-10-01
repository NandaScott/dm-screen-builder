import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import General from './pages/general';

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef }) as any;

  return (
    <div>
      <button onClick={reactToPrintFn}>Print</button>
      <General ref={contentRef} />
    </div>
  );
}
