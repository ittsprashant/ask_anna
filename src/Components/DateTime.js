import React, { Component } from 'react'

class DateTime extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: ''
        }
    }




    componentDidMount() {
        console.log('test')
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        this.setState({
            date: datetime
        })

    }

    render() {
        return (
            <div>
                {this.state.date}
            </div>
        )
    }
}

export default DateTime
