import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from "../components/data/today-appointment"

export const Schedule: React.FC<{}> = () => {
    return(
        <Paper>
            <Scheduler 
            data={appointments} 
            height="auto">
                <WeekView startDayHour={6} endDayHour={20} cellDuration={60} />
                <Appointments />
            </Scheduler>
        </Paper>
    );
}