(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDNEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEL0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxJQUhaO0FBS0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzdCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRjZCLE1BR3JCQyxLQUhxQixHQUdYRixLQUhXLENBR3JCRSxLQUhxQjtBQUk3Qiw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBEOztBQVNPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHRCxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZZCxRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUM5QkYsU0FBUyxDQUFDZ0IsT0FBRCxFQUFVZCxRQUFWLENBRHFCO0FBQUEsQ0FBekI7Ozs7QUFHUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3V0XCIgOiBcInNlbGZcIn1cIj4ke1xuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXG4gIH06PC9zcGFuPiAke3RleHR9XG4gICAgYDtcbiAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xufTtcblxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+XG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XG5cbmlmIChzZW5kTXNnKSB7XG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcbn1cbiJdfQ==
},{"./sockets":5}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNWFkZjg1NzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG4iXX0=
},{"./chat":1,"./login":3,"./sockets":5}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBSCxRQUFRLEVBQUk7QUFDeEI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTE4sRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUM1QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGNEIsTUFHcEJxQixLQUhvQixHQUdWRCxLQUhVLENBR3BCQyxLQUhvQjtBQUk1QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xuXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcblxuY29uc3QgbG9nSW4gPSBuaWNrbmFtZSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG4gIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XG59O1xuXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xufSBlbHNlIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQ2hDWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBRGdCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgMTQ5LCAwKVwiKTsiXX0=
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLE9BQU87QUFBQSxTQUFLSCxNQUFNLEdBQUdHLE9BQWQ7QUFBQSxDQUE1Qjs7OztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFELE9BQU8sRUFBSTtBQUFBLGdCQUNqQkUsTUFEaUI7QUFBQSxNQUM1QkMsTUFENEIsV0FDNUJBLE1BRDRCO0FBRXBDSixFQUFBQSxZQUFZLENBQUNDLE9BQUQsQ0FBWjtBQUNBQSxFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDRSxPQUFsQixFQUEyQkMsNEJBQTNCO0FBQ0FOLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNJLFlBQWxCLEVBQWdDQyxpQ0FBaEM7QUFDQVIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ00sTUFBbEIsRUFBMEJDLHNCQUExQjtBQUNELENBTk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVOZXdNZXNzYWdlIH0gZnJvbSBcIi4vY2hhdFwiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNvY2tldCA9IGFTb2NrZXQgPT4gKHNvY2tldCA9IGFTb2NrZXQpO1xuXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSBhU29ja2V0ID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgYVNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xufTtcbiJdfQ==
},{"./chat":1,"./notifications":4}]},{},[2])