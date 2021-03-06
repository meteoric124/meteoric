/**
 * @ngdoc service
 * @name $ionicListDelegate
 * @module meteoric
 *
 * @description
 * Delegate for controlling the {@link meteoric.directive:ionList} directive.
 *
 * Methods called directly on the $ionicListDelegate service will control all lists.
 * Use the {@link meteoric.service:$ionicListDelegate#$getByHandle $getByHandle}
 * method to control specific ionList instances.
 *
 * @usage
 *
 * ```js
 * // Somewhere in your controller/javascript file.
 * let showDeleteButtons = function() {
 *   $ionicListDelegate.showDelete(true);
 * };
 * ```
 */
class ionicListDelegate extends meteoric.lib.Delegate {
  constructor() {
    let methods = [
      /**
       * @ngdoc method
       * @name $ionicListDelegate#showReorder
       * @param {boolean=} showReorder Set whether or not this list is showing its reorder buttons.
       * @returns {boolean} Whether the reorder buttons are shown.
       */
      'showReorder',
      /**
       * @ngdoc method
       * @name $ionicListDelegate#showDelete
       * @param {boolean=} showDelete Set whether or not this list is showing its delete buttons.
       * @returns {boolean} Whether the delete buttons are shown.
       */
      'showDelete',
      /**
       * @ngdoc method
       * @name $ionicListDelegate#canSwipeItems
       * @param {boolean=} canSwipeItems Set whether or not this list is able to swipe to show
       * option buttons.
       * @returns {boolean} Whether the list is able to swipe to show option buttons.
       */
      'canSwipeItems',
      /**
       * @ngdoc method
       * @name $ionicListDelegate#closeOptionButtons
       * @description Closes any option buttons on the list that are swiped open.
       */
      'closeOptionButtons'
    ];

    super();
    this.addMethods(methods);
  }
};
$ionicListDelegate = new ionicListDelegate();

$ionicList =
function($scope, $attrs) {
  var self = this;
  var isSwipeable = true;
  var isReorderShown = false;
  var isDeleteShown = false;

  $ionicListDelegate.addInstance(
    self, $attrs.delegateHandle, function() {
      return $ionicHistory.isActiveScope($scope);
    }
  );
  $scope.$on('$destroy', () => $ionicListDelegate.removeInstance(self));

  self.showReorder = function(show) {
    if (arguments.length) {
      isReorderShown = !!show;
    }
    return isReorderShown;
  };

  self.showDelete = function(show) {
    if (arguments.length) {
      isDeleteShown = !!show;
    }
    return isDeleteShown;
  };

  self.canSwipeItems = function(can) {
    if (arguments.length) {
      isSwipeable = !!can;
    }
    return isSwipeable;
  };

  self.closeOptionButtons = function() {
    self.listView && self.listView.clearDragEffects();
  };
};
