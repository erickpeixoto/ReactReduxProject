import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAlbum as updateFunc,
         fetchAlbumOne } from '../actions'


import Grid from '@material-ui/core/Grid'
import Helmet from './public/styles/helmet'

import Form from './form'


class UpdateAlbum extends Component {


    componentWillMount() {
        const { id } = this.props.match.params
        const { fetchAlbumOne } = this.props
        fetchAlbumOne(id)
    }

  render() {
    return (
        <Grid xs={12} className={'centerAlign'}>
              <Form onSubmit={this.props.updateFunc}/>                  
              <Helmet />
      </Grid>
    )
  }
}


const mapStateToProps = state => ({ albums: state.albums })
const mapDispatchToProps = dispatch => bindActionCreators({ updateFunc,
                                                            fetchAlbumOne }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAlbum)
