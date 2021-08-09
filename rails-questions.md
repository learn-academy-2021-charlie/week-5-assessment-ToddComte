# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL? This was a easy question because Sarah asked it during our white boarding session on Thursday. SQL is a domain specific language that is used for managing data held in a relational database. It is really encompassing and you can get lost going down all the rabbit holes. There are a lot of companies that pay big bucks for understanding how a SQL operates. 


2. What the PostgreSQL query that would return all the content in a particular table?
$ SELECT * FROM table name 
This is what the command would look like select is telling it what you want to select and the * Symbol is shorthand for all columns in the table And the table name tells it which table to look at. This was the first command I can remember being taught when we went over PostgreSQL query.

3. What is the command to create a new Rails application with a PostgreSQL database?
$ rails new app_name -d postgresql -T
This is the command to create a new rails app. -d is what we call a flag and it replace the default data bases with postgres. The -T Is also a flag that tells rails to skip adding framework because we use rspec instead.

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
$ rails g model Mealstable breakfast:string lunch:string dinner:string
What this does is it creates the model plus all of the columns that you need but it sits in limbo until you migrate it. Once you have migrated it it will create the schema file that you never change directly.

5. What is a migration? Why would you use one?
This leads into the previous question about never changing the schema file. Migrations are like branches they help protect your main code. It is easier to change a migration or reverse it then the schema file.


6. What is the command to generate a migration file?
$ rails db:migrate
The first time you use this it will create the migrate file which has three files in it, the schema, seeds, and a date and time stamped migrations from here on out. The reason that they are date and time stamped is so where if you have to roll one back you can.


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
Rails uses camel case which means the first letter in each word is capitalized so if you build a table Video games the V and g would be capitalized.

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
 A schema file is a file that holds the final and current state of the deadbase. Yes you can modify it but it is considered bad practice and the reason why is because they are not designed to be edited they are just designed to represent the current state of your database.

9. What is the Rails console?
This console is designed for you to interact with rails. All the languages that we have interacted with in this Boot Camp has taught me one thing. That they all have some way of telling the computer what to do i.e. consoles.  

10. What is the Rails console command to see all the content in a particular table?
To be honest I do not remember going over this in class so I did some research look through the syllabus. The best answer I came up with is the .all. Let's say that you had a table named dog. If you wanted to know all the arrays that hold the dog object then you would call dog.all 
