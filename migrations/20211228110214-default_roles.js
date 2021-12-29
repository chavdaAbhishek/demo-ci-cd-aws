module.exports = {
  async up(db, callback) {
    // DB connection
    return db.collection('roles').insert({name: 'Developer', isDeleted: false},
    function(err, data) {
      if(err) {
        console.error("Error occured : \n",err)
        return callback(err);
      }
      console.info("Developer Roles Created Successfully.");
      callback();
    })
  },

  async down(db, callback) {
    callback();
  }
};
