# Expense Manage Application

## Contact

Email: olawalemayor90@gmail.com

website: <https://olawalemayor.herokuapp.com>

<https://www.linkedin.com/in/olawale-mayor>

## What was done

A frontend implementation of an expense management software

- Created a custom api to hold some information (For login and simulate a temporary storage for   expenses)

- Installed the neccessary tools needed to build the application including state management tool and a material based library

- Built components, modules and services for the application

- Added routing and lazy loading to enhnace application performance

- Configured state management and added features like Sorting, Filtering and Searching on the expense table

- Used forms and validation on user profile page to allow editing of profile

## Note

The behaviour of the application lacks some essential features when it comes to filtering, this is because the data source is temporary (It was built using BehaviourSubject), it looses value on refresh and the NGRX implementation also mutates the filtered expense (The filtering should be done on the backend or on a more stable source of data - The filtering was not implemented in the custom API)

A workaround for this is to build the functionality in the custom API

UPDATE: The filtering is still not perfect because it does not combine (I did not implement such API on the frontend but it can be done)

Tools and Technologies used: Angular, Typescript, NgRX, Tailwindcss, Angular material

## Links to project

Live application: <https://expense-manager-omega.vercel.app/>
Github Portfolio: <https://github.com/olawalemayor/expense-manager>
