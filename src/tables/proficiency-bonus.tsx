const data = [
  "Can't be applied more than once",
  'Doubling or halving your proficiency only applies once',
  'Doubling with no bonus has no effect (0 x 2) = 0',
  "Don't multiply your proficiency for attack rolls or saving throws",
];

export default function ProficiencyBonus() {
  return (
    <table>
      <thead className='border-b-2'>
        <tr>
          <th>Proficiency Bonus</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item}>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
