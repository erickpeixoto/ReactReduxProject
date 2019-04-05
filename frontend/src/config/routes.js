
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from '../components/main'
import App from '../components/app'
import newAlbum from '../components/albums/new'
import UpdateAlbum from '../components/albums/update'
 
class Routes extends Component {

    render() {
        
        return (
            <Router>
                <section>
                    <Main>
                        <Route exact path="/" component={App} />
                        <Route exact path="/albums/dump" component={App} />
                        <Route exact path="/albums/new" component={newAlbum} />
                        <Route exact path="/albums/update/:id" component={UpdateAlbum}/>
                   </Main>    
               </section>
            </Router>
      )
    }
}
const mapStateToProps = state => ({ settings: state.settings })
export default connect(mapStateToProps)(Routes)
