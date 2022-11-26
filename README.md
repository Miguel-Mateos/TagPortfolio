# Portfolio

- [Portfolio](#portfolio)
  - [Why did I created it?](#why-did-i-created-it)
  - [Problems and Solutions](#problems-and-solutions)
  - [Issues and Improvements](#issues-and-improvements)

## Why did I created it?

I've started this project on 6 of October of 2021 looking for make myself visible and show through the portfolio a portion of my web skills and projects throughout my career in Web development.

The skills I wanted to show at first was everything I've learned on the last 2 years of my career, creating a demonstration of every language, project and algorithm I made and a playground for each algorithm or feature I was proud of. But I found this approach super interesting initially, but it was remarkable hard to carry out without a large amount of time, so I discarded the option.

In the course of time I opted to create a humble CV like portfolio, like almost anyone does but, with some personal details.

My first approach was to use some common color pallet in order to have an easy to read and nice looking and mobile first portfolio, but I found that I was not able to create a good looking portfolio with the colors I wanted to use and, the mobile first strategy was not the best idea, taking in account that the majority of people that will check my portfolio will do it on desktop, where my website was pretty void and gave the sensation of being dataless, so I discarded the option.

Weeks later I landed into a new job, where I am designated to implement and integrate the new design system of Adecco, I loved the design system so much, that I decided to use it in my portfolio, even though it wasn't finished yet at the time, this also gave me the oportunity to find issues and bugs within it while I was using it, so I could report them and help the team to improve it.

In order to make the project scalable as it could be, I decided to use a database where to store the data of the projects, and change it just by querying it, so I could add new projects without having to change the code, and also, I could change the order of the projects just by changing the order of the query.

In an effort to not complicate things too much and try new technologies, I considered to try the new DAAS (Database as a Service) from [Supabase](https://supabase.io/), that has a free tier with a wide range of features and the ability to customize nearly everything of the database, event having storage, auth and serverless functions.

My schema was pretty simple, I just needed a couple of tables with the following columns:

- A table with an id of the person ID, in case if any friend wants to use the same template and database, would only have to create a new row of the table (greeting) and reference the other tables to this id.

![Screenshot](/Readme/greeting.png)

- Cert_Ref, where I save all certificates and work experience:

![Screenshot](/Readme/CertRef.png)

- Tech Stack: where I save a boolean group of columns of the technologies I use, so I can query them and show them on the website depending on if they are set as true or otherwise not show them, if they are set to false.

- Works: For saving all the data for the work experience:

![Screenshot](/Readme/works.png)

- Bookings: Even though the books are sent to me through an email, I decided to save them in a table in order to have a record of them.

![Screenshot](/Readme/booking.png)

## Problems and Solutions

- **Problem**: I wanted to use the new design system of Adecco, but it wasn't finished yet, so I had to use the old one.

- **Solution**: I used the old design system and reported all the bugs I found while using it, so I could help the team to improve it.

- **Problem**: I wanted to show all the projects I've done, and given the fact that all the projects that I have are stored and managed within github, I took advantage of the github API to get all the projects and show them on the website. From github I took 2 main things, first, the basic data, like the name, a short description and if its public and the languages used in the project, and second, the readme file, so I could show an extended description in the website.
  - The first problem I found with it was that, the structure of the website is first a display of basic data and, if who's seeing wants to see more, ha can click a button an see the extended description from the readme file. So i had to choose weather I wanted to fetch every readme even though the user might not click the button, or just fetch the readme when the user clicks the button.
  - The second problem was, how do I show the readme if it is retrieved as a markdown file?

- **Solution**:
  - As is not very wise to fetch every project without the user clicking the button, I decided to fetch the readme file only when the user clicks the button, so I created a function that fetches the readme file and returns it as a string. Also I commited to create a decent readme file for every project I have in github.
  - For displaying the readme file, first I used [react-markdown](http//react-markdown.com), but it was quite slow and bulky for just parse a markdown file. My second option was to parse it by myself and evaluate each line of the string by matching the standard md configuration, although it is not so challenging, is a bit pounderous and takes a lot of time. After some weeks I decided to use [marked](https://marked.js.org/), which is a markdown parser and compiler, so I could parse the markdown file and then use it as a string to display it on the website.

- **Problem**: I wanted to create a booking page with a calendar, so the user could book a meeting with me, with a first approach on google calendar, which, after a lookout into a poor documentation and a lot of time, I found that for me it was quite impossible given the fact that for being able to invite other people to the meeting, I would have to send to google a privacy policy and a terms of service, which I didn't have at the time, so I discarded the option.

- **Solution**: My final decition was to send to myself an email through email.js with all the form data, with a captcha handler to avoid spam. Then send an invitation to the meeting through google calendar, with the data from the form and the email of the user. The reason for it was that I will not have a ton of meeting requests to have the need of automatize with foofle calendar, and I will not have to create a privacy policy and terms of service for the website. Its fairly acceptable to do it manually having an email with all the data and an invitation to the meeting.

<!-- I decided to use [Calendly](https://calendly.com/), which is a service that allows you to create a booking page with a calendar, and also, it allows you to invite other people to the meeting, so I could invite my friends to the meeting. -->

## Issues and Improvements

That's pretty much it, I hope you liked it, and if you have any questions or suggestions, please let me know.

If you want to send feedback, sugestions or issues you can do it through the [issues](https://github.com/AlvaroGarciaJaen/Portfolio/issues) tab or through my [email](mailto:imoreno.main@gmail.com)
