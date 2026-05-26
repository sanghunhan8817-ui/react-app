import React from 'react';

const MyCompenent = ({name, a}) => {
    return (
        <div>
            컴포 이름 {name}이야
            <p>{a}는 집으로 갑니다</p>
        </div>
    );
};

export default MyCompenent;