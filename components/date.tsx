import { parseISO, format } from 'date-fns';
import React, { ReactElement } from "react";

export default function Date ({ dateString }: { dateString: string }): ReactElement {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
