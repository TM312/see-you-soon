import { Database } from '@vuex-orm/core'
import Event from '@/models/Event'


const database = new Database()

database.register(Event)

export default database
