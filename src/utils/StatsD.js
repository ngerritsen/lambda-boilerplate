'use strict';

const util = require('util');

class StatsD {
  /**
   * @param {string[]} [baseTags=[]]
   */
  constructor(baseTags = []) {
    this._baseTags = baseTags;
  }
  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {number}    [metricValue=1]
   * @param {string[]}  [tags=[]]
   */
  increment(dateObject, metricName, metricValue = 1, tags = []) {
    this._send('count', dateObject, metricName, metricValue, tags);
  }

  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {number}    [metricValue=1]
   * @param {string[]}  [tags=[]]
   */
  decrement(dateObject, metricName, metricValue = 1, tags = []) {
    this._send('count', dateObject, metricName, -metricValue, tags);
  }

  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {number}    [metricValue=1]
   * @param {string[]}  [tags=[]]
   */
  gauge(dateObject, metricName, metricValue = 1, tags = []) {
    this._send('gauge', dateObject, metricName, metricValue, tags);
  }

  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {number}    [metricValue=1]
   * @param {string[]}  [tags=[]]
   */
  histogram(dateObject, metricName, metricValue = 1, tags = []) {
    for (let i = 0; i < 10; i++) {
      this._send('histogram', dateObject, metricName, metricValue, tags);
    }
  }

  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {number}    metricValue
   * @param {string[]}  [tags=[]]
   */
  checkOk(dateObject, metricName, tags = []) {
    this._send('check', dateObject, metricName, 0, tags);
  }

  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {string[]}  [tags=[]]
   */
  checkWarning(dateObject, metricName, tags = []) {
    this._send('check', dateObject, metricName, 1, tags);
  }

  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {string[]}  [tags=[]]
   */
  checkCritical(dateObject, metricName, tags = []) {
    this._send('check', dateObject, metricName, 2, tags);
  }

  /**
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {string[]}  [tags=[]]
   */
  checkUnknown(dateObject, metricName, tags = []) {
    this._send('check', dateObject, metricName, 3, tags);
  }

  /**
   * @param {string}    metricType
   * @param {Date}      dateObject
   * @param {string}    metricName
   * @param {number}    metricValue
   * @param {string[]}  [tags=[]]
   * @private
   */
  _send(metricType, dateObject, metricName, metricValue = 1, tags = []) {
    // eslint-disable-next-line no-console
    console.log(util.format(
      'MONITORING|%s|%s|%s|%s|#%s',
      dateObject.getTime().toString(),
      metricValue,
      metricType,
      metricName,
      [...this._baseTags, ...tags].join(',')
    ));
  }
}

module.exports = StatsD;
