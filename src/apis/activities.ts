const Item1 = require('../images/plank.jpg')
const Item2 = require('../images/pushup.jpg')
const Item3 = require('../images/squat.jpg')
const Item4 = require('../images/plank.jpg')
const Item5 = require('../images/plank.jpg')
const Item7 = require('../images/plank.jpg')
const Item10 = require('../images/plank.jpg')
const Item11 = require('../images/punching.jpg')

const initState = {
    score: [],
    scoreGroups: [
        ["CORE", 0],
        ["CHEST", 0], 
        ["ARMS", 0],
        ["BACK", 0],
        ["LEGS", 0],
        ["NECK", 0],
        ["SHOLDER", 0]
    ],
    items : [
        {   id: 1,
            img: Item1, 
            title: 'Plank', 
            headline: "The plank exercise is a simple yet effective bodyweight exercise that primarily targets the core muscles", 
            desc: "The plank is one of the greatest and most underrated exercises ever. Its practically a one-move static exercise that will help you build a core of steel, ripped abs and strong shoulders. Just get into push-up position on the ﬂoor, bend your elbows 90 degrees and prop yourself on the elbows, forearms and forefeet, forming a straight line from head to feet, then hold it for as long as you can without moving your waist or butt", 
            rep: 5, 
            meta: 'Core Abs Shoulders',
            rewards: [
                ["CORE", 200],
                ["LEGS", 100]
            ], 
            kit: [
                { aparatus: 'Ball' },
                { aparatus: 'Towel' }
            ],
            featured: true
        },
        {   id: 2, 
            img: Item2, 
            title: 'Push-Ups', 
            headline: "The push-up is the ultimate bodyweight exercise that utilizes literally every major muscle.", 
            desc: "The push-up is the ultimate bodyweight exercise that utilizes literally every major muscle in your body, thereby helping you ﬁrm your whole body. Get into a plank position, placing your hands directly under the shoulders and push your whole body up, maintaining a straight line with the legs, back and butt. Lower your body down on the same way and repeat", 
            rep: 20,
            rewards: [
                ["CORE", 100],
                ["LEGS", 100],
                ["ARMS", 200]
            ]
        },
        {   id: 3, 
                img: Item3, 
                title: 'Squats',
                headline: "Squats will help you build your quads, hams and calves, while also strengthening your whole core and enhancing greater overall fat burning.", 
                desc: "Squats will help you build your quads, hams and calves, while also strengthening your whole core and enhancing greater overall fat burning.   For the standard squat, your feet should be shoulder-width apart or slightly wider. Extend your hands out in front of you and sit back and down, keeping your head facing forward. Make sure that your back doesnt round. Keep lowering yourself until your thighs are parallel to the ﬂoor", 
                rep: 10, 
                meta: 'Quads Hamstrings Calves',
                rewards: [
                    ["CORE", 100],
                    ["LEGS", 300],
                ]
            },
            {   id: 4, 
                img: Item4, 
                title: 'Bird-Dog', 
                headline: "From a plank position prop your self on your knees and hands and simultaneously stretch one leg", 
                desc: 'From a plank posmon, prop yoursellon your knees and hands and simultaneously stretch one leg and me opposne arm malnlalnmg bum perfecdy slralgm m Hold (or a moment, then lowerthem down and repeat with the other leg and aim to improve core strength in both abs and lower back', 
                rep: 10, 
                rewards: [
                    ["CORE", 200],
                    ["LEGS", 200]
                ] 
            },
            {   id: 5, 
                img: Item5, 
                title: 'Lying hip raises', 
                headline: "The lying hip raise is the perfect bodyweight exercise for building powerful glutes and hamstrings while also strengthening your abs, back and thighs.",  
                desc: 'The lying hip raise is the perfect bodyweight exercise for building powerful glutes and hamstrings while also strengthening your abs, back and thighs. 129 Lie on your back on the ﬂoor with bent knees and ﬂat feet. Extend your arms out to your sides at a 45-degree angle. Squeeze your glutes and lift your hips toward the ceiling, making sure to tilt your pelvis. Lift them up as high as possible, squeezing your glutes. Slowly lower yourself down and repeat.', 
                rep: 20, 
                rewards: [
                    ["CORE", 200],
                    ["CHEST", 100], 
                    ["LEGS", 300],
                    ["BACK", 200],
                    ["SHOLDER ", 100]
                ]
            },
            {   id: 6, 
                img: Item3, 
                title: 'Burpees', 
                headline: "Another type of high-impact plyometric exercise, burpees are a full-body move that will torch calories quickly.", 
                desc: 'Another type of high-impact plyometric exercise, burpees are a full-body move that will torch calories quickly. Directions: Start by standing straight with feet shoulder-width apart and arms down by your sides. Start to squat down, moving your hands out in front of you. As soon as they reach the ground, extend your legs straight back so you end up in a high plank position. Immediately after you reach the high plank position, jump your feet up to your palms by hinging at the waist. Get your feet as close to your hands as you can get, landing them outside your hands if necessary. Stand up and immediately go into a jump squat. After you land, extend your legs back out again, continuing steps 3–4. Start with 15 reps.', 
                rep: 10, 
                rewards: [
                    ["CORE", 100],
                    ["LEGS", 300],
                ]
            },
            {   id: 7, 
                img: Item7, 
                title: "Cervical Extensor Excercise", 
                headline: "On your hands and knees let your head relax.", 
                desc: "On your hands and knees let your head relax. Now try and lift your head keeping your chin tucked in.Hold as long as possible (Aim 1 minute)", 
                rep: 10, 
                meta: 'Core Abs Lower-back',
                rewards: [
                    ["ARMS", 100],
                    ["SHOLDER", 100],
                    ["BACK", 100],
                    ["NECK", 200],
                    
                ]
            },
            {   id: 8, 
                img: Item1, 
                title: "W-Y Arm Slide", 
                headline: "Stand against a wall and try and get the back of your head to touch the wall", 
                desc: "Stand against a wall and try and get the back of your head to touch the wall.  Hold this position while you bring your arms back against the wall into a W shape. Now trying to keep your hands in contact with the wall, slide them upwards like a Y shape.", 
                rep: 10, 
                rewards: [
                    ["ARMS", 100],
                    ["SHOLDER", 100],
                ], 
            },
            {   id: 9, 
                img: Item1, 
                title: "Strengthening Side Bending", 
                headline: "Lie on your side with a pillow or cushion under your head", 
                desc: "Lie on your side with a pillow or cushion under your head.  Without turning the head, lift your head up sideways so as to bring your ear to your shoulder. Return your head to the initial position and repeat for 1 min on each side.", 
                rep: 10, 
                meta: 'Head Shoulder Warm-up', 
                rewards: [
                    ["ARMS", 100],
                    ["SHOLDER", 100],
                    ["NECK", 200],
                    
                ]
            },
            {   id: 10, 
                img: Item10, 
                title: "Swiss Ball Arms Raise", 
                headline: "Leaning forward in standing", 
                desc: "Leaning forward in standing, bending the hip (only the ball if you wish to). Try and keep your body still while lifting your arms up in front of you as high as you are able.", 
                rep: 10, 
                meta: 'Arms',
                rewards: [
                    [ "ARMS", 200 ],
                    [ "SHOLDERS", 100 ],
                    [ "NEXK", 100 ]
                ],
                kit: [
                    { aparatus: 'ball' }
                ]
            },
            {   id: 11, 
                img: Item11, 
                title: "Punching", 
                headline: "Stand on the spot and punch in front of you", 
                desc: "Stand on the spot and punch in front of you. You can do this with weights if you wish.", 
                rep: 10, 
                rewards: [
                    [ "ARMS", 300 ],
                    [ "SHOLDERS", 200 ],
                    [ "CORE", 200 ]
                ], 
                kit: [
                    { aparatus: 'Towel' },
                    { aparatus: 'Bag' }
                ]
            },
            {   id: 12, 
                img: Item1, 
                title: "Trunk rotation stabilisation", 
                headline: "Stand holding a ball in front of you", 
                desc: "Stand holding a ball in front of you.  Keep looking straight ahead as you twist the ball round to the right as much as you can then slowly bring the ball round to the left as much as you can.", 
                rep: 10, 
                meta: 'Neck Warm-up',
                rewards: [
                    [ "ARMS", 100 ],
                    [ "SHOLDERS", 100 ],
                    [ "NECK", 200 ]
                ],
                kit: [
                    { aparatus: 'ball' },
                ]
            },
            {   id: 13, 
                img: Item1, 
                title: "Bent Over Row", 
                headline: "Squeeze your shoulder blades together in standing ", 
                desc: "Squeeze your shoulder blades together in standing if this is easy lean forward at the hip and squeeze your shoulder blades together.", 
                rep: 10, 
                meta: 'Sholder Leg Warm-up',
                rewards: [
                    [ "ARMS", 100 ],
                    [ "SHOLDERS", 200 ],
                    [ "NECK", 100 ]
                ]
            },
            {   id: 14, 
                img: Item1, 
                title: "Wall Push-Up", 
                headline: "Place hands shoulder width apart against the wall", 
                desc: "Place hands shoulder width apart against the wall.  Keeping your body straight let your elbows bend and slowly lower wall and then push away.", 
                rep: 10, 
                meta: 'Sholder Leg Warm-up' ,
                rewards: [
                    [ "ARMS", 100 ],
                    [ "SHOLDERS", 200 ],
                    [ "NECK", 100 ],
                    [ "CORE", 100 ]
                ]
            },
            {   id: 15, 
                img: Item1, 
                title: "Squat Arms Overhead", 
                headline: "Hold a dowel over your head and your arms at 90 degrees", 
                desc: "Hold a towel over your head and your arms at 90 degrees to determine the best hand placement, then extend the elbows to get into the start position. Start with your feet shoulder-width and squat down keeping the dowel aligned over your feet. Keep your torso toward a vertical position.  Keep your knees aligned with your feet.", 
                rep: 10, 
                rewards: [
                    [ "ARMS", 100 ],
                    [ "SHOLDERS", 200 ],
                    [ "NECK", 100 ]
                ], 
                kit: [
                    { aparatus: 'Towel' }
                ]
            },
            {   id: 16,
                img: Item1, 
                title: 'Plank Extreme', 
                headline: "The plank is one of the greatest and most underrated exercises ever", 
                desc: "The plank is one of the greatest and most underrated exercises ever. Its practically a one-move static exercise that will help you build a core of steel, ripped abs and strong shoulders. Just get into push-up position on the ﬂoor, bend your elbows 90 degrees and prop yourself on the elbows, forearms and forefeet, forming a straight line from head to feet, then hold it for as long as you can without moving your waist or butt", 
                rep: 20, 
                meta: 'Core Abs Shoulders',
                rewards: [
                    ["CORE", 200],
                    ["LEGS", 100]
                ], 
                kit: [
                    { aparatus: 'Ball' },
                    { aparatus: 'Towel' }
                ],
                featured: true
            },
    ],
    addedItems:[],
    total: 0,
    totalCompleted: 0,
    totalCompletedPercent: 0  
}

export default initState;
