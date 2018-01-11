'use strict';
let home = require('./home');

home('Модуль вызван из Test');

exports.home = home;