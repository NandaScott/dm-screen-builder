export default function MagicItemOffers() {
  return (
    <table>
      <thead>
        <tr className='border-b-2 border-black'>
          <th colSpan={2}>Magic Item Offers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 - 10</td>
          <td>50% of base price</td>
        </tr>
        <tr>
          <td>11-21</td>
          <td>100% of base price</td>
        </tr>
        <tr>
          <td>21+</td>
          <td>150% of base price</td>
        </tr>
      </tbody>
    </table>
  );
}
