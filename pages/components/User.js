import React from 'react'
const user = (props) => {
    return (
        <div>
            Name: {props.name}
            <br />
            Age: {props.age}
            <style jsx>{`
                div {
                    border : 1px solid #eee;
                    box-shadow : 0 2px 3px #ccc;
                    padding: 20px;
                    text-align : center;
                }
            `}</style>
        </div>
    )
}
export default user