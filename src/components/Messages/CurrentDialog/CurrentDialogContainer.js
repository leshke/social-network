import { connect } from 'react-redux';
import { actionAddMessage } from '../../../redux/reducer-messages';
import CurrentDialog from './CurrentDialog'

const MapStateToProps = (state) => {
    return {
        messageState: state.dialogsPage,
        avatarImg: state.profilePage.avatar,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => dispatch(actionAddMessage(message)),
    }
}

const CurrentDialogContainer = connect(MapStateToProps, MapDispatchToProps)(CurrentDialog)

export default CurrentDialogContainer;