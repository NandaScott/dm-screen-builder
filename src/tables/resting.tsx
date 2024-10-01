export default function Resting() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Resting</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={3} className='border-r-2'>
            Short
          </td>
          <td>Can spend 1 or more hit dice</td>
        </tr>
        <tr>
          <td>Roll dice + CON bonus</td>
        </tr>
        <tr className='border-b-2 border-black'>
          <td>Hit dice can be spent individually</td>
        </tr>
        <tr>
          <td rowSpan={3} className='border-r-2'>
            Long
          </td>
          <td>Regain all health</td>
        </tr>
        <tr>
          <td>Regain half hit dice</td>
        </tr>
        <tr>
          <td>Can't benefit more than once per 24 hours</td>
        </tr>
      </tbody>
    </table>
  );
}
