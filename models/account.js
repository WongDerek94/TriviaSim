const database = require('./database')

class Account {
  constructor () {
    this.username = undefined
    this.password = undefined
    this.userID = undefined
  }

  /**
   * @desc [To be determined]
   * @returns {undefined}
   */
  login (username, password) {
    
    return undefined
  }

  /**
   * @desc [To be determined]
   * @returns {undefined}
   */
  register (username, password) {
    return undefined
  }
}

database.executeQuery('SELECT * FROM public."ACCOUNTS"').then((result) => {
  console.log(result)
  console.log(typeof result)
})

module.exports = {
  Account
}
