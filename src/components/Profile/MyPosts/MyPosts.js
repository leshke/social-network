import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { Form, Field } from 'react-final-form'
import { composeValidators, maxValueCalc } from '../../../validators/vaildators';
import { Input, Textarea } from '../../common/FormControl/FormControl';

const PostForm = (props) => {
    const onSubmit = (values, form) => {
        props.addPost(values.post, values.postImage);
        setTimeout(() => {
            form.reset();
        }, 300);
    };

    return <Form onSubmit={onSubmit} render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
            <Field name="post" placeholder="Post text" validate={composeValidators(maxValueCalc(99))} render={Textarea} />
            <Field name="postImage" placeholder="Image url" render={Input} />
            <button disabled={submitting || pristine}>Add</button>
        </form>
    )}/>
}

const MyPosts = React.memo((props) => {
    const postsElements = props.profileState.map(post => <Post loginName={props.loginName} key={post.id}
        avatarImg={props.avatarImg} name={post.name}
        id={post.id} liked={post.liked} like={post.likes}
        toggleLike={props.toggleLike} image={post.imageLink}
    />)

    return (
        <div className={s.profileWrapper}>
            <h3>My posts</h3>
            {!props.isOwner ?
                <div className={s.formContainer}>
                    <h4>Create new post</h4>
                    <PostForm addPost={props.addPost} />
                </div> :
                ''}
            {!props.isOwner ? postsElements : <p>This user has not added a post yet..</p>}
        </div>
    )
})

export default MyPosts;