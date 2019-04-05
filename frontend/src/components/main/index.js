import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'  

import Helmet from 'react-helmet'
import Messages from './messages/toastr'

import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/icomoon/plus'
import { download } from 'react-icons-kit/icomoon/download'
import Button from '@material-ui/core/Button'


class Main extends Component {

    render() {
        return (
              <MuiThemeProvider>
                <section>
                    <Grid container spacing={24}>
                        <Grid item xs={12} className={'centerAlign'}>
                            <Grid container xs={12} className={'centerAlign'}>
                                <Grid item xs={4} className={'alignLeft box-ranking'}>
                                    <Link to={'/albums/new'}>
                                        <Button aria-label="Close">
                                            <Icon icon={plus} />
                                            <span className="btnNew">Novo Álbum</span>
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={8} className={'alignRight box-ranking'}>
                                    <Link to={'/albums/dump'}>
                                        <Button aria-label="Close">
                                            <Icon icon={download} />
                                            <span className="btnNew">Carga de Álbuns</span>
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>


                            <Grid item xs={12}>
                                <Link to={'/'} title={'Ir para listagem'}>
                                      <img src={require('../app/public/images/skillLogo.png')} alt="Grupo Skill" className="img-logo" />
                                </Link>
                            </Grid>
                            <Grid item xs={12} className="list-albums">
                                {this.props.children}
                            </Grid>
                        </Grid>
                    </Grid>
                     <Helmet
                        title="Grupo Skill"
                        style={[{
                            "cssText": `
                            body {
                                    min-height: 100%;
                                    background: #c3ddf4;
                                    padding: 15px;
                                    font-family: 'Comfortaa-Regular'
                                }
                                #root{
                                    padding: 7px;
                                    margin: 0px auto;
                                    box-shadow: -2px 11px 40px rgba(4, 0, 0, 0.22);
                                    background: #f2f4f8;
                              }
                              .alignRight{
                                    text-align: right !important;
                                }
                          
                            `
                        }]}
                    />
                    <Messages/>
                </section>
               </MuiThemeProvider>
        )
    }
}
export default Main
