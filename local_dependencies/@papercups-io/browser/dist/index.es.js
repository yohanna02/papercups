/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var phoenix = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(t){e.exports=t.Phoenix=n(2);}).call(this,n(1));},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")();}catch(e){"object"==typeof window&&(n=window);}e.exports=n;},function(e,t,n){function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return (o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e;}finally{try{i||null==a.return||a.return();}finally{if(o)throw r}}return n}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function h(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}n.r(t),n.d(t,"Channel",(function(){return _})),n.d(t,"Serializer",(function(){return H})),n.d(t,"Socket",(function(){return U})),n.d(t,"LongPoll",(function(){return D})),n.d(t,"Ajax",(function(){return M})),n.d(t,"Presence",(function(){return N}));var l="undefined"!=typeof self?self:null,f="undefined"!=typeof window?window:null,d=l||f||void 0,p=0,v=1,y=2,m=3,g="closed",k="errored",b="joined",j="joining",C="leaving",E="phx_close",R="phx_error",T="phx_join",S="phx_reply",w="phx_leave",A=[E,R,T,S,w],L="longpoll",x="websocket",O=function(e){if("function"==typeof e)return e;return function(){return e}},P=function(){function e(t,n,i,o){c(this,e),this.channel=t,this.event=n,this.payload=i||function(){return {}},this.receivedResp=null,this.timeout=o,this.timeoutTimer=null,this.recHooks=[],this.sent=!1;}return h(e,[{key:"resend",value:function(e){this.timeout=e,this.reset(),this.send();}},{key:"send",value:function(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}));}},{key:"receive",value:function(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}},{key:"reset",value:function(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1;}},{key:"matchReceive",value:function(e){var t=e.status,n=e.response;e.ref;this.recHooks.filter((function(e){return e.status===t})).forEach((function(e){return e.callback(n)}));}},{key:"cancelRefEvent",value:function(){this.refEvent&&this.channel.off(this.refEvent);}},{key:"cancelTimeout",value:function(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null;}},{key:"startTimeout",value:function(){var e=this;this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,(function(t){e.cancelRefEvent(),e.cancelTimeout(),e.receivedResp=t,e.matchReceive(t);})),this.timeoutTimer=setTimeout((function(){e.trigger("timeout",{});}),this.timeout);}},{key:"hasReceived",value:function(e){return this.receivedResp&&this.receivedResp.status===e}},{key:"trigger",value:function(e,t){this.channel.trigger(this.refEvent,{status:e,response:t});}}]),e}(),_=function(){function e(t,n,i){var o=this;c(this,e),this.state=g,this.topic=t,this.params=O(n||{}),this.socket=i,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new P(this,T,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new J((function(){o.socket.isConnected()&&o.rejoin();}),this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError((function(){return o.rejoinTimer.reset()}))),this.stateChangeRefs.push(this.socket.onOpen((function(){o.rejoinTimer.reset(),o.isErrored()&&o.rejoin();}))),this.joinPush.receive("ok",(function(){o.state=b,o.rejoinTimer.reset(),o.pushBuffer.forEach((function(e){return e.send()})),o.pushBuffer=[];})),this.joinPush.receive("error",(function(){o.state=k,o.socket.isConnected()&&o.rejoinTimer.scheduleTimeout();})),this.onClose((function(){o.rejoinTimer.reset(),o.socket.hasLogger()&&o.socket.log("channel","close ".concat(o.topic," ").concat(o.joinRef())),o.state=g,o.socket.remove(o);})),this.onError((function(e){o.socket.hasLogger()&&o.socket.log("channel","error ".concat(o.topic),e),o.isJoining()&&o.joinPush.reset(),o.state=k,o.socket.isConnected()&&o.rejoinTimer.scheduleTimeout();})),this.joinPush.receive("timeout",(function(){o.socket.hasLogger()&&o.socket.log("channel","timeout ".concat(o.topic," (").concat(o.joinRef(),")"),o.joinPush.timeout),new P(o,w,O({}),o.timeout).send(),o.state=k,o.joinPush.reset(),o.socket.isConnected()&&o.rejoinTimer.scheduleTimeout();})),this.on(S,(function(e,t){o.trigger(o.replyEventName(t),e);}));}return h(e,[{key:"join",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}},{key:"onClose",value:function(e){this.on(E,e);}},{key:"onError",value:function(e){return this.on(R,(function(t){return e(t)}))}},{key:"on",value:function(e,t){var n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}},{key:"off",value:function(e,t){this.bindings=this.bindings.filter((function(n){return !(n.event===e&&(void 0===t||t===n.ref))}));}},{key:"canPush",value:function(){return this.socket.isConnected()&&this.isJoined()}},{key:"push",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timeout;if(t=t||{},!this.joinedOnce)throw new Error("tried to push '".concat(e,"' to '").concat(this.topic,"' before joining. Use channel.join() before pushing events"));var i=new P(this,e,(function(){return t}),n);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}},{key:"leave",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=C;var n=function(){e.socket.hasLogger()&&e.socket.log("channel","leave ".concat(e.topic)),e.trigger(E,"leave");},i=new P(this,w,O({}),t);return i.receive("ok",(function(){return n()})).receive("timeout",(function(){return n()})),i.send(),this.canPush()||i.trigger("ok",{}),i}},{key:"onMessage",value:function(e,t,n){return t}},{key:"isLifecycleEvent",value:function(e){return A.indexOf(e)>=0}},{key:"isMember",value:function(e,t,n,i){return this.topic===e&&(!i||i===this.joinRef()||!this.isLifecycleEvent(t)||(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:n,joinRef:i}),!1))}},{key:"joinRef",value:function(){return this.joinPush.ref}},{key:"rejoin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=j,this.joinPush.resend(e));}},{key:"trigger",value:function(e,t,n,i){var o=this.onMessage(e,t,n,i);if(t&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");for(var r=this.bindings.filter((function(t){return t.event===e})),s=0;s<r.length;s++){r[s].callback(o,n,i||this.joinRef());}}},{key:"replyEventName",value:function(e){return "chan_reply_".concat(e)}},{key:"isClosed",value:function(){return this.state===g}},{key:"isErrored",value:function(){return this.state===k}},{key:"isJoined",value:function(){return this.state===b}},{key:"isJoining",value:function(){return this.state===j}},{key:"isLeaving",value:function(){return this.state===C}}]),e}(),H={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode:function(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));var n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))},decode:function(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));var n=r(JSON.parse(e),5);return t({join_ref:n[0],ref:n[1],topic:n[2],event:n[3],payload:n[4]})},binaryEncode:function(e){var t=e.join_ref,n=e.ref,i=e.event,o=e.topic,r=e.payload,s=this.META_LENGTH+t.length+n.length+o.length+i.length,a=new ArrayBuffer(this.HEADER_LENGTH+s),c=new DataView(a),u=0;c.setUint8(u++,this.KINDS.push),c.setUint8(u++,t.length),c.setUint8(u++,n.length),c.setUint8(u++,o.length),c.setUint8(u++,i.length),Array.from(t,(function(e){return c.setUint8(u++,e.charCodeAt(0))})),Array.from(n,(function(e){return c.setUint8(u++,e.charCodeAt(0))})),Array.from(o,(function(e){return c.setUint8(u++,e.charCodeAt(0))})),Array.from(i,(function(e){return c.setUint8(u++,e.charCodeAt(0))}));var h=new Uint8Array(a.byteLength+r.byteLength);return h.set(new Uint8Array(a),0),h.set(new Uint8Array(r),a.byteLength),h.buffer},binaryDecode:function(e){var t=new DataView(e),n=t.getUint8(0),i=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,i);case this.KINDS.reply:return this.decodeReply(e,t,i);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,i)}},decodePush:function(e,t,n){var i=t.getUint8(1),o=t.getUint8(2),r=t.getUint8(3),s=this.HEADER_LENGTH+this.META_LENGTH-1,a=n.decode(e.slice(s,s+i));s+=i;var c=n.decode(e.slice(s,s+o));s+=o;var u=n.decode(e.slice(s,s+r));return s+=r,{join_ref:a,ref:null,topic:c,event:u,payload:e.slice(s,e.byteLength)}},decodeReply:function(e,t,n){var i=t.getUint8(1),o=t.getUint8(2),r=t.getUint8(3),s=t.getUint8(4),a=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(a,a+i));a+=i;var u=n.decode(e.slice(a,a+o));a+=o;var h=n.decode(e.slice(a,a+r));a+=r;var l=n.decode(e.slice(a,a+s));a+=s;var f=e.slice(a,e.byteLength);return {join_ref:c,ref:u,topic:h,event:S,payload:{status:l,response:f}}},decodeBroadcast:function(e,t,n){var i=t.getUint8(1),o=t.getUint8(2),r=this.HEADER_LENGTH+2,s=n.decode(e.slice(r,r+i));r+=i;var a=n.decode(e.slice(r,r+o));return r+=o,{join_ref:null,ref:null,topic:s,event:a,payload:e.slice(r,e.byteLength)}}},U=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e),this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=i.timeout||1e4,this.transport=i.transport||d.WebSocket||D,this.defaultEncoder=H.encode.bind(H),this.defaultDecoder=H.decode.bind(H),this.closeWasClean=!1,this.unloaded=!1,this.binaryType=i.binaryType||"arraybuffer",this.transport!==D?(this.encode=i.encode||this.defaultEncoder,this.decode=i.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder),f&&f.addEventListener&&f.addEventListener("beforeunload",(function(e){n.conn&&(n.unloaded=!0,n.abnormalClose("unloaded"));})),this.heartbeatIntervalMs=i.heartbeatIntervalMs||3e4,this.rejoinAfterMs=function(e){return i.rejoinAfterMs?i.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4},this.reconnectAfterMs=function(e){return n.unloaded?100:i.reconnectAfterMs?i.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3},this.logger=i.logger||null,this.longpollerTimeout=i.longpollerTimeout||2e4,this.params=O(i.params||{}),this.endPoint="".concat(t,"/").concat(x),this.vsn=i.vsn||"2.0.0",this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new J((function(){n.teardown((function(){return n.connect()}));}),this.reconnectAfterMs);}return h(e,[{key:"protocol",value:function(){return location.protocol.match(/^https/)?"wss":"ws"}},{key:"endPointURL",value:function(){var e=M.appendParams(M.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return "/"!==e.charAt(0)?e:"/"===e.charAt(1)?"".concat(this.protocol(),":").concat(e):"".concat(this.protocol(),"://").concat(location.host).concat(e)}},{key:"disconnect",value:function(e,t,n){this.closeWasClean=!0,this.reconnectTimer.reset(),this.teardown(e,t,n);}},{key:"connect",value:function(e){var t=this;e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=O(e)),this.conn||(this.closeWasClean=!1,this.conn=new this.transport(this.endPointURL()),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=function(){return t.onConnOpen()},this.conn.onerror=function(e){return t.onConnError(e)},this.conn.onmessage=function(e){return t.onConnMessage(e)},this.conn.onclose=function(e){return t.onConnClose(e)});}},{key:"log",value:function(e,t,n){this.logger(e,t,n);}},{key:"hasLogger",value:function(){return null!==this.logger}},{key:"onOpen",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}},{key:"onClose",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}},{key:"onError",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}},{key:"onMessage",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}},{key:"onConnOpen",value:function(){this.hasLogger()&&this.log("transport","connected to ".concat(this.endPointURL())),this.unloaded=!1,this.closeWasClean=!1,this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach((function(e){return (0, r(e,2)[1])()}));}},{key:"resetHeartbeat",value:function(){var e=this;this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval((function(){return e.sendHeartbeat()}),this.heartbeatIntervalMs));}},{key:"teardown",value:function(e,t,n){var i=this;if(!this.conn)return e&&e();this.waitForBufferDone((function(){i.conn&&(t?i.conn.close(t,n||""):i.conn.close()),i.waitForSocketClosed((function(){i.conn&&(i.conn.onclose=function(){},i.conn=null),e&&e();}));}));}},{key:"waitForBufferDone",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;5!==n&&this.conn&&this.conn.bufferedAmount?setTimeout((function(){t.waitForBufferDone(e,n+1);}),150*n):e();}},{key:"waitForSocketClosed",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;5!==n&&this.conn&&this.conn.readyState!==m?setTimeout((function(){t.waitForSocketClosed(e,n+1);}),150*n):e();}},{key:"onConnClose",value:function(e){this.hasLogger()&&this.log("transport","close",e),this.triggerChanError(),clearInterval(this.heartbeatTimer),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach((function(t){return (0, r(t,2)[1])(e)}));}},{key:"onConnError",value:function(e){this.hasLogger()&&this.log("transport",e),this.triggerChanError(),this.stateChangeCallbacks.error.forEach((function(t){return (0, r(t,2)[1])(e)}));}},{key:"triggerChanError",value:function(){this.channels.forEach((function(e){e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(R);}));}},{key:"connectionState",value:function(){switch(this.conn&&this.conn.readyState){case p:return "connecting";case v:return "open";case y:return "closing";default:return "closed"}}},{key:"isConnected",value:function(){return "open"===this.connectionState()}},{key:"remove",value:function(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter((function(t){return t.joinRef()!==e.joinRef()}));}},{key:"off",value:function(e){for(var t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter((function(t){var n=r(t,1)[0];return -1===e.indexOf(n)}));}},{key:"channel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new _(e,t,this);return this.channels.push(n),n}},{key:"push",value:function(e){var t=this;if(this.hasLogger()){var n=e.topic,i=e.event,o=e.payload,r=e.ref,s=e.join_ref;this.log("push","".concat(n," ").concat(i," (").concat(s,", ").concat(r,")"),o);}this.isConnected()?this.encode(e,(function(e){return t.conn.send(e)})):this.sendBuffer.push((function(){return t.encode(e,(function(e){return t.conn.send(e)}))}));}},{key:"makeRef",value:function(){var e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}},{key:"sendHeartbeat",value:function(){if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void this.abnormalClose("heartbeat timeout");this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});}}},{key:"abnormalClose",value:function(e){this.closeWasClean=!1,this.conn.readyState===v&&this.conn.close(1e3,e);}},{key:"flushSendBuffer",value:function(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach((function(e){return e()})),this.sendBuffer=[]);}},{key:"onConnMessage",value:function(e){var t=this;this.decode(e.data,(function(e){var n=e.topic,i=e.event,o=e.payload,s=e.ref,a=e.join_ref;s&&s===t.pendingHeartbeatRef&&(t.pendingHeartbeatRef=null),t.hasLogger()&&t.log("receive","".concat(o.status||""," ").concat(n," ").concat(i," ").concat(s&&"("+s+")"||""),o);for(var c=0;c<t.channels.length;c++){var u=t.channels[c];u.isMember(n,i,o,a)&&u.trigger(i,o,s,a);}for(var h=0;h<t.stateChangeCallbacks.message.length;h++){(0, r(t.stateChangeCallbacks.message[h],2)[1])(e);}}));}},{key:"leaveOpenTopic",value:function(e){var t=this.channels.find((function(t){return t.topic===e&&(t.isJoined()||t.isJoining())}));t&&(this.hasLogger()&&this.log("transport",'leaving duplicate topic "'.concat(e,'"')),t.leave());}}]),e}(),D=function(){function e(t){c(this,e),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=p,this.poll();}return h(e,[{key:"normalizeEndpoint",value:function(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+x),"$1/"+L)}},{key:"endpointURL",value:function(){return M.appendParams(this.pollEndpoint,{token:this.token})}},{key:"closeAndRetry",value:function(){this.close(),this.readyState=p;}},{key:"ontimeout",value:function(){this.onerror("timeout"),this.closeAndRetry();}},{key:"poll",value:function(){var e=this;this.readyState!==v&&this.readyState!==p||M.request("GET",this.endpointURL(),"application/json",null,this.timeout,this.ontimeout.bind(this),(function(t){if(t){var n=t.status,i=t.token,o=t.messages;e.token=i;}else n=0;switch(n){case 200:o.forEach((function(t){return e.onmessage({data:t})})),e.poll();break;case 204:e.poll();break;case 410:e.readyState=v,e.onopen(),e.poll();break;case 403:e.onerror(),e.close();break;case 0:case 500:e.onerror(),e.closeAndRetry();break;default:throw new Error("unhandled poll status ".concat(n))}}));}},{key:"send",value:function(e){var t=this;M.request("POST",this.endpointURL(),"application/json",e,this.timeout,this.onerror.bind(this,"timeout"),(function(e){e&&200===e.status||(t.onerror(e&&e.status),t.closeAndRetry());}));}},{key:"close",value:function(e,t){this.readyState=m,this.onclose();}}]),e}(),M=function(){function e(){c(this,e);}return h(e,null,[{key:"request",value:function(e,t,n,i,o,r,s){if(d.XDomainRequest){var a=new XDomainRequest;this.xdomainRequest(a,e,t,i,o,r,s);}else {var c=new d.XMLHttpRequest;this.xhrRequest(c,e,t,n,i,o,r,s);}}},{key:"xdomainRequest",value:function(e,t,n,i,o,r,s){var a=this;e.timeout=o,e.open(t,n),e.onload=function(){var t=a.parseJSON(e.responseText);s&&s(t);},r&&(e.ontimeout=r),e.onprogress=function(){},e.send(i);}},{key:"xhrRequest",value:function(e,t,n,i,o,r,s,a){var c=this;e.open(t,n,!0),e.timeout=r,e.setRequestHeader("Content-Type",i),e.onerror=function(){a&&a(null);},e.onreadystatechange=function(){if(e.readyState===c.states.complete&&a){var t=c.parseJSON(e.responseText);a(t);}},s&&(e.ontimeout=s),e.send(o);}},{key:"parseJSON",value:function(e){if(!e||""===e)return null;try{return JSON.parse(e)}catch(t){return console&&console.log("failed to parse JSON response",e),null}}},{key:"serialize",value:function(e,t){var n=[];for(var i in e)if(e.hasOwnProperty(i)){var r=t?"".concat(t,"[").concat(i,"]"):i,s=e[i];"object"===o(s)?n.push(this.serialize(s,r)):n.push(encodeURIComponent(r)+"="+encodeURIComponent(s));}return n.join("&")}},{key:"appendParams",value:function(e,t){if(0===Object.keys(t).length)return e;var n=e.match(/\?/)?"&":"?";return "".concat(e).concat(n).concat(this.serialize(t))}}]),e}();M.states={complete:4};var N=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e);var o=i.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(o.state,(function(t){var i=n.caller,o=i.onJoin,r=i.onLeave,s=i.onSync;n.joinRef=n.channel.joinRef(),n.state=e.syncState(n.state,t,o,r),n.pendingDiffs.forEach((function(t){n.state=e.syncDiff(n.state,t,o,r);})),n.pendingDiffs=[],s();})),this.channel.on(o.diff,(function(t){var i=n.caller,o=i.onJoin,r=i.onLeave,s=i.onSync;n.inPendingSyncState()?n.pendingDiffs.push(t):(n.state=e.syncDiff(n.state,t,o,r),s());}));}return h(e,[{key:"onJoin",value:function(e){this.caller.onJoin=e;}},{key:"onLeave",value:function(e){this.caller.onLeave=e;}},{key:"onSync",value:function(e){this.caller.onSync=e;}},{key:"list",value:function(t){return e.list(this.state,t)}},{key:"inPendingSyncState",value:function(){return !this.joinRef||this.joinRef!==this.channel.joinRef()}}],[{key:"syncState",value:function(e,t,n,i){var o=this,r=this.clone(e),s={},a={};return this.map(r,(function(e,n){t[e]||(a[e]=n);})),this.map(t,(function(e,t){var n=r[e];if(n){var i=t.metas.map((function(e){return e.phx_ref})),c=n.metas.map((function(e){return e.phx_ref})),u=t.metas.filter((function(e){return c.indexOf(e.phx_ref)<0})),h=n.metas.filter((function(e){return i.indexOf(e.phx_ref)<0}));u.length>0&&(s[e]=t,s[e].metas=u),h.length>0&&(a[e]=o.clone(n),a[e].metas=h);}else s[e]=t;})),this.syncDiff(r,{joins:s,leaves:a},n,i)}},{key:"syncDiff",value:function(e,t,n,o){var r=t.joins,s=t.leaves,a=this.clone(e);return n||(n=function(){}),o||(o=function(){}),this.map(r,(function(e,t){var o=a[e];if(a[e]=t,o){var r,s=a[e].metas.map((function(e){return e.phx_ref})),c=o.metas.filter((function(e){return s.indexOf(e.phx_ref)<0}));(r=a[e].metas).unshift.apply(r,i(c));}n(e,o,t);})),this.map(s,(function(e,t){var n=a[e];if(n){var i=t.metas.map((function(e){return e.phx_ref}));n.metas=n.metas.filter((function(e){return i.indexOf(e.phx_ref)<0})),o(e,n,t),0===n.metas.length&&delete a[e];}})),a}},{key:"list",value:function(e,t){return t||(t=function(e,t){return t}),this.map(e,(function(e,n){return t(e,n)}))}},{key:"map",value:function(e,t){return Object.getOwnPropertyNames(e).map((function(n){return t(n,e[n])}))}},{key:"clone",value:function(e){return JSON.parse(JSON.stringify(e))}}]),e}(),J=function(){function e(t,n){c(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0;}return h(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer);}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.tries=e.tries+1,e.callback();}),this.timerCalc(this.tries+1));}}]),e}();}])}));
});

function noop() { }
const DEFAULT_BASE_URL = 'https://app.papercups.io';
const isDev = (w) => {
    return Boolean(w.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        w.location.hostname === '[::1]' ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        w.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
};
const getWebsocketUrl = (baseUrl = DEFAULT_BASE_URL) => {
    // TODO: handle this parsing better
    const [protocol, host] = baseUrl.split('://');
    const isHttps = protocol === 'https';
    // TODO: not sure how websockets work with subdomains
    return `${isHttps ? 'wss' : 'ws'}://${host}/socket`;
};
// TODO: handle this on the server instead
function now() {
    const date = new Date();
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}
function shouldActivateGameMode(message) {
    if (!message || !message.length) {
        return false;
    }
    return ([
        '/play2048',
        '/xyzzy',
        '/poweroverwhelming',
        '/howdoyouturnthison',
        'what is 2^11',
        'what is 2^11?',
        "what's 2^11",
        "what's 2^11?",
    ].indexOf(message.toLowerCase()) !== -1);
}
function setupPostMessageHandlers(w, handler) {
    const cb = (msg) => {
        handler(msg);
    };
    if (w.addEventListener) {
        w.addEventListener('message', cb);
        return () => w.removeEventListener('message', cb);
    }
    else {
        w.attachEvent('onmessage', cb);
        return () => w.detachEvent('message', cb);
    }
}
const setupCustomEventHandlers = (w, events, handlers) => {
    if (w.addEventListener) {
        for (const event of events) {
            w.addEventListener(event, handlers);
        }
        return () => events.map((event) => w.removeEventListener(event, handlers));
    }
    else {
        console.error('Custom events are not supported in your browser!');
        return noop;
    }
};
const isCustomerMessage = (message, customerId) => {
    return (message.customer_id === customerId ||
        (!!message.sent_at && message.type === 'customer'));
};
const isAgentMessage = (message) => {
    const { user_id: agentId, type: messageType } = message;
    return !!agentId || messageType === 'bot';
};
const areDatesEqual = (x, y) => {
    if (!x || !y) {
        return false;
    }
    return Math.floor(+new Date(x) / 1000) === Math.floor(+new Date(y) / 1000);
};
const isValidUuid = (id) => {
    if (!id || !id.length) {
        return false;
    }
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(id);
};

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Factory for creating new instances
axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var _default = axios$1;
axios_1.default = _default;

var axios = axios_1;

const EMPTY_METADATA = {};
const get = (url, query = {}) => __awaiter(void 0, void 0, void 0, function* () {
    return axios.get(url, { params: query }).then((res) => res.data.data);
});
const post = (url, params = {}) => __awaiter(void 0, void 0, void 0, function* () {
    return axios.post(url, params).then((res) => res.data.data);
});
const put = (url, params = {}) => __awaiter(void 0, void 0, void 0, function* () {
    return axios.put(url, params).then((res) => res.data.data);
});
const fetchWidgetSettings = (accountId, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return get(`${baseUrl}/api/widget_settings`, { account_id: accountId });
});
const updateWidgetSettingsMetadata = (accountId, metadata, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return put(`${baseUrl}/api/widget_settings/metadata`, {
        account_id: accountId,
        metadata,
    });
});
const createNewCustomer = (accountId, metadata = EMPTY_METADATA, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return post(`${baseUrl}/api/customers`, {
        customer: Object.assign(Object.assign({}, metadata), { account_id: accountId, 
            // TODO: handle on the server instead!
            first_seen: now(), last_seen: now() }),
    });
});
const isValidCustomer = (customerId, accountId, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return get(`${baseUrl}/api/customers/${customerId}/exists`, {
        account_id: accountId,
    });
});
const updateCustomerMetadata = (customerId, metadata = EMPTY_METADATA, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return put(`${baseUrl}/api/customers/${customerId}/metadata`, { metadata });
});
const createNewConversation = (accountId, customerId, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return post(`${baseUrl}/api/conversations`, {
        conversation: {
            account_id: accountId,
            customer_id: customerId,
        },
    });
});
const findCustomerByExternalId = (externalId, accountId, filters, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return get(`${baseUrl}/api/customers/identify`, Object.assign(Object.assign({}, filters), { external_id: externalId, account_id: accountId }));
});
const fetchCustomerConversations = (customerId, accountId, baseUrl = DEFAULT_BASE_URL) => __awaiter(void 0, void 0, void 0, function* () {
    return get(`${baseUrl}/api/conversations/customer`, {
        customer_id: customerId,
        account_id: accountId,
    });
});

class Logger {
    constructor(debugModeEnabled) {
        this.debugModeEnabled = !!debugModeEnabled;
    }
    debug(...args) {
        if (!this.debugModeEnabled) {
            return;
        }
        console.debug(...args);
    }
    log(...args) {
        if (!this.debugModeEnabled) {
            return;
        }
        console.log(...args);
    }
    info(...args) {
        console.info(...args);
    }
    warn(...args) {
        console.warn(...args);
    }
    error(...args) {
        console.error(...args);
    }
}

// TODO: do something different for dev vs prod
const PREFIX = '__PAPERCUPS__';
// FIXME: this is just a workaround until we can stop
// relying on localStorage in our chat iframe
const getStorage = (w) => {
    try {
        const storage = w && (w.localStorage || w.sessionStorage);
        return storage;
    }
    catch (e) {
        return {
            _db: {},
            getItem(key) {
                return this._db[key] || null;
            },
            setItem(key, value) {
                this._db[key] = value;
            },
            removeItem(key) {
                delete this._db[key];
            },
        };
    }
};
function store(w) {
    const storage = getStorage(w);
    const get = (key) => {
        const result = storage.getItem(`${PREFIX}${key}`);
        if (!result) {
            return null;
        }
        try {
            return JSON.parse(result);
        }
        catch (e) {
            return result;
        }
    };
    const set = (key, value) => {
        storage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    };
    const remove = (key) => {
        storage.removeItem(key);
    };
    // TODO: improve these names
    return {
        getCustomerId: () => get('__CUSTOMER_ID__'),
        setCustomerId: (id) => set('__CUSTOMER_ID__', id),
        removeCustomerId: () => remove('__CUSTOMER_ID__'),
    };
}

