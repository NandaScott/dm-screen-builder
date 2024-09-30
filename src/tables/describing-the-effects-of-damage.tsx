const data = [
  'If you are above half health, you show no signs of wear',
  'If you are less than half health, you show some signs of wear like cuts or bruises',
  'At 0 or less you show signs of trauma or bleeding',
  "Don't forget to describe the effectiveness of the damage",
];

export default function DescribingDamage() {
  return (
    <table>
      <thead>
        <tr>
          <th>Describing Damage</th>
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
