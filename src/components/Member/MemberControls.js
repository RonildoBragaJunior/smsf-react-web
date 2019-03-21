import React from 'react';

import MemberControl from './MemberControl';

const controls = [
    { label: 'Create', type: 'create' },
    { label: 'Update', type: 'update' },
    { label: 'Delete', type: 'delete' },
];

const memberControls = ( props ) => (
    <div>
        {controls.map(ctrl => (
            <MemberControl
                key={ctrl.label}
                label={ctrl.label}
                added={props.memberAdded}
            />
        ))}
    </div>
);

export default memberControls;