import React from "react";

import Avatar from "material-ui/Avatar";

import Wrapper from "./Wrapper";
import UserName from "./UserName";
import UserNumber from "./UserNumber";

import User from "../../user"

const styles = {};

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.uploadImage = this.uploadImage.bind(this);
        this.state = {
            user: JSON.parse(sessionStorage.getItem('user'))
        };
    }

    uploadImage(e) {
        let that = this;
        if (e.target.files && e.target.files[0]) {
            if (!e.target.files[0].type.match('image.*')) {
                alert("Please upload image");
                return false;
            }
            let reader = new FileReader();
            reader.onload = function () {
                that.state.user.photoURL = reader.result;
                User.updateUser({photoURL: reader.result});
                that.forceUpdate();
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        return false;
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <label htmlFor="file-input">
                        <Avatar style={{cursor: 'pointer'}} size={92} src={this.state.user.photoURL}/>
                    </label>
                    <input id="file-input" type="file" accept="image/*" capture="camera" style={{display: 'none'}} onChange={this.uploadImage}/>
                </div>
                <UserName>{this.state.user.username}</UserName>
                <UserNumber>{this.state.user.number}</UserNumber>
            </Wrapper>
        )
    }

}

export default ProfileCard;