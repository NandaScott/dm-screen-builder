const data = [
  { col1: 'Advantage', col2: '2d20 take high' },
  { col1: 'Disadvantage', col2: '2d20 take low' },
  { col1: 'Stacking', col2: "Multiple instances of either don't stack" },
  { col1: 'Rerolls', col2: 'Rerolls only choose one die' },
];

export default function AdvantageDisadvantage() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Advantage / Disadvantage</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ col1, col2 }) => (
          <tr key={col1}>
            <td className='border-r-2'>{col1}</td>
            <td>{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
