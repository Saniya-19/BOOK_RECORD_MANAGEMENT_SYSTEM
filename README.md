# BOOK_RECORD_MANAGEMENT_SYSTEM

Server >> starting certain book data
       >> user Register
       >> Subscriber

This is a book record management API Server/ backend for the library system or management of records or manuals or books.

Fine System:
User:06/03/2023 - 06/06/2023
07/06/2023 => 50
09/06/2023=> 50*3 = 150/-

## Subscription Types
3 months (Basic)
6 months (Standard)
12 months (Premium)

If the Subscription type is standarad && if the subscription data is 06/03/2023
=>then Subscription valid till 06/09/2023

within subscription date >> if we miss the renewal >>50/- day
subscription date is also been missed >> and also missed the renewal >> 100 + 50/- day

>> book1
>>Basic
>>06/03/2023 --> subscription date
>>07/03/2023 => borrowed a book from library
>>book1 renewal date is on 21/03/2023
>>23/01/2023 => we need to pay a fine of 50*2=100/-













# Routes and Endpoints

## /users
POST: Create a new user
GET: Get all the user info here

## /users/{id}
GET: Get a user by id
PUT: Update a user by their ID 
DELETE: Delete a user by id (check if he/she still have an issued book) & (is there any fine to paid)

## /users/subscription-details/{id}
GET: Get user subscription details
     >>Date of Subscription
     >>valid till
     >>Is there any fine
## /books
GET: Get all the books
POst: Create/Add a new book

## /books/{id}
GET: Get a book by id
PUT: Update a book by id

## /books/issued
GET: Get all issued books

## /books/issued/withFine
GET: get all issued books with their fine


