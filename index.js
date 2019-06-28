var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * @name FCMNG
 * @description
 * Provides basic functionality for Firebase Cloud Messaging / Push Notification / Analytics
 *
 * @usage
 * ```typescript
 * import { FCMNG } from 'fcm-ng';
 *
 * constructor(private fcmNg: FCMNG) {}
 *
 * ...
 *
 * this.fcmNg.subscribeToTopic('marketing');
 *
 * this.fcmNg.getToken().then(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcmNg.onNotification().subscribe(data => {
 *   if(data.wasTapped){
 *     console.log("Received in background");
 *   } else {
 *     console.log("Received in foreground");
 *   };
 * });
 *
 * this.fcmNg.onTokenRefresh().subscribe(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcmNg.unsubscribeFromTopic('marketing');
 *
 * ```
 * @interfaces
 * NotificationData
 */
var FCMNG = /** @class */ (function (_super) {
    __extends(FCMNG, _super);
    function FCMNG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets device's current registration id
     *
     * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
     */
    FCMNG.prototype.getToken = function () {
        return;
    };
    /**
     * Event firing on the token refresh
     *
     * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
     */
    FCMNG.prototype.onTokenRefresh = function () {
        return;
    };
    /**
     * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be subscribed to
     *
     * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
     */
    FCMNG.prototype.subscribeToTopic = function (topic) {
        return;
    };
    /**
     * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be unsubscribed from
     *
     * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
     */
    FCMNG.prototype.unsubscribeFromTopic = function (topic) {
        return;
    };
    /**
     * Tracking events [logEvent](https://firebase.google.com/docs/analytics/android/events)
     *
     * @param {string} eventName Name of event to track
     * @param {object} eventParams Params of the eventName
     *
     * @returns {Promise<any>} Returns a promise if event has been sent successfully
     */
    FCMNG.prototype.logEvent = function (eventName, eventParams) {
        return;
    };
    /**
     * Set User ID [setUserId](https://firebase.google.com/docs/analytics/userid)
     *
     * @param {string} userId ID of the user
     *
     * @returns {Promise<any>} Returns a promise userId has been sent successfully
     */
    FCMNG.prototype.setUserId = function (userId) {
        return;
    };
    /**
     * Set User Property [setUserProperty](https://firebase.google.com/docs/analytics/android/properties)
     *
     * @param {string} name Name of the property
     * @param {string} value Value of the property
     *
     * @returns {Promise<any>} Returns a promise if event has been sent successfully
     */
    FCMNG.prototype.setUserProperty = function (name, value) {
        return;
    };
    /**
     * Watch for incoming notifications
     *
     * @returns {Observable<any>} returns an object with data from the notification
     */
    FCMNG.prototype.onNotification = function () {
        return;
    };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FCMNG.prototype, "getToken", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], FCMNG.prototype, "onTokenRefresh", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FCMNG.prototype, "subscribeToTopic", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FCMNG.prototype, "unsubscribeFromTopic", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], FCMNG.prototype, "logEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FCMNG.prototype, "setUserId", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], FCMNG.prototype, "setUserProperty", null);
    __decorate([
        Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], FCMNG.prototype, "onNotification", null);
    FCMNG = __decorate([
        Plugin({
            pluginName: 'FCMNG',
            plugin: 'cordova-plugin-fcm-ng',
            pluginRef: 'FCMPlugin',
            repo: 'https://github.com/cmgustavo/cordova-plugin-fcm-ng',
            platforms: ['Android', 'iOS']
        }),
        Injectable()
    ], FCMNG);
    return FCMNG;
}(IonicNativePlugin));
export { FCMNG };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBZ0JsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NHO0FBU0g7SUFBMkIseUJBQWlCO0lBQTVDOztJQWtHQSxDQUFDO0lBakdDOzs7O09BSUc7SUFFSCx3QkFBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUVEOzs7O09BSUc7SUFJSCw4QkFBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILGdDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzVCLE1BQU0sQ0FBQztJQUNULENBQUM7SUFFRDs7Ozs7O09BTUc7SUFFSCxvQ0FBb0IsR0FBcEIsVUFBcUIsS0FBYTtRQUNoQyxNQUFNLENBQUM7SUFDVCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILHdCQUFRLEdBQVIsVUFBUyxTQUFpQixFQUFFLFdBQWdCO1FBQzFDLE1BQU0sQ0FBQztJQUNULENBQUM7SUFFRDs7Ozs7O09BTUc7SUFFSCx5QkFBUyxHQUFULFVBQVUsTUFBYztRQUN0QixNQUFNLENBQUM7SUFDVCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILCtCQUFlLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLEtBQWE7UUFDekMsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUVEOzs7O09BSUc7SUFNSCw4QkFBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQTFGRDtRQURDLE9BQU8sRUFBRTs7Ozt5Q0FHVDtJQVVEO1FBSEMsT0FBTyxDQUFDO1lBQ1AsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQzs7O3dDQUNnQixVQUFVOytDQUUzQjtJQVVEO1FBREMsT0FBTyxFQUFFOzs7O2lEQUdUO0lBVUQ7UUFEQyxPQUFPLEVBQUU7Ozs7cURBR1Q7SUFXRDtRQURDLE9BQU8sRUFBRTs7Ozt5Q0FHVDtJQVVEO1FBREMsT0FBTyxFQUFFOzs7OzBDQUdUO0lBV0Q7UUFEQyxPQUFPLEVBQUU7Ozs7Z0RBR1Q7SUFZRDtRQUxDLE9BQU8sQ0FBQztZQUNQLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxDQUFDO1lBQ2YsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDOzs7d0NBQ2dCLFVBQVU7K0NBRTNCO0lBakdVLEtBQUs7UUFSakIsTUFBTSxDQUFDO1lBQ04sVUFBVSxFQUFFLE9BQU87WUFDbkIsTUFBTSxFQUFFLHVCQUF1QjtZQUMvQixTQUFTLEVBQUUsV0FBVztZQUN0QixJQUFJLEVBQUUsb0RBQW9EO1lBQzFELFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7U0FDOUIsQ0FBQztRQUNELFVBQVUsRUFBRTtPQUNBLEtBQUssQ0FrR2pCO0lBQUQsWUFBQztDQUFBLEFBbEdELENBQTJCLGlCQUFpQixHQWtHM0M7U0FsR1ksS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkRhdGEge1xuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBub3RpZmljYXRpb24gd2FzIHByZXNzZWQgb3Igbm90XG4gICAqL1xuXG4gIHdhc1RhcHBlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogTm90aWZpY2F0aW9uIGRhdGEgaGFzaCBpdGVtXG4gICAqL1xuXG4gIFtuYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQG5hbWUgRkNNTkdcbiAqIEBkZXNjcmlwdGlvblxuICogUHJvdmlkZXMgYmFzaWMgZnVuY3Rpb25hbGl0eSBmb3IgRmlyZWJhc2UgQ2xvdWQgTWVzc2FnaW5nIC8gUHVzaCBOb3RpZmljYXRpb24gLyBBbmFseXRpY3NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZDTU5HIH0gZnJvbSAnZmNtLW5nJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZjbU5nOiBGQ01ORykge31cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZjbU5nLnN1YnNjcmliZVRvVG9waWMoJ21hcmtldGluZycpO1xuICpcbiAqIHRoaXMuZmNtTmcuZ2V0VG9rZW4oKS50aGVuKHRva2VuID0+IHtcbiAqICAgYmFja2VuZC5yZWdpc3RlclRva2VuKHRva2VuKTtcbiAqIH0pO1xuICpcbiAqIHRoaXMuZmNtTmcub25Ob3RpZmljYXRpb24oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gKiAgIGlmKGRhdGEud2FzVGFwcGVkKXtcbiAqICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGluIGJhY2tncm91bmRcIik7XG4gKiAgIH0gZWxzZSB7XG4gKiAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBpbiBmb3JlZ3JvdW5kXCIpO1xuICogICB9O1xuICogfSk7XG4gKlxuICogdGhpcy5mY21OZy5vblRva2VuUmVmcmVzaCgpLnN1YnNjcmliZSh0b2tlbiA9PiB7XG4gKiAgIGJhY2tlbmQucmVnaXN0ZXJUb2tlbih0b2tlbik7XG4gKiB9KTtcbiAqXG4gKiB0aGlzLmZjbU5nLnVuc3Vic2NyaWJlRnJvbVRvcGljKCdtYXJrZXRpbmcnKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBOb3RpZmljYXRpb25EYXRhXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRkNNTkcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mY20tbmcnLFxuICBwbHVnaW5SZWY6ICdGQ01QbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NtZ3VzdGF2by9jb3Jkb3ZhLXBsdWdpbi1mY20tbmcnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGQ01ORyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEdldHMgZGV2aWNlJ3MgY3VycmVudCByZWdpc3RyYXRpb24gaWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZWdpc3RyYXRpb24gaWQgdG9rZW5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgZmlyaW5nIG9uIHRoZSB0b2tlbiByZWZyZXNoXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHN0cmluZz59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIGNoYW5nZSBvZiBkZXZpY2UncyByZWdpc3RyYXRpb24gaWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIG9uVG9rZW5SZWZyZXNoKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZXMgeW91IHRvIGEgW3RvcGljXShodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9ub3RpZmljYXRpb25zL2FuZHJvaWQvY29uc29sZS10b3BpY3MpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b3BpYyBUb3BpYyB0byBiZSBzdWJzY3JpYmVkIHRvXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyBpbiByZXN1bHQgb2Ygc3Vic2NyaWJpbmcgdG8gYSB0b3BpY1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdWJzY3JpYmVUb1RvcGljKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgeW91IGZyb20gYSBbdG9waWNdKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL25vdGlmaWNhdGlvbnMvYW5kcm9pZC9jb25zb2xlLXRvcGljcylcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRvcGljIFRvcGljIHRvIGJlIHVuc3Vic2NyaWJlZCBmcm9tXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyBpbiByZXN1bHQgb2YgdW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zdWJzY3JpYmVGcm9tVG9waWModG9waWM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNraW5nIGV2ZW50cyBbbG9nRXZlbnRdKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9hbmRyb2lkL2V2ZW50cylcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIGV2ZW50IHRvIHRyYWNrXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFBhcmFtcyBQYXJhbXMgb2YgdGhlIGV2ZW50TmFtZVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBpZiBldmVudCBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWxseVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRQYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBVc2VyIElEIFtzZXRVc2VySWRdKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy91c2VyaWQpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgSUQgb2YgdGhlIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdXNlcklkIGhhcyBiZWVuIHNlbnQgc3VjY2Vzc2Z1bGx5XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBVc2VyIFByb3BlcnR5IFtzZXRVc2VyUHJvcGVydHldKGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9hbmRyb2lkL3Byb3BlcnRpZXMpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIHByb3BlcnR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBWYWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgaWYgZXZlbnQgaGFzIGJlZW4gc2VudCBzdWNjZXNzZnVsbHlcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0VXNlclByb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIGZvciBpbmNvbWluZyBub3RpZmljYXRpb25zXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYW4gb2JqZWN0IHdpdGggZGF0YSBmcm9tIHRoZSBub3RpZmljYXRpb25cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIG9uTm90aWZpY2F0aW9uKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uRGF0YT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19