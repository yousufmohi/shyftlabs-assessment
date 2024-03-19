# Shyftlabs Assessment


## Installation
To ensure the folder structure is the same, you can either download the program as a zip file\
or you can clone the repository by typing the following commands.


```bash
mkdir shyftassessment
cd shyftassessment
git clone https://github.com/YousufMo27/shyftlabs-assessment.git
cd shyftlabs-assessment
```
To install the program you can type the command


```bash
npm install --legacy-peer-deps
```

Once that's done for the website to appear you need to ensure first that you're in the correct directory
to see that just type

```bash
pwd
```

and if your output is similar to this then you are in the correct directory.


```bash
\somepath\shyftlabs-assessment
```

## Running the Program/Viewing the Website

To view the website and ensure the server works correctly I recommend using an IDE like Visual Studio\
Code (What I used), to have easy access to multiple terminals already in the same directory.

In the first directory type in 

```bash
npm start
```

This should open the website on [http://localhost:3000/](http://localhost:3000/). After this you want to open a separate\
terminal in the same directory and then type the following commands.

```bash
cd .\server\
npm start
```

This allows the server to start running, and connect to the database.

## Technologies

For the Front-end I used [React](https://react.dev/), with [Tailwind CSS](https://tailwindcss.com/)
For the Database I used an online hosting service to host 
the [MySQL](https://www.mysql.com/) DB and used [NodeJS](https://nodejs.org/en) to help with the server

