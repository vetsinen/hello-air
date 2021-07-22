import {
    initializeBlock,
    useBase,
    useRecords,
} from '@airtable/blocks/ui';
import React from 'react';

function HelloWorldApp() {
    // YOUR CODE GOES HERE
    const base = useBase();
    const table = base.getTableByName('events');
    const records = useRecords(table);

    const events = records.map(record => {
        return (
            <div key={record.id}>
                {record.getCellValue('Price') || 'not named record'}
            </div>
        );
    });

    return (
        <div>{events}</div>
    );
}

initializeBlock(() => <HelloWorldApp />);
