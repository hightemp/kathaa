const config = require('./config');
const filendir = require('filendir');
const fs = require('fs-extra');


/**
 * Expose
 */

module.exports = {
  /**
  * type :  Abstract type of the file being saved. "snapshot", "user_upload", etc.
            Each type gets mapped to a different directory
  **/
  save_base64_png : function(type, filename, base64_png_data, callback){
    console.log("Attempting to Write "+type+" for "+filename);
    var buff = new Buffer(base64_png_data
      .replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');

    filendir.writeFile( config.root + '/public/'+type+'/' + filename,
                  buff,
                  function (err) {
                      console.log('Successfully Wrote '+type+' File : '+filename);
                      callback(err);
                  });
  },
  copy_file: function(type, source, target, callback){
    fs.copy(config.root + '/public/' + type + '/' + source,
            config.root + '/public/' + type + '/' + target,
            callback );
  },
  delete_file : function(type, filename, callback){
    fs.unlink( config.root + '/public/' + type + '/' + filename, function(err){
      console.log("Successfully Delete "+type+' File : '+filename);
      callback(err);
    });
  }
}
