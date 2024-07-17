import { PrismaClient } from '@prisma/client'
import {faker} from "@faker-js/faker"
const prisma = new PrismaClient()

async function main() {


  await prisma.transactions.createMany(
    {
      data:[
        {
        
        "customer_id": "669382a06c1a0a7d7414ab2d",
        "date": "2022-01-01",
        "amount": 1000
        },
        {
        
        "customer_id":"669382a06c1a0a7d7414ab2d",
        "date": "2022-01-02",
        "amount": 2000
        },
        {
       
        "customer_id": "669382a06c1a0a7d7414ab2e",
        "date": "2022-01-01",
        "amount": 550
        },
        {
        
        "customer_id": "669382a06c1a0a7d7414ab2f",
        "date": "2022-01-01",
        "amount": 500
        },
        {
       
        
        "customer_id": "669382a06c1a0a7d7414ab2e",
        "date": "2022-01-02",
        "amount": 1300
        },
        {
      
        "customer_id": "669382a06c1a0a7d7414ab30",
        "date": "2022-01-01",
        "amount": 750
        },
        {
        
        "customer_id": "669382a06c1a0a7d7414ab2f",
        "date": "2022-01-02",
        "amount": 1250
        },
        {
        
        "customer_id": "669382a06c1a0a7d7414ab31",
        "date": "2022-01-01",
        "amount": 2500
        },
        {
   
        "customer_id": "669382a06c1a0a7d7414ab31",
        "date": "2022-01-02",
        "amount": 875
        }
      ]
    }
)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })