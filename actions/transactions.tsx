

'use server'
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()


export const findtransaction = async () => {
    const transactions = await prisma.transactions.findMany({
      include: {
        customer: true,
      },
    });
    return transactions;
  };

  ///find by greater than amount or equel

  export const findtransactionamount = async (amount: string) => {
    
    const transactions = await prisma.transactions.findMany({
      where: {
        amount: {
          gte: Number(amount),
        },
      },
      include: {
        customer: true,
      },
    });
    return transactions;
  };    

  ///search by customer name 

  export const findTransactionByCustomerName = async (name: string) => {
   
    const user= await prisma.customer.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      include: {
        transactions: {
          include: {
            customer: true,
          },
        },
        
      },
    });
  
    return user
  };

  export const findTransactionForChart = async () => {
   
    const user= await prisma.customer.findMany({
      include: {
        transactions:true 
        
      },
    });
  
    return user
  };