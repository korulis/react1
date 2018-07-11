import * as React from 'react';
import MyRowsComponentParams from './MyRowsComponentParams';
import MyOneRow from './MyOneRow';


const MyRowsComponent = (perams:MyRowsComponentParams) =>{
    let result = [];

    for (const order of perams.orders) {
        result.push(MyOneRow({order:order}));
    }

    return (
    <tbody>{result}</tbody>);
};

export default MyRowsComponent;