"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
// Em Header.js

var Header = function Header(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
    handleLogout = _ref.handleLogout,
    userStatus = _ref.userStatus,
    imgPath = _ref.imgPath,
    indexPath = _ref.indexPath,
    configPath = _ref.configPath;
  return /*#__PURE__*/React.createElement("header", {
    className: "flex items-center justify-between p-4 "
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl font-bold transition hover:drop-shadow-lg hover:text-slate-700",
    alt: ""
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: imgPath,
    alt: "",
    className: "w-40"
  })))), /*#__PURE__*/React.createElement("nav", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", null, isLoggedIn && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hidden gap-3 text-sm md:flex"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: indexPath,
    className: "px-4 py-2 text-white transition bg-green-600 rounded-sm cursor-pointer hover:drop-shadow-lg hover:bg-green-800"
  }, "In\xEDcio"), userStatus === "1" &&
  /*#__PURE__*/
  // Verifica se o usuário é admin
  React.createElement(_reactRouterDom.Link, {
    to: configPath,
    className: "px-4 py-2 text-white transition rounded-sm cursor-pointer bg-slate-600 hover:drop-shadow-lg hover:bg-slate-800"
  }, "Configura\xE7\xF5es"), /*#__PURE__*/React.createElement("button", {
    className: "px-4 py-2 text-white transition bg-red-600 rounded-sm cursor-pointer hover:drop-shadow-lg hover:bg-red-800",
    onClick: handleLogout
  }, "Logout")), /*#__PURE__*/React.createElement("menu", {
    className: "md:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: indexPath,
    className: "block py-2"
  }, /*#__PURE__*/React.createElement(_fa.FaHome, {
    className: "cursor-pointer"
  })), userStatus === "1" &&
  /*#__PURE__*/
  // Verifica se o usuário é admin
  React.createElement(_reactRouterDom.Link, {
    to: configPath,
    className: "block py-2"
  }, /*#__PURE__*/React.createElement(_fa.FaUserCog, {
    className: "cursor-pointer"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout,
    className: "block py-2"
  }, /*#__PURE__*/React.createElement(_fa.FaUserSlash, {
    className: "cursor-pointer"
  }))))))));
};
var _default = exports["default"] = Header;