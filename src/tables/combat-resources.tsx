const data = [
  { col1: 'Movement', col2: 'Can move up to your total speed' },
  { col1: 'Action', col2: '1 per turn' },
  { col1: 'Bonus Action', col2: '1 per turn' },
  { col1: 'Reaction', col2: '1 per round' },
];

export default function CombatResources() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Combat Resources</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ col1, col2 }) => (
          <tr>
            <td>{col1}</td>
            <td>{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
