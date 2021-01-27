import React, { Component } from 'react'
import "./Images.css"
import Popup from './Popup';

class Images extends Component {
    constructor(props){
        super(props)
        this.state={
            imageUrl:"",
            imageUrlArray: [
                "https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg?w=1550"
            ],
            showModal:false,
            popImageUrl:""

        };
    }
    imageSubmiiter = (e) =>{
        e.preventDefault();
        let imageUrlArray = this.state.imageUrlArray;
        imageUrlArray.push(this.state.imageUrl)
        this.setState({
            imageUrlArray: imageUrlArray

        })
    }
    handleLinkChange = (e) =>{
        e.preventDefault();
        this.setState({
            imageUrl: e.target.value
        })
    }

    handlePopup = (url) =>{
        this.setState({
            showModal: this.state.showModal,
            popImageUrl: url
        })
    }
    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
            return(
                <img
                className="singleImage"
                src={url}
                key={index}
                onClick={()=>this.handlePopup(url)}
                />
            )
        })
        return (
            <div className="Images">
                <form onSubmit={this.imageSubmiiter}>
                    <input 
                    type="text"
                    placeholder="Add Image"
                    onChange={this.handleLinkChange}
                    />

                    <button type="Submit" className="submitButton">Add Image</button>
                </form>
                {images} 
                {this.state.showModal ? (
                    <Popup
                    
                    popImageUrl={this.state.popImageUrl}
                    closePopup={this.handlePopup}/>
                    
                ): null
            }               
            </div>
        );
    }
}

export default Images;