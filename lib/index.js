'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sonar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raspiPeripheral = require('raspi-peripheral');

var _raspiSonarAddon = require('../build/Release/raspiSonarAddon');

var _raspiSonarAddon2 = _interopRequireDefault(_raspiSonarAddon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Sonar class provides a read method to interact with an ultrasonic sensor

var Sonar = exports.Sonar = function (_Peripheral) {
    _inherits(Sonar, _Peripheral);

    function Sonar(config) {
        _classCallCheck(this, Sonar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sonar).call(this, config));

        _this.sensor = _raspiSonarAddon2.default.sonarFactory(config);
        return _this;
    }

    // accepts function as an argument which is called back with a duration


    _createClass(Sonar, [{
        key: 'read',
        value: function read(callback) {
            this.sensor.read(callback);
        }
    }]);

    return Sonar;
}(_raspiPeripheral.Peripheral);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJYTs7O0FBQ1QsYUFEUyxLQUNULENBQVksTUFBWixFQUFvQjs4QkFEWCxPQUNXOzsyRUFEWCxrQkFFQyxTQURVOztBQUdoQixjQUFLLE1BQUwsR0FBYywwQkFBTSxZQUFOLENBQW1CLE1BQW5CLENBQWQsQ0FIZ0I7O0tBQXBCOzs7OztpQkFEUzs7NkJBUUosVUFBVTtBQUNYLGlCQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLFFBQWpCLEVBRFc7Ozs7V0FSTiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcmlwaGVyYWwgfSBmcm9tICdyYXNwaS1wZXJpcGhlcmFsJztcbmltcG9ydCBhZGRvbiBmcm9tICcuLi9idWlsZC9SZWxlYXNlL3Jhc3BpU29uYXJBZGRvbic7XG5cbi8vIFNvbmFyIGNsYXNzIHByb3ZpZGVzIGEgcmVhZCBtZXRob2QgdG8gaW50ZXJhY3Qgd2l0aCBhbiB1bHRyYXNvbmljIHNlbnNvclxuZXhwb3J0IGNsYXNzIFNvbmFyIGV4dGVuZHMgUGVyaXBoZXJhbCB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbnNvciA9IGFkZG9uLnNvbmFyRmFjdG9yeShjb25maWcpOyBcbiAgICB9XG4gICAgXG4gICAgLy8gYWNjZXB0cyBmdW5jdGlvbiBhcyBhbiBhcmd1bWVudCB3aGljaCBpcyBjYWxsZWQgYmFjayB3aXRoIGEgZHVyYXRpb25cbiAgICByZWFkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2Vuc29yLnJlYWQoY2FsbGJhY2spO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
