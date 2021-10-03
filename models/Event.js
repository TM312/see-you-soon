// Event Model

import { Model } from '@vuex-orm/core'

export default class Event extends Model {
    // This is the name used as module name of the Vuex Store.
    static entity = 'events'

    // List of all fields (schema) of the post model. `this.attr` is used
    // for the generic field type. The argument is the default value.
    static fields() {
      return {
        id: this.number(null).nullable(),
        public_id: this.string(''),
        name: this.string(''),
        description: this.string(null).nullable(),
        checked: this.boolean(false)
      }
    }
}
