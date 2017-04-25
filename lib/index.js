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

    function Sonar(config, callWiringPiSetup) {
        _classCallCheck(this, Sonar);

        var _this = _possibleConstructorReturn(this, (Sonar.__proto__ || Object.getPrototypeOf(Sonar)).call(this, config));

        _this.sensor = _raspiSonarAddon2.default.RaspiSonar({
            config: config, // trigger and echo pin number
            callWiringPiSetup: callWiringPiSetup === undefined || callWiringPiSetup === null ? true : callWiringPiSetup
        });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNvbmFyIiwiY29uZmlnIiwiY2FsbFdpcmluZ1BpU2V0dXAiLCJzZW5zb3IiLCJSYXNwaVNvbmFyIiwidW5kZWZpbmVkIiwiY2FsbGJhY2siLCJyZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7SUFDYUEsSyxXQUFBQSxLOzs7QUFDVCxtQkFBWUMsTUFBWixFQUFvQkMsaUJBQXBCLEVBQXVDO0FBQUE7O0FBQUEsa0hBQzdCRCxNQUQ2Qjs7QUFJbkMsY0FBS0UsTUFBTCxHQUFjLDBCQUFNQyxVQUFOLENBQ1Y7QUFDSUgsMEJBREosRUFDd0I7QUFDcEJDLCtCQUFvQkEsc0JBQXNCRyxTQUF0QixJQUFtQ0gsc0JBQXNCLElBQTFELEdBQ2IsSUFEYSxHQUVaQTtBQUpYLFNBRFUsQ0FBZDtBQUptQztBQVd0Qzs7QUFFRDs7Ozs7NkJBQ0tJLFEsRUFBVTtBQUNYLGlCQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUJELFFBQWpCO0FBQ0giLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJpcGhlcmFsIH0gZnJvbSAncmFzcGktcGVyaXBoZXJhbCc7XG5pbXBvcnQgYWRkb24gZnJvbSAnLi4vYnVpbGQvUmVsZWFzZS9yYXNwaVNvbmFyQWRkb24nO1xuXG4vLyBTb25hciBjbGFzcyBwcm92aWRlcyBhIHJlYWQgbWV0aG9kIHRvIGludGVyYWN0IHdpdGggYW4gdWx0cmFzb25pYyBzZW5zb3JcbmV4cG9ydCBjbGFzcyBTb25hciBleHRlbmRzIFBlcmlwaGVyYWwge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgY2FsbFdpcmluZ1BpU2V0dXApIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuXG4gICAgICAgIHRoaXMuc2Vuc29yID0gYWRkb24uUmFzcGlTb25hcihcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgY29uZmlnLCAgICAgICAgICAgICAvLyB0cmlnZ2VyIGFuZCBlY2hvIHBpbiBudW1iZXJcbiAgICAgICAgICAgICAgICBjYWxsV2lyaW5nUGlTZXR1cDogKGNhbGxXaXJpbmdQaVNldHVwID09PSB1bmRlZmluZWQgfHwgY2FsbFdpcmluZ1BpU2V0dXAgPT09IG51bGwpIFxuICAgICAgICAgICAgICAgICAgICA/IHRydWUgXG4gICAgICAgICAgICAgICAgICAgIDogIGNhbGxXaXJpbmdQaVNldHVwXG4gICAgICAgICAgICB9KTsgXG4gICAgfVxuICAgIFxuICAgIC8vIGFjY2VwdHMgZnVuY3Rpb24gYXMgYW4gYXJndW1lbnQgd2hpY2ggaXMgY2FsbGVkIGJhY2sgd2l0aCBhIGR1cmF0aW9uXG4gICAgcmVhZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNlbnNvci5yZWFkKGNhbGxiYWNrKTtcbiAgICB9XG59Il19
