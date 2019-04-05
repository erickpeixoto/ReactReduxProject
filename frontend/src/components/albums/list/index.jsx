import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteAlbum } from '../actions'

import Grid from '@material-ui/core/Grid'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Pagination from "react-js-pagination"
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Icon } from 'react-icons-kit'
import {pencil2} from 'react-icons-kit/icomoon/pencil2'
import { bin } from 'react-icons-kit/icomoon/bin'
import { paragraphLeft } from 'react-icons-kit/icomoon/paragraphLeft'
import Helmet from './public/styles/helmet'




class ListAlbums extends Component {


  constructor(props) {
    super(props)
    this.state = {
        activePage: 1,
        itemsPerPage: 10
    }
    this.handlePageChange = this.handlePageChange.bind(this)
}


submit(value) {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='react-confirm-alert-body'>
                    <h5>Confirma a exclusão?</h5>
                    <p> <small>
                        Você deseja realmente excluir o álbum?
                        </small>
                    </p>
                    <button className={'button-recuse'} onClick={onClose}>Cancelar</button>
                    <button className={'button-confirm'} onClick={() => {
                        this.props.deleteAlbum(value)
                        onClose()
                    }}>Sim, excluir!</button>
                </div>
            )
        }
    })
}


handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber })
}

listItems(items, pageActual, limitItems) {
    let result = []
    let totalPage = Math.ceil(items.length / limitItems)
    let count = (pageActual * limitItems) - limitItems
    let delimiter = count + limitItems

    if (pageActual <= totalPage) {
        for (let i = count; i < delimiter; i++) {
            if (items[i] != null) {
                result.push(items[i])
            }
            count++
        }
    }
    return result
}

  renderRows() {
     
    const { albums: { all } } = this.props
      const list = this.listItems(all, this.state.activePage, this.state.itemsPerPage)

    return list.map(album => (


        <Grid key={album._id} container xs={12} className={'item'}>
                    <Grid xs={4} className={'count'}>
                    <Icon icon={paragraphLeft} />
                        <span className={'sum title'}>
                            {album._id}
                        </span>
                    </Grid>
                    <Grid xs={5} className={'count'}>
                    <Icon icon={paragraphLeft} />
                        <span className={'sum'}>
                            { album.title }
                        </span>
                    </Grid>
               

                    <Grid xs={3} className={'right-align'}>
                        <span className={'sum'}>

                            <Link to={`/albums/update/${album._id}`}>
                                <Button title='clique para alterar o registro' className={'update-album'}>
                                     <Icon icon={pencil2} />
                                </Button>
                            </Link>

                            <Button title='clique para excluir o registro' onClick={() => { this.submit(album._id) }} className={'delete-album'}>
                            <Icon icon={bin} />
                            </Button>

                        </span>
                    </Grid>
        </Grid>


    ))

}
  render() {
    const { albums: { all } } = this.props
    return (
      <div>
          <Grid xs={12} className={'container-companies'}>
          <Grid xs={12} className={'data-albums'}>
                <p>
                        <strong>Quantidade em base: </strong> <big>{(all) && all.length}</big> - 
                        <span className={'time-day'}>
                            {new Intl.DateTimeFormat('pt-BR', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date())}
                        </span>
                </p>
          </Grid>

                    {(all) && (all.length > 0)
                        ?
                        this.renderRows()
                        :
                        <p className={'center-align t10'}> Não há álbuns cadastrados. </p>
                    }
                </Grid>
                {(all) && (all.length > 0) && (
                    <Grid className={'align-right box-pagination'}>
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsPerPage}
                            totalItemsCount={(all) && all.length}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        />
                    </Grid>
                )}

                <Helmet />
      </div>
    )
  }
}


const mapStateToProps = state => ({ albums: state.albums })

const mapDispatchToProps =  dispatch => bindActionCreators({ deleteAlbum }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbums)
