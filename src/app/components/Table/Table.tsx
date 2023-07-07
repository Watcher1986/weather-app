import CustomSelect from '../Select/Select';

function Table() {
  return (
    <section className='flex flex-col h-[432px] px-4 pb-[18px] pt-[24px] bg-[#1a1a1a] rounded-2xl md:w-[641px]'>
      <div className='flex flex-row gap-3 pb-[22px]'>
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature max</td>
            <td>Temperature min</td>
            <td>Wind direction</td>
          </tr>
        </thead>
      </table>
    </section>
  );
}

export default Table;
