const data = [
  { col1: 'Very Easy', col2: '5' },
  { col1: 'Easy', col2: '10' },
  { col1: 'Medium', col2: '15' },
  { col1: 'Hard', col2: '20' },
  { col1: 'Very Hard', col2: '25' },
  { col1: 'Near Impossible', col2: '30' },
];

export default function DifficultyChecks() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Difficulty Checks</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ col1, col2 }) => (
          <tr key={col1}>
            <td className='border-r-2'>{col1}</td>
            <td className='text-center'>{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
