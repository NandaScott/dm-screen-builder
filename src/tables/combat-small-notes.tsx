const data = [
  { col1: 'Resistance', col2: 'Half damage' },
  { col1: 'Vulnerable', col2: 'Double damage' },
  { col1: 'Critical Hits', col2: 'Double damage dice then add all modifiers' },
];

export default function CombatSmallNotes() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Combat Small Notes</th>
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
