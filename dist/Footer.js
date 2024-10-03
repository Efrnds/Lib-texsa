"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function Footer(_ref) {
  var businessName = _ref.businessName;
  return /*#__PURE__*/React.createElement("footer", {
    className: "flex justify-between px-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "py-4 text-xl antialiased text-slate-700 text-wrap"
  }, businessName), /*#__PURE__*/React.createElement("p", {
    className: "py-4 text-xl antialiased text-slate-700 text-wrap"
  }, "Todos os direitos reservados"));
}
var _default = exports["default"] = Footer;