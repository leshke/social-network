import React from 'react';
import s from './Post.module.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import avatar from '../../../../assets/img/avatar.png';
import { Lightbox } from "react-modal-image";

class Post extends React.PureComponent {
    state = {
        open: false
    }

    toggleLiteBox = () => {
        if (this.state.open) {
            this.setState({
                open: false
            });
        }
        else {
            this.setState({
                open: true
            });
        }
    }

    render() {
        return (
            <div className={s.post}>
                <div className={s.headerPost}>
                    <img className={s.avatar} src={this.props.avatarImg || avatar} alt="" />
                    <span>{this.props.loginName}</span>
                </div>
                <p>{this.props.name}</p>
                { this.props.image ? <img onClick={this.toggleLiteBox.bind(this)} className={s.postImage} src={this.props.image} alt="" /> : null}
                <div onClick={() => this.props.toggleLike(this.props.id)} className={!this.props.liked ? s.notLiked : s.liked}>
                    <ThumbUpAltIcon /> <span>{this.props.like}</span>
                </div>
                {
                    this.state.open ? <Lightbox
                        medium={this.props.image}
                        hideZoom={true}
                        hideDownload={true}
                        alt={this.props.name}
                        onClose={this.toggleLiteBox}
                    /> : undefined
                }
            </div>
        )
    }
}

export default Post;