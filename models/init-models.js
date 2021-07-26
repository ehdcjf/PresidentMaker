var DataTypes = require("sequelize").DataTypes;
var _blike = require("./blike");
var _board = require("./board");
var _clike = require("./clike");
var _comment = require("./comment");
var _hit = require("./hit");
var _user = require("./user");

function initModels(sequelize) {
  var blike = _blike(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes);
  var clike = _clike(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var hit = _hit(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  blike.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(blike, { as: "blikes", foreignKey: "board_id"});
  comment.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(comment, { as: "comments", foreignKey: "board_id"});
  hit.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(hit, { as: "hits", foreignKey: "board_id"});
  clike.belongsTo(comment, { as: "comment", foreignKey: "comment_id"});
  comment.hasMany(clike, { as: "clikes", foreignKey: "comment_id"});
  blike.belongsTo(user, { as: "user_idx_user", foreignKey: "user_idx"});
  user.hasMany(blike, { as: "blikes", foreignKey: "user_idx"});
  board.belongsTo(user, { as: "writer_user", foreignKey: "writer"});
  user.hasMany(board, { as: "boards", foreignKey: "writer"});
  clike.belongsTo(user, { as: "user_idx_user", foreignKey: "user_idx"});
  user.hasMany(clike, { as: "clikes", foreignKey: "user_idx"});
  comment.belongsTo(user, { as: "writer_user", foreignKey: "writer"});
  user.hasMany(comment, { as: "comments", foreignKey: "writer"});

  return {
    blike,
    board,
    clike,
    comment,
    hit,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
