import { useRef } from 'react';
import Combat from './pages/combat';
import { useReactToPrint } from 'react-to-print';

export default function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef }) as any;

  return (
    <div>
      <button onClick={reactToPrintFn}>Print</button>
      <Combat ref={contentRef} />
    </div>
  );
}
