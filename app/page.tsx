
import { findtransaction, findTransactionForChart } from "@/actions/transactions";
import TableComponent from "@/components/table";
import ChartComponent from "@/components/ChartPage";







export default  async function Home() {
  let data=await findtransaction()
  let chart=await findTransactionForChart()

  return (
    <main className="container">
      <h1 className=" text-blue-800 text-3xl py-3 text-center font-semibold">Customer Transactions</h1>
     
      <TableComponent data={data}/>
      <ChartComponent/>
   
    </main>
  );
}
