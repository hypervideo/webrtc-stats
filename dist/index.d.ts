/// <reference types="node" />
import { EventEmitter } from 'events';
import type { WebRTCStatsConstructorOptions, AddConnectionOptions, AddConnectionResponse, RemoveConnectionOptions, RemoveConnectionReturn, TimelineEvent, TimelineTag } from './types/index';
export declare class WebRTCStats extends EventEmitter {
    private readonly isEdge;
    private _getStatsInterval;
    private monitoringSetInterval;
    private connectionMonitoringSetInterval;
    private connectionMonitoringInterval;
    private readonly rawStats;
    private readonly statsObject;
    private readonly filteredStats;
    private readonly shouldWrapGetUserMedia;
    private debug;
    private readonly remote;
    private peersToMonitor;
    private logLevel;
    /**
     * Used to keep track of all the events
     */
    private timeline;
    /**
     * A list of stats to look after
     */
    private statsToMonitor;
    constructor(constructorOptions: WebRTCStatsConstructorOptions);
    addPeer(peerId: string, pc: RTCPeerConnection): Promise<AddConnectionResponse>;
    /**
     * Start tracking a RTCPeerConnection
     * @param {Object} options The options object
     */
    addConnection(options: AddConnectionOptions): Promise<AddConnectionResponse>;
    /**
     * Returns the timeline of events
     * If a tag is it will filter out events based on it
     * @param  {String} tag The tag to filter events (optional)
     * @return {Array}     The timeline array (or sub array if tag is defined)
     */
    getTimeline(tag: TimelineTag): TimelineEvent[];
    get logger(): {
        error(...msg: any[]): void;
        warn(...msg: any[]): void;
        info(...msg: any[]): void;
        debug(...msg: any[]): void;
    };
    /**
     * Removes a connection from the list of connections to watch
     * @param {RemoveConnectionOptions} options The options object for this method
     */
    removeConnection(options: RemoveConnectionOptions): RemoveConnectionReturn;
    /**
     * Used to stop listeners on all connections and remove all other event listeners
     */
    removeAllPeers(): void;
    /**
     * Removes all the connection for a peer
     * @param {string} id The peer id
     */
    removePeer(id: string): void;
    /**
     * Clears the timeline of events
     */
    clearTimeline(): void;
    /**
     * Used to remove all event listeners and reset the state of the lib
     */
    destroy(): void;
    /**
     * Used to add to the list of peers to get stats for
     * @param  {string} peerId
     * @param  {RTCPeerConnection} pc
     * @param {MonitorPeerOptions} options
     */
    private monitorPeer;
    /**
     * Used to start the setTimeout and request getStats from the peers
     */
    private startStatsMonitoring;
    private stopStatsMonitoring;
    private getStats;
    private startConnectionStateMonitoring;
    private checkIfConnectionIsClosed;
    private isConnectionClosed;
    private stopConnectionStateMonitoring;
    private wrapGetUserMedia;
    /**
     * Filter out some stats, mainly codec and certificate
     * @param  {Object} stats The parsed rtc stats object
     * @return {Object}       The new object with some keys deleted
     */
    private filteroutStats;
    private get peerConnectionListeners();
    private addPeerConnectionEventListeners;
    /**
     * Called when we get the stream from getUserMedia. We parse the stream and fire events
     * @param  {Object} options
     */
    private parseGetUserMedia;
    private parseStream;
    private getMediaTrackDetails;
    private getStreamDetails;
    private getTrackEventObject;
    /**
     * Add event listeners for the tracks that are added to the stream
     * @param {MediaStreamTrack} track
     */
    private addTrackEventListeners;
    private removeTrackEventListeners;
    private addToTimeline;
    /**
     * Used to emit a custom event and also add it to the timeline
     * @param {String} eventName The name of the custome event: track, getUserMedia, stats, etc
     * @param {Object} options   The object tha will be sent with the event
     */
    private emitEvent;
    /**
     * Sets the PeerConnection stats reporting interval.
     * @param interval
     *        Interval in milliseconds
     */
    set getStatsInterval(interval: number);
    /**
     * Used to return the number of monitored peers
     * @return {number} [description]
     */
    private get numberOfMonitoredPeers();
    private removePeerConnectionEventListeners;
    /**
     * Used to get a now timestamp
     * @return {number}
     */
    private getTimestamp;
    private wrapGetDisplayMedia;
}
//# sourceMappingURL=index.d.ts.map