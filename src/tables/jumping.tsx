export default function Jumping() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Jumping</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4} className='border-r-2'>
            Long jump
          </td>
          <td>10ft lead: STR score</td>
        </tr>
        <tr>
          <td>Standing start: 1/2 STR score</td>
        </tr>
        <tr>
          <td>DC 10 Acrobatics to land on difficult terrain</td>
        </tr>
        <tr className='border-b-2 border-black'>
          <td>DC 10 Athletics to clear low obsctacles</td>
        </tr>
        <tr>
          <td rowSpan={4} className='border-r-2'>
            High jump
          </td>
          <td>10ft lead: STR score + 3</td>
        </tr>
        <tr>
          <td>Standing start: (STR score + 3) / 2</td>
        </tr>
        <tr>
          <td>Athletics check to jump higher than normal</td>
        </tr>
        <tr>
          <td>Can extend arms equal to half height</td>
        </tr>
      </tbody>
    </table>
  );
}
