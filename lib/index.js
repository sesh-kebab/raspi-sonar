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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sonar).call(this, config));

        _this.sensor = _raspiSonarAddon2.default.sonarFactory({
            config: config,
            callWiringPiSetup: callWiringPiSetup
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJYTs7O0FBQ1QsYUFEUyxLQUNULENBQVksTUFBWixFQUFvQixpQkFBcEIsRUFBdUM7OEJBRDlCLE9BQzhCOzsyRUFEOUIsa0JBRUMsU0FENkI7O0FBR25DLGNBQUssTUFBTCxHQUFjLDBCQUFNLFlBQU4sQ0FDVjtBQUNJLDBCQURKO0FBRUksZ0RBRko7U0FEVSxDQUFkLENBSG1DOztLQUF2Qzs7Ozs7aUJBRFM7OzZCQVlKLFVBQVU7QUFDWCxpQkFBSyxNQUFMLENBQVksSUFBWixDQUFpQixRQUFqQixFQURXOzs7O1dBWk4iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZXJpcGhlcmFsIH0gZnJvbSAncmFzcGktcGVyaXBoZXJhbCc7XG5pbXBvcnQgYWRkb24gZnJvbSAnLi4vYnVpbGQvUmVsZWFzZS9yYXNwaVNvbmFyQWRkb24nO1xuXG4vLyBTb25hciBjbGFzcyBwcm92aWRlcyBhIHJlYWQgbWV0aG9kIHRvIGludGVyYWN0IHdpdGggYW4gdWx0cmFzb25pYyBzZW5zb3JcbmV4cG9ydCBjbGFzcyBTb25hciBleHRlbmRzIFBlcmlwaGVyYWwge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgY2FsbFdpcmluZ1BpU2V0dXApIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICB0aGlzLnNlbnNvciA9IGFkZG9uLnNvbmFyRmFjdG9yeShcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgY29uZmlnLCBcbiAgICAgICAgICAgICAgICBjYWxsV2lyaW5nUGlTZXR1cFxuICAgICAgICAgICAgfSk7IFxuICAgIH1cbiAgICBcbiAgICAvLyBhY2NlcHRzIGZ1bmN0aW9uIGFzIGFuIGFyZ3VtZW50IHdoaWNoIGlzIGNhbGxlZCBiYWNrIHdpdGggYSBkdXJhdGlvblxuICAgIHJlYWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZW5zb3IucmVhZChjYWxsYmFjayk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
