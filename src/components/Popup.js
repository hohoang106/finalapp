import React, { Component } from 'react'

export default class Popup extends Component {
    render() {
        return (
            <div className="popupParent">

                <div classNam="popoupParent">

                    <button
                    className="imageClosingButton"
                    onClick={this.props.closePopup}
                    >

                    </button>
                    <img src={this.props.popImageUrl}/>

                </div>
                
            </div>
        )
    }
}
