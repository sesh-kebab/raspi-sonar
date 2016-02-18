'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sonar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raspiPeripheral = require('raspi-peripheral');

var _Release = require('../build/Release/raspiSonarAddon');

var _Release2 = _interopRequireDefault(_Release);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sonar = exports.Sonar = function (_Peripheral) {
    _inherits(Sonar, _Peripheral);

    function Sonar(config) {
        _classCallCheck(this, Sonar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sonar).call(this, config));

        _this.sensor = _Release2.default.sonarFactory(config);
        return _this;
    }

    _createClass(Sonar, [{
        key: 'read',
        value: function read(callback) {
            this.sensor.read(callback);
        }
    }]);

    return Sonar;
}(_raspiPeripheral.Peripheral);