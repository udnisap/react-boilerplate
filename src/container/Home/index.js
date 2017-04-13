import { connect } from 'react-redux';

import { Home } from '../../components';

export const HomeContainer =  connect(
  ({ home }) => home
)(Home);
