export type Session = {
    name: string;
    host: string;
}

export type TimeSlot = {
    from: Date;
    to: Date;
    sessions?: Session[];
    overarchingTopic?: string;
}

type Schedule = {
    timeslots: TimeSlot[];
}

export const schedule: Schedule = {
    timeslots: [
        {
            from: new Date(2022, 5, 3, 9, 0),
            to: new Date(2022, 5, 3, 10, 0),
            overarchingTopic: 'Let\'s start the day'
        },
        {
            from: new Date(2022, 5, 3, 10, 0),
            to: new Date(2022, 5, 3, 11, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 5, 3, 11, 0),
            to: new Date(2022, 5, 3, 12, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 5, 3, 12, 0),
            to: new Date(2022, 5, 3, 13, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 5, 3, 13, 0),
            to: new Date(2022, 5, 3, 14, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 5, 20, 13, 0),
            to: new Date(2022, 5, 20, 14, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 5, 20, 14, 0),
            to: new Date(2022,  5, 20, 15, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 5, 20, 16, 0),
            to: new Date(2022,  5, 20, 17, 0),
            overarchingTopic: 'Let\'s wrap it up'
        }
    ]
}
