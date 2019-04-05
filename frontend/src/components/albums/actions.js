import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {  initialize } from 'redux-form'
import { FETCH_ALBUMS,
         FETCH_ALBUM_ONE } from './constants'



export function fetchAlbums() {
    return (dispatch, getState) => {
       
        const { app } = getState(),
                url = `${app.endpoints.api.host}/albums/all`

               axios.get(url)
                    .then(resp => {
                        dispatch([{
                            type: FETCH_ALBUMS,
                            payload: resp.data.albums
                        }])
                    })
                    .catch(e => {
                        toastr.error('Atenção', 'Falha na listagem de álbuns')
                    })
        
    }
}

export function fetchAlbumOne(param) {
    return (dispatch, getState) => {

        const { app } = getState(),
                url = `${app.endpoints.api.host}/albums/one/${param}`

        axios.get(url)
            .then(resp => {
                dispatch([{
                    type: FETCH_ALBUM_ONE,
                    payload: resp.data.album[0]
                },
                    initialize('album_update', resp.data.album[0])
            ])
            })
            .catch(e => {
                toastr.error('Atenção', 'Falha na obtenção do álbum')
            })
    }
}

export function updateAlbum(album) {
    return (dispatch, getState) => {

        const { app } = getState(),
            url = `${app.endpoints.api.host}/albums`

        axios.put(url, album)
            .then(resp => {
                dispatch([
                    fetchAlbumOne(album._id)
                ])
                 toastr.success('Sucesso', 'Operação Realizada com Sucesso')
            }).catch(e => {
                toastr.error('Atenção', 'Falha no cadastramento.')
            })

    }
}


export function deleteAlbum(_id) {
    return (dispatch, getState) => {
        const { app } = getState(),
                uri = `${app.endpoints.api.host}/albums/${_id}`

        axios.delete(uri)
             .then(resp => {
                dispatch([
                    fetchAlbums()
                ])
                toastr.success('Sucesso', 'Excluído com Sucesso')
                 app.history.push('/')
              })
            .catch(e => {
                const { error } = e.response.data
                toastr.error('Atenção', error)
            })
    }
}



export function handleAlbum(values) {

    return (dispatch, getState) => {

        const { app } = getState(),
                uriPost = `${app.endpoints.api.host}/albums`

            const album = {
                id: parseInt(values.id),
                userId: parseInt(values.userId),
            title: values.title
         }
   
       axios.post(uriPost, album)
            .then(resp => {
                dispatch([
                    fetchAlbums()
                ])
                toastr.success('Sucesso', 'Operação Realizada com Sucesso')
                app.history.push('/')
            }).catch(e => {
                toastr.error('Atenção', e)
            })

    }
}



export function handleDump() {

    return (dispatch, getState) => {

        const { app } = getState(),
            uriPost = `${app.endpoints.api.host}/albums/dump`
        axios.get(uriPost)
            .then(resp => {
                dispatch([
                    fetchAlbums()
                ])
                toastr.success('Sucesso', 'Operação Realizada com Sucesso')
                app.history.push('/')
            }).catch(e => {
                toastr.error('Atenção', e)
            })

    }
}

