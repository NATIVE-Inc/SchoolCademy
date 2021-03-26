# Cademy
<details>
  <summary>Background</summary>

## Problem statement 
African education is slow in its integration and expansion, most students have difficulties understanding what they are being taught at school and instructors aren't able to help every single student. There is a need for a more comprehensive explanation of notes for students to better understand. 

## Solution 
A system which seeks to make lectures more understandable and follow up with the progress of students. This system will provide the full syllabus for all levels of secondary education with countless questions & answers for students to better understand. It will follow up the progress of students as they go through levels and award the certifications. 

</details>
<details>
  <summary>Installation</summary>
  
## How to install 
This project is built with react, use the follow code to install 

`npm install && npm start`

</details>

<details>
  <summary>Data Structure</summary>
  
## Data 
*Format DB*: NoSql

## Syntax

Students 
```
{
    name: <student name>,
    level: <form1>,
    age: <12>,
    language: <fr-en>, 
    town: <yaounde>,
    school: <lycee>, 
    progress: {
        LecturesEnrolled: [], 
        LecturesCompleted: [], 
        LecturesOngoing: [
            {
                name: <name of lectures>,
                topicsCompleted: [],
            }
        ],
    }

}
```

Classes (levels)
```
{
    level: <form1>,
    lectures: {},
    enrolled: <number>,
}
```

Lectures
```
{
    name: <name of lecture>,
    topics: {},
    level: <form1>, 
    duration: <time>,
    difficulty: <rating>,

}
```

Topics
```
{
    title: <title of topic>
    sections: [
        {
            number: <section number>,
            subTitle: <sub title of section>,
            content: <content>, 
        }
    ],
    duration: <time>,
    description: <long text>,
    quiz: [
        {
            question: <quiz question>,
            answer: <answer of question>
        }
    ]

}
```
</details>
