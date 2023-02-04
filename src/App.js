import './main.css';
import Data from './data.json'
import CustomerRow from './components/CustomerRow';

function App() {
  return (
    <div className='bg-gray-800 p-12 h-screen'>
        <div className='w-fulls'>
        <h1 className='text-white uppercase italic pl-2 text-2xl inline text-left '>Customer Reward Program</h1>
        <h1 className='text-white uppercase italic pl-2 text-xs inline text-right ml-auto'>Made by <a href='https://tzbodula.com'>Thomas Zbodula</a></h1>
        </div>

        <div className='mx-auto text-center pb-4 bg-slate-900 rounded-2xl border-4 border-slate-600'>
          <table className='w-full p-4 table-auto border-separate border-spacing-2'>
            <tr>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>Customer Name</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>Customer Email</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>Janurary Spend</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>Feburary Spend</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400 m-4'>March Spend</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>Janurary Reward Points</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>Feburary Reward Points</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>March Reward Points</th>
              <th className='bg-slate-800 rounded-md text-slate-300 border-2 border-slate-400'>Total Reward Points</th>
            </tr>
            {Data.map((customer, index) => {
              return (
                  <CustomerRow index={index} name={customer.customer_name} email={customer.customer_email} jan={customer.janurary_spend} feb={customer.feburary_spend} march={customer.march_spend}/>
              )
            })}
          </table>
        </div>
    </div>
  );
}

export default App;
