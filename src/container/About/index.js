import { connect } from 'react-redux';

import { About } from '../../components/About';

export const AboutContainer = connect(
  ({ home }) => home
)(About);
