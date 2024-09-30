const data = [
  "A target that can't see you has disadvantage on attack rolls",
  "If the target isn't in the location you guessed, you missed. This doesn't reveal that location.",
  'Unseen creatures have advantage on attack rolls',
  'Unseen targets are revealed after attacking',
];

export default function UnseenAttackers() {
  return (
    <table>
      <thead>
        <tr>
          <th>Unseen Attackers</th>
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
