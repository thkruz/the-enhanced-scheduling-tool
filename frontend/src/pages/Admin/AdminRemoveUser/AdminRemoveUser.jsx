import React, {useState, useContext, useEffect} from "react";
import { SchedulerContext } from "../../../SchedulerContext";

const AdminRemoveUser = () => {

    const [memberList, setMemberList] = useState({});
    const [calendarList, setCalendarList] = useState({});

    const scheduler = useContext(SchedulerContext);

    useEffect( () => {
        setMemberList(scheduler.roster);
    }, [memberList])

    useEffect( () => {
        setCalendarList(scheduler.calendar);
    }, [calendarList])

    console.log(scheduler);
    
    return (
        <div>
            Remove Users
        </div>
    )
}

export default AdminRemoveUser;