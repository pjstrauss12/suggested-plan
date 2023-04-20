export default async function handler(request, res) {
    var weeks = [
        {
        "week": "1",
        "timeIcon": "device:access-alarm",
        "title": "Introduction",
        "timeToComplete": 2,
        "description": "This is the intro to the course",
        "readIcon": "communication:import-contacts",
        "activities": ["read", "write"]
        },
        {
        "week": "2",
        "timeIcon": "device:access-alarm",
        "title": "Introduction",
        "timeToComplete": 2,
        "description": "This is the intro to the course",
        "readIcon": "communication:import-contacts",
        "activities": ["read", "write"]
        },
        {
        "week": "3",
        "timeIcon": "device:access-alarm",
        "title": "Introduction",
        "timeToComplete": 2,
        "description": "This is the intro to the course",
        "readIcon": "communication:import-contacts",
        "activities": ["read", "write"]
        }
    ];
    
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(weeks);
    }