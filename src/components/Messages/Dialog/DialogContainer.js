import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withRedirect'
import Dialog from './Dialog'

const MapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsPage.dialogs,
    }
}

export default compose(
    connect(MapStateToProps, null),
    withAuthRedirect //hoc for authorisation redirect to login
)(Dialog)
