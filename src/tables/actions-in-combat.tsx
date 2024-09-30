const data = [
  { col1: 'Attack', col2: 'Make an attack against a creature' },
  { col1: 'Cast a Spell', col2: 'Cast a spell against a creature' },
  { col1: 'Dash', col2: 'Double movement speed' },
  { col1: 'Disengage', col2: "Don't provoke attack of opportunity" },
  { col1: 'Dodge', col2: 'Attacks against your have disadvantage' },
  { col1: 'Help', col2: 'Advantage against ability and attack checks' },
  { col1: 'Hide', col2: 'Stealth check to hide' },
  { col1: 'Ready', col2: 'Create an action to trigger a reaction' },
  { col1: 'Search', col2: 'Perception or Investigation check' },
  { col1: 'Use an Object', col2: 'Drawing weapons from inventory, etc.' },
];

export default function ActionsInCombat() {
  return (
    <table>
      <thead className='border-b-2'>
        <tr>
          <th colSpan={2}>Actions in Combat</th>
        </tr>
        <tr>
          <th className='border-r-2'>Action</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ col1, col2 }) => (
          <tr>
            <td className='border-r-2'>{col1}</td>
            <td>{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
