import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Search from './Search';
import Settings from './Settings';
import Paper from 'material-ui/Paper';
import ResourceList from './ResourceList';
import FontIcon from 'material-ui/FontIcon';
import Addlink from '../../components/AddLink'
import Profile from '../../components/Profile'
import resources from '../../seeds/resources.json';
import axios from 'axios';

import API_LINK from '../../constants.js';

const paperStyle = {
  width: '75%',
  marginTop: '100px',
  float: 'right',
  boxShadow: 'none',
};



class App extends Component {
  static contextTypes = {
    set_userinfo: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired,
    user_id: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    avatar_url: React.PropTypes.string.isRequired
  }

  componentDidMount() {
    // TODO: get user ID and retrieve all their tutorials
    var user_id = this.props.match.params.user_id || this.context.user_id
    var api_url = API_LINK + '/user/' + user_id
    axios.get(api_url).then(response => console.log(response));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Home"
            iconClassNameRight={ <FontIcon className="material-icons">person</FontIcon>}
            style={{position: 'fixed', left: '0px', top: '0px', boxSizing: 'border-box', paddingTop: '1%', backgroundColor: '#23b567'}}
          >
            <Search style={{ float: 'left', padding: 0, }}/>
            <Settings/>
          </AppBar>
          <Profile/>
          <Paper style={paperStyle} zDepth={3}>
            <Addlink />
            <ResourceList resources={resources}/>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
