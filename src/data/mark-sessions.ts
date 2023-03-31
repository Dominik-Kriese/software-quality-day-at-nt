import {Schedule, schedule, TimeSlot} from "./schedule";

export type MarkedSession = {
    dateIdentifier: string,
    roomNumber: number
}

function isLocalStorageAvailable(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        alert('Local Storage is deactivated. Marking functions is not available!')
        return false;
    }
}

export function isMarkedSession(roomNumber: number, startTime: Date): boolean {
    const storedValue = localStorage.getItem('markedSessions');
    const parsedValue: MarkedSession[] = !!JSON.parse(storedValue) ? JSON.parse(storedValue) : [];
    return !!parsedValue.find(session => session.roomNumber === roomNumber && session.dateIdentifier === startTime.toUTCString());
}

export function addMarkedSession(roomNumber: number, startTime: Date): void {
    isLocalStorageAvailable();
    const storedValue = localStorage.getItem('markedSessions');
    const parsedValue: MarkedSession[] = !!JSON.parse(storedValue) ? JSON.parse(storedValue) : [];
    parsedValue.push({roomNumber, dateIdentifier: startTime.toUTCString()});
    localStorage.setItem('markedSessions', JSON.stringify(parsedValue));
}

export function removeMarkedSession(roomNumber: number, startTime: Date): void {
    isLocalStorageAvailable();
    const storedValue = localStorage.getItem('markedSessions');
    const parsedValue: MarkedSession[] = !!JSON.parse(storedValue) ? JSON.parse(storedValue) : [];
    const updatedValue = parsedValue.filter(session => session.roomNumber !== roomNumber || session.dateIdentifier !== startTime.toUTCString())
    localStorage.setItem('markedSessions', JSON.stringify(updatedValue));
}

function removeNonmarkedSessions(timeslot: TimeSlot) {
    return {
        ...timeslot,
        sessions: timeslot.sessions?.filter(session => isMarkedSession(session.roomNumber, timeslot.from))
    };
}

export function getAllMarkedSessions(): Schedule {
    isLocalStorageAvailable();
    const completeSchedule = schedule;
    const filteredTimeSlots = completeSchedule.timeslots
        .map(timeslot => removeNonmarkedSessions(timeslot))
        .filter(timeslot => !!timeslot.sessions?.length);
    return {timeslots: filteredTimeSlots};
}
