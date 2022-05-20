type Session = {
    name: string;
    host: string;
}

export type TimeSlot = {
    from: Date;
    to: Date;
    sessions: Session[];
}

type Schedule = {
    timeslots: TimeSlot[];
}

export const schedule: Schedule = {
    timeslots: [
        {
            from: new Date(2022, 6, 3, 10, 0),
            to: new Date(2022, 6, 3, 11, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 6, 3, 11, 0),
            to: new Date(2022, 6, 3, 12, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 6, 3, 12, 0),
            to: new Date(2022, 6, 3, 13, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 6, 3, 13, 0),
            to: new Date(2022, 6, 3, 14, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 6, 3, 14, 0),
            to: new Date(2022, 6, 3, 15, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        },
        {
            from: new Date(2022, 6, 3, 15, 0),
            to: new Date(2022, 6, 3, 16, 0),
            sessions: [
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
                {name: 'Meine coole Session', host: 'DKR'},
            ]
        }
    ]
}
