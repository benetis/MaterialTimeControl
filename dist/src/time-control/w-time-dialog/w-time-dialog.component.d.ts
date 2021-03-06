import { MatDialogRef } from '@angular/material';
import { ITime } from '../w-clock/w-clock.component';
export declare class WTimeDialogComponent {
    private data;
    color: string;
    private dialogRef;
    userTime: ITime;
    private VIEW_HOURS;
    private VIEW_MINUTES;
    private currentView;
    constructor(data: {
        time: ITime;
        color: string;
    }, color: string, dialogRef: MatDialogRef<WTimeDialogComponent>);
    revert(): void;
    submit(): void;
}
