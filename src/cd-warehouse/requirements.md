# CD Warehouse

# Requirements
- Customers can buy CDs, searching on the title and the artist. 
- The credit card payment is processed by an external provider. 
- Warehouse receives batches of CDs from the record labels. 
- Warehouse keeps a stock count of how many copies of each title are in the warehouse.
- Customers can leave reviews for CDs they’ve bought through the warehouse, which gives each title an integer rating from 1- 10 and the text of their review if they want to say more.

# Test-List
The following actions are identified.

## Search:
- return multiple cds
- return zero cds
- return one cd

## Buy:
- return payment successful
- return payment declined

## Review:
- return failed rating in case the cd does not exist
- return success when rating and text are applied

## Receive:
- return that one cd is received
- return that multiple cds are received
- return add to cds that are already on stock
