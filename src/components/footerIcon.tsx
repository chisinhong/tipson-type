import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SearchIcon from '@material-ui/icons/Search';
import TouchIcon from '@material-ui/icons/TouchApp';
import * as React from 'react';

export default class IconTabs extends React.Component {
  public state = {
    value: 0,
  };

  public handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    this.setState({ value });
  };

  public render() {
    return (
      <Paper style={{ width: 500 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
          indicatorColor="primary"
          textColor="primary"
          className="fixed-bottom footer-btn"

        >
          <Tab icon={<TouchIcon />} />
          <Tab icon={<FavoriteIcon />} />
          <Tab icon={<SearchIcon />} />
          <Tab icon={<PersonPinIcon />} />
        </Tabs>
      </Paper>
    );
  }
}