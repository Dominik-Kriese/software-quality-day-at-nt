export type Session = {
    name: string;
    host: string;
    roomNumber: number;
}

export type TimeSlot = {
    from: Date;
    to: Date;
    sessions?: Session[];
    overarchingTopic?: string;
}

export type Schedule = {
    timeslots: TimeSlot[];
}

export const schedule: Schedule = {
    timeslots: [
        {
            from: new Date(2023, 5, 23, 9, 0),
            to: new Date(2023, 5, 23, 10, 0),
            overarchingTopic: 'Let\'s start the day'
        },
        {
            from: new Date(2023, 5, 23, 10, 0),
            to: new Date(2023, 5, 23, 11, 0),
            sessions: [
                {name: 'Your awesome session', host: 'YOU', roomNumber: 1},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 2},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 3},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 4},
            ]
        },
        {
            from: new Date(2023, 5, 23, 11, 0),
            to: new Date(2023, 5, 23, 12, 0),
            sessions: [
                {name: 'Your awesome session', host: 'YOU', roomNumber: 1},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 2},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 3},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 4},
            ]
        },
        {
            from: new Date(2023, 5, 23, 12, 0),
            to: new Date(2023, 5, 23, 13, 0),
            sessions: [
                {name: 'Your awesome session', host: 'YOU', roomNumber: 1},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 2},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 3},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 4},
            ]
        },
        {
            from: new Date(2023, 5, 23, 13, 0),
            to: new Date(2023, 5, 23, 14, 0),
            sessions: [
                {name: 'Your awesome session', host: 'YOU', roomNumber: 1},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 2},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 3},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 4},
            ]
        },
        {
            from: new Date(2023, 5, 23, 14, 0),
            to: new Date(2023,  5, 23, 15, 0),
            sessions: [
                {name: 'Your awesome session', host: 'YOU', roomNumber: 1},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 2},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 3},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 4},
            ]
        },
        {
            from: new Date(2023, 5, 23, 15, 0),
            to: new Date(2023,  5, 23, 16, 0),
            sessions: [
                {name: 'Your awesome session', host: 'YOU', roomNumber: 1},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 2},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 3},
                {name: 'Your awesome session', host: 'YOU', roomNumber: 4},
            ]
        },
        {
            from: new Date(2023, 5, 23, 16, 0),
            to: new Date(2023,  5, 23, 17, 0),
            overarchingTopic: 'Let\'s wrap it up'
        }
    ]
}
