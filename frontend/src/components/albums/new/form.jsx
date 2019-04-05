import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import {
    TextField
} from 'redux-form-material-ui'
import Button from '@material-ui/core/Button'


class Form extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Grid  xs={12} className={'containerForm'}>
                     <Grid xs={12} item>
                        <Field
                            name="userId"
                            component={TextField}
                            hintText="digite..."
                            floatingLabelText="User Id"
                            type={'number'}
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <Field
                            name="id"
                            component={TextField}
                            hintText="digite..."
                            floatingLabelText="Id"
                            type={'number'}
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <Field
                            name="title"
                            component={TextField}
                            hintText="digite..."
                            floatingLabelText="Title"
                        />
                    </Grid>
                    <Grid xs={12} item className={'box-form center-align box-actions'}>
                        <Button type={'submit'} className={'full-size'}>Criar Álbum</Button>
                    </Grid>

                </Grid>
            </form>
        )
    }
}

function validate(values) {

    const { id, userId, title } = values
    const errors = {}
    if (!id) {
        errors.id = 'Id inválido'
    }
    if (!userId) {
        errors.userId = 'userId inválido'
    }
    if (!title) {
        errors.title = 'title inválido'
    }
    return errors
}

export default reduxForm({
    form: 'album_handle',
    validate
})(Form)
