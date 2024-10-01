export default function PassiveChecks() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2} className='border-b-2'>
            Passive Checks
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border-r-2'>Formula</td>
          <td>Modifier + 10</td>
        </tr>
        <tr>
          <td className='border-r-2'>Advantage</td>
          <td>+5</td>
        </tr>
        <tr className='border-b-2 border-black'>
          <td className='border-r-2'>Disadvantage</td>
          <td>-5</td>
        </tr>
        <tr>
          <td colSpan={2}>Use passive checks for stealth</td>
        </tr>
      </tbody>
    </table>
  );
}
