import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleAlbum } from '../actions'
import { handleHistory } from '../../app/actions'


import Grid from '@material-ui/core/Grid'
import Helmet from './public/styles/helmet'

import Form from './form'


class UpdateAlbum extends Component {

componentWillMount(){
  this.props.handleHistory(this.props.history)
}
   
  render() {
    return (
        <Grid xs={12} className={'centerAlign'}>
              <Form onSubmit={this.props.handleAlbum}/>                  
              <Helmet />
      </Grid>
    )
  }
}


const mapStateToProps = state => ({ albums: state.albums })
const mapDispatchToProps = dispatch => bindActionCreators({ handleAlbum, handleHistory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAlbum)
