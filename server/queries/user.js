// queries/user.js

import db from '../database/db'
import Query from './'

export default class UserQuery extends Query {

  constructor() {
    super("users")
  }

}
