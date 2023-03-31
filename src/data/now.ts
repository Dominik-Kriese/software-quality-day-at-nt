import {schedule} from "./schedule";

export function now(): Date {
    const isMockDay = process.env.GATSBY_MOCK_EVENT_DAY;
    let nowDate = new Date();
    if (isMockDay) {
        const from = schedule.timeslots[0].from;
        nowDate = new Date(
            from.getFullYear(),
            from.getMonth(),
            from.getDate(),
            process.env.GATSBY_MOCK_EVENT_DAY_HOUR as number,
            0,
            1);
    }
    return nowDate;
}
