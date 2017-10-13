
import React from 'react'


class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg : []
        }
    }
    componentDidMount() {
        const xhr = new XMLHttpRequest()
        xhr.open('GET','/app',true)
        xhr.send()
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
                let msg = JSON.parse(xhr.res)
            } else {
                console.log('error')
            }
        }
    };

    render() {
        return (
            <div>
                Hello,React!
            </div>
        )
    }
}

export default Hello;
