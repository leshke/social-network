import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.PureComponent {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        if (!this.state.editMode) {
            this.setState({
                editMode: true
            })
        }
        else {
            this.setState({
                editMode: false
            })
            this.props.updateStatus(this.state.status)
        }
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div className={s.status}>
                {
                    !this.state.editMode ?
                        <span onClick={this.toggleEditMode}>{this.props.status || 'This user has not status'}</span> :
                        <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.toggleEditMode} value={this.state.status || ''}></input>
                }
            </div>
        )

    }
}

export default ProfileStatus