"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useState } from "react"

import TableAction from "./Actions/tableAction"

export default function TableComponent({ data }: any) {
  let [newdata, setData] = useState<any[]>(data)
  

 
  return (
    <>
    <TableAction setData={setData}  />
  
    <Table className="border shadow-md ">

    <TableHeader>
      <TableRow className="bg-slate-600 p-3 rounded-md text-center hover:bg-slate-600 ">
        <TableHead className="text-white p-3" >ID</TableHead>
        <TableHead className="text-white p-3">Customer</TableHead>
        <TableHead className="text-white p-3">Data</TableHead>
        <TableHead className="text-white p-3" >Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
    {newdata.map((item: any, index: any) => (
      <TableRow key={item.id} className="even:bg-muted odd:bg-slate-200">
        <TableCell >{index}</TableCell>
        <TableCell >{item.customer.name}</TableCell>
        <TableCell >{item.date}</TableCell>
        <TableCell >{item.amount}</TableCell>
      </TableRow>
    ))}
    </TableBody>
  </Table>
    </>
  )
}  