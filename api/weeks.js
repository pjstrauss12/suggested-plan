export default async function handler(request, res) {
    var weeks = [
        {
        "week": "1",
        "timeIcon": "device:access-alarm",
        "title": "Introduction",
        "timeToComplete": 2,
        "description": "This is the intro to the course",
        "videos": [
            {
                "title": "Intro to the course",
                "time": 1
            },
            {
                "title": "Why do you want to learn this?",
                "time": 6
            },
            {
                "title": "Seriously this is weird stuff",
                "time": 14
            },
            {
                "title": "Roller coaster basics",
                "time": 4
            }
            ],
        "reading": [
            {
                "title": "IST 256 Syllabus",
                "time": 10
            },
            {
                "title": "Kings vs. Rangers Stanley Cup Final Box Score",
                "time": 5
            },
            {
                "title": "Penn State Hockey",
                "time": 10
            }
            ],
        "quizzes": [
            {
                    "title": "Week 1 Assessment",
                    "time": 20
            }]
        },
        {
        "week": "2",
        "timeIcon": "device:access-alarm",
        "title": "Fundamentals",
        "timeToComplete": 10,
        "description": "Begin to learn the fundamentals",
        "videos": [
            {
                "title": "Intro to the course",
                "time": 1
            },
            {
                "title": "Why do you want to learn this?",
                "time": 6
            },
            {
                "title": "Seriously this is weird stuff",
                "time": 14
            },
            {
                "title": "Roller coaster basics",
                "time": 4
            }
            ],
        "reading": [
            {
                "title": "IST 256 Syllabus",
                "time": 10
            },
            {
                "title": "Kings vs. Rangers Stanley Cup Final Box Score",
                "time": 5
            },
            {
                "title": "Penn State Hockey",
                "time": 10
            }
            ],
        "quizzes": [
            {
                    "title": "Week 2 Assessment",
                    "time": 20
            }]
        },
        {
        "week": "3",
        "timeIcon": "device:access-alarm",
        "title": "Learning more every day",
        "timeToComplete": 5,
        "description": "How you can improve your life",
        "videos": [
            {
                "title": "Intro to the course",
                "time": 1
            },
            {
                "title": "Why do you want to learn this?",
                "time": 6
            },
            {
                "title": "Seriously this is weird stuff",
                "time": 14
            },
            {
                "title": "Roller coaster basics",
                "time": 4
            }
            ],
        "reading": [
            {
                "title": "IST 256 Syllabus",
                "time": 10
            },
            {
                "title": "Kings vs. Rangers Stanley Cup Final Box Score",
                "time": 5
            },
            {
                "title": "Penn State Hockey",
                "time": 10
            }
            ],
        "quizzes": [
            {
                    "title": "Week 3 Assessment",
                    "time": 20
            }]
        }
    ];
    
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(weeks);
    }