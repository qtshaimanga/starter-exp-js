import { EventEmitter2 } from 'eventemitter2'
import assign from 'object-assign'
import Dispatcher from '../dispatcher'
import Actions from './../actions'
import EventsConstants from './../constants/EventsConstants'
import DeviceConstants from './../constants/DeviceConstants'


const Store = assign({}, EventEmitter2.prototype, {

  Resources: {},
  getResource: ( id ) => Store.Resources[ id ]

})

Store.dispatchToken = Dispatcher.register(( payload ) => {

  const actionType = payload.type
  const item = payload.item

  switch ( actionType ) {

    case EventsConstants.RESOURCES_READY:
    Store.Resources[ item.id ] = item
    Store.emit( actionType, item )
    break
    default:
      Store.emit( actionType, item )
      break

  }

})

export default Store
