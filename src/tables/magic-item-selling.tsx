const data = [
  { col1: 'Common', col2: '100 gp' },
  { col1: 'Uncommon', col2: '400 gp' },
  { col1: 'Rare', col2: '4,000 gp' },
  { col1: 'Very Rare', col2: '40,000 gp' },
  { col1: 'Legendary', col2: '200,000 gp' },
];

export default function MagicItemSelling() {
  return (
    <table>
      <thead>
        <tr className='border-black border-b-2'>
          <th colSpan={2}>Magic Item Base Pricing</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ col1, col2 }) => (
          <tr key={col1}>
            <td>{col1}</td>
            <td>{col2}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={2} className='text-center text-xs'>
            Halved for consumables
          </td>
        </tr>
      </tbody>
    </table>
  );
}
