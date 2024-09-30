const data = [
  'Light weapons in both hands only',
  'Bonus action to fight with the other hand',
  "Don't add your ability mod to that attack unless it is negative",
  'You may also throw that weapon if it is throwable',
];

export default function TwoWeaponFighting() {
  return (
    <table>
      <thead className='border-b-2'>
        <tr>
          <th>Two Weapon Fighting</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
