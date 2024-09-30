const data = [
  { col1: 'Half Cover', col2: '+2 bonus AC and DEX saves' },
  { col1: '3/4s Cover', col2: '+5 bonus AC and DEX saves' },
  { col1: 'Total Cover', col2: "Can't be targeted directly" },
];

export default function CoverInCombat() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Cover in Combat</th>
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