class Papercups {
    constructor(config) {
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            this.connect();
            const settings = yield this.fetchWidgetSettings();
            const isValidCustomer = yield this.isValidCustomerId(this.customerId);
            const validatedCustomerId = isValidCustomer ? this.customerId : null;
            const metadata = this.config.customer || {};
            const customerId = yield this.checkForExistingCustomer(metadata, validatedCustomerId);
            return this.setWidgetSettings(settings)
                .setCustomerId(customerId)
                .fetchLatestConversation(customerId);
        });
        this.connect = () => {
            this.socket.connect();
            this.listenForAgentAvailability();
        };
        this.disconnect = () => {
            var _a;
            this.socket.disconnect();
            (_a = this.channel) === null || _a === void 0 ? void 0 : _a.leave();
        };
        this.setWidgetSettings = (settings) => {
            this.settings = settings;
            if (this.config.onSetWidgetSettings) {
                this.config.onSetWidgetSettings(settings);
            }
            return this;
        };
        this.setCustomerId = (customerId) => {
            this.customerId = customerId;
            this.cacheCustomerId(customerId);
            // Let other modules know that the customer has been set?
            window.dispatchEvent(new CustomEvent('papercups:customer:set', {
                detail: customerId,
            }));
            if (this.config.onSetCustomerId) {
                this.config.onSetCustomerId(customerId);
            }
            return this;
        };
        this.setConversationId = (conversationId) => {
            this.conversationId = conversationId;
            // TODO: should this be handled explicitly instead?
            this.joinConversationChannel(conversationId);
            if (this.config.onSetConversationId) {
                this.config.onSetConversationId(conversationId);
            }
            return this;
        };
        this.setMessages = (messages) => {
            this.messages = messages;
            if (this.config.onMessagesUpdated) {
                this.config.onMessagesUpdated(messages);
            }
            return this;
        };
        this.listenForAgentAvailability = () => {
            const { accountId } = this.config;
            const room = this.socket.channel(`room:${accountId}`, {});
            room
                .join()
                .receive('ok', (res) => {
                this.logger.debug('Joined room successfully!', res);
            })
                .receive('error', (err) => {
                this.logger.debug('Unable to join room!', err);
            });
            const presence = new phoenix.Presence(room);
            presence.onSync(() => {
                this.logger.debug('Syncing presence:', presence.list());
                this.config.onPresenceSync && this.config.onPresenceSync(presence);
            });
            return this;
        };
        this.listenForNewConversations = (customerId) => {
            const channel = this.socket.channel(`conversation:lobby:${customerId}`, {});
            // TODO: what does this data look like?
            channel.on('conversation:created', (data) => {
                this.config.onConversationCreated &&
                    this.config.onConversationCreated(customerId, data);
                // TODO: is the setTimeout still necessary? it shouldn't be...
                setTimeout(() => this.fetchLatestConversation(customerId), 1000);
            });
            channel
                .join()
                .receive('ok', (res) => {
                this.logger.debug('Successfully listening for new conversations!', res);
            })
                .receive('error', (err) => {
                this.logger.debug('Unable to listen for new conversations!', err);
            });
            return this;
        };
        this.joinConversationChannel = (conversationId, fallbackCustomerId) => {
            if (this.channel && this.channel.leave) {
                this.channel.leave(); // TODO: what's the best practice here?
            }
            const customerId = this.customerId || fallbackCustomerId;
            this.logger.debug('Joining channel:', conversationId);
            this.channel = this.socket.channel(`conversation:${conversationId}`, {
                customer_id: customerId,
            });
            this.channel.on('shout', (message) => {
                this.handleMessageCreated(message);
                this.config.onMessageCreated && this.config.onMessageCreated(message);
            });
            this.channel
                .join()
                .receive('ok', (res) => {
                this.logger.debug('Joined conversation successfully!', res);
            })
                .receive('error', (err) => {
                this.logger.debug('Unable to join conversation!', err);
            });
            return this;
        };
        this.createNewConversation = (customerId) => __awaiter(this, void 0, void 0, function* () {
            const { accountId, baseUrl } = this.config;
            return createNewConversation(accountId, customerId, baseUrl);
        });
        this.initializeNewConversation = (existingCustomerId, email) => __awaiter(this, void 0, void 0, function* () {
            const { customer = {} } = this.config;
            const metadata = email ? Object.assign(Object.assign({}, customer), { email }) : customer;
            const customerId = yield this.createOrUpdateCustomer(existingCustomerId, metadata);
            const { id: conversationId } = yield this.createNewConversation(customerId);
            return this.setCustomerId(customerId).setConversationId(conversationId);
        });
        this.updateCustomerMetadata = (customerId, metadata) => {
            const { baseUrl } = this.config;
            return updateCustomerMetadata(customerId, metadata, baseUrl);
        };
        this.createNewCustomer = (customer) => {
            const { baseUrl, accountId } = this.config;
            return createNewCustomer(accountId, customer, baseUrl);
        };
        this.identify = (externalId, metadata = {}) => __awaiter(this, void 0, void 0, function* () {
            try {
                const existingCustomerId = yield this.findCustomerByExternalId(externalId);
                const customer = existingCustomerId
                    ? yield this.updateCustomerMetadata(existingCustomerId, metadata)
                    : yield this.createNewCustomer(metadata);
                return customer;
            }
            catch (err) {
                // TODO: this edge case may occur if the cached customer ID somehow
                // gets messed up (e.g. between dev and prod environments). The long term
                // fix should be changing the cache key for different environments.
                this.logger.error('Failed to update or create customer:', err);
                this.logger.error('Retrying...');
                const customer = yield this.createNewCustomer(metadata);
                return customer;
            }
        });
        // This is very similar to `identify` above, but only used internally
        this.createOrUpdateCustomer = (existingCustomerId, metadata = {}) => __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = existingCustomerId
                    ? yield this.updateCustomerMetadata(existingCustomerId, metadata)
                    : yield this.createNewCustomer(metadata);
                const { id: customerId } = customer;
                return customerId;
            }
            catch (err) {
                // TODO: this edge case may occur if the cached customer ID somehow
                // gets messed up (e.g. between dev and prod environments). The long term
                // fix should be changing the cache key for different environments.
                this.logger.error('Failed to update or create customer:', err);
                this.logger.error('Retrying...');
                const { id: customerId } = yield this.createNewCustomer(metadata);
                return customerId;
            }
        });
        this.fetchWidgetSettings = () => __awaiter(this, void 0, void 0, function* () {
            const { accountId, baseUrl } = this.config;
            const empty = {};
            return fetchWidgetSettings(accountId, baseUrl)
                .then((settings) => settings || empty)
                .catch(() => empty);
        });
        this.updateWidgetSettingsMetadata = (metadata) => __awaiter(this, void 0, void 0, function* () {
            const { accountId, baseUrl } = this.config;
            return updateWidgetSettingsMetadata(accountId, metadata, baseUrl).catch((err) => {
                // No need to block on this
                this.logger.error('Failed to update widget metadata:', err);
            });
        });
        this.findCustomerByExternalId = (externalId, filters = {}) => __awaiter(this, void 0, void 0, function* () {
            const { accountId, baseUrl } = this.config;
            const { customer_id: matchingCustomerId } = yield findCustomerByExternalId(externalId, accountId, filters, baseUrl);
            return matchingCustomerId;
        });
        this.findCustomerByMetadata = (metadata) => __awaiter(this, void 0, void 0, function* () {
            if (!metadata || !(metadata === null || metadata === void 0 ? void 0 : metadata.external_id)) {
                return null;
            }
            // NB: we check for matching existing customers based on external_id, email,
            // and host -- this may break across subdomains, but I think this is fine for now.
            const { email, host, external_id: externalId } = metadata;
            const filters = { email, host };
            const customerId = yield this.findCustomerByExternalId(externalId, filters);
            return customerId;
        });
        this.checkForExistingCustomer = (metadata, defaultCustomerId = null) => __awaiter(this, void 0, void 0, function* () {
            if (!metadata || !(metadata === null || metadata === void 0 ? void 0 : metadata.external_id)) {
                return defaultCustomerId;
            }
            const matchingCustomerId = yield this.findCustomerByMetadata(metadata);
            if (!matchingCustomerId) {
                return null;
            }
            else if (matchingCustomerId === defaultCustomerId) {
                return defaultCustomerId;
            }
            else {
                // Emit update so we can cache the ID in the parent window???
                // this.setCustomerId(matchingCustomerId);
                return matchingCustomerId;
            }
        });
        this.updateExistingCustomer = (customerId, metadata) => __awaiter(this, void 0, void 0, function* () {
            if (!metadata) {
                return;
            }
            try {
                yield this.updateCustomerMetadata(customerId, metadata);
            }
            catch (err) {
                this.logger.debug('Error updating customer metadata!', err);
            }
        });
        this.fetchLatestCustomerConversation = (customerId) => __awaiter(this, void 0, void 0, function* () {
            const { accountId, baseUrl } = this.config;
            return fetchCustomerConversations(customerId, accountId, baseUrl).then((conversations) => {
                this.logger.debug('Found existing conversations:', conversations);
                const [latest] = conversations;
                return latest || null;
            });
        });
        this.getCachedCustomerId = () => {
            return this.storage.getCustomerId();
        };
        this.cacheCustomerId = (customerId) => {
            this.logger.debug('Caching customer ID:', customerId);
            if (!customerId) {
                this.storage.removeCustomerId();
            }
            else {
                // TODO: don't depend on storage working? (also add support for local/session/cookies)
                this.storage.setCustomerId(customerId);
            }
        };
        this.markMessagesAsSeen = () => {
            var _a;
            (_a = this.channel) === null || _a === void 0 ? void 0 : _a.push('messages:seen', {});
            const messages = this.messages.map((msg) => {
                return msg.seen_at ? msg : Object.assign(Object.assign({}, msg), { seen_at: new Date().toISOString() });
            });
            this.setMessages(messages);
        };
        this.sendNewMessage = (message, email) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { customerId, conversationId } = this;
            const { body = '', file_ids = [] } = message;
            const isMissingBody = !body || body.trim().length === 0;
            const isMissingAttachments = !file_ids || file_ids.length === 0;
            const isInvalidMessage = isMissingBody && isMissingAttachments;
            // TODO: how should we handle no channel connected?
            if (isInvalidMessage) {
                return;
            }
            // TODO: this seems to be unreliable
            const sentAt = new Date().toISOString();
            // TODO: figure out how this should work if `customerId` is null
            const payload = Object.assign(Object.assign({}, message), { body, customer_id: customerId, type: 'customer', sent_at: sentAt });
            // Optimistic update?
            this.setMessages([...this.messages, payload]);
            if (!customerId || !conversationId) {
                // TODO: this feels a bit hacky...
                // Can/should we just create the message within this call?
                yield this.initializeNewConversation(customerId, email);
            }
            (_a = this.channel) === null || _a === void 0 ? void 0 : _a.push('shout', Object.assign(Object.assign({}, message), { body, customer_id: this.customerId, sent_at: sentAt }));
        });
        this.handleMessageCreated = (message) => {
            const { messages = [] } = this;
            const unsent = messages.find((m) => !m.created_at &&
                areDatesEqual(m.sent_at, message.sent_at) &&
                (m.body === message.body || (!m.body && !message.body)));
            const updated = unsent
                ? messages.map((m) => (m.sent_at === unsent.sent_at ? message : m))
                : [...messages, message];
            this.setMessages(updated);
        };
        this.isValidCustomer = (customerId) => {
            const { baseUrl, accountId } = this.config;
            return isValidCustomer(customerId, accountId, baseUrl);
        };
        this.isValidCustomerId = (customerId) => __awaiter(this, void 0, void 0, function* () {
            if (!customerId || !customerId.length) {
                return false;
            }
            if (!isValidUuid(customerId)) {
                return false;
            }
            try {
                const isValidCustomer = yield this.isValidCustomer(customerId);
                return isValidCustomer;
            }
            catch (err) {
                this.logger.warn('Failed to validate customer ID.');
                this.logger.warn('You might be on an older version of Papercups.');
                // Return true for backwards compatibility
                return true;
            }
        });
        this.formatCustomerMetadata = () => {
            const { customer = {} } = this.config;
            if (!customer) {
                return {};
            }
            return Object.keys(customer).reduce((acc, key) => {
                if (key === 'metadata') {
                    return Object.assign(Object.assign({}, acc), { [key]: customer[key] });
                }
                else {
                    // Make sure all other passed-in values are strings
                    return Object.assign(Object.assign({}, acc), { [key]: String(customer[key]) });
                }
            }, {});
        };
        this.getDefaultGreeting = (overrides = {}) => {
            var _a, _b;
            if (this.config.setInitialMessage) {
                return this.config.setInitialMessage(overrides);
            }
            const greeting = this.config.greeting || this.settings.greeting;
            const awayMessage = this.config.awayMessage || this.settings.away_message;
            if (!greeting && !awayMessage) {
                return [];
            }
            const hasAwayMessage = awayMessage && awayMessage.length > 0;
            const isOutsideWorkingHours = !!((_b = (_a = this.settings) === null || _a === void 0 ? void 0 : _a.account) === null || _b === void 0 ? void 0 : _b.is_outside_working_hours);
            const shouldDisplayAwayMessage = hasAwayMessage && isOutsideWorkingHours;
            return [
                Object.assign({ type: 'bot', customer_id: 'bot', body: shouldDisplayAwayMessage ? awayMessage : greeting, created_at: new Date().toISOString() }, overrides),
            ];
        };
        this.fetchLatestConversation = (fallbackCustomerId = null) => __awaiter(this, void 0, void 0, function* () {
            try {
                const customerId = this.customerId || fallbackCustomerId;
                if (!customerId) {
                    // If there's no customerId, we haven't seen this customer before,
                    // so do nothing until they try to create a new message
                    this.setMessages([...this.getDefaultGreeting()]);
                    return null;
                }
                this.logger.debug('Fetching conversations for customer:', customerId);
                const conversation = yield this.fetchLatestCustomerConversation(customerId);
                if (!conversation) {
                    // If there are no conversations yet, wait until the customer creates
                    // a new message to create the new conversation
                    this.setMessages([
                        ...this.getDefaultGreeting(),
                    ]).listenForNewConversations(customerId);
                    return null;
                }
                const { id: conversationId, messages = [] } = conversation;
                const formattedMessages = messages.sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at));
                const [initialMessage] = formattedMessages;
                const initialMessageCreatedAt = initialMessage === null || initialMessage === void 0 ? void 0 : initialMessage.created_at;
                this.setConversationId(conversationId).setMessages([
                    ...this.getDefaultGreeting({
                        created_at: initialMessageCreatedAt,
                        seen_at: initialMessageCreatedAt,
                    }),
                    ...formattedMessages,
                ]);
                return conversation;
            }
            catch (err) {
                this.logger.debug('Error fetching conversations!', err);
            }
        });
        this.notify = (type, message, options = {}) => {
            this.logger.debug({ type, message, options });
            // TODO: make it super easy to send notifications from brower
            // consider rate limiting? blacklisting/whitelisting?
            // start new conversation vs send in existing?
            // tagging/labeling from function? (e.g. "feedback", "bug", etc?)
            // options can include... name, email, customer info, metadata?
        };
        const w = window;
        const { baseUrl, customerId, debug: isDebugMode = false } = config;
        const debugModeEnabled = isDev(w) || isDebugMode;
        this.config = config;
        this.logger = new Logger(debugModeEnabled);
        this.storage = store(w);
        this.customerId = customerId || this.getCachedCustomerId() || null;
        this.conversationId = null;
        this.messages = [];
        this.settings = {};
        const websocketUrl = getWebsocketUrl(baseUrl);
        this.socket = new phoenix.Socket(websocketUrl);
    }
}
Papercups.init = (config) => {
    return new Papercups(config);
};

export { Papercups, isAgentMessage, isCustomerMessage, isValidUuid, setupCustomEventHandlers, setupPostMessageHandlers, shouldActivateGameMode };
//# sourceMappingURL=index.es.js.map
