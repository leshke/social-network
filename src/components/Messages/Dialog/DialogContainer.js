import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withRedirect'
import Dialog from './Dialog'

const MapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsPage.dialogs,
    }
}

const MapDispatchToProps = () => {
    return {

    }
}

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect //hoc for authorisation redirect to login
)(Dialog)
