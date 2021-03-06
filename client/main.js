import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import '../imports/ui/accounts-config';
import Messenger from '../imports/ui/containers/Messenger'

Meteor.startup(() => {
  render(<Messenger />, document.getElementById('app'))
})
