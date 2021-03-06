/**
 * @ngdoc service
 * @name $ionicGesture
 * @module meteoric
 * @description An angular service exposing ionic
 * {@link meteoric.utility:ionic.EventController}'s gestures.
 *
 * @usage
 * Suppose your template:
 * ```
 * <button id='foo'>Foo</button>
 * ```
 *
 * In your javascript:
 * ```javascript
 * function cb = function() {
 *   console.log('foo');
 * };
 *
 * var $button = $('#foo');
 *
 * // Attach event handler.
 * $ionicGesture.on('onHold', cb, $button);
 *
 * // De-attach event handler.
 * $ionicGesture.off('onHold', cb, $button);
 * ```
 */
$ionicGesture = (function() {
  return {
    /**
     * @ngdoc method
     * @name $ionicGesture#on
     * @description Add an event listener for a gesture on an element. See {@link meteoric.utility:ionic.EventController#onGesture}.
     * @param {string} eventType The gesture event to listen for.
     * @param {function(e)} callback The function to call when the gesture
     * happens.
     * @param {element} $element The angular element to listen for the event on.
     * @param {object} options object.
     * @returns {ionic.Gesture} The gesture object (use this to remove the gesture later on).
     */
    on: function(eventType, cb, $element, options) {
      return window.ionic.onGesture(eventType, cb, $element[0], options);
    },
    /**
     * @ngdoc method
     * @name $ionicGesture#off
     * @description Remove an event listener for a gesture on an element. See {@link meteoric.utility:ionic.EventController#offGesture}.
     * @param {ionic.Gesture} gesture The gesture that should be removed.
     * @param {string} eventType The gesture event to remove the listener for.
     * @param {function(e)} callback The listener to remove.
     */
    off: function(gesture, eventType, cb) {
      return window.ionic.offGesture(gesture, eventType, cb);
    }
  };
})();
