
"use client"
import { findtransactionamount, findTransactionByCustomerName } from '@/actions/transactions';
import React, { Dispatch, SetStateAction } from 'react'
import { Input } from '../ui/input';
interface IProps{
setData:Dispatch<SetStateAction<any[]>>
}
const TableAction=({setData}:IProps)=> {
    let handleChangeCustomerName = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = await findTransactionByCustomerName(e.target.value)
        const newTransactions = result.flatMap(user => user.transactions);
    
        setData(newTransactions);
        
       
        
      }
      let handleChangeAmount = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = await findtransactionamount(e.target.value)
        setData(result)
       
        
      }
  return (
    <div>
         <div className="flex gap-6 mb-2 w-3/4 m-auto">
   <Input placeholder="Customer Name" onChange={handleChangeCustomerName} />
   <Input placeholder="Amount" onChange={handleChangeAmount}/>
   </div>
    </div>
  )
}

export default TableAction