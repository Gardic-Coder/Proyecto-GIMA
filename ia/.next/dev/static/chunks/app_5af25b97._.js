(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/actions/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:17d305 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60b628601ebb3af40f65e290260ebcae8e17671808":"executeVoiceCommand"},"app/actions/voice.ts",""] */ __turbopack_context__.s([
    "executeVoiceCommand",
    ()=>executeVoiceCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var executeVoiceCommand = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60b628601ebb3af40f65e290260ebcae8e17671808", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "executeVoiceCommand"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tICdAYWktc2RrL2dvb2dsZSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVRleHQgfSBmcm9tICdhaSc7XG5cbmltcG9ydCB7IFZPSUNFX1BST01QVCB9IGZyb20gJ0AvYXBwL2NvbmZpZyc7XG5pbXBvcnQgeyBNQVhfQVVESU9fU0laRV9NQiwgYnl0ZXNUb01CIH0gZnJvbSAnQC9hcHAvY29uZmlnL2xpbWl0cyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAL2FwcC9saWIvbG9nZ2VyJztcbmltcG9ydCB7IFZvaWNlQ29tbWFuZFBhcnNlclNlcnZpY2UgfSBmcm9tICdAL2FwcC9saWIvc2VydmljZXMvdm9pY2UtY29tbWFuZC1wYXJzZXInO1xuaW1wb3J0IHsgZ2V0QmFzZTY0U2l6ZSB9IGZyb20gJ0AvYXBwL3V0aWxzL2Jhc2U2NCc7XG5cbi8qKlxuICogVHJhbnNjcmliZSB1biBhcmNoaXZvIGRlIGF1ZGlvIHVzYW5kbyBlbCBtb2RlbG8gR2VtaW5pIEZsYXNoIExpdGUuXG4gKiBVdGlsaXphIHByb21wdGluZyBlc3BlY8OtZmljbyBwYXJhIGxpbXBpYXIgdGltZXN0YW1wcyB5IG11bGV0aWxsYXMuXG4gKiBAcGFyYW0gYXVkaW9EYXRhVXJsIC0gU3RyaW5nIGNvZGlmaWNhZG8gZW4gYmFzZTY0IGRlbCBhdWRpbyAoZGF0YTphdWRpby8uLi4pXG4gKiBAcGFyYW0gbWltZVR5cGUgLSBUaXBvIE1JTUUgZGVsIGF1ZGlvIChkZWZhdWx0OiAnYXVkaW8vd2VibScgcGFyYSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxuICogQHJldHVybnMgT2JqZXRvIGNvbiBlbCB0ZXh0byB0cmFuc2NyaXRvIHkgZXN0YWRvIGRlIMOpeGl0b1xuICogQGV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyYW5zY3JpYmVBdWRpbyhcImRhdGE6YXVkaW8vd2VibTtiYXNlNjQsLi4uXCIpO1xuICogaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gKiAgIGNvbnNvbGUubG9nKFwiVHJhbnNjcmlwY2nDs246XCIsIHJlc3VsdC50ZXh0KTtcbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNjcmliZUF1ZGlvKFxuICBhdWRpb0RhdGFVcmw6IHN0cmluZyxcbiAgbWltZVR5cGU6IHN0cmluZyA9ICdhdWRpby93ZWJtJ1xuKTogUHJvbWlzZTx7IHRleHQ6IHN0cmluZzsgc3VjY2VzczogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGJhc2U2NENvbnRlbnQgPSBhdWRpb0RhdGFVcmwuaW5jbHVkZXMoJ2Jhc2U2NCwnKVxuICAgICAgPyBhdWRpb0RhdGFVcmwuc3BsaXQoJ2Jhc2U2NCwnKS5wb3AoKSB8fCAnJ1xuICAgICAgOiBhdWRpb0RhdGFVcmw7XG5cbiAgICBpZiAoIWJhc2U2NENvbnRlbnQpIHRocm93IG5ldyBFcnJvcignQXVkaW8gdmFjw61vJyk7XG5cbiAgICAvLyBWYWxpZGFyIHRhbWHDsW8gZGVsIGF1ZGlvXG4gICAgY29uc3Qgc2l6ZUluQnl0ZXMgPSBnZXRCYXNlNjRTaXplKGJhc2U2NENvbnRlbnQpO1xuICAgIGNvbnN0IHNpemVJbk1CID0gYnl0ZXNUb01CKHNpemVJbkJ5dGVzKTtcblxuICAgIGlmIChzaXplSW5NQiA+IE1BWF9BVURJT19TSVpFX01CKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBBdWRpbyBkZW1hc2lhZG8gZ3JhbmRlICgke3NpemVJbk1CLnRvRml4ZWQoMSl9TUIpLiBNw6F4aW1vIHBlcm1pdGlkbzogJHtNQVhfQVVESU9fU0laRV9NQn1NQmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVUZXh0KHtcbiAgICAgIG1vZGVsOiBnb29nbGUoJ2dlbWluaS0yLjUtZmxhc2gtbGl0ZScpLFxuICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICB0ZXh0OiBWT0lDRV9QUk9NUFQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgIGRhdGE6IGJhc2U2NENvbnRlbnQsXG4gICAgICAgICAgICAgIG1lZGlhVHlwZTogbWltZVR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gTGltcGllemEgcG9yIGPDs2RpZ286IHNpIGVsIG1vZGVsbyBtYW5kYSBwb3IgZXJyb3IgXCIwMDowMFwiLCBlc3RvIGxvIGJvcnJhLlxuICAgIGNvbnN0IGNsZWFuVGV4dCA9IHJlc3VsdC50ZXh0XG4gICAgICAvLyBFbGltaW5hciB0aW1lc3RhbXBzICgwMDowMCwgMDE6MjMsIGV0YylcbiAgICAgIC5yZXBsYWNlKC9cXGR7MSwyfTpcXGR7Mn0vZywgJycpXG4gICAgICAvLyBFbGltaW5hciBzYWx0b3MgZGUgbMOtbmVhIGV4Y2VzaXZvcyB5IHVuaXJsb3MgY29uIGVzcGFjaW9zXG4gICAgICAucmVwbGFjZSgvXFxuKy9nLCAnICcpXG4gICAgICAvLyBRdWl0YXIgZXNwYWNpb3MgZG9ibGVzIHF1ZSBxdWVkYW4gYWwgYm9ycmFyIGxvcyB0aWVtcG9zXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgICAudHJpbSgpO1xuXG4gICAgcmV0dXJuIHsgdGV4dDogY2xlYW5UZXh0LCBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgbG9nZ2VyLmVycm9yKCdFcnJvciB0cmFuc2NyaXBjacOzbicsIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcihTdHJpbmcoZXJyb3IpKSwge1xuICAgICAgY29tcG9uZW50OiAnYWN0aW9ucycsXG4gICAgICBhY3Rpb246ICd0cmFuc2NyaWJlQXVkaW8nLFxuICAgIH0pO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdFcnJvciBkZXNjb25vY2lkbyBhbCB0cmFuc2NyaWJpcic7XG4gICAgcmV0dXJuIHsgdGV4dDogJycsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gIH1cbn1cblxuLyoqXG4gKiBFamVjdXRhIHVuIGNvbWFuZG8gZGUgdm96IHBhcnNlYW5kbyBsYSB0cmFuc2NyaXBjacOzbiB5IHZhbGlkYW5kbyBlbCByZXN1bHRhZG8uXG4gKiBVc2EgR2VtaW5pIHBhcmEgaW50ZXJwcmV0YXIgZWwgY29tYW5kbyB5IFpvZCBwYXJhIHZhbGlkYXIgbGEgZXN0cnVjdHVyYS5cbiAqIEBwYXJhbSB0cmFuc2NyaXB0IC0gVGV4dG8gdHJhbnNjcml0byBkZWwgYXVkaW8gZGUgdm96XG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wY2lvbmVzIGRlIHBhcnNpbmcgKGlkaW9tYSwgY29uZmlhbnphIG3DrW5pbWEsIGNvbnRleHRvKVxuICogQHJldHVybnMgUmVzdWx0YWRvIGRpc2NyaW1pbmFkbyBjb24gY29tYW5kbyBwYXJzZWFkbyBvIGVycm9yXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVZvaWNlQ29tbWFuZChcIkNyZWFyIG9yZGVuIHVyZ2VudGUgcGFyYSBsYSBVTUFcIik7XG4gKiBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0LmNvbW1hbmQuYWN0aW9uKTsgLy8gJ2NyZWF0ZV93b3JrX29yZGVyJ1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBFamVjdXRhIHVuIGNvbWFuZG8gZGUgdm96IHBhcnNlYW5kbyBsYSB0cmFuc2NyaXBjacOzbiB5IHZhbGlkYW5kbyBlbCByZXN1bHRhZG8uXG4gKiBEZWxlZ2EgbGEgaW50ZWxpZ2VuY2lhIGFsIFZvaWNlQ29tbWFuZFBhcnNlclNlcnZpY2UuXG4gKiBAcGFyYW0gdHJhbnNjcmlwdFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBvcHRpb25zLm1pbkNvbmZpZGVuY2VcbiAqIEBwYXJhbSBvcHRpb25zLmNvbnRleHRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVWb2ljZUNvbW1hbmQoXG4gIHRyYW5zY3JpcHQ6IHN0cmluZyxcbiAgb3B0aW9ucz86IHsgbWluQ29uZmlkZW5jZT86IG51bWJlcjsgY29udGV4dD86IHN0cmluZyB9XG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZXIgPSBWb2ljZUNvbW1hbmRQYXJzZXJTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGFyc2VyLnBhcnNlQ29tbWFuZCh0cmFuc2NyaXB0LCB7XG4gICAgICBtaW5Db25maWRlbmNlOiBvcHRpb25zPy5taW5Db25maWRlbmNlID8/IDAuNyxcbiAgICAgIGNvbnRleHQ6IG9wdGlvbnM/LmNvbnRleHQsXG4gICAgICBsYW5ndWFnZTogJ2VzLUVTJyxcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQuY29tbWFuZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgY29tbWFuZDogcmVzdWx0LmNvbW1hbmQsIC8vIEFob3JhIGRldnVlbHZlIFZvaWNlQ29tbWFuZCAoVW5pb24pXG4gICAgICB9IGFzIGNvbnN0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IgfHwgJ05vIHNlIHB1ZG8gcHJvY2VzYXIgZWwgY29tYW5kbycsXG4gICAgICBjb2RlOiAnUEFSU0lOR19GQUlMRUQnLFxuICAgICAgcmVjb3ZlcmFibGU6IHRydWUsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAnRXJyb3IgZWplY3V0YW5kbyBjb21hbmRvIGRlIHZveicsXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoU3RyaW5nKGVycm9yKSksXG4gICAgICB7IGNvbXBvbmVudDogJ2FjdGlvbnMnLCBhY3Rpb246ICdleGVjdXRlVm9pY2VDb21tYW5kJyB9XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdFcnJvciBkZXNjb25vY2lkbycsXG4gICAgICBjb2RlOiAnRVhFQ1VUSU9OX0VSUk9SJyxcbiAgICAgIHJlY292ZXJhYmxlOiBmYWxzZSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlTQWdIc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/audio-waveform.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioWaveform",
    ()=>AudioWaveform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function AudioWaveform({ active = false, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-0.5 h-4', className),
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-1 rounded-full bg-current transition-all duration-300', active ? 'animate-music-bar' : 'h-1 opacity-20'),
                style: {
                    height: active ? undefined : '4px',
                    animationDelay: `${i * 0.1}s`
                }
            }, i, false, {
                fileName: "[project]/app/components/features/voice/audio-waveform.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/features/voice/audio-waveform.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = AudioWaveform;
var _c;
__turbopack_context__.k.register(_c, "AudioWaveform");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes de la Funcionalidad de Voz
 *
 * Configuración centralizada para la funcionalidad de entrada de voz.
 * Contiene configuración para grabación de voz, procesamiento y UI.
 */ /**
 * Configuración de reconocimiento de voz
 */ __turbopack_context__.s([
    "VOICE_CONFIG",
    ()=>VOICE_CONFIG,
    "VOICE_LABELS",
    ()=>VOICE_LABELS
]);
const VOICE_CONFIG = {
    /**
   * Tiempo máximo de grabación en milisegundos (30 segundos)
   */ maxRecordingTime: 30000,
    /**
   * Frecuencia de muestreo para grabación de audio (Hz)
   */ sampleRate: 16000,
    /**
   * Tipo MIME para codificación de audio
   */ mimeType: 'audio/webm',
    /**
   * Configuración de forma de onda visual
   */ waveform: {
        /**
     * Altura de las barras de forma de onda en píxeles
     */ height: 16,
        /**
     * Número de barras de forma de onda a mostrar
     */ bars: 4
    }
};
const VOICE_LABELS = {
    /**
   * Etiqueta cuando está inactivo
   */ idle: 'Dictar reporte',
    /**
   * Etiqueta cuando está escuchando
   */ listening: 'Detener',
    /**
   * Etiqueta ARIA cuando está inactivo
   */ ariaIdle: 'Iniciar grabación de voz',
    /**
   * Etiqueta ARIA cuando está escuchando
   */ ariaListening: 'Detener grabación de voz',
    /**
   * Mensaje de estado cuando está procesando
   */ processing: 'Procesando audio...',
    /**
   * Mensaje de estado cuando está listo
   */ ready: 'Listo para grabar',
    /**
   * Indicador de escucha para modo Gemini
   */ listeningGemini: 'IA Escuchando...',
    /**
   * Indicador de escucha para modo nativo
   */ listeningNative: 'Grabando...'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/voice-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceButton",
    ()=>VoiceButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$audio$2d$waveform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/audio-waveform.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/constants.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
/**
 * Variantes del botón de voz usando CVA para gestión de estilos declarativa y type-safe
 */ const voiceButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])(// Base styles applied to all variants
'relative flex items-center justify-center size-9 rounded-full transition-all duration-300 shadow-sm border focus:outline-none focus:ring-2 focus:ring-offset-2', {
    variants: {
        state: {
            idle: 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95',
            listening: '',
            processing: 'bg-amber-100 border-amber-200 text-amber-600 cursor-wait animate-pulse',
            disabled: 'opacity-50 cursor-not-allowed grayscale'
        },
        mode: {
            gemini: '',
            native: ''
        }
    },
    compoundVariants: [
        // Listening state with Gemini mode (blue)
        {
            state: 'listening',
            mode: 'gemini',
            className: 'bg-blue-600 border-blue-600 text-white shadow-blue-200 dark:shadow-blue-900/50 ring-2 ring-blue-200 dark:ring-blue-800'
        },
        // Listening state with native mode (gray)
        {
            state: 'listening',
            mode: 'native',
            className: 'bg-gray-500 border-gray-500 text-white shadow-gray-200 ring-2 ring-gray-200'
        }
    ],
    defaultVariants: {
        state: 'idle',
        mode: 'native'
    }
});
const VoiceButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ isListening, isProcessing = false, isSupported, mode = 'native', onClick, disabled = false, className }, ref)=>{
    if (!isSupported) return null;
    // Determine button state based on props
    const state = disabled ? 'disabled' : isProcessing ? 'processing' : isListening ? 'listening' : 'idle';
    // Determine ARIA label dynamically
    const ariaLabel = isListening ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].ariaListening : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].ariaIdle;
    // Determine title text
    const title = isListening ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].listening : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].idle;
    // Determine status text for screen readers
    const statusText = isProcessing ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].processing : isListening ? `Grabando con ${mode === 'gemini' ? 'IA' : 'método nativo'}` : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].ready;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 text-xs font-medium animate-in fade-in slide-in-from-right-4 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$audio$2d$waveform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioWaveform"], {
                        active: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/voice-button.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: mode === 'gemini' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].listeningGemini : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_LABELS"].listeningNative
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/voice-button.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/voice-button.tsx",
                lineNumber: 99,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: ref,
                type: "button",
                onClick: onClick,
                disabled: disabled,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(voiceButtonVariants({
                    state,
                    mode
                }), className),
                title: title,
                "aria-label": ariaLabel,
                "aria-pressed": isListening,
                "aria-describedby": "voice-status",
                children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "size-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/app/components/features/voice/voice-button.tsx",
                    lineNumber: 119,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                    className: "size-3 fill-current"
                }, void 0, false, {
                    fileName: "[project]/app/components/features/voice/voice-button.tsx",
                    lineNumber: 121,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : mode === 'gemini' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/voice-button.tsx",
                        lineNumber: 124,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/features/voice/voice-button.tsx",
                    lineNumber: 123,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                    className: "size-4"
                }, void 0, false, {
                    fileName: "[project]/app/components/features/voice/voice-button.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/features/voice/voice-button.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "voice-status",
                className: "sr-only",
                role: "status",
                "aria-live": "polite",
                children: statusText
            }, void 0, false, {
                fileName: "[project]/app/components/features/voice/voice-button.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/voice/voice-button.tsx",
        lineNumber: 96,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = VoiceButton;
VoiceButton.displayName = 'VoiceButton';
var _c, _c1;
__turbopack_context__.k.register(_c, "VoiceButton$forwardRef");
__turbopack_context__.k.register(_c1, "VoiceButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/types/voice-commands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tipos y Esquemas de Comandos de Voz
 *
 * Define tipos TypeScript y schemas Zod para comandos de voz
 * Valida estructura y contenido en runtime
 * @example
 * ```typescript
 * import { VoiceWorkOrderCommandSchema } from '@/app/types/voice-commands';
 *
 * const result = VoiceWorkOrderCommandSchema.safeParse(parsedData);
 * if (result.success) {
 *   // Usar result.data con seguridad de tipos
 * }
 * ```
 */ __turbopack_context__.s([
    "CommandExecutionResultSchema",
    ()=>CommandExecutionResultSchema,
    "CommandExecutionStatusSchema",
    ()=>CommandExecutionStatusSchema,
    "VoiceCommandAction",
    ()=>VoiceCommandAction,
    "VoiceCommandResultSchema",
    ()=>VoiceCommandResultSchema,
    "VoiceCommandSchema",
    ()=>VoiceCommandSchema,
    "VoiceNavigationAction",
    ()=>VoiceNavigationAction,
    "VoiceNavigationCommandSchema",
    ()=>VoiceNavigationCommandSchema,
    "VoiceParserOptionsSchema",
    ()=>VoiceParserOptionsSchema,
    "VoiceSystemAction",
    ()=>VoiceSystemAction,
    "VoiceSystemCommandSchema",
    ()=>VoiceSystemCommandSchema,
    "VoiceWorkOrderCommandSchema",
    ()=>VoiceWorkOrderCommandSchema,
    "WorkOrderPriority",
    ()=>WorkOrderPriority,
    "createEmptyCommand",
    ()=>createEmptyCommand,
    "formatCommandSummary",
    ()=>formatCommandSummary,
    "requiresConfirmation",
    ()=>requiresConfirmation,
    "validateVoiceCommand",
    ()=>validateVoiceCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const VoiceCommandAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'create_work_order',
    'check_status',
    'list_pending',
    'update_priority',
    'assign_technician'
]);
const VoiceNavigationAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'navigate',
    'go_back'
]);
const VoiceSystemAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'theme_mode',
    'logout',
    'summarize'
]);
const WorkOrderPriority = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'urgent',
    'normal',
    'low'
]);
const VoiceWorkOrderCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** Acción a ejecutar */ action: VoiceCommandAction,
    /** Equipo mencionado (UMA, BCA, TAB, etc.) */ equipment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(100).optional(),
    /** Ubicación o sector mencionado */ location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(50).optional(),
    /** Prioridad especificada */ priority: WorkOrderPriority.optional(),
    /** Descripción del problema o trabajo */ description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5).max(500).optional(),
    /** Técnico mencionado para asignación */ assignee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(100).optional(),
    /**
   * Nivel de confianza de la transcripción (0-1)
   * Valores < 0.7 deberían rechazarse
   */ confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    /** Transcripción original sin procesar */ rawTranscript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    /** Metadata adicional del procesamiento */ metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional(),
    /** Tipo discriminador */ type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('work_order').default('work_order')
});
const VoiceNavigationCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    action: VoiceNavigationAction,
    /** Ruta destino (ej: /dashboard, /settings) */ path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /** Nombre de pantalla amigable */ screen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    rawTranscript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('navigation').default('navigation')
});
const VoiceSystemCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    action: VoiceSystemAction,
    /** Parámetro de acción (ej: 'dark' para theme) */ value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    rawTranscript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('system').default('system')
});
const VoiceCommandSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    VoiceWorkOrderCommandSchema,
    VoiceNavigationCommandSchema,
    VoiceSystemCommandSchema
]);
/**
 * Schema para resultado exitoso de parsing de comando
 */ const VoiceCommandSuccessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    command: VoiceCommandSchema
});
/**
 * Schema para resultado fallido de parsing de comando
 */ const VoiceCommandErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(false),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    recoverable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
const VoiceCommandResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('success', [
    VoiceCommandSuccessSchema,
    VoiceCommandErrorSchema
]);
const VoiceParserOptionsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** Idioma de la transcripción */ language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'es-ES',
        'en-US'
    ]).default('es-ES'),
    /** Nivel mínimo de confianza aceptable */ minConfidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).default(0.7),
    /** Modelo de IA a usar para parsing */ model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /** Contexto adicional para mejorar parsing */ context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional()
});
const CommandExecutionStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'pending',
    'executing',
    'completed',
    'failed',
    'cancelled'
]);
const CommandExecutionResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** ID del comando ejecutado */ commandId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().optional(),
    /** Estado de la ejecución */ status: CommandExecutionStatusSchema,
    /** Mensaje descriptivo del resultado */ message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    /** Datos del recurso creado/modificado (ej: ID de work order) */ resourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /** URL del recurso creado (opcional) */ resourceUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    /** Timestamp de ejecución */ executedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().optional()
});
function validateVoiceCommand(data) {
    const result = VoiceWorkOrderCommandSchema.safeParse(data);
    if (result.success) {
        return {
            success: true,
            data: result.data
        };
    }
    // Formatear errores de Zod para usuario
    const errors = result.error.issues.map((err)=>`${err.path.join('.')}: ${err.message}`);
    return {
        success: false,
        errors
    };
}
function createEmptyCommand() {
    return {
        action: 'create_work_order',
        confidence: 0,
        rawTranscript: ''
    };
}
function requiresConfirmation(command) {
    if (command.type === 'work_order') {
        // Work order logic
        if (command.priority === 'urgent' || command.action === 'assign_technician') return true;
    }
    if (command.type === 'system') {
        if (command.action === 'logout') return true;
    }
    // Confidence bajo requiere confirmación
    if (command.confidence < 0.85) {
        return true;
    }
    return false;
}
function formatCommandSummary(command) {
    if (command.type === 'navigation') {
        return `Navegar a ${command.screen || command.path || 'destino'}`;
    }
    if (command.type === 'system') {
        return `Sistema: ${command.action}`;
    }
    const parts = [];
    switch(command.action){
        case 'create_work_order':
            parts.push('Crear orden de trabajo');
            break;
        case 'check_status':
            parts.push('Verificar estado');
            break;
        case 'list_pending':
            parts.push('Listar órdenes pendientes');
            break;
        case 'update_priority':
            parts.push('Actualizar prioridad');
            break;
        case 'assign_technician':
            parts.push('Asignar técnico');
            break;
    }
    if (command.equipment) {
        parts.push(`para ${command.equipment}`);
    }
    if (command.location) {
        parts.push(`en ${command.location}`);
    }
    if (command.priority) {
        parts.push(`(Prioridad: ${command.priority})`);
    }
    return parts.join(' ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/command-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPreview",
    ()=>CommandPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$voice$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/voice-commands.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function CommandPreview({ command, onConfirm, onCancel, onRetry, isConfirming = false, className }) {
    const needsConfirmation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$voice$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requiresConfirmation"])(command);
    const confidencePercent = Math.round(command.confidence * 100);
    const getConfidenceColor = ()=>{
        if (confidencePercent >= 90) return 'text-green-600 bg-green-100 dark:bg-green-900/30';
        if (confidencePercent >= 75) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
        return 'text-red-600 bg-red-100 dark:bg-red-900/30';
    };
    const getPriorityBadge = ()=>{
        if (command.type !== 'work_order' || !command.priority) return null;
        const colors = {
            urgent: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
            normal: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            low: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-0.5 rounded text-xs font-medium', colors[command.priority]),
            children: command.priority.toUpperCase()
        }, void 0, false, {
            fileName: "[project]/app/components/features/voice/command-preview.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-sm', 'animate-in fade-in slide-in-from-bottom-2 duration-300', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium text-zinc-900 dark:text-zinc-100",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$voice$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCommandSummary"])(command)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    getPriorityBadge()
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: [
                    command.type === 'work_order' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            command.equipment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Equipo: ",
                                            command.equipment
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            command.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Ubicación: ",
                                            command.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            command.assignee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Asignar a: ",
                                            command.assignee
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            command.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-zinc-600 dark:text-zinc-400 italic",
                                children: [
                                    "“",
                                    command.description,
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    command.type === 'navigation' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                        children: [
                            "Ruta:",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono bg-zinc-100 dark:bg-zinc-800 px-1 rounded",
                                children: command.path || command.screen
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1 rounded text-xs font-medium', getConfidenceColor()),
                        children: [
                            confidencePercent,
                            "% confianza"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    needsConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "size-3"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            "Requiere confirmación"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded text-xs text-zinc-500 dark:text-zinc-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: "Transcripción:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    " ",
                    command.rawTranscript
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onConfirm,
                        disabled: isConfirming,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors', 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            isConfirming ? 'Confirmando...' : 'Confirmar'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRetry,
                        disabled: isConfirming,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors', 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            "Reintentar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        disabled: isConfirming,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors', 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            "Cancelar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/voice/command-preview.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/command-preview.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/voice/command-preview.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c = CommandPreview;
var _c;
__turbopack_context__.k.register(_c, "CommandPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/command-status-indicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandStatusIndicator",
    ()=>CommandStatusIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
/**
 * Configuración visual para cada estado
 */ const STATUS_CONFIG = {
    idle: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        label: 'Listo',
        className: 'text-gray-500 dark:text-gray-400'
    },
    validating: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"],
        label: 'Validando...',
        className: 'text-blue-500 dark:text-blue-400',
        animate: true
    },
    executing: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"],
        label: 'Ejecutando...',
        className: 'text-amber-500 dark:text-amber-400',
        animate: true
    },
    retrying: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
        label: 'Reintentando...',
        className: 'text-orange-500 dark:text-orange-400',
        animate: true
    },
    succeeded: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        label: 'Completado',
        className: 'text-green-500 dark:text-green-400'
    },
    failed: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        label: 'Error',
        className: 'text-red-500 dark:text-red-400'
    }
};
function CommandStatusIndicator({ status, message, duration, className, compact = false }) {
    const config = STATUS_CONFIG[status];
    const Icon = config.icon;
    // No mostrar nada en idle si es compacto
    if (compact && status === 'idle') {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200', status === 'failed' && 'bg-red-50 dark:bg-red-900/20', status === 'succeeded' && 'bg-green-50 dark:bg-green-900/20', (status === 'executing' || status === 'validating') && 'bg-amber-50 dark:bg-amber-900/20', status === 'retrying' && 'bg-orange-50 dark:bg-orange-900/20', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-4 w-4 flex-shrink-0', config.className, config.animate && 'animate-spin')
            }, void 0, false, {
                fileName: "[project]/app/components/features/voice/command-status-indicator.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium', config.className),
                        children: config.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/command-status-indicator.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 dark:text-gray-400 truncate mt-0.5",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/command-status-indicator.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    duration !== undefined && duration !== null && status !== 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 dark:text-gray-500",
                        children: [
                            (duration / 1000).toFixed(1),
                            "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/voice/command-status-indicator.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/command-status-indicator.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/voice/command-status-indicator.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c = CommandStatusIndicator;
var _c;
__turbopack_context__.k.register(_c, "CommandStatusIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:64a6f1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e93d07463347e4af1e311d36fd8c87bde0b40a55":"transcribeAudio"},"app/actions/voice.ts",""] */ __turbopack_context__.s([
    "transcribeAudio",
    ()=>transcribeAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var transcribeAudio = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60e93d07463347e4af1e311d36fd8c87bde0b40a55", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "transcribeAudio"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdm9pY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tICdAYWktc2RrL2dvb2dsZSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVRleHQgfSBmcm9tICdhaSc7XG5cbmltcG9ydCB7IFZPSUNFX1BST01QVCB9IGZyb20gJ0AvYXBwL2NvbmZpZyc7XG5pbXBvcnQgeyBNQVhfQVVESU9fU0laRV9NQiwgYnl0ZXNUb01CIH0gZnJvbSAnQC9hcHAvY29uZmlnL2xpbWl0cyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAL2FwcC9saWIvbG9nZ2VyJztcbmltcG9ydCB7IFZvaWNlQ29tbWFuZFBhcnNlclNlcnZpY2UgfSBmcm9tICdAL2FwcC9saWIvc2VydmljZXMvdm9pY2UtY29tbWFuZC1wYXJzZXInO1xuaW1wb3J0IHsgZ2V0QmFzZTY0U2l6ZSB9IGZyb20gJ0AvYXBwL3V0aWxzL2Jhc2U2NCc7XG5cbi8qKlxuICogVHJhbnNjcmliZSB1biBhcmNoaXZvIGRlIGF1ZGlvIHVzYW5kbyBlbCBtb2RlbG8gR2VtaW5pIEZsYXNoIExpdGUuXG4gKiBVdGlsaXphIHByb21wdGluZyBlc3BlY8OtZmljbyBwYXJhIGxpbXBpYXIgdGltZXN0YW1wcyB5IG11bGV0aWxsYXMuXG4gKiBAcGFyYW0gYXVkaW9EYXRhVXJsIC0gU3RyaW5nIGNvZGlmaWNhZG8gZW4gYmFzZTY0IGRlbCBhdWRpbyAoZGF0YTphdWRpby8uLi4pXG4gKiBAcGFyYW0gbWltZVR5cGUgLSBUaXBvIE1JTUUgZGVsIGF1ZGlvIChkZWZhdWx0OiAnYXVkaW8vd2VibScgcGFyYSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5KVxuICogQHJldHVybnMgT2JqZXRvIGNvbiBlbCB0ZXh0byB0cmFuc2NyaXRvIHkgZXN0YWRvIGRlIMOpeGl0b1xuICogQGV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyYW5zY3JpYmVBdWRpbyhcImRhdGE6YXVkaW8vd2VibTtiYXNlNjQsLi4uXCIpO1xuICogaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gKiAgIGNvbnNvbGUubG9nKFwiVHJhbnNjcmlwY2nDs246XCIsIHJlc3VsdC50ZXh0KTtcbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNjcmliZUF1ZGlvKFxuICBhdWRpb0RhdGFVcmw6IHN0cmluZyxcbiAgbWltZVR5cGU6IHN0cmluZyA9ICdhdWRpby93ZWJtJ1xuKTogUHJvbWlzZTx7IHRleHQ6IHN0cmluZzsgc3VjY2VzczogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGJhc2U2NENvbnRlbnQgPSBhdWRpb0RhdGFVcmwuaW5jbHVkZXMoJ2Jhc2U2NCwnKVxuICAgICAgPyBhdWRpb0RhdGFVcmwuc3BsaXQoJ2Jhc2U2NCwnKS5wb3AoKSB8fCAnJ1xuICAgICAgOiBhdWRpb0RhdGFVcmw7XG5cbiAgICBpZiAoIWJhc2U2NENvbnRlbnQpIHRocm93IG5ldyBFcnJvcignQXVkaW8gdmFjw61vJyk7XG5cbiAgICAvLyBWYWxpZGFyIHRhbWHDsW8gZGVsIGF1ZGlvXG4gICAgY29uc3Qgc2l6ZUluQnl0ZXMgPSBnZXRCYXNlNjRTaXplKGJhc2U2NENvbnRlbnQpO1xuICAgIGNvbnN0IHNpemVJbk1CID0gYnl0ZXNUb01CKHNpemVJbkJ5dGVzKTtcblxuICAgIGlmIChzaXplSW5NQiA+IE1BWF9BVURJT19TSVpFX01CKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBBdWRpbyBkZW1hc2lhZG8gZ3JhbmRlICgke3NpemVJbk1CLnRvRml4ZWQoMSl9TUIpLiBNw6F4aW1vIHBlcm1pdGlkbzogJHtNQVhfQVVESU9fU0laRV9NQn1NQmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVUZXh0KHtcbiAgICAgIG1vZGVsOiBnb29nbGUoJ2dlbWluaS0yLjUtZmxhc2gtbGl0ZScpLFxuICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICB0ZXh0OiBWT0lDRV9QUk9NUFQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgIGRhdGE6IGJhc2U2NENvbnRlbnQsXG4gICAgICAgICAgICAgIG1lZGlhVHlwZTogbWltZVR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gTGltcGllemEgcG9yIGPDs2RpZ286IHNpIGVsIG1vZGVsbyBtYW5kYSBwb3IgZXJyb3IgXCIwMDowMFwiLCBlc3RvIGxvIGJvcnJhLlxuICAgIGNvbnN0IGNsZWFuVGV4dCA9IHJlc3VsdC50ZXh0XG4gICAgICAvLyBFbGltaW5hciB0aW1lc3RhbXBzICgwMDowMCwgMDE6MjMsIGV0YylcbiAgICAgIC5yZXBsYWNlKC9cXGR7MSwyfTpcXGR7Mn0vZywgJycpXG4gICAgICAvLyBFbGltaW5hciBzYWx0b3MgZGUgbMOtbmVhIGV4Y2VzaXZvcyB5IHVuaXJsb3MgY29uIGVzcGFjaW9zXG4gICAgICAucmVwbGFjZSgvXFxuKy9nLCAnICcpXG4gICAgICAvLyBRdWl0YXIgZXNwYWNpb3MgZG9ibGVzIHF1ZSBxdWVkYW4gYWwgYm9ycmFyIGxvcyB0aWVtcG9zXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgICAudHJpbSgpO1xuXG4gICAgcmV0dXJuIHsgdGV4dDogY2xlYW5UZXh0LCBzdWNjZXNzOiB0cnVlIH07XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgbG9nZ2VyLmVycm9yKCdFcnJvciB0cmFuc2NyaXBjacOzbicsIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcihTdHJpbmcoZXJyb3IpKSwge1xuICAgICAgY29tcG9uZW50OiAnYWN0aW9ucycsXG4gICAgICBhY3Rpb246ICd0cmFuc2NyaWJlQXVkaW8nLFxuICAgIH0pO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdFcnJvciBkZXNjb25vY2lkbyBhbCB0cmFuc2NyaWJpcic7XG4gICAgcmV0dXJuIHsgdGV4dDogJycsIHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gIH1cbn1cblxuLyoqXG4gKiBFamVjdXRhIHVuIGNvbWFuZG8gZGUgdm96IHBhcnNlYW5kbyBsYSB0cmFuc2NyaXBjacOzbiB5IHZhbGlkYW5kbyBlbCByZXN1bHRhZG8uXG4gKiBVc2EgR2VtaW5pIHBhcmEgaW50ZXJwcmV0YXIgZWwgY29tYW5kbyB5IFpvZCBwYXJhIHZhbGlkYXIgbGEgZXN0cnVjdHVyYS5cbiAqIEBwYXJhbSB0cmFuc2NyaXB0IC0gVGV4dG8gdHJhbnNjcml0byBkZWwgYXVkaW8gZGUgdm96XG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wY2lvbmVzIGRlIHBhcnNpbmcgKGlkaW9tYSwgY29uZmlhbnphIG3DrW5pbWEsIGNvbnRleHRvKVxuICogQHJldHVybnMgUmVzdWx0YWRvIGRpc2NyaW1pbmFkbyBjb24gY29tYW5kbyBwYXJzZWFkbyBvIGVycm9yXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogY29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVZvaWNlQ29tbWFuZChcIkNyZWFyIG9yZGVuIHVyZ2VudGUgcGFyYSBsYSBVTUFcIik7XG4gKiBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0LmNvbW1hbmQuYWN0aW9uKTsgLy8gJ2NyZWF0ZV93b3JrX29yZGVyJ1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBFamVjdXRhIHVuIGNvbWFuZG8gZGUgdm96IHBhcnNlYW5kbyBsYSB0cmFuc2NyaXBjacOzbiB5IHZhbGlkYW5kbyBlbCByZXN1bHRhZG8uXG4gKiBEZWxlZ2EgbGEgaW50ZWxpZ2VuY2lhIGFsIFZvaWNlQ29tbWFuZFBhcnNlclNlcnZpY2UuXG4gKiBAcGFyYW0gdHJhbnNjcmlwdFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBvcHRpb25zLm1pbkNvbmZpZGVuY2VcbiAqIEBwYXJhbSBvcHRpb25zLmNvbnRleHRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVWb2ljZUNvbW1hbmQoXG4gIHRyYW5zY3JpcHQ6IHN0cmluZyxcbiAgb3B0aW9ucz86IHsgbWluQ29uZmlkZW5jZT86IG51bWJlcjsgY29udGV4dD86IHN0cmluZyB9XG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZXIgPSBWb2ljZUNvbW1hbmRQYXJzZXJTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGFyc2VyLnBhcnNlQ29tbWFuZCh0cmFuc2NyaXB0LCB7XG4gICAgICBtaW5Db25maWRlbmNlOiBvcHRpb25zPy5taW5Db25maWRlbmNlID8/IDAuNyxcbiAgICAgIGNvbnRleHQ6IG9wdGlvbnM/LmNvbnRleHQsXG4gICAgICBsYW5ndWFnZTogJ2VzLUVTJyxcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQuY29tbWFuZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgY29tbWFuZDogcmVzdWx0LmNvbW1hbmQsIC8vIEFob3JhIGRldnVlbHZlIFZvaWNlQ29tbWFuZCAoVW5pb24pXG4gICAgICB9IGFzIGNvbnN0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IgfHwgJ05vIHNlIHB1ZG8gcHJvY2VzYXIgZWwgY29tYW5kbycsXG4gICAgICBjb2RlOiAnUEFSU0lOR19GQUlMRUQnLFxuICAgICAgcmVjb3ZlcmFibGU6IHRydWUsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAnRXJyb3IgZWplY3V0YW5kbyBjb21hbmRvIGRlIHZveicsXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoU3RyaW5nKGVycm9yKSksXG4gICAgICB7IGNvbXBvbmVudDogJ2FjdGlvbnMnLCBhY3Rpb246ICdleGVjdXRlVm9pY2VDb21tYW5kJyB9XG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdFcnJvciBkZXNjb25vY2lkbycsXG4gICAgICBjb2RlOiAnRVhFQ1VUSU9OX0VSUk9SJyxcbiAgICAgIHJlY292ZXJhYmxlOiBmYWxzZSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQXlCc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/constants/messages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes de mensajes centralizadas para la aplicación
 * Extraídas de cadenas en línea para mejorar el mantenimiento y soporte i18n
 */ __turbopack_context__.s([
    "ERROR_MESSAGES",
    ()=>ERROR_MESSAGES,
    "MAX_ERROR_MESSAGE_LENGTH",
    ()=>MAX_ERROR_MESSAGE_LENGTH,
    "VOICE_MESSAGES",
    ()=>VOICE_MESSAGES
]);
const VOICE_MESSAGES = {
    // General states
    LOCAL_MODE: '🎤 Modo local activo',
    // Gemini API errors
    QUOTA_EXCEEDED: '⚡ Cuota agotada · Modo local activo',
    API_NOT_CONFIGURED: '🔑 API sin configurar · Modo local activo',
    NO_CONNECTION: '📡 Sin conexión · Modo local activo',
    TIMEOUT: '⏱️ Tiempo agotado · Modo local activo',
    AUDIO_ERROR: '🔊 Error de audio · Modo local activo',
    SERVER_ERROR: '⚠️ Error de servidor · Modo local activo',
    MODEL_NOT_AVAILABLE: '🤖 Modelo no disponible · Modo local activo',
    // Native voice errors
    PERMISSION_DENIED: '🎤 Permiso de micrófono denegado',
    BROWSER_NOT_SUPPORTED: '🌐 Navegador sin soporte de voz · Usa Chrome o Edge',
    VOICE_ERROR_PREFIX: '⚠️ Error de voz:',
    // Processing states
    PROCESSING: 'Procesando transcripción...'
};
const ERROR_MESSAGES = {
    QUOTA_EXCEEDED_DESCRIPTION: 'Has excedido el límite de solicitudes. Intenta nuevamente en unos segundos.',
    RATE_LIMIT: 'Too Many Requests',
    INVALID_REQUEST: 'Invalid request format',
    VALIDATION_ERROR: 'Validation error',
    PROCESSING_ERROR: 'Error al procesar la solicitud',
    UNKNOWN: 'Unknown error'
};
const MAX_ERROR_MESSAGE_LENGTH = 30;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/logger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Logger Centralizado
 *
 * Proporciona logging estructurado con diferentes niveles de severidad.
 * Filtra logs automáticamente basado en NODE_ENV y proporciona
 * hooks para servicios de logging externos (Sentry, Datadog, etc.)
 */ __turbopack_context__.s([
    "logger",
    ()=>logger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class Logger {
    /**
   * Determina si un nivel de log debería registrarse basado en el entorno
   * @param level
   */ shouldLog(level) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
         // Always log on server
        // In production, only log warnings and errors
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return true;
    }
    /**
   * Función central de logging
   * @param level
   * @param message
   * @param context
   */ log(level, message, context) {
        if (!this.shouldLog(level)) return;
        const timestamp = new Date().toISOString();
        const logObject = {
            timestamp,
            level,
            message,
            ...context
        };
        // In production, this would send to external service
        if (("TURBOPACK compile-time value", "development") === 'production') {
        // TODO: Integrate with Sentry or similar
        // Sentry.captureMessage(message, { level, extra: context });
        }
        // Console output with appropriate method
        const consoleMethod = console[level] || console.log;
        consoleMethod(JSON.stringify(logObject, null, 2));
    }
    /**
   * Registra información de debug (solo en desarrollo)
   * @param message
   * @param context
   */ debug(message, context) {
        this.log('debug', message, context);
    }
    /**
   * Registra mensajes informativos
   * @param message
   * @param context
   */ info(message, context) {
        this.log('info', message, context);
    }
    /**
   * Registra mensajes de advertencia
   * @param message
   * @param context
   */ warn(message, context) {
        this.log('warn', message, context);
    }
    /**
   * Registra mensajes de error con objeto Error opcional
   * @param message
   * @param error
   * @param context
   */ error(message, error, context) {
        this.log('error', message, {
            ...context,
            error: error?.message,
            stack: error?.stack
        });
    }
}
const logger = new Logger(); /**
 * Example usage:
 *
 * logger.debug('User clicked button', { component: 'ChatInput', action: 'submit' });
 * logger.info('Chat message sent', { messageId: '123', length: 50 });
 * logger.warn('Rate limit approaching', { remaining: 2, limit: 20 });
 * logger.error('Failed to send message', error, { component: 'useChat', action: 'sendMessage' });
 */ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/utils/media-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Media Types Utility
 *
 * Funciones helper para detección dinámica de formatos de audio
 * soportados por el navegador, con soporte especial para Safari/iOS
 */ /**
 * Determina el MIME type de audio soportado por el navegador actual
 * con priorización para mejor calidad y compatibilidad
 * @returns MIME type soportado (ej: 'audio/webm;codecs=opus', 'audio/mp4')
 * @throws Error si ningún formato está soportado o MediaRecorder no disponible
 * @example
 * ```typescript
 * try {
 *   const mimeType = getSupportedAudioMimeType();
 *   const recorder = new MediaRecorder(stream, { mimeType });
 * } catch (error) {
 *   console.error('MediaRecorder not supported');
 * }
 * ```
 */ __turbopack_context__.s([
    "getAudioExtension",
    ()=>getAudioExtension,
    "getSupportedAudioMimeType",
    ()=>getSupportedAudioMimeType,
    "isMediaRecorderSupported",
    ()=>isMediaRecorderSupported
]);
function getSupportedAudioMimeType() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.MediaRecorder) {
        throw new Error('MediaRecorder not supported');
    }
    // Lista de MIME types ordenados por prioridad (calidad + compatibilidad)
    const audioFormats = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/mp4',
        'audio/ogg;codecs=opus',
        'audio/wav'
    ];
    for (const format of audioFormats){
        if (MediaRecorder.isTypeSupported(format)) {
            return format;
        }
    }
    // Si ninguno está soportado, lanzar error descriptivo
    throw new Error(`No supported audio format found. Browser: ${navigator.userAgent}`);
}
function getAudioExtension(mimeType) {
    if (mimeType.includes('webm')) return 'webm';
    if (mimeType.includes('mp4')) return 'mp4';
    if (mimeType.includes('ogg')) return 'ogg';
    if (mimeType.includes('wav')) return 'wav';
    return 'audio';
}
function isMediaRecorderSupported() {
    return ("TURBOPACK compile-time value", "object") !== 'undefined' && !!window.MediaRecorder;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/use-voice-input.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceInput",
    ()=>useVoiceInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/actions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$64a6f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:64a6f1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/constants/messages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$media$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/media-types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Get SpeechRecognition constructor safely
const getSpeechRecognition = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
};
// Simplify technical Gemini errors to user-friendly messages
const simplifyGeminiError = (error)=>{
    if (!error) return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].LOCAL_MODE;
    const lowerError = error.toLowerCase();
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('Gemini transcription error', {
        error: lowerError,
        component: 'useVoiceInput'
    });
    // Quota/Rate limit errors
    if (lowerError.includes('quota') || lowerError.includes('exceeded') || lowerError.includes('rate limit')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].QUOTA_EXCEEDED;
    }
    // API key errors
    if (lowerError.includes('api key') || lowerError.includes('api_key') || lowerError.includes('invalid key')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].API_NOT_CONFIGURED;
    }
    // Network errors
    if (lowerError.includes('network') || lowerError.includes('fetch') || lowerError.includes('connection')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].NO_CONNECTION;
    }
    // Timeout errors
    if (lowerError.includes('timeout')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].TIMEOUT;
    }
    // Audio/media errors
    if (lowerError.includes('audio') || lowerError.includes('media') || lowerError.includes('format')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].AUDIO_ERROR;
    }
    // Generic server errors
    if (lowerError.includes('500') || lowerError.includes('server error') || lowerError.includes('internal')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].SERVER_ERROR;
    }
    if (lowerError.includes('models/') && (lowerError.includes('not found') || lowerError.includes('is not'))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].MODEL_NOT_AVAILABLE;
    }
    // Show partial error for debugging
    const shortError = error.length > __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_ERROR_MESSAGE_LENGTH"] ? error.substring(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_ERROR_MESSAGE_LENGTH"]) + '...' : error;
    return `⚠️ ${shortError} · Modo local activo`;
};
function useVoiceInput({ onTranscript, onError, onStateChange, language = 'es-ES' } = {}) {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('gemini');
    const [isSupported, setIsSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Detect capabilities on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceInput.useEffect": ()=>{
            const hasMediaRecorder = ("TURBOPACK compile-time value", "object") !== 'undefined' && !!window.MediaRecorder;
            const hasSpeechRecognition = !!getSpeechRecognition();
            setIsSupported(hasMediaRecorder || hasSpeechRecognition);
            // Prefer Gemini if available AND online
            if (hasMediaRecorder && navigator.onLine) {
                setMode('gemini');
            } else if (hasSpeechRecognition) {
                setMode('native');
            }
        }
    }["useVoiceInput.useEffect"], []);
    // --- GEMINI Logic (MediaRecorder) ---
    const startGeminiRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceInput.useCallback[startGeminiRecording]": async ()=>{
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                streamRef.current = stream;
                // ✅ Detección dinámica de MIME type soportado
                let mimeType;
                try {
                    mimeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$media$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupportedAudioMimeType"])();
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('Using audio MIME type', {
                        mimeType,
                        userAgent: navigator.userAgent,
                        component: 'useVoiceInput'
                    });
                } catch (error) {
                    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Failed to get supported MIME type', new Error(errorMsg), {
                        component: 'useVoiceInput',
                        userAgent: navigator.userAgent
                    });
                    // Fallback a modo nativo si MediaRecorder falla completamente
                    setMode('native');
                    startNativeListening();
                    return;
                }
                const recorder = new MediaRecorder(stream, {
                    mimeType
                });
                mediaRecorderRef.current = recorder;
                chunksRef.current = [];
                recorder.ondataavailable = ({
                    "useVoiceInput.useCallback[startGeminiRecording]": (e)=>{
                        if (e.data.size > 0) chunksRef.current.push(e.data);
                    }
                })["useVoiceInput.useCallback[startGeminiRecording]"];
                recorder.onstop = ({
                    "useVoiceInput.useCallback[startGeminiRecording]": async ()=>{
                        setIsListening(false);
                        setIsProcessing(true);
                        onStateChange?.('processing');
                        const blob = new Blob(chunksRef.current, {
                            type: mimeType
                        });
                        const reader = new FileReader();
                        reader.onloadend = ({
                            "useVoiceInput.useCallback[startGeminiRecording]": async ()=>{
                                const base64Audio = reader.result;
                                try {
                                    // Create new AbortController for this request
                                    abortControllerRef.current = new AbortController();
                                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$64a6f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["transcribeAudio"])(base64Audio, mimeType);
                                    // Check if aborted
                                    if (abortControllerRef.current?.signal.aborted) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('Transcription cancelled by user', {
                                            component: 'useVoiceInput'
                                        });
                                        return;
                                    }
                                    if (result.success && result.text) {
                                        setTranscript(result.text);
                                        onTranscript?.(result.text);
                                        setError(null);
                                    } else {
                                        throw new Error(result.error || 'Error desconocido');
                                    }
                                } catch (err) {
                                    const hasSpeechRecognition = !!getSpeechRecognition();
                                    if (hasSpeechRecognition) {
                                        const errorMessage = err instanceof Error ? err.message : String(err);
                                        const userFriendlyError = simplifyGeminiError(errorMessage);
                                        setError(userFriendlyError);
                                        onError?.(userFriendlyError);
                                        setMode('native');
                                    } else {
                                        const errorMsg = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].BROWSER_NOT_SUPPORTED;
                                        setError(errorMsg);
                                        onError?.(errorMsg);
                                    }
                                }
                                setIsProcessing(false);
                                onStateChange?.('idle');
                                streamRef.current?.getTracks().forEach({
                                    "useVoiceInput.useCallback[startGeminiRecording]": (track)=>track.stop()
                                }["useVoiceInput.useCallback[startGeminiRecording]"]);
                                streamRef.current = null;
                            }
                        })["useVoiceInput.useCallback[startGeminiRecording]"];
                        reader.readAsDataURL(blob);
                    }
                })["useVoiceInput.useCallback[startGeminiRecording]"];
                recorder.start();
                setIsListening(true);
                onStateChange?.('listening');
                setError(null);
            } catch (err) {
                setMode('native');
                startNativeListening();
            }
        }
    }["useVoiceInput.useCallback[startGeminiRecording]"], [
        onTranscript,
        onError,
        onStateChange
    ]);
    const stopGeminiRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceInput.useCallback[stopGeminiRecording]": ()=>{
            // Cancel any pending transcription
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
                abortControllerRef.current = null;
            }
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
        }
    }["useVoiceInput.useCallback[stopGeminiRecording]"], []);
    // --- NATIVE Logic (Web Speech API) ---
    const startNativeListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceInput.useCallback[startNativeListening]": ()=>{
            setError(null);
            const SpeechRecognition = getSpeechRecognition();
            if (!SpeechRecognition) {
                const errorMsg = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].BROWSER_NOT_SUPPORTED;
                setError(errorMsg);
                onError?.(errorMsg);
                return;
            }
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.abort();
                } catch  {
                // Ignore
                }
            }
            let didStart = false;
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = language;
            recognitionRef.current = recognition;
            recognition.onstart = ({
                "useVoiceInput.useCallback[startNativeListening]": ()=>{
                    didStart = true;
                    setIsListening(true);
                    onStateChange?.('listening');
                    setError(null);
                }
            })["useVoiceInput.useCallback[startNativeListening]"];
            // Improved: Rebuild transcript from scratch to avoid duplicates
            recognition.onresult = ({
                "useVoiceInput.useCallback[startNativeListening]": (event)=>{
                    let fullTranscript = '';
                    for(let i = 0; i < event.results.length; i++){
                        if (event.results[i].isFinal) {
                            fullTranscript += event.results[i][0].transcript;
                        } else {
                            // Include interim for real-time feel
                            fullTranscript += event.results[i][0].transcript;
                        }
                    }
                    if (fullTranscript) {
                        setTranscript(fullTranscript);
                        onTranscript?.(fullTranscript);
                    }
                }
            })["useVoiceInput.useCallback[startNativeListening]"];
            recognition.onerror = ({
                "useVoiceInput.useCallback[startNativeListening]": (event)=>{
                    // Ignore 'no-speech' which fires randomly
                    if (event.error === 'no-speech') return;
                    if (event.error === 'not-allowed') {
                        setError(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].PERMISSION_DENIED);
                        onError?.(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].PERMISSION_DENIED);
                    } else if (event.error !== 'aborted') {
                        if (!didStart) {
                            const errorMsg = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].BROWSER_NOT_SUPPORTED;
                            setError(errorMsg);
                            onError?.(errorMsg);
                        } else {
                            setError(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].VOICE_ERROR_PREFIX} ${event.error}`);
                            onError?.(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].VOICE_ERROR_PREFIX} ${event.error}`);
                        }
                    }
                    setIsListening(false);
                    onStateChange?.('idle');
                }
            })["useVoiceInput.useCallback[startNativeListening]"];
            recognition.onend = ({
                "useVoiceInput.useCallback[startNativeListening]": ()=>{
                    if (!didStart) {
                        const errorMsg = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].BROWSER_NOT_SUPPORTED;
                        setError(errorMsg);
                        onError?.(errorMsg);
                    }
                    setIsListening(false);
                    onStateChange?.('idle');
                }
            })["useVoiceInput.useCallback[startNativeListening]"];
            try {
                recognition.start();
            } catch (e) {
                const errorMsg = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2f$messages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_MESSAGES"].BROWSER_NOT_SUPPORTED;
                setError(errorMsg);
                onError?.(errorMsg);
            }
        }
    }["useVoiceInput.useCallback[startNativeListening]"], [
        language,
        onTranscript,
        onError,
        onStateChange
    ]);
    const stopNativeListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceInput.useCallback[stopNativeListening]": ()=>{
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch  {
                // Ignore
                }
            }
        }
    }["useVoiceInput.useCallback[stopNativeListening]"], []);
    // --- Master Control ---
    const toggleListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceInput.useCallback[toggleListening]": ()=>{
            if (isProcessing) return;
            if (isListening) {
                if (mode === 'gemini') {
                    stopGeminiRecording();
                } else {
                    stopNativeListening();
                }
            } else {
                setTranscript('');
                if (mode === 'gemini') {
                    startGeminiRecording();
                } else {
                    startNativeListening();
                }
            }
        }
    }["useVoiceInput.useCallback[toggleListening]"], [
        isListening,
        isProcessing,
        mode,
        startGeminiRecording,
        stopGeminiRecording,
        startNativeListening,
        stopNativeListening
    ]);
    const resetTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceInput.useCallback[resetTranscript]": ()=>setTranscript('')
    }["useVoiceInput.useCallback[resetTranscript]"], []);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceInput.useEffect": ()=>{
            return ({
                "useVoiceInput.useEffect": ()=>{
                    if (mediaRecorderRef.current?.state !== 'inactive') {
                        try {
                            mediaRecorderRef.current?.stop();
                        } catch  {
                        // Ignore
                        }
                    }
                    streamRef.current?.getTracks().forEach({
                        "useVoiceInput.useEffect": (track)=>track.stop()
                    }["useVoiceInput.useEffect"]);
                    if (recognitionRef.current) {
                        try {
                            recognitionRef.current.abort();
                        } catch  {
                        // Ignore
                        }
                    }
                }
            })["useVoiceInput.useEffect"];
        }
    }["useVoiceInput.useEffect"], []);
    return {
        isListening,
        isProcessing,
        transcript,
        isSupported,
        mode,
        toggleListening,
        resetTranscript,
        error
    };
}
_s(useVoiceInput, "IEf+bsH6FuO7aUcmPEHB+1VQBng=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/types/work-order-validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validación de Work Orders
 *
 * Schemas Zod para validación y sanitización de payloads
 * de creación de Work Orders. Garantiza que los datos
 * enviados al backend cumplan con el contrato esperado.
 * @example
 * ```typescript
 * import {
 *   CreateWorkOrderPayloadSchema,
 *   sanitizeWorkOrderCommand
 * } from '@/app/types/work-order-validation';
 *
 * const payload = sanitizeWorkOrderCommand(voiceCommand, userId);
 * ```
 */ __turbopack_context__.s([
    "CreateWorkOrderPayloadSchema",
    ()=>CreateWorkOrderPayloadSchema,
    "UpdateWorkOrderPayloadSchema",
    ()=>UpdateWorkOrderPayloadSchema,
    "WorkOrderPriorityPayload",
    ()=>WorkOrderPriorityPayload,
    "sanitizeWorkOrderCommand",
    ()=>sanitizeWorkOrderCommand,
    "validateCreatePayload",
    ()=>validateCreatePayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const WorkOrderPriorityPayload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'low',
    'normal',
    'high',
    'urgent'
]);
const CreateWorkOrderPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** Equipo afectado (requerido, 1-100 caracteres) */ equipment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'El equipo es requerido').max(100),
    /** Ubicación del equipo (requerido, 1-100 caracteres) */ location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'La ubicación es requerida').max(100),
    /** Prioridad de la orden (default: normal) */ priority: WorkOrderPriorityPayload.default('normal'),
    /** Descripción del problema o trabajo (max 1000 caracteres) */ description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(1000).optional(),
    /** Técnico asignado (opcional) */ assignee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    /** Metadata del comando de voz original */ voiceMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        /** Transcripción original */ rawTranscript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        /** Nivel de confianza de la transcripción */ confidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        /** Timestamp de cuando se procesó */ timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
    })
});
const UpdateWorkOrderPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /** Nueva prioridad */ priority: WorkOrderPriorityPayload.optional(),
    /** Nuevo técnico asignado */ assignee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    /** Nueva descripción */ description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(1000).optional(),
    /** Nuevo estado */ status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'pending',
        'in_progress',
        'completed',
        'cancelled'
    ]).optional()
});
function sanitizeWorkOrderCommand(command, _userId) {
    return CreateWorkOrderPayloadSchema.parse({
        equipment: command.equipment,
        location: command.location,
        priority: mapPriorityToPayload(command.priority),
        description: command.description,
        assignee: command.assignee,
        voiceMetadata: {
            rawTranscript: command.rawTranscript,
            confidence: command.confidence,
            timestamp: new Date().toISOString()
        }
    });
}
/**
 * Mapea prioridad del comando de voz al formato del backend
 * El schema de voz usa 'urgent' pero el backend podría esperar 'high'
 * @param priority
 */ function mapPriorityToPayload(priority) {
    if (!priority) return 'normal';
    // Mapear si es necesario (actualmente son iguales)
    return priority;
}
function validateCreatePayload(data) {
    const result = CreateWorkOrderPayloadSchema.safeParse(data);
    if (result.success) {
        return {
            success: true,
            data: result.data
        };
    }
    const errors = result.error.issues.map((issue)=>{
        const field = issue.path.join('.');
        return `${field}: ${issue.message}`;
    });
    return {
        success: false,
        errors
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/services/contracts/work-order-service.contracts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contratos del Servicio de Órdenes de Trabajo
 *
 * Define interfaces, tipos y errores personalizados para el
 * WorkOrderService. Permite inyección completa de dependencias
 * para testing y provee error handling tipado.
 * @example
 * ```typescript
 * import type {
 *   WorkOrderServiceConfig,
 *   WorkOrderServiceDeps,
 *   RequestContext,
 * } from './work-order-service.contracts';
 *
 * const service = new WorkOrderService(config, deps);
 * const result = await service.create(command, context);
 * ```
 */ /**
 * Interfaz del Logger para inyección de dependencias
 * Compatible con app/lib/logger.ts
 */ __turbopack_context__.s([
    "NetworkError",
    ()=>NetworkError,
    "RateLimitError",
    ()=>RateLimitError,
    "ServiceUnavailableError",
    ()=>ServiceUnavailableError,
    "TimeoutError",
    ()=>TimeoutError,
    "ValidationError",
    ()=>ValidationError,
    "WorkOrderError",
    ()=>WorkOrderError
]);
class WorkOrderError extends Error {
    code;
    recoverable;
    statusCode;
    correlationId;
    /**
   *
   * @param message
   * @param code
   * @param recoverable
   * @param statusCode
   * @param correlationId
   */ constructor(message, /** Código de error estandarizado */ code, /** Si el error puede recuperarse con retry */ recoverable, /** Status HTTP original (si aplica) */ statusCode, /** ID de correlación para tracing */ correlationId){
        super(message), this.code = code, this.recoverable = recoverable, this.statusCode = statusCode, this.correlationId = correlationId;
        this.name = 'WorkOrderError';
        // Mantener stack trace correcto en V8
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, WorkOrderError);
        }
    }
}
class RateLimitError extends WorkOrderError {
    retryAfter;
    /**
   *
   * @param message
   * @param retryAfter
   */ constructor(message, /** Segundos a esperar antes de reintentar */ retryAfter){
        super(message, 'RATE_LIMITED', true, 429), this.retryAfter = retryAfter;
        this.name = 'RateLimitError';
    }
}
class TimeoutError extends WorkOrderError {
    /**
   *
   * @param message
   */ constructor(message){
        super(message, 'TIMEOUT', true);
        this.name = 'TimeoutError';
    }
}
class ServiceUnavailableError extends WorkOrderError {
    /**
   *
   * @param message
   */ constructor(message){
        super(message, 'SERVICE_UNAVAILABLE', true, 503);
        this.name = 'ServiceUnavailableError';
    }
}
class ValidationError extends WorkOrderError {
    fieldErrors;
    /**
   *
   * @param message
   * @param fieldErrors
   */ constructor(message, /** Errores de validación específicos por campo */ fieldErrors){
        super(message, 'VALIDATION_ERROR', false, 400), this.fieldErrors = fieldErrors;
        this.name = 'ValidationError';
    }
}
class NetworkError extends WorkOrderError {
    /**
   *
   * @param message
   */ constructor(message){
        super(message, 'NETWORK_ERROR', true);
        this.name = 'NetworkError';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/services/work-order-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Servicio de Órdenes de Trabajo
 *
 * Cliente HTTP para el API REST de Work Orders del backend.
 * Implementa inyección de dependencias completa para testing,
 * retry logic con backoff exponencial, y error handling tipado.
 * @example
 * ```typescript
 * import { workOrderService } from '@/app/lib/services/work-order-service';
 *
 * const result = await workOrderService.create(voiceCommand, {
 *   userId: 'user-123',
 *   correlationId: crypto.randomUUID(),
 * });
 *
 * if (result.success) {
 *   navigate(result.resourceUrl);
 * }
 * ```
 */ __turbopack_context__.s([
    "WorkOrderService",
    ()=>WorkOrderService,
    "_resetWorkOrderService",
    ()=>_resetWorkOrderService,
    "getWorkOrderService",
    ()=>getWorkOrderService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$work$2d$order$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/work-order-validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/contracts/work-order-service.contracts.ts [app-client] (ecmascript)");
;
;
;
class WorkOrderService {
    config;
    deps;
    /**
   * Crea una instancia del servicio
   * @param config - Configuración del servicio
   * @param deps - Dependencias inyectables (para testing)
   * @throws Error si la configuración es inválida
   */ constructor(config, deps){
        // Validación de config en constructor (fail-fast)
        if (!config.baseUrl) {
            throw new Error('baseUrl es requerido');
        }
        if (!config.apiKey) {
            throw new Error('apiKey es requerido');
        }
        if (config.timeoutMs <= 0) {
            throw new Error('timeoutMs debe ser > 0');
        }
        if (config.maxRetries < 0) {
            throw new Error('maxRetries debe ser >= 0');
        }
        this.config = config;
        this.deps = {
            fetchImpl: deps?.fetchImpl ?? fetch,
            loggerImpl: deps?.loggerImpl ?? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"],
            cryptoImpl: deps?.cryptoImpl ?? crypto,
            clockImpl: deps?.clockImpl,
            // Timer inyectable para tests con fake timers
            timerImpl: deps?.timerImpl ?? {
                setTimeout: (cb, ms)=>globalThis.setTimeout(cb, ms),
                clearTimeout: (id)=>globalThis.clearTimeout(id)
            },
            // Factory de AbortController para tests
            abortFactory: deps?.abortFactory ?? {
                create: ()=>{
                    const controller = new AbortController();
                    return {
                        controller,
                        timeoutId: null,
                        abort: ()=>controller.abort()
                    };
                }
            }
        };
    }
    /**
   * Crea una orden de trabajo desde un comando de voz validado
   *
   * Flujo:
   * 1. Validar y sanitizar comando con Zod
   * 2. Generar correlation ID si no existe
   * 3. Intentar request con retry logic
   * 4. Loggear resultado con contexto completo
   * @param command - Comando de voz parseado por Gemini
   * @param context - Contexto del usuario actual
   * @returns Resultado con resourceId para navegación
   * @throws WorkOrderError si falla tras todos los reintentos
   */ async create(command, context) {
        const correlationId = context.correlationId || this.deps.cryptoImpl.randomUUID();
        const startTime = this.getCurrentTime();
        this.deps.loggerImpl.info('WorkOrder creation started', {
            correlationId,
            userId: context.userId,
            action: command.action,
            equipment: command.equipment
        });
        // 🎭 MODO DEMO: Simula respuestas sin backend real
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEMO_MODE === 'true') {
            this.deps.loggerImpl.info('Demo mode enabled - simulating backend response', {
                correlationId
            });
            // Simular delay de red (1.5-2.5 segundos)
            await this.sleep(1500 + Math.random() * 1000);
            const duration = this.getCurrentTime() - startTime;
            // Simular éxito (90% de las veces) o error (10%)
            if (Math.random() > 0.1) {
                const demoResult = {
                    success: true,
                    message: `Orden de trabajo creada exitosamente (Demo)`,
                    resourceId: `demo-wo-${Date.now()}`,
                    resourceUrl: `/work-orders/demo-wo-${Date.now()}`,
                    metadata: {
                        duration,
                        demo: true,
                        equipment: command.equipment,
                        priority: command.priority
                    }
                };
                this.deps.loggerImpl.info('WorkOrder created successfully (Demo)', {
                    correlationId,
                    resourceId: demoResult.resourceId,
                    duration
                });
                return demoResult;
            } else {
                // Simular error ocasional
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]('Error simulado en modo demo (10% probabilidad)');
            }
        }
        try {
            // Validar y sanitizar input
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$work$2d$order$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeWorkOrderCommand"])(command, context.userId);
            // Ejecutar con retry logic
            const result = await this.executeWithRetry(()=>this.requestCreate(payload, correlationId), correlationId);
            const duration = this.getCurrentTime() - startTime;
            this.deps.loggerImpl.info('WorkOrder created successfully', {
                correlationId,
                userId: context.userId,
                resourceId: result.resourceId,
                duration
            });
            return {
                ...result,
                metadata: {
                    ...result.metadata,
                    duration
                }
            };
        } catch (error) {
            const duration = this.getCurrentTime() - startTime;
            this.deps.loggerImpl.error('WorkOrder creation failed', error, {
                correlationId,
                userId: context.userId,
                duration,
                equipment: command.equipment
            });
            throw error;
        }
    }
    /**
   * Request interno con timeout TESTEABLE
   * Usa deps inyectadas en lugar de globals
   * @param payload
   * @param correlationId
   */ async requestCreate(payload, correlationId) {
        // Crear abort context con factory inyectada
        const abortContext = this.deps.abortFactory.create();
        // Programar timeout con timer inyectado (respeta fake timers)
        abortContext.timeoutId = this.deps.timerImpl.setTimeout(()=>{
            abortContext.abort();
        }, this.config.timeoutMs);
        try {
            const response = await this.deps.fetchImpl(`${this.config.baseUrl}/api/work-orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.config.apiKey}`,
                    'X-Correlation-ID': correlationId
                },
                body: JSON.stringify(payload),
                signal: abortContext.controller.signal
            });
            if (!response.ok) {
                throw await this.parseErrorResponse(response, correlationId);
            }
            const data = await response.json();
            return this.normalizeSuccessResponse(data);
        } catch (error) {
            // Manejar abort por timeout
            if (error instanceof DOMException && error.name === 'AbortError') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"](`Request exceeded ${this.config.timeoutMs}ms timeout`);
            }
            // Manejar errores de red
            if (error instanceof TypeError && error.message.includes('fetch')) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkError"](`Network error: ${error.message}`);
            }
            throw error;
        } finally{
            // Limpiar timeout con timer inyectado
            if (abortContext.timeoutId !== null) {
                this.deps.timerImpl.clearTimeout(abortContext.timeoutId);
            }
        }
    }
    /**
   * Parsea respuestas de error del backend
   * Convierte HTTP status codes a errores tipados
   * @param response
   * @param correlationId
   */ async parseErrorResponse(response, correlationId) {
        const errorData = await response.json().catch(()=>({}));
        switch(response.status){
            case 400:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOrderError"](errorData.message || 'Invalid request data', 'VALIDATION_ERROR', false, 400, correlationId);
            case 401:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOrderError"](errorData.message || 'Authentication required', 'UNAUTHORIZED', false, 401, correlationId);
            case 403:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOrderError"](errorData.message || 'Insufficient permissions', 'FORBIDDEN', false, 403, correlationId);
            case 404:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOrderError"](errorData.message || 'Resource not found', 'NOT_FOUND', false, 404, correlationId);
            case 429:
                {
                    const retryAfter = parseInt(response.headers.get('Retry-After') || '60', 10);
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RateLimitError"](errorData.message || 'Rate limit exceeded', retryAfter);
                }
            case 503:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"](errorData.message || 'Service temporarily unavailable');
            default:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOrderError"](`HTTP ${response.status}: ${errorData.message || 'Unknown error'}`, 'INTERNAL_ERROR', response.status >= 500, response.status, correlationId);
        }
    }
    /**
   * Normaliza respuesta exitosa del backend
   * @param data
   */ normalizeSuccessResponse(data) {
        return {
            success: true,
            message: data.message || 'Work order created successfully',
            resourceId: data.id || data.workOrderId,
            resourceUrl: data.url || `/work-orders/${data.id}`,
            metadata: data.metadata
        };
    }
    /**
   * Ejecuta request con retry logic y backoff exponencial
   *
   * Reintentos solo para errores recuperables:
   * - 429 Rate Limit (respeta Retry-After)
   * - 503 Service Unavailable
   * - Timeouts
   * - Errores de red
   * @param fn
   * @param correlationId
   */ async executeWithRetry(fn, correlationId) {
        let lastError;
        for(let attempt = 1; attempt <= this.config.maxRetries; attempt++){
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                const isLastAttempt = attempt === this.config.maxRetries;
                // Determinar si es recuperable
                const isRecoverable = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOrderError"] && error.recoverable;
                if (!isRecoverable || isLastAttempt) {
                    throw error;
                }
                // Calcular backoff (respeta Retry-After si es RateLimitError)
                let backoffMs;
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RateLimitError"]) {
                    backoffMs = error.retryAfter * 1000;
                } else {
                    backoffMs = Math.min(Math.pow(2, attempt) * 1000, 30000); // Max 30s
                }
                this.deps.loggerImpl.warn('Retrying request', {
                    correlationId,
                    attempt,
                    maxRetries: this.config.maxRetries,
                    backoffMs,
                    errorCode: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$contracts$2f$work$2d$order$2d$service$2e$contracts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkOrderError"] ? error.code : 'UNKNOWN'
                });
                await this.sleep(backoffMs);
            }
        }
        throw lastError;
    }
    /**
   * Consulta estado de una orden existente
   * @param orderId
   * @param context
   */ async checkStatus(orderId, context) {
        const correlationId = context.correlationId || this.deps.cryptoImpl.randomUUID();
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), this.config.timeoutMs);
            const response = await this.deps.fetchImpl(`${this.config.baseUrl}/api/work-orders/${orderId}/status`, {
                headers: {
                    Authorization: `Bearer ${this.config.apiKey}`,
                    'X-Correlation-ID': correlationId
                },
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw await this.parseErrorResponse(response, correlationId);
            }
            const data = await response.json();
            return {
                success: true,
                message: `Status: ${data.status}`,
                resourceId: orderId,
                metadata: data
            };
        } catch (error) {
            this.deps.loggerImpl.error('Failed to check status', error, {
                correlationId,
                orderId
            });
            throw error;
        }
    }
    /**
   * Lista órdenes pendientes
   * @param context
   */ async listPending(context) {
        const correlationId = context.correlationId || this.deps.cryptoImpl.randomUUID();
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), this.config.timeoutMs);
            const response = await this.deps.fetchImpl(`${this.config.baseUrl}/api/work-orders?status=pending&userId=${context.userId}`, {
                headers: {
                    Authorization: `Bearer ${this.config.apiKey}`,
                    'X-Correlation-ID': correlationId
                },
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw await this.parseErrorResponse(response, correlationId);
            }
            const data = await response.json();
            return {
                success: true,
                message: `Found ${data.items?.length || 0} pending orders`,
                metadata: {
                    items: data.items,
                    total: data.total
                }
            };
        } catch (error) {
            this.deps.loggerImpl.error('Failed to list pending orders', error, {
                correlationId
            });
            throw error;
        }
    }
    /**
   * Obtiene el tiempo actual (inyectable para testing)
   */ getCurrentTime() {
        return this.deps.clockImpl?.now() ?? Date.now();
    }
    /**
   * Sleep helper TESTEABLE
   * Usa timer inyectado (respeta fake timers)
   * @param ms
   */ sleep(ms) {
        return new Promise((resolve)=>{
            this.deps.timerImpl.setTimeout(()=>resolve(), ms);
        });
    }
}
/**
 * Singleton instance (lazy initialization)
 */ let _workOrderServiceInstance = null;
function getWorkOrderService() {
    if (!_workOrderServiceInstance) {
        const isDemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEMO_MODE === 'true';
        _workOrderServiceInstance = new WorkOrderService({
            baseUrl: ("TURBOPACK compile-time value", "http://localhost:8000/api") || (isDemo ? 'https://demo.local' : ''),
            apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.BACKEND_API_KEY || (isDemo ? 'demo-key' : ''),
            timeoutMs: 30000,
            maxRetries: 3
        });
    }
    return _workOrderServiceInstance;
}
function _resetWorkOrderService() {
    _workOrderServiceInstance = null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/use-work-order-commands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hook de Integración: useWorkOrderCommands
 *
 * Gestiona la ejecución de comandos de voz para Work Orders
 * con state machine, tracking de progreso y cancelación.
 * @example
 * ```tsx
 * const { executeCommand, state, reset, cancel, isExecuting } = useWorkOrderCommands();
 *
 * // Ejecutar comando
 * const handleConfirm = async (command: VoiceWorkOrderCommand) => {
 *   const result = await executeCommand(command);
 *   if (result.success) {
 *     toast.success(result.message);
 *   }
 * };
 * ```
 */ __turbopack_context__.s([
    "useWorkOrderCommands",
    ()=>useWorkOrderCommands
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$work$2d$order$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/work-order-service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
// ============================================
// Constants
// ============================================
const INITIAL_STATE = {
    status: 'idle',
    result: null,
    error: null,
    startedAt: null,
    duration: null,
    attemptCount: 0
};
// ============================================
// Helper Functions
// ============================================
/**
 * Obtiene el userId del usuario actual
 * En producción esto vendría de la sesión/auth
 */ function getUserId() {
    // TODO: Integrar con sistema de autenticación real
    // Por ahora usamos un ID temporal basado en sessionStorage
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let userId = sessionStorage.getItem('gima_user_id');
    if (!userId) {
        userId = `user_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
        sessionStorage.setItem('gima_user_id', userId);
    }
    return userId;
}
/**
 * Genera un correlation ID único para tracing
 */ function generateCorrelationId() {
    return `cmd_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}
function useWorkOrderCommands() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_STATE);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    /**
   * Resetea el estado a idle
   */ const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWorkOrderCommands.useCallback[reset]": ()=>{
            setState(INITIAL_STATE);
        }
    }["useWorkOrderCommands.useCallback[reset]"], []);
    /**
   * Cancela la ejecución actual
   */ const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWorkOrderCommands.useCallback[cancel]": ()=>{
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
                abortControllerRef.current = null;
            }
            setState({
                "useWorkOrderCommands.useCallback[cancel]": (prev)=>({
                        ...prev,
                        status: 'idle',
                        error: new Error('Ejecución cancelada por el usuario')
                    })
            }["useWorkOrderCommands.useCallback[cancel]"]);
        }
    }["useWorkOrderCommands.useCallback[cancel]"], []);
    /**
   * Ejecuta un comando de voz
   */ const executeCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWorkOrderCommands.useCallback[executeCommand]": async (command)=>{
            // Crear nuevo AbortController para esta ejecución
            abortControllerRef.current = new AbortController();
            const startTime = Date.now();
            // Transición: idle → validating
            setState({
                status: 'validating',
                result: null,
                error: null,
                startedAt: startTime,
                duration: null,
                attemptCount: 0
            });
            try {
                // Transición: validating → executing
                if (isMountedRef.current) {
                    setState({
                        "useWorkOrderCommands.useCallback[executeCommand]": (prev)=>({
                                ...prev,
                                status: 'executing',
                                attemptCount: prev.attemptCount + 1
                            })
                    }["useWorkOrderCommands.useCallback[executeCommand]"]);
                }
                // Obtener servicio y ejecutar
                const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$work$2d$order$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWorkOrderService"])();
                const context = {
                    userId: getUserId(),
                    correlationId: generateCorrelationId()
                };
                const result = await service.create(command, context);
                const duration = Date.now() - startTime;
                // Transición: executing → succeeded
                if (isMountedRef.current) {
                    setState({
                        status: 'succeeded',
                        result,
                        error: null,
                        startedAt: startTime,
                        duration,
                        attemptCount: 1
                    });
                }
                return result;
            } catch (error) {
                const duration = Date.now() - startTime;
                // Transición: executing → failed
                if (isMountedRef.current) {
                    setState({
                        "useWorkOrderCommands.useCallback[executeCommand]": (prev)=>({
                                ...prev,
                                status: 'failed',
                                error: error,
                                duration
                            })
                    }["useWorkOrderCommands.useCallback[executeCommand]"]);
                }
                // Re-throw para que el llamador pueda manejar
                throw error;
            } finally{
                abortControllerRef.current = null;
            }
        }
    }["useWorkOrderCommands.useCallback[executeCommand]"], []);
    // Propiedades derivadas
    const isExecuting = state.status === 'executing' || state.status === 'validating' || state.status === 'retrying';
    const isIdle = state.status === 'idle';
    const hasError = state.status === 'failed' && state.error !== null;
    const isSuccess = state.status === 'succeeded' && state.result !== null;
    return {
        state,
        executeCommand,
        reset,
        cancel,
        isExecuting,
        isIdle,
        hasError,
        isSuccess
    };
}
_s(useWorkOrderCommands, "WhK4hs7Y7W3/krTt7+NvAOTzpAU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/hooks/use-voice-navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceNavigation",
    ()=>useVoiceNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useVoiceNavigation() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceNavigation.useCallback[navigate]": (command)=>{
            let path = command.path;
            if (!path && command.screen) {
                // Mapping logic
                const screen = command.screen.toLowerCase();
                // Home / Dashboard
                if ([
                    'home',
                    'inicio',
                    'dashboard',
                    'chat',
                    'monitor'
                ].some({
                    "useVoiceNavigation.useCallback[navigate]": (s)=>screen.includes(s)
                }["useVoiceNavigation.useCallback[navigate]"])) {
                    path = '/';
                } else if ([
                    'tools',
                    'herramientas',
                    'utilidades',
                    'aplicaciones'
                ].some({
                    "useVoiceNavigation.useCallback[navigate]": (s)=>screen.includes(s)
                }["useVoiceNavigation.useCallback[navigate]"])) {
                    path = '/tools';
                } else if ([
                    'checklist',
                    'lista',
                    'creador',
                    'plantilla'
                ].some({
                    "useVoiceNavigation.useCallback[navigate]": (s)=>screen.includes(s)
                }["useVoiceNavigation.useCallback[navigate]"])) {
                    path = '/tools/checklist-builder';
                } else if ([
                    'summary',
                    'summaries',
                    'resumen',
                    'reporte',
                    'actividad',
                    'historial'
                ].some({
                    "useVoiceNavigation.useCallback[navigate]": (s)=>screen.includes(s)
                }["useVoiceNavigation.useCallback[navigate]"])) {
                    path = '/tools/activity-summaries';
                } else if ([
                    'closeout',
                    'cierre',
                    'nota',
                    'modal'
                ].some({
                    "useVoiceNavigation.useCallback[navigate]": (s)=>screen.includes(s)
                }["useVoiceNavigation.useCallback[navigate]"])) {
                    // Work Order Closeout is just a modal in /tools normally, but let's send to tools
                    path = '/tools';
                } else if ([
                    'setting',
                    'configuracion',
                    'ajuste'
                ].some({
                    "useVoiceNavigation.useCallback[navigate]": (s)=>screen.includes(s)
                }["useVoiceNavigation.useCallback[navigate]"])) {
                    path = '/settings'; // Assuming it exists or will handle 404 gracefully
                } else {
                    // Default fallback if unknown screen
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Unknown screen requested via voice', {
                        screen
                    });
                    return {
                        success: false,
                        message: `Pantalla no encontrada: ${command.screen}`
                    };
                }
            }
            if (path) {
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Navigating via voice command', {
                    path,
                    originalScreen: command.screen
                });
                router.push(path);
                return {
                    success: true,
                    message: `Navegando a ${command.screen || 'destino'}`
                };
            }
            return {
                success: false,
                message: 'No se pudo determinar la ruta'
            };
        }
    }["useVoiceNavigation.useCallback[navigate]"], [
        router
    ]);
    return {
        navigate
    };
}
_s(useVoiceNavigation, "KMClE0WrqkE+YDOYBchDPbaygVc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/hooks/use-voice-system.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceSystem",
    ()=>useVoiceSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useVoiceSystem() {
    _s();
    const { setTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const executeSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceSystem.useCallback[executeSystem]": (command)=>{
            if (command.action === 'theme_mode') {
                // Si no hay theme definido (system), asumir light o dark based system query?
                // next-themes maneja esto, pero toggling desde 'system' es tricky.
                // Asumiremos toggle explicito entre light y dark.
                const current = theme === 'system' ? 'light' : theme;
                const newTheme = current === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Theme toggled via voice command', {
                    from: theme,
                    to: newTheme
                });
                return {
                    success: true,
                    message: `Tema cambiado a ${newTheme === 'dark' ? 'oscuro' : 'claro'}`
                };
            }
            if (command.action === 'logout') {
                // Mock logout
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Logout requested via voice command');
                return {
                    success: true,
                    message: 'Sesión cerrada (Simulado)'
                };
            }
            return {
                success: false,
                message: 'Acción de sistema no soportada'
            };
        }
    }["useVoiceSystem.useCallback[executeSystem]"], [
        setTheme,
        theme
    ]);
    return {
        executeSystem
    };
}
_s(useVoiceSystem, "UMsE2l9K6XzhhCkhzOIUSWc+3z0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/hooks/use-voice-command-flow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceCommandFlow",
    ()=>useVoiceCommandFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/actions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$17d305__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:17d305 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$voice$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/use-voice-input.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$work$2d$order$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/use-work-order-commands.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/hooks/use-voice-navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/hooks/use-voice-system.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function useVoiceCommandFlow({ onCommandExecuted, onError, minConfidence = 0.7, context }) {
    _s();
    const [flowState, setFlowState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [parsedCommand, setParsedCommand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [parseError, setParseError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Hook de ejecución de Work Orders
    const execution = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$work$2d$order$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkOrderCommands"])();
    const { executeCommand, reset: resetExecution } = execution;
    // Hooks de Navegación y Sistema
    const { navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceNavigation"])();
    const { executeSystem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSystem"])();
    const handleTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceCommandFlow.useCallback[handleTranscript]": async (transcript)=>{
            setFlowState('processing');
            setParseError(null);
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$17d305__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["executeVoiceCommand"])(transcript, {
                    minConfidence,
                    context
                });
                if (result.success && result.command) {
                    setParsedCommand(result.command);
                    setFlowState('preview');
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Voice command parsed successfully', {
                        component: 'useVoiceCommandFlow',
                        action: result.command.action,
                        confidence: result.command.confidence
                    });
                } else {
                    setParseError(result.error);
                    setFlowState('idle');
                    onError?.(result.error);
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Voice command parsing failed', {
                        component: 'useVoiceCommandFlow',
                        error: result.error,
                        code: result.code
                    });
                }
            } catch (err) {
                const errorMsg = err instanceof Error ? err.message : 'Error desconocido';
                setParseError(errorMsg);
                setFlowState('idle');
                onError?.(errorMsg);
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Voice command execution error', err instanceof Error ? err : new Error(errorMsg), {
                    component: 'useVoiceCommandFlow'
                });
            }
        }
    }["useVoiceCommandFlow.useCallback[handleTranscript]"], [
        minConfidence,
        context,
        onError
    ]);
    const handleStateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceCommandFlow.useCallback[handleStateChange]": (state)=>{
            if (state === 'listening') {
                setFlowState('listening');
                setParsedCommand(null);
                setParseError(null);
                resetExecution(); // Reset estado de ejecución anterior
            } else if (state === 'idle' && flowState === 'listening') {
                setFlowState('idle');
            }
        }
    }["useVoiceCommandFlow.useCallback[handleStateChange]"], [
        flowState,
        resetExecution
    ]);
    const voiceInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$voice$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceInput"])({
        onTranscript: handleTranscript,
        onError: onError,
        onStateChange: handleStateChange,
        language: 'es-ES'
    });
    const handleConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceCommandFlow.useCallback[handleConfirm]": async ()=>{
            if (!parsedCommand) return;
            // Navegación
            if (parsedCommand.type === 'navigation') {
                const result = navigate(parsedCommand);
                if (result.success) {
                    onCommandExecuted?.({
                        resourceId: 'nav-' + Date.now(),
                        message: result.message
                    });
                    setParsedCommand(null);
                    setFlowState('idle');
                } else {
                    setParseError(result.message);
                // Mantener estado en preview para reintentar o cancelar
                }
                return;
            }
            // Comandos de Sistema
            if (parsedCommand.type === 'system') {
                const result = executeSystem(parsedCommand);
                if (result.success) {
                    onCommandExecuted?.({
                        resourceId: 'sys-' + Date.now(),
                        message: result.message
                    });
                    setParsedCommand(null);
                    setFlowState('idle');
                } else {
                    setParseError(result.message);
                }
                return;
            }
            // Work Orders (Legacy Logic)
            if (parsedCommand.type === 'work_order') {
                setFlowState('executing');
                try {
                    const result = await executeCommand(parsedCommand);
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Work order created successfully', {
                        component: 'useVoiceCommandFlow',
                        resourceId: result.resourceId,
                        action: parsedCommand.action
                    });
                    // Notificar éxito
                    onCommandExecuted?.({
                        resourceId: result.resourceId,
                        message: result.message
                    });
                    // Limpiar estado después del éxito
                    setTimeout({
                        "useVoiceCommandFlow.useCallback[handleConfirm]": ()=>{
                            setParsedCommand(null);
                            setFlowState('idle');
                            resetExecution();
                        }
                    }["useVoiceCommandFlow.useCallback[handleConfirm]"], 2000);
                } catch (err) {
                    const errorMsg = err instanceof Error ? err.message : 'Error al ejecutar comando';
                    setParseError(errorMsg);
                    setFlowState('preview');
                    onError?.(errorMsg);
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Work order creation failed', err instanceof Error ? err : new Error(errorMsg), {
                        component: 'useVoiceCommandFlow',
                        action: parsedCommand.action
                    });
                }
            }
        }
    }["useVoiceCommandFlow.useCallback[handleConfirm]"], [
        parsedCommand,
        executeCommand,
        onCommandExecuted,
        onError,
        resetExecution,
        navigate,
        executeSystem
    ]);
    const handleCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceCommandFlow.useCallback[handleCancel]": ()=>{
            setParsedCommand(null);
            setParseError(null);
            setFlowState('idle');
            resetExecution();
        }
    }["useVoiceCommandFlow.useCallback[handleCancel]"], [
        resetExecution
    ]);
    const handleRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceCommandFlow.useCallback[handleRetry]": ()=>{
            setParsedCommand(null);
            setParseError(null);
            setFlowState('idle');
            resetExecution();
            // Start recording again after a brief delay
            setTimeout({
                "useVoiceCommandFlow.useCallback[handleRetry]": ()=>{
                    voiceInput.toggleListening();
                }
            }["useVoiceCommandFlow.useCallback[handleRetry]"], 100);
        }
    }["useVoiceCommandFlow.useCallback[handleRetry]"], [
        voiceInput,
        resetExecution
    ]);
    // Auto-cancel after 30 seconds of inactivity in preview
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceCommandFlow.useEffect": ()=>{
            let timer;
            if (flowState === 'preview' && parsedCommand) {
                timer = setTimeout({
                    "useVoiceCommandFlow.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Voice command timed out', {
                            action: parsedCommand.action
                        });
                        handleCancel();
                    }
                }["useVoiceCommandFlow.useEffect"], 30000);
            }
            return ({
                "useVoiceCommandFlow.useEffect": ()=>{
                    if (timer) clearTimeout(timer);
                }
            })["useVoiceCommandFlow.useEffect"];
        }
    }["useVoiceCommandFlow.useEffect"], [
        flowState,
        parsedCommand,
        handleCancel
    ]);
    return {
        flowState,
        parsedCommand,
        parseError,
        execution,
        voiceInput,
        handleConfirm,
        handleCancel,
        handleRetry
    };
}
_s(useVoiceCommandFlow, "PzkHiDMAXNMNlBJnYoGojzhmX+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$work$2d$order$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkOrderCommands"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSystem"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$voice$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceInput"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/voice-command-mode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceCommandMode",
    ()=>VoiceCommandMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$command$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/command-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$command$2d$status$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/command-status-indicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$command$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/hooks/use-voice-command-flow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/voice-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function VoiceCommandMode({ onCommandExecuted, onError, minConfidence = 0.7, context, className }) {
    _s();
    const { flowState, parsedCommand, parseError, execution, voiceInput, handleConfirm, handleCancel, handleRetry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$command$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceCommandFlow"])({
        onCommandExecuted,
        onError,
        minConfidence,
        context
    });
    const { isListening, isProcessing, isSupported, mode, toggleListening, error: voiceError } = voiceInput;
    const { state: executionState, isExecuting, hasError: executionHasError, isSuccess: executionSuccess } = execution;
    const displayError = parseError || voiceError;
    const showExecutionStatus = isExecuting || executionHasError || executionSuccess;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-3', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceButton"], {
                        isListening: isListening,
                        isProcessing: isProcessing || flowState === 'processing',
                        isSupported: isSupported,
                        mode: mode,
                        onClick: toggleListening,
                        disabled: flowState === 'confirming' || flowState === 'preview' || isExecuting
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    flowState === 'listening' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-blue-600 dark:text-blue-400 animate-pulse",
                        children: "Escuchando..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    flowState === 'processing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-amber-600 dark:text-amber-400",
                        children: "Procesando comando..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            showExecutionStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$command$2d$status$2d$indicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandStatusIndicator"], {
                status: executionState.status,
                message: executionState.result?.message || executionState.error?.message,
                duration: executionState.duration,
                compact: false
            }, void 0, false, {
                fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            displayError && flowState === 'idle' && !showExecutionStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded",
                children: displayError
            }, void 0, false, {
                fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            parsedCommand && (flowState === 'preview' || flowState === 'executing') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$command$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandPreview"], {
                command: parsedCommand,
                onConfirm: handleConfirm,
                onCancel: handleCancel,
                onRetry: handleRetry,
                isConfirming: isExecuting
            }, void 0, false, {
                fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/voice/voice-command-mode.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(VoiceCommandMode, "+3s528CkUdI9vub5E+KLWKOpf/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$hooks$2f$use$2d$voice$2d$command$2d$flow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceCommandFlow"]
    ];
});
_c = VoiceCommandMode;
var _c;
__turbopack_context__.k.register(_c, "VoiceCommandMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/voice/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ✅ Barrel export - SOLO para exportar hacia el exterior
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/voice-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$audio$2d$waveform$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/audio-waveform.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$command$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/command-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$command$2d$mode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/voice-command-mode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/constants.ts [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/app/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/app/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/shared/confirm-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmDialog",
    ()=>ConfirmDialog,
    "useConfirmDialog",
    ()=>useConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ConfirmDialog({ open, onOpenChange, title, description, confirmLabel = 'Confirmar', cancelLabel = 'Cancelar', onConfirm, variant = 'default', loading = false }) {
    const handleConfirm = ()=>{
        onConfirm();
        onOpenChange(false);
    };
    const handleCancel = ()=>{
        onOpenChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[425px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "gap-2 sm:gap-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleCancel,
                            disabled: loading,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-4 py-2 rounded-md font-medium transition-colors', 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600', 'text-gray-700 dark:text-gray-200', 'disabled:opacity-50 disabled:cursor-not-allowed'),
                            "aria-label": cancelLabel,
                            children: cancelLabel
                        }, void 0, false, {
                            fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleConfirm,
                            disabled: loading,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-4 py-2 rounded-md font-medium transition-colors', 'disabled:opacity-50 disabled:cursor-not-allowed', variant === 'destructive' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'),
                            "aria-label": confirmLabel,
                            autoFocus: true,
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "size-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    "Procesando..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this) : confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/shared/confirm-dialog.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/shared/confirm-dialog.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/shared/confirm-dialog.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c = ConfirmDialog;
function useConfirmDialog() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return {
        open: ()=>setOpen(true),
        close: ()=>setOpen(false),
        props: {
            open,
            onOpenChange: setOpen
        }
    };
}
_s(useConfirmDialog, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
var _c;
__turbopack_context__.k.register(_c, "ConfirmDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/config/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Validación y tipado de variables de entorno
__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
/**
 * envSchema - Esquema de validación Zod para variables de entorno
 *
 * Define las variables requeridas, sus formatos y valores por defecto.
 * Asegura que la aplicación falle rápido si falta configuración crítica.
 */ const envSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // API Keys (opcionales con validación condicional)
    GROQ_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default('').refine((val)=>!val || val.startsWith('gsk_'), {
        message: 'GROQ API key debe empezar con "gsk_" si se proporciona'
    }),
    GOOGLE_GENERATIVE_AI_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default('').refine((val)=>!val || val.startsWith('AIza'), {
        message: 'Google API key debe empezar con "AIza" si se proporciona'
    }),
    // Node Environment
    NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'development',
        'production',
        'test'
    ]).default('development'),
    // Backend Integration
    NEXT_PUBLIC_BACKEND_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    BACKEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('')),
    NEXT_PUBLIC_DEMO_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('false').transform((val)=>val === 'true'),
    // Persistence
    NEXT_PUBLIC_ENABLE_CHAT_PERSISTENCE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('false').transform((val)=>val === 'true')
});
const env = envSchema.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/use-persistent-chat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePersistentChat",
    ()=>usePersistentChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/react/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CHAT_STORAGE_KEY = 'gima_chat_history';
function usePersistentChat() {
    _s();
    const [visionResponse, setVisionResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Intentar cargar mensajes iniciales de localStorage si la persistencia está habilitada
    const getInitialMessages = ()=>{
        if (("TURBOPACK compile-time value", "object") === 'undefined' || !__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_ENABLE_CHAT_PERSISTENCE) return [];
        try {
            const stored = localStorage.getItem(CHAT_STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.error('Error loading chat history from localStorage', error);
        }
        return [];
    };
    const chat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])({
        api: '/api/chat',
        initialMessages: getInitialMessages()
    });
    const { messages, setMessages } = chat;
    // Sincronizar mensajes con localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePersistentChat.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_ENABLE_CHAT_PERSISTENCE) return;
            try {
                localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
            } catch (error) {
                console.error('Error saving chat history to localStorage', error);
            }
        }
    }["usePersistentChat.useEffect"], [
        messages
    ]);
    // Expose addToolOutput for client-side tool handling (e.g., crear_orden_trabajo)
    const addToolOutput = chat.addToolOutput;
    // Clear all in-memory history (and localStorage if enabled)
    const clearHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePersistentChat.useCallback[clearHistory]": ()=>{
            setMessages([]);
            setVisionResponse(null);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_ENABLE_CHAT_PERSISTENCE) {
                try {
                    localStorage.removeItem(CHAT_STORAGE_KEY);
                } catch (error) {
                    console.error('Error clearing chat history from localStorage', error);
                }
            }
        }
    }["usePersistentChat.useCallback[clearHistory]"], [
        setMessages
    ]);
    return {
        ...chat,
        // AI SDK v5 usa sendMessage en lugar de append
        sendMessage: chat.sendMessage ?? chat.append,
        reload: chat.reload ?? chat.regenerate,
        addToolOutput,
        visionResponse,
        setVisionResponse,
        clearHistory
    };
}
_s(usePersistentChat, "sZRDGJPDYeEjalUMPi86hugL364=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ai-elements/conversation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Conversation",
    ()=>Conversation,
    "ConversationContent",
    ()=>ConversationContent,
    "ConversationEmptyState",
    ()=>ConversationEmptyState,
    "ConversationScrollButton",
    ()=>ConversationScrollButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-stick-to-bottom/dist/StickToBottom.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Conversation = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StickToBottom"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex-1 overflow-y-hidden", className),
        initial: "smooth",
        resize: "smooth",
        role: "log",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/conversation.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Conversation;
const ConversationContent = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StickToBottom"].Content, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-8 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/conversation.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ConversationContent;
const ConversationEmptyState = ({ className, title = "No messages yet", description = "Start a conversation to see messages here", icon, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex size-full flex-col items-center justify-center gap-3 p-8 text-center", className),
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-muted-foreground",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/app/components/ai-elements/conversation.tsx",
                    lineNumber: 59,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium text-sm",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/conversation.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/conversation.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ai-elements/conversation.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/conversation.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ConversationEmptyState;
const ConversationScrollButton = ({ className, ...props })=>{
    _s();
    const { isAtBottom, scrollToBottom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickToBottomContext"])();
    const handleScrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ConversationScrollButton.useCallback[handleScrollToBottom]": ()=>{
            scrollToBottom();
        }
    }["ConversationScrollButton.useCallback[handleScrollToBottom]"], [
        scrollToBottom
    ]);
    return !isAtBottom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full", className),
        onClick: handleScrollToBottom,
        size: "icon",
        type: "button",
        variant: "outline",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__["ArrowDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/conversation.tsx",
            lineNumber: 96,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/conversation.tsx",
        lineNumber: 85,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConversationScrollButton, "M5z1bIsh+mPwJ1WgeNHNDYK3YfE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickToBottomContext"]
    ];
});
_c3 = ConversationScrollButton;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Conversation");
__turbopack_context__.k.register(_c1, "ConversationContent");
__turbopack_context__.k.register(_c2, "ConversationEmptyState");
__turbopack_context__.k.register(_c3, "ConversationScrollButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ai-elements/loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
;
;
const LoaderIcon = ({ size = 16 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        height: size,
        strokeLinejoin: "round",
        style: {
            color: "currentcolor"
        },
        viewBox: "0 0 16 16",
        width: size,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "Loader"
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/loader.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_2393_1490)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 0V4",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 18,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 16V12",
                        opacity: "0.5",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 19,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.29773 1.52783L5.64887 4.7639",
                        opacity: "0.9",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 25,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.7023 1.52783L10.3511 4.7639",
                        opacity: "0.1",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 31,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.7023 14.472L10.3511 11.236",
                        opacity: "0.4",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 37,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.29773 14.472L5.64887 11.236",
                        opacity: "0.6",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15.6085 5.52783L11.8043 6.7639",
                        opacity: "0.2",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 49,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0.391602 10.472L4.19583 9.23598",
                        opacity: "0.7",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 55,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15.6085 10.4722L11.8043 9.2361",
                        opacity: "0.3",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 61,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0.391602 5.52783L4.19583 6.7639",
                        opacity: "0.8",
                        stroke: "currentColor",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ai-elements/loader.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_2393_1490",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        fill: "white",
                        height: "16",
                        width: "16"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/loader.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/ai-elements/loader.tsx",
                    lineNumber: 75,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/loader.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ai-elements/loader.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LoaderIcon;
const Loader = ({ className, size = 16, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex animate-spin items-center justify-center", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoaderIcon, {
            size: size
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/loader.tsx",
            lineNumber: 94,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/loader.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Loader;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoaderIcon");
__turbopack_context__.k.register(_c1, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/app/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-quick-actions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ChatQuickActions — Botones de acción rápida para el chat
 *
 * Chips interactivos que aparecen en el empty state del chat.
 * Al hacer click, inyectan un prompt predefinido:
 * - Prompts completos se envían automáticamente
 * - Prompts con `formFields` muestran un formulario inline de validación
 * - Prompts abiertos (terminan en espacio, sin formFields) enfocan el input
 *
 * Incluye:
 * - QuickActionDataForm: Formulario inline liviano (patrón OrderApprovalCard)
 * - ToolsDropdown: Dropdown de herramientas para el input area
 */ __turbopack_context__.s([
    "ChatQuickActions",
    ()=>ChatQuickActions,
    "QUICK_ACTIONS",
    ()=>QUICK_ACTIONS,
    "QuickActionDataForm",
    ()=>QuickActionDataForm,
    "ToolsDropdown",
    ()=>ToolsDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const QUICK_ACTIONS = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
            lineNumber: 51,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Ver Activos',
        prompt: '¿Cuáles son los activos registrados en el sistema?',
        colorClass: 'hover:border-blue-400/50 hover:bg-blue-50 dark:hover:bg-blue-950/20'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
            lineNumber: 57,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Generar Checklist',
        prompt: 'Genera un checklist de mantenimiento preventivo para ',
        colorClass: 'hover:border-green-400/50 hover:bg-green-50 dark:hover:bg-green-950/20',
        formFields: [
            {
                name: 'equipmentName',
                label: 'Nombre del equipo',
                type: 'text',
                placeholder: 'Ej: Compresor de aire Atlas Copco',
                required: true,
                minLength: 3
            }
        ],
        promptBuilder: (data)=>`Genera un checklist de mantenimiento preventivo para ${String(data.equipmentName).trim()}`
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
            lineNumber: 75,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Stock Bajo',
        prompt: '¿Qué repuestos están bajos de stock?',
        colorClass: 'hover:border-amber-400/50 hover:bg-amber-50 dark:hover:bg-amber-950/20'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
            lineNumber: 81,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Mantenimientos',
        prompt: '¿Cuáles son los mantenimientos pendientes?',
        colorClass: 'hover:border-purple-400/50 hover:bg-purple-50 dark:hover:bg-purple-950/20'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
            lineNumber: 87,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Resumir Actividad',
        prompt: 'Necesito resumir estas notas de actividad: ',
        colorClass: 'hover:border-teal-400/50 hover:bg-teal-50 dark:hover:bg-teal-950/20',
        formFields: [
            {
                name: 'activityNotes',
                label: 'Notas de actividad',
                type: 'textarea',
                placeholder: 'Pega aquí las notas de actividad que deseas resumir...',
                required: true,
                minLength: 10,
                rows: 4
            }
        ],
        promptBuilder: (data)=>`Necesito resumir estas notas de actividad:\n\n${String(data.activityNotes).trim()}`
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
            className: "size-3.5"
        }, void 0, false, {
            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
            lineNumber: 106,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Crear Orden',
        prompt: 'Crear una orden de trabajo para ',
        colorClass: 'hover:border-red-400/50 hover:bg-red-50 dark:hover:bg-red-950/20',
        formFields: [
            {
                name: 'equipment',
                label: 'Equipo',
                type: 'text',
                placeholder: 'Ej: Bomba centrífuga P-101',
                required: true,
                minLength: 3
            },
            {
                name: 'description',
                label: 'Descripción del trabajo',
                type: 'textarea',
                placeholder: 'Describe el trabajo a realizar...',
                required: true,
                minLength: 10,
                rows: 3
            },
            {
                name: 'priority',
                label: 'Prioridad',
                type: 'select',
                required: true,
                defaultValue: 'media',
                options: [
                    {
                        value: 'baja',
                        label: 'Baja'
                    },
                    {
                        value: 'media',
                        label: 'Media'
                    },
                    {
                        value: 'alta',
                        label: 'Alta'
                    }
                ]
            }
        ],
        promptBuilder: (data)=>`Crear una orden de trabajo para ${String(data.equipment).trim()} con prioridad ${data.priority}. Descripción: ${String(data.description).trim()}`
    }
];
function QuickActionDataForm({ action, onSubmit, onCancel }) {
    _s();
    const fields = action.formFields || [];
    // Estado local del formulario
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QuickActionDataForm.useState": ()=>{
            const initial = {};
            fields.forEach({
                "QuickActionDataForm.useState": (field)=>{
                    initial[field.name] = field.defaultValue ?? '';
                }
            }["QuickActionDataForm.useState"]);
            return initial;
        }
    }["QuickActionDataForm.useState"]);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const firstInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-focus primer campo al montar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickActionDataForm.useEffect": ()=>{
            firstInputRef.current?.focus();
        }
    }["QuickActionDataForm.useEffect"], []);
    // Esc para cancelar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickActionDataForm.useEffect": ()=>{
            const handleKeyDown = {
                "QuickActionDataForm.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') {
                        e.preventDefault();
                        onCancel();
                    }
                }
            }["QuickActionDataForm.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "QuickActionDataForm.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["QuickActionDataForm.useEffect"];
        }
    }["QuickActionDataForm.useEffect"], [
        onCancel
    ]);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickActionDataForm.useCallback[handleChange]": (name, value)=>{
            setFormData({
                "QuickActionDataForm.useCallback[handleChange]": (prev)=>({
                        ...prev,
                        [name]: value
                    })
            }["QuickActionDataForm.useCallback[handleChange]"]);
        }
    }["QuickActionDataForm.useCallback[handleChange]"], []);
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Sanitizar: trim a todos los string values
        const sanitized = {};
        for (const [key, value] of Object.entries(formData)){
            sanitized[key] = typeof value === 'string' ? value.trim() : value;
        }
        // Componer prompt con el promptBuilder de la acción
        const composedPrompt = action.promptBuilder ? action.promptBuilder(sanitized) : action.prompt + Object.values(sanitized).join(' ');
        onSubmit(composedPrompt);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-in slide-in-from-bottom-3 fade-in duration-200 rounded-lg border-2 border-primary/30 overflow-hidden my-2",
        "aria-live": "polite",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-primary/5 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: action.icon
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold",
                                children: action.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                lineNumber: 233,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                        lineNumber: 231,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCancel,
                        className: "text-muted-foreground hover:text-foreground transition-colors",
                        "aria-label": "Cancelar formulario",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-4"
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                            lineNumber: 240,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                ref: formRef,
                onSubmit: handleSubmit,
                className: "p-4 space-y-3",
                children: [
                    fields.map((field, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: `qa-${field.name}`,
                                    className: "text-xs font-medium",
                                    children: [
                                        field.label,
                                        field.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive ml-0.5",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                            lineNumber: 250,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                    lineNumber: 248,
                                    columnNumber: 25
                                }, this),
                                field.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: index === 0 ? firstInputRef : undefined,
                                    id: `qa-${field.name}`,
                                    type: "text",
                                    placeholder: field.placeholder,
                                    value: formData[field.name] || '',
                                    onChange: (e)=>handleChange(field.name, e.target.value),
                                    required: field.required,
                                    minLength: field.minLength,
                                    maxLength: field.maxLength,
                                    className: "w-full px-3 py-2 text-sm rounded-md border border-border bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                    lineNumber: 255,
                                    columnNumber: 29
                                }, this),
                                field.type === 'textarea' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    ref: index === 0 ? firstInputRef : undefined,
                                    id: `qa-${field.name}`,
                                    placeholder: field.placeholder,
                                    value: formData[field.name] || '',
                                    onChange: (e)=>handleChange(field.name, e.target.value),
                                    required: field.required,
                                    minLength: field.minLength,
                                    maxLength: field.maxLength,
                                    rows: field.rows || 3,
                                    className: "w-full px-3 py-2 text-sm rounded-md border border-border bg-background placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                    lineNumber: 273,
                                    columnNumber: 29
                                }, this),
                                field.type === 'select' && field.options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    ref: index === 0 ? firstInputRef : undefined,
                                    id: `qa-${field.name}`,
                                    value: formData[field.name] || '',
                                    onChange: (e)=>handleChange(field.name, e.target.value),
                                    required: field.required,
                                    className: "w-full px-3 py-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            disabled: true,
                                            children: field.placeholder || 'Seleccionar...'
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33
                                        }, this),
                                        field.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: opt.value,
                                                children: opt.label
                                            }, opt.value, false, {
                                                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                                lineNumber: 305,
                                                columnNumber: 37
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                    lineNumber: 291,
                                    columnNumber: 29
                                }, this),
                                field.helpText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-muted-foreground",
                                    children: field.helpText
                                }, void 0, false, {
                                    fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                    lineNumber: 314,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, field.name, true, {
                            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                            lineNumber: 247,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                        lineNumber: 326,
                                        columnNumber: 25
                                    }, this),
                                    "Enviar"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                lineNumber: 321,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCancel,
                                className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                lineNumber: 329,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                lineNumber: 245,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
        lineNumber: 224,
        columnNumber: 9
    }, this);
}
_s(QuickActionDataForm, "lkw7x7FhNsIaHT2R6C/WM87vxjo=");
_c = QuickActionDataForm;
function ChatQuickActions({ onActionClick, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2 justify-center max-w-lg mx-auto",
        children: QUICK_ACTIONS.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onActionClick(action.prompt),
                disabled: disabled,
                className: `
            inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
            text-xs font-medium border transition-all duration-200
            bg-background border-border
            hover:shadow-sm active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            ${action.colorClass}
          `,
                children: [
                    action.icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: action.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                        lineNumber: 376,
                        columnNumber: 21
                    }, this)
                ]
            }, action.label, true, {
                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                lineNumber: 362,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
        lineNumber: 360,
        columnNumber: 9
    }, this);
}
_c1 = ChatQuickActions;
function ToolsDropdown({ onActionClick, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                disabled: disabled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "inline-flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    "aria-label": "Herramientas de IA",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                        lineNumber: 408,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                    lineNumber: 402,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                lineNumber: 401,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                align: "start",
                side: "top",
                className: "w-56",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                        className: "text-xs",
                        children: "Herramientas"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                        lineNumber: 412,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                        lineNumber: 413,
                        columnNumber: 17
                    }, this),
                    QUICK_ACTIONS.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                            onClick: ()=>onActionClick(action.prompt),
                            className: "gap-2 cursor-pointer",
                            children: [
                                action.icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: action.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                                    lineNumber: 421,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, action.label, true, {
                            fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                            lineNumber: 415,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
                lineNumber: 411,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-quick-actions.tsx",
        lineNumber: 400,
        columnNumber: 9
    }, this);
}
_c2 = ToolsDropdown;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "QuickActionDataForm");
__turbopack_context__.k.register(_c1, "ChatQuickActions");
__turbopack_context__.k.register(_c2, "ToolsDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-empty-state.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ChatEmptyState — Estado vacío del chat con Quick Actions
 *
 * Muestra mensaje de bienvenida y botones de acción rápida
 * cuando no hay mensajes en la conversación.
 */ __turbopack_context__.s([
    "ChatEmptyState",
    ()=>ChatEmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$quick$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-quick-actions.tsx [app-client] (ecmascript)");
;
;
function ChatEmptyState({ isVoiceSupported, voiceMode, onQuickAction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center h-full text-gray-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg mb-2",
                            children: "Hola! Soy tu asistente de mantenimiento"
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: "Pregúntame sobre equipos, procedimientos o solicita ayuda"
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        isVoiceSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs mt-2 text-gray-400",
                            children: [
                                "Puedes usar el micrófono para dictar",
                                voiceMode === 'gemini' && ' (con IA)'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                onQuickAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground mb-3",
                            children: "O prueba una acción rápida:"
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$quick$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatQuickActions"], {
                            onActionClick: onQuickAction
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/features/chat/chat-empty-state.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = ChatEmptyState;
var _c;
__turbopack_context__.k.register(_c, "ChatEmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/button-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroup",
    ()=>ButtonGroup,
    "ButtonGroupSeparator",
    ()=>ButtonGroupSeparator,
    "ButtonGroupText",
    ()=>ButtonGroupText,
    "buttonGroupVariants",
    ()=>buttonGroupVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/separator.tsx [app-client] (ecmascript)");
;
;
;
;
;
const buttonGroupVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", {
    variants: {
        orientation: {
            horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
            vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});
function ButtonGroup({ className, orientation, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "data-slot": "button-group",
        "data-orientation": orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonGroupVariants({
            orientation
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/button-group.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = ButtonGroup;
function ButtonGroupText({ className, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/button-group.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c1 = ButtonGroupText;
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "button-group-separator",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/button-group.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c2 = ButtonGroupSeparator;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ButtonGroup");
__turbopack_context__.k.register(_c1, "ButtonGroupText");
__turbopack_context__.k.register(_c2, "ButtonGroupSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TooltipProvider;
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tooltip",
            ...props
        }, void 0, false, {
            fileName: "[project]/app/components/ui/tooltip.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/tooltip.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = Tooltip;
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/tooltip.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c2 = TooltipTrigger;
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                    className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/tooltip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ui/tooltip.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/tooltip.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ai-elements/message.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Message",
    ()=>Message,
    "MessageAction",
    ()=>MessageAction,
    "MessageActions",
    ()=>MessageActions,
    "MessageAttachment",
    ()=>MessageAttachment,
    "MessageAttachments",
    ()=>MessageAttachments,
    "MessageBranch",
    ()=>MessageBranch,
    "MessageBranchContent",
    ()=>MessageBranchContent,
    "MessageBranchNext",
    ()=>MessageBranchNext,
    "MessageBranchPage",
    ()=>MessageBranchPage,
    "MessageBranchPrevious",
    ()=>MessageBranchPrevious,
    "MessageBranchSelector",
    ()=>MessageBranchSelector,
    "MessageContent",
    ()=>MessageContent,
    "MessageResponse",
    ()=>MessageResponse,
    "MessageToolbar",
    ()=>MessageToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperclipIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as PaperclipIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$streamdown$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/streamdown/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$streamdown$2f$dist$2f$chunk$2d$OGVTOU66$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__Streamdown$3e$__ = __turbopack_context__.i("[project]/node_modules/streamdown/dist/chunk-OGVTOU66.js [app-client] (ecmascript) <export i as Streamdown>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Message = ({ className, from, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex w-full max-w-[95%] flex-col gap-2", from === "user" ? "is-user ml-auto justify-end" : "is-assistant", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Message;
const MessageContent = ({ children, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("is-user:dark flex w-fit max-w-full min-w-0 flex-col gap-2 overflow-hidden text-sm", "group-[.is-user]:ml-auto group-[.is-user]:rounded-lg group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground", "group-[.is-assistant]:text-foreground", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = MessageContent;
const MessageActions = ({ className, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MessageActions;
const MessageAction = ({ tooltip, children, label, variant = "ghost", size = "icon-sm", ...props })=>{
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        size: size,
        type: "button",
        variant: variant,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: label || tooltip
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/message.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    if (tooltip) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                        asChild: true,
                        children: button
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/message.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: tooltip
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/message.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ai-elements/message.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ai-elements/message.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/message.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return button;
};
_c3 = MessageAction;
const MessageBranchContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useMessageBranch = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MessageBranchContext);
    if (!context) {
        throw new Error("MessageBranch components must be used within MessageBranch");
    }
    return context;
};
_s(useMessageBranch, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const MessageBranch = ({ defaultBranch = 0, onBranchChange, className, ...props })=>{
    _s1();
    const [currentBranch, setCurrentBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultBranch);
    const [branches, setBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleBranchChange = (newBranch)=>{
        setCurrentBranch(newBranch);
        onBranchChange?.(newBranch);
    };
    const goToPrevious = ()=>{
        const newBranch = currentBranch > 0 ? currentBranch - 1 : branches.length - 1;
        handleBranchChange(newBranch);
    };
    const goToNext = ()=>{
        const newBranch = currentBranch < branches.length - 1 ? currentBranch + 1 : 0;
        handleBranchChange(newBranch);
    };
    const contextValue = {
        currentBranch,
        totalBranches: branches.length,
        goToPrevious,
        goToNext,
        branches,
        setBranches
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBranchContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid w-full gap-2 [&>div]:pb-0", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/message.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MessageBranch, "gmeJxBaTyqrWdncyWfmlXdqrupo=");
_c4 = MessageBranch;
const MessageBranchContent = ({ children, ...props })=>{
    _s2();
    const { currentBranch, setBranches, branches } = useMessageBranch();
    const childrenArray = Array.isArray(children) ? children : [
        children
    ];
    // Use useEffect to update branches when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageBranchContent.useEffect": ()=>{
            if (branches.length !== childrenArray.length) {
                setBranches(childrenArray);
            }
        }
    }["MessageBranchContent.useEffect"], [
        childrenArray,
        branches,
        setBranches
    ]);
    return childrenArray.map((branch, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-2 overflow-hidden [&>div]:pb-0", index === currentBranch ? "block" : "hidden"),
            ...props,
            children: branch
        }, branch.key, false, {
            fileName: "[project]/app/components/ai-elements/message.tsx",
            lineNumber: 198,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)));
};
_s2(MessageBranchContent, "KbO9GWjis+krL6Lfz4mh9KRIr20=", false, function() {
    return [
        useMessageBranch
    ];
});
_c5 = MessageBranchContent;
const MessageBranchSelector = ({ className, from, ...props })=>{
    _s3();
    const { totalBranches } = useMessageBranch();
    // Don't render if there's only one branch
    if (totalBranches <= 1) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonGroup"], {
        className: "[&>*:not(:first-child)]:rounded-l-md [&>*:not(:last-child)]:rounded-r-md",
        orientation: "horizontal",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(MessageBranchSelector, "Urwf5wi0EaqIOu1RNJYbCuPVRRI=", false, function() {
    return [
        useMessageBranch
    ];
});
_c6 = MessageBranchSelector;
const MessageBranchPrevious = ({ children, ...props })=>{
    _s4();
    const { goToPrevious, totalBranches } = useMessageBranch();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "aria-label": "Previous branch",
        disabled: totalBranches <= 1,
        onClick: goToPrevious,
        size: "icon-sm",
        type: "button",
        variant: "ghost",
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/message.tsx",
            lineNumber: 254,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(MessageBranchPrevious, "V9pQvMImajfUux7nz3+6CSxEnO0=", false, function() {
    return [
        useMessageBranch
    ];
});
_c7 = MessageBranchPrevious;
const MessageBranchNext = ({ children, className, ...props })=>{
    _s5();
    const { goToNext, totalBranches } = useMessageBranch();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "aria-label": "Next branch",
        disabled: totalBranches <= 1,
        onClick: goToNext,
        size: "icon-sm",
        type: "button",
        variant: "ghost",
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/message.tsx",
            lineNumber: 278,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s5(MessageBranchNext, "0Mtfg2dtLVH7s0BJjhgQJP5bnJo=", false, function() {
    return [
        useMessageBranch
    ];
});
_c8 = MessageBranchNext;
const MessageBranchPage = ({ className, ...props })=>{
    _s6();
    const { currentBranch, totalBranches } = useMessageBranch();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonGroupText"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-none bg-transparent text-muted-foreground shadow-none", className),
        ...props,
        children: [
            currentBranch + 1,
            " of ",
            totalBranches
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s6(MessageBranchPage, "A0zAD7jMve5ofXDQnrurYZtURFY=", false, function() {
    return [
        useMessageBranch
    ];
});
_c9 = MessageBranchPage;
const MessageResponse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c10 = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$streamdown$2f$dist$2f$chunk$2d$OGVTOU66$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__Streamdown$3e$__["Streamdown"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), (prevProps, nextProps)=>prevProps.children === nextProps.children);
_c11 = MessageResponse;
MessageResponse.displayName = "MessageResponse";
function MessageAttachment({ data, className, onRemove, ...props }) {
    const filename = data.filename || "";
    const mediaType = data.mediaType?.startsWith("image/") && data.url ? "image" : "file";
    const isImage = mediaType === "image";
    const attachmentLabel = filename || (isImage ? "Image" : "Attachment");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative size-24 overflow-hidden rounded-lg", className),
        ...props,
        children: isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: filename || "attachment",
                    className: "size-full object-cover",
                    height: 100,
                    src: data.url,
                    width: 100
                }, void 0, false, {
                    fileName: "[project]/app/components/ai-elements/message.tsx",
                    lineNumber: 349,
                    columnNumber: 11
                }, this),
                onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    "aria-label": "Remove attachment",
                    className: "absolute top-2 right-2 size-6 rounded-full bg-background/80 p-0 opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100 [&>svg]:size-3",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onRemove();
                    },
                    type: "button",
                    variant: "ghost",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/message.tsx",
                            lineNumber: 367,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Remove"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/message.tsx",
                            lineNumber: 368,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ai-elements/message.tsx",
                    lineNumber: 357,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex size-full shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperclipIcon$3e$__["PaperclipIcon"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ai-elements/message.tsx",
                                    lineNumber: 377,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ai-elements/message.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/message.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: attachmentLabel
                            }, void 0, false, {
                                fileName: "[project]/app/components/ai-elements/message.tsx",
                                lineNumber: 381,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/message.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ai-elements/message.tsx",
                    lineNumber: 374,
                    columnNumber: 11
                }, this),
                onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    "aria-label": "Remove attachment",
                    className: "size-6 shrink-0 rounded-full p-0 opacity-0 transition-opacity hover:bg-accent group-hover:opacity-100 [&>svg]:size-3",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onRemove();
                    },
                    type: "button",
                    variant: "ghost",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/message.tsx",
                            lineNumber: 395,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Remove"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/message.tsx",
                            lineNumber: 396,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ai-elements/message.tsx",
                    lineNumber: 385,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
_c12 = MessageAttachment;
function MessageAttachments({ children, className, ...props }) {
    if (!children) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto flex w-fit flex-wrap items-start gap-2", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 417,
        columnNumber: 5
    }, this);
}
_c13 = MessageAttachments;
const MessageToolbar = ({ className, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 flex w-full items-center justify-between gap-4", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/message.tsx",
        lineNumber: 436,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = MessageToolbar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "Message");
__turbopack_context__.k.register(_c1, "MessageContent");
__turbopack_context__.k.register(_c2, "MessageActions");
__turbopack_context__.k.register(_c3, "MessageAction");
__turbopack_context__.k.register(_c4, "MessageBranch");
__turbopack_context__.k.register(_c5, "MessageBranchContent");
__turbopack_context__.k.register(_c6, "MessageBranchSelector");
__turbopack_context__.k.register(_c7, "MessageBranchPrevious");
__turbopack_context__.k.register(_c8, "MessageBranchNext");
__turbopack_context__.k.register(_c9, "MessageBranchPage");
__turbopack_context__.k.register(_c10, "MessageResponse$memo");
__turbopack_context__.k.register(_c11, "MessageResponse");
__turbopack_context__.k.register(_c12, "MessageAttachment");
__turbopack_context__.k.register(_c13, "MessageAttachments");
__turbopack_context__.k.register(_c14, "MessageToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/tool-result-cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tool Result Cards — Componentes de Generative UI para resultados de tools
 *
 * Renderiza los resultados de las chat tools como componentes React
 * en lugar de texto plano o JSON. Cada tool tiene su card especializada.
 *
 * Componentes:
 * - ToolLoadingCard: Skeleton mientras la tool ejecuta
 * - ToolErrorCard: Error con sugerencia
 * - DataResultCard: Tabla genérica con paginación para consultas al backend
 * - OrderApprovalCard: Preview de orden con botones Aprobar/Rechazar
 * - ChecklistResultCard: Checklist generado
 * - SummaryResultCard: Resumen de actividades
 */ __turbopack_context__.s([
    "DataResultCard",
    ()=>DataResultCard,
    "OrderApprovalCard",
    ()=>OrderApprovalCard,
    "ToolErrorCard",
    ()=>ToolErrorCard,
    "ToolLoadingCard",
    ()=>ToolLoadingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const TOOL_LABELS = {
    'tool-consultar_activos': 'Buscando activos...',
    'tool-consultar_activos_por_categoria': 'Agrupando activos por categoría...',
    'tool-consultar_mantenimientos': 'Consultando mantenimientos...',
    'tool-consultar_calendario': 'Cargando calendario...',
    'tool-consultar_reportes': 'Consultando reportes...',
    'tool-consultar_inventario': 'Buscando en inventario...',
    'tool-consultar_proveedores': 'Cargando proveedores...',
    'tool-generar_checklist': 'Generando checklist con IA...',
    'tool-generar_resumen_actividad': 'Generando resumen con IA...',
    'tool-crear_orden_trabajo': 'Preparando orden de trabajo...'
};
function ToolLoadingCard({ toolName }) {
    const label = TOOL_LABELS[toolName] || 'Procesando...';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "size-4 animate-spin text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_c = ToolLoadingCard;
function ToolErrorCard({ error, suggestion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                className: "size-4 text-destructive mt-0.5 shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-destructive font-medium",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    suggestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: suggestion
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_c1 = ToolErrorCard;
/**
 * Extrae las columnas clave de los datos para mostrar en la tabla.
 * Prioriza campos legibles y limita a 5 columnas.
 */ function getDisplayColumns(items) {
    if (items.length === 0) return [];
    const first = items[0];
    const allKeys = Object.keys(first);
    // Priorizar campos legibles
    const priority = [
        'id',
        'nombre',
        'descripcion',
        'estado',
        'tipo',
        'codigo',
        'marca',
        'modelo',
        'stock',
        'stock_minimo',
        'costo',
        'prioridad',
        'fecha_apertura',
        'fecha_programada',
        'sede',
        'edificio',
        'contacto',
        'email',
        'telefono',
        'valor'
    ];
    const sorted = allKeys.filter((key)=>{
        const val = first[key];
        // Excluir relaciones (objetos), arrays, y campos internos
        return typeof val !== 'object' && !Array.isArray(val) && !key.endsWith('_id') && key !== 'created_at' && key !== 'updated_at';
    }).sort((a, b)=>{
        const aIdx = priority.indexOf(a);
        const bIdx = priority.indexOf(b);
        if (aIdx === -1 && bIdx === -1) return 0;
        if (aIdx === -1) return 1;
        if (bIdx === -1) return -1;
        return aIdx - bIdx;
    });
    return sorted.slice(0, 5);
}
function formatCellValue(value) {
    if (value === null || value === undefined) return '—';
    if (typeof value === 'boolean') return value ? 'Sí' : 'No';
    if (typeof value === 'number') return value.toLocaleString('es-VE');
    return String(value);
}
function formatColumnHeader(key) {
    return key.replace(/_/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
}
function DataResultCard({ data, toolName, summary }) {
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const columns = getDisplayColumns(data.items);
    const toolLabel = toolName.replace('tool-', '').replace(/_/g, ' ');
    if (data.items.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 rounded-lg bg-muted/30 border border-border text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "No se encontraron resultados"
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 165,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
            lineNumber: 164,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-border overflow-hidden my-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(!expanded),
                className: "w-full flex items-center justify-between p-3 bg-muted/30 hover:bg-muted/50 transition-colors text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "size-4 text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium capitalize",
                                children: toolLabel
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full",
                                children: [
                                    data.pagination.total,
                                    " resultado",
                                    data.pagination.total !== 1 ? 's' : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 180,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 177,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            data.pagination.lastPage > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    "Pág. ",
                                    data.pagination.page,
                                    "/",
                                    data.pagination.lastPage
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 186,
                                columnNumber: 25
                            }, this),
                            expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "size-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 191,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "size-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 193,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-border bg-muted/20",
                                children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 text-left text-xs font-medium text-muted-foreground",
                                        children: formatColumnHeader(col)
                                    }, col, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 205,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 203,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                            lineNumber: 202,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: data.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-border/50 hover:bg-muted/10",
                                    children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-xs",
                                            children: formatCellValue(item[col])
                                        }, col, false, {
                                            fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                            lineNumber: 215,
                                            columnNumber: 41
                                        }, this))
                                }, i, false, {
                                    fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                    lineNumber: 213,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                            lineNumber: 211,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                    lineNumber: 201,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 200,
                columnNumber: 17
            }, this),
            summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2 border-t border-border/50 bg-muted/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-muted-foreground",
                    children: summary
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                    lineNumber: 229,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 228,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
        lineNumber: 171,
        columnNumber: 9
    }, this);
}
_s(DataResultCard, "NZEs4N34I2vU569ODzuIjdsqMlo=");
_c2 = DataResultCard;
function OrderApprovalCard({ input, onApprove, onDeny }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border-2 border-amber-300 dark:border-amber-600 overflow-hidden my-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-amber-50 dark:bg-amber-950/30 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "size-4 text-amber-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 256,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-amber-700 dark:text-amber-400",
                        children: "Confirmación requerida"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 257,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: "Crear orden de trabajo:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 264,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 text-xs",
                        children: [
                            input.equipment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Equipo:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 268,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: input.equipment
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 269,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true),
                            input.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Descripción:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 274,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: input.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 275,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true),
                            input.priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Prioridad:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 280,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium capitalize",
                                        children: input.priority
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 281,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true),
                            input.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "Ubicación:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 286,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: input.location
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                        lineNumber: 287,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 p-3 border-t border-border bg-muted/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onApprove,
                        className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-green-600 text-white hover:bg-green-700 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            "Aprobar y Crear"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 295,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDeny,
                        className: "flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                                lineNumber: 308,
                                columnNumber: 21
                            }, this),
                            "Cancelar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                        lineNumber: 303,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/tool-result-cards.tsx",
        lineNumber: 253,
        columnNumber: 9
    }, this);
}
_c3 = OrderApprovalCard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ToolLoadingCard");
__turbopack_context__.k.register(_c1, "ToolErrorCard");
__turbopack_context__.k.register(_c2, "DataResultCard");
__turbopack_context__.k.register(_c3, "OrderApprovalCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-message.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ChatMessage — Mensaje individual del chat con Generative UI
 *
 * Renderiza mensajes del usuario y asistente iterando sobre `message.parts`:
 * - `text` → Texto con markdown
 * - `image` → Imágenes adjuntas
 * - `tool-consultar_*` → Tablas de datos (DataResultCard)
 * - `tool-generar_checklist` → ChecklistResultCard
 * - `tool-generar_resumen_actividad` → SummaryResultCard
 * - `tool-crear_orden_trabajo` → OrderApprovalCard (client-side, input-available state)
 *
 * Usa el patrón de typed tool parts del AI SDK v5 donde cada tool
 * genera partes con type = `tool-<toolName>` y state = input-streaming | input-available | output-available | output-error
 */ __turbopack_context__.s([
    "ChatMessage",
    ()=>ChatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as CopyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcwIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcwIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ai-elements/message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$tool$2d$result$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/tool-result-cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
;
;
;
;
;
;
const ChecklistResultCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/components/features/chat/cards/checklist-result-card.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/app/components/features/chat/cards/checklist-result-card.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-center text-sm text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "size-4 animate-spin inline-block mr-2"
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-message.tsx",
                    lineNumber: 40,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0)),
                " Cargando componente..."
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/features/chat/chat-message.tsx",
            lineNumber: 40,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c = ChecklistResultCard;
const SummaryResultCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/components/features/chat/cards/summary-result-card.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/app/components/features/chat/cards/summary-result-card.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-center text-sm text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "size-4 animate-spin inline-block mr-2"
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-message.tsx",
                    lineNumber: 47,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0)),
                " Cargando componente..."
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/features/chat/chat-message.tsx",
            lineNumber: 47,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = SummaryResultCard;
// ===========================================
// Helpers
// ===========================================
function getTextContent(parts) {
    if (!parts || parts.length === 0) return '';
    const textParts = parts.filter((part)=>part?.type === 'text');
    return textParts.map((part)=>part.text).join('\n\n');
}
function isToolPart(part) {
    return typeof part?.type === 'string' && part.type.startsWith('tool-');
}
/** Tool names that render as data tables */ const DATA_TABLE_TOOLS = new Set([
    'tool-consultar_activos',
    'tool-consultar_activos_por_categoria',
    'tool-consultar_mantenimientos',
    'tool-consultar_calendario',
    'tool-consultar_reportes',
    'tool-consultar_inventario',
    'tool-consultar_proveedores'
]);
function ChatMessage({ message, onRegenerate, onCopy, onToolApproval }) {
    const parts = message.parts || [];
    const textContent = getTextContent(parts);
    const imageParts = parts.filter((part)=>part?.type === 'image');
    const toolParts = parts.filter(isToolPart);
    // Si no hay contenido, no renderizar
    if (!textContent && imageParts.length === 0 && toolParts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Message"], {
        from: message.role,
        children: [
            imageParts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageAttachments"], {
                children: imageParts.map((part, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageAttachment"], {
                        data: {
                            type: 'file',
                            url: part.imageUrl,
                            mediaType: part.mimeType || 'image/jpeg',
                            filename: `image-${i + 1}.jpg`
                        }
                    }, `${message.id}-img-${i}`, false, {
                        fileName: "[project]/app/components/features/chat/chat-message.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-message.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this),
            textContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageResponse"], {
                    children: textContent
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-message.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-message.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            toolParts.map((part)=>{
                const key = `${message.id}-${part.toolCallId}`;
                // Loading states
                if (part.state === 'input-streaming' || part.state === 'input-available') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$tool$2d$result$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolLoadingCard"], {
                        toolName: part.type
                    }, key, false, {
                        fileName: "[project]/app/components/features/chat/chat-message.tsx",
                        lineNumber: 170,
                        columnNumber: 18
                    }, this);
                }
                // Error state
                if (part.state === 'output-error') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$tool$2d$result$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolErrorCard"], {
                        error: part.errorText || 'Error desconocido',
                        suggestion: "Intenta reformular tu consulta"
                    }, key, false, {
                        fileName: "[project]/app/components/features/chat/chat-message.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this);
                }
                // Approval request (crear_orden_trabajo)
                if (part.type === 'tool-crear_orden_trabajo' && part.state === 'approval-requested') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$tool$2d$result$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderApprovalCard"], {
                        input: part.input || {},
                        onApprove: ()=>onToolApproval?.(part.approval?.id || '', true, part.input),
                        onDeny: ()=>onToolApproval?.(part.approval?.id || '', false, part.input)
                    }, key, false, {
                        fileName: "[project]/app/components/features/chat/chat-message.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this);
                }
                // Output available
                if (part.state === 'output-available') {
                    const output = part.output;
                    // Data table tools
                    if (DATA_TABLE_TOOLS.has(part.type) && output?.success && output?.data) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$tool$2d$result$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataResultCard"], {
                            data: output.data,
                            toolName: part.type,
                            summary: output.summary
                        }, key, false, {
                            fileName: "[project]/app/components/features/chat/chat-message.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this);
                    }
                    // Checklist
                    if (part.type === 'tool-generar_checklist' && output?.success && output?.checklist) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChecklistResultCard, {
                            checklist: output.checklist,
                            cached: output.cached
                        }, key, false, {
                            fileName: "[project]/app/components/features/chat/chat-message.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this);
                    }
                    // Summary
                    if (part.type === 'tool-generar_resumen_actividad' && output?.success && output?.summary) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryResultCard, {
                            summary: output.summary,
                            cached: output.cached
                        }, key, false, {
                            fileName: "[project]/app/components/features/chat/chat-message.tsx",
                            lineNumber: 226,
                            columnNumber: 15
                        }, this);
                    }
                    // Error from tool
                    if (output?.success === false) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$tool$2d$result$2d$cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolErrorCard"], {
                            error: output.error || 'Error en la herramienta',
                            suggestion: output.suggestion
                        }, key, false, {
                            fileName: "[project]/app/components/features/chat/chat-message.tsx",
                            lineNumber: 237,
                            columnNumber: 15
                        }, this);
                    }
                    // Fallback: show raw output as text
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-lg bg-muted/30 border border-border my-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "text-xs overflow-x-auto whitespace-pre-wrap",
                            children: JSON.stringify(output, null, 2)
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-message.tsx",
                            lineNumber: 248,
                            columnNumber: 15
                        }, this)
                    }, key, false, {
                        fileName: "[project]/app/components/features/chat/chat-message.tsx",
                        lineNumber: 247,
                        columnNumber: 13
                    }, this);
                }
                return null;
            }),
            message.role === 'assistant' && textContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageActions"], {
                children: [
                    !textContent.includes('Análisis Visual (IA)') && !textContent.includes('**Análisis de Documento**') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageAction"], {
                        onClick: onRegenerate,
                        label: "Reintentar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcwIcon$3e$__["RefreshCcwIcon"], {
                            className: "size-3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-message.tsx",
                            lineNumber: 263,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-message.tsx",
                        lineNumber: 262,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageAction"], {
                        onClick: ()=>onCopy(textContent),
                        label: "Copiar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CopyIcon$3e$__["CopyIcon"], {
                            className: "size-3"
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-message.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-message.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-message.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this)
        ]
    }, message.id, true, {
        fileName: "[project]/app/components/features/chat/chat-message.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c2 = ChatMessage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ChecklistResultCard");
__turbopack_context__.k.register(_c1, "SummaryResultCard");
__turbopack_context__.k.register(_c2, "ChatMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-conversation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatConversation",
    ()=>ChatConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ai-elements/conversation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ai-elements/loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-message.tsx [app-client] (ecmascript)");
;
;
;
;
;
function ChatConversation({ messages, status, isVoiceSupported, voiceMode, onRegenerate, onCopyMessage, onQuickAction, onToolApproval }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Conversation"], {
        className: "h-full",
        initial: "instant",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationContent"], {
                children: [
                    messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatEmptyState"], {
                        isVoiceSupported: isVoiceSupported,
                        voiceMode: voiceMode,
                        onQuickAction: onQuickAction
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-conversation.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this) : messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessage"], {
                            message: message,
                            onRegenerate: onRegenerate,
                            onCopy: onCopyMessage,
                            onToolApproval: onToolApproval
                        }, `${message.id}-${index}`, false, {
                            fileName: "[project]/app/components/features/chat/chat-conversation.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)),
                    status === 'submitted' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-conversation.tsx",
                        lineNumber: 78,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-conversation.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationScrollButton"], {}, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-conversation.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-conversation.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = ChatConversation;
var _c;
__turbopack_context__.k.register(_c, "ChatConversation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/theme/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes de la Funcionalidad de Tema
 *
 * Configuración centralizada para la funcionalidad de tema.
 * Contiene opciones de tema, claves de almacenamiento y valores por defecto.
 */ /**
 * Opciones de tema disponibles
 */ __turbopack_context__.s([
    "THEMES",
    ()=>THEMES,
    "THEME_CONFIG",
    ()=>THEME_CONFIG
]);
const THEMES = [
    'light',
    'dark'
];
const THEME_CONFIG = {
    /**
   * Clave de LocalStorage para persistir preferencia de tema
   */ storageKey: 'theme',
    /**
   * Tema por defecto cuando no hay preferencia establecida
   */ defaultTheme: 'light',
    /**
   * Duración de transición para cambios de tema (en milisegundos)
   */ transitionDuration: 200,
    /**
   * Nombre de clase CSS aplicada al elemento html para modo oscuro
   */ darkModeClass: 'dark'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/theme/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/theme/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/**
 * Obtiene el tema actual de localStorage o preferencias del sistema
 * Retorna el tema por defecto para compatibilidad con SSR
 */ function getThemeSnapshot() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_CONFIG"].storageKey);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
/**
 * Snapshot del servidor siempre retorna el tema por defecto para prevenir hydration mismatch
 */ function getServerSnapshot() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_CONFIG"].defaultTheme;
}
/**
 * Suscribirse a eventos de storage para sincronización entre pestañas
 * @param callback
 */ function subscribe(callback) {
    window.addEventListener('storage', callback);
    return ()=>window.removeEventListener('storage', callback);
}
function ThemeToggle({ className }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const storedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getThemeSnapshot, getServerSnapshot);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(storedTheme);
    // useLayoutEffect runs synchronously before browser paint
    // This prevents theme flash and avoids cascading renders
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ThemeToggle.useLayoutEffect": ()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional for SSR hydration
            setMounted(true);
            document.documentElement.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_CONFIG"].darkModeClass, storedTheme === 'dark');
        }
    }["ThemeToggle.useLayoutEffect"], [
        storedTheme
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeToggle.useCallback[toggleTheme]": ()=>{
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_CONFIG"].storageKey, newTheme);
            document.documentElement.classList.toggle(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_CONFIG"].darkModeClass, newTheme === 'dark');
        }
    }["ThemeToggle.useCallback[toggleTheme]"], [
        theme
    ]);
    // Prevent hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center size-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900', className),
            "aria-label": "Cambiar tema",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/app/components/features/theme/theme-toggle.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/features/theme/theme-toggle.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center size-9 rounded-lg border transition-all duration-200', 'border-zinc-200 dark:border-zinc-700', 'bg-white dark:bg-zinc-900', 'hover:bg-zinc-100 dark:hover:bg-zinc-800', 'hover:border-zinc-300 dark:hover:border-zinc-600', 'text-zinc-600 dark:text-zinc-400', 'hover:text-zinc-900 dark:hover:text-zinc-100', 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900', className),
        "aria-label": theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro',
        title: theme === 'light' ? 'Modo oscuro' : 'Modo claro',
        children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/features/theme/theme-toggle.tsx",
            lineNumber: 97,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/features/theme/theme-toggle.tsx",
            lineNumber: 97,
            columnNumber: 58
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/features/theme/theme-toggle.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "pL+Kz3k7A5i6mzEEaILvHt23DII=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/theme/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ✅ Barrel export - SOLO para exportar hacia el exterior
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/theme/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/theme/constants.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/app/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/app/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/app/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-help.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHelp",
    ()=>ChatHelp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/command.js [app-client] (ecmascript) <export default as Command>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/scroll-area.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ChatHelp() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('features');
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCopy = (text, id)=>{
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(()=>setCopiedId(null), 2000);
    };
    const features = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
            title: 'Mensajería de Texto',
            description: 'Conversa fluidamente con la IA usando el modelo GROQ para respuestas rápidas.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
            title: 'Entrada de Voz',
            description: 'Usa el micrófono para dictar mensajes. Compatible con Gemini y reconocimiento nativo.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
            title: 'Análisis de Imágenes',
            description: 'Sube imágenes para que la IA las analice y describa automáticamente.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"],
            title: 'Historial Persistente',
            description: 'Tus conversaciones se guardan localmente para que puedas retomarlas después.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"],
            title: 'Atajos de Teclado',
            description: 'Presiona Ctrl+Enter para enviar mensajes rápidamente.'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
            title: 'Comandos de Voz',
            description: 'Di "Crear orden de trabajo para..." para generar órdenes automáticamente.'
        }
    ];
    const commands = [
        {
            id: 'cmd-create',
            action: 'Crear Orden',
            example: 'Crear orden de trabajo para aire acondicionado en sala de juntas',
            description: 'Genera una nueva orden. Especifica equipo y ubicación.'
        },
        {
            id: 'cmd-status',
            action: 'Verificar Estado',
            example: 'Verificar estado de la orden del ascensor',
            description: 'Consulta el estatus actual de una orden específica.'
        },
        {
            id: 'cmd-list',
            action: 'Listar Pendientes',
            example: 'Listar órdenes pendientes de alta prioridad',
            description: 'Muestra un listado de órdenes filtrarles por prioridad.'
        },
        {
            id: 'cmd-update',
            action: 'Actualizar Prioridad',
            example: 'Actualizar prioridad de orden UMAG-001 a urgente',
            description: 'Modifica la prioridad de una orden existente.'
        },
        {
            id: 'cmd-nav',
            action: 'Navegación',
            example: 'Ir al dashboard de métricas',
            description: 'Navega rápidamente a otras secciones de la app.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    title: "Ayuda y funcionalidades",
                    className: "p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors",
                    "aria-label": "Ver ayuda y funcionalidades",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                        className: "size-5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-help.tsx",
                    lineNumber: 109,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "w-[95vw] max-w-lg rounded-xl md:max-w-2xl p-0 gap-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        className: "p-6 pb-2 border-b bg-muted/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        className: "text-xl",
                                        children: "Ayuda del Chat"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-sm text-muted-foreground",
                                        children: "Guía completa de funcionalidades y comandos de voz."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex p-1 bg-muted/50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('features'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 text-sm font-medium py-1.5 px-3 rounded-md transition-all", activeTab === 'features' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                        children: "Funcionalidades"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('commands'),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 text-sm font-medium py-1.5 px-3 rounded-md transition-all", activeTab === 'commands' ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
                                        children: "Comandos de Voz"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                        className: "h-[60vh]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: activeTab === 'features' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2",
                                children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative overflow-hidden flex items-start gap-4 p-4 rounded-xl border bg-gradient-to-br from-card to-white/50 dark:to-white/5 hover:to-accent/50 text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mt-1 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-2xl ring-1 ring-inset ring-primary/10 group-hover:ring-primary/20 transition-all",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                            className: "size-5 text-primary group-hover:scale-110 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                lineNumber: 160,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-base leading-tight tracking-tight group-hover:text-primary transition-colors",
                                                        children: feature.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-balance",
                                                        children: feature.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                lineNumber: 166,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                        lineNumber: 156,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                lineNumber: 154,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 bg-blue-100 dark:bg-blue-900/40 p-1.5 rounded-full shrink-0 h-fit",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__["Command"], {
                                                        className: "size-4 text-blue-600 dark:text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium text-sm text-blue-900 dark:text-blue-100 mb-1",
                                                            children: "Control por Voz Inteligente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-blue-700 dark:text-blue-300 leading-relaxed",
                                                            children: "Puedes controlar la aplicación hablando naturalmente. Intenta usar estas frases exactas o variaciones similares."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                            lineNumber: 180,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                        lineNumber: 179,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3",
                                        children: commands.map((cmd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group flex flex-col gap-2 p-3 rounded-xl border bg-card hover:bg-accent/5 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                                                                children: cmd.action
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                className: "h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                onClick: ()=>handleCopy(cmd.example, cmd.id),
                                                                title: "Copiar ejemplo",
                                                                children: copiedId === cmd.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "size-3 text-green-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 57
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                    className: "size-3 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        className: "text-sm font-medium bg-muted/50 p-2 rounded-md text-primary block",
                                                        children: [
                                                            '"',
                                                            cmd.example,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: cmd.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, cmd.id, true, {
                                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                                lineNumber: 197,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                        lineNumber: 195,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                lineNumber: 178,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-help.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                        className: "p-4 border-t bg-muted/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full sm:w-auto",
                                variant: "outline",
                                children: "Cerrar"
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                                lineNumber: 235,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-help.tsx",
                            lineNumber: 234,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-help.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-help.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-help.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
_s(ChatHelp, "diSJ8Q8Ox8s9WJmcZ9uR0LPJbhg=");
_c = ChatHelp;
var _c;
__turbopack_context__.k.register(_c, "ChatHelp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/config/limits.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuración Centralizada de Límites de Tamaño
 *
 * Constantes para límites de tamaño de archivos y mensajes.
 * Centralizadas para consistencia y fácil mantenimiento.
 */ // ========================================
// Server Actions & API Limits
// ========================================
/**
 * Límite de tamaño del cuerpo para Server Actions de Next.js
 * Debe coincidir con bodySizeLimit en next.config.ts
 */ __turbopack_context__.s([
    "MAX_AUDIO_SIZE_BYTES",
    ()=>MAX_AUDIO_SIZE_BYTES,
    "MAX_AUDIO_SIZE_MB",
    ()=>MAX_AUDIO_SIZE_MB,
    "MAX_IMAGE_SIZE_BYTES",
    ()=>MAX_IMAGE_SIZE_BYTES,
    "MAX_IMAGE_SIZE_MB",
    ()=>MAX_IMAGE_SIZE_MB,
    "MAX_MESSAGE_TEXT_BYTES",
    ()=>MAX_MESSAGE_TEXT_BYTES,
    "MAX_MESSAGE_TEXT_KB",
    ()=>MAX_MESSAGE_TEXT_KB,
    "MAX_PDF_SIZE_BYTES",
    ()=>MAX_PDF_SIZE_BYTES,
    "MAX_PDF_SIZE_MB",
    ()=>MAX_PDF_SIZE_MB,
    "MAX_STORED_MESSAGES",
    ()=>MAX_STORED_MESSAGES,
    "SERVER_ACTION_BODY_SIZE_BYTES",
    ()=>SERVER_ACTION_BODY_SIZE_BYTES,
    "SERVER_ACTION_BODY_SIZE_MB",
    ()=>SERVER_ACTION_BODY_SIZE_MB,
    "SUPPORTED_PDF_MIME_TYPES",
    ()=>SUPPORTED_PDF_MIME_TYPES,
    "bytesToMB",
    ()=>bytesToMB,
    "exceedsLimit",
    ()=>exceedsLimit,
    "mbToBytes",
    ()=>mbToBytes
]);
const SERVER_ACTION_BODY_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const SERVER_ACTION_BODY_SIZE_MB = 5;
const MAX_AUDIO_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const MAX_AUDIO_SIZE_MB = 5;
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
const MAX_IMAGE_SIZE_MB = 5;
const MAX_PDF_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_PDF_SIZE_MB = 10;
const SUPPORTED_PDF_MIME_TYPES = [
    'application/pdf'
];
const MAX_MESSAGE_TEXT_BYTES = 10 * 1024; // 10KB
const MAX_MESSAGE_TEXT_KB = 10;
const MAX_STORED_MESSAGES = 100;
function bytesToMB(bytes) {
    return Math.round(bytes / (1024 * 1024) * 10) / 10;
}
function mbToBytes(mb) {
    return mb * 1024 * 1024;
}
function exceedsLimit(sizeInBytes, limitInBytes) {
    return sizeInBytes > limitInBytes;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/config/models.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuración de Modelos de IA
 *
 * Define los modelos disponibles para su uso en la aplicación.
 * Compartido entre cliente y servidor.
 */ /**
 * AVAILABLE_MODELS - Lista de modelos soportados
 *
 * Contiene la configuración de nombre visual y valor de API para cada modelo.
 */ __turbopack_context__.s([
    "AVAILABLE_MODELS",
    ()=>AVAILABLE_MODELS,
    "DEFAULT_MODEL",
    ()=>DEFAULT_MODEL
]);
const AVAILABLE_MODELS = [
    {
        name: 'Llama 3.1 8B',
        value: 'llama-3.1-8b-instant'
    }
];
const DEFAULT_MODEL = AVAILABLE_MODELS[0].value;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/config/server.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Configuración del servidor para GIMA chatbot
/**
 * ACRONYMS_GLOSSARY - Glosario de términos técnicos
 *
 * Mapeo de siglas utilizadas en el contexto de mantenimiento de la UNEG.
 * Se utiliza para generar contexto para las IAs y normalizar terminología.
 */ __turbopack_context__.s([
    "INVENTORY_PROMPT",
    ()=>INVENTORY_PROMPT,
    "STREAM_CONFIG",
    ()=>STREAM_CONFIG,
    "SYSTEM_PROMPT",
    ()=>SYSTEM_PROMPT,
    "VOICE_PROMPT",
    ()=>VOICE_PROMPT,
    "formatGlossary",
    ()=>formatGlossary
]);
const ACRONYMS_GLOSSARY = {
    UNEG: 'Universidad Nacional Experimental de Guayana',
    UMA: 'Unidad Manejadora de Aire',
    BCA: 'Bomba Centrífuga de Agua',
    TAB: 'Tablero de Distribución Eléctrica',
    ST: 'Subestación Transformadora',
    AA: 'Aire Acondicionado (Split/Ventana)',
    GIMA: 'Gestión Integral de Mantenimiento y Activos',
    OT: 'Orden de Trabajo',
    MP: 'Mantenimiento Preventivo',
    MC: 'Mantenimiento Correctivo'
};
const formatGlossary = ()=>{
    return Object.entries(ACRONYMS_GLOSSARY).map(([acronym, meaning])=>`- **${acronym}**: ${meaning}`).join('\n');
};
const SYSTEM_PROMPT = `Eres un asistente experto en gestión de mantenimiento y activos para la Universidad Nacional Experimental de Guayana (UNEG).

Tu objetivo es ayudar a técnicos, ingenieros y personal de mantenimiento con:
- Consultas sobre equipos y su estado
- Procedimientos de mantenimiento preventivo y correctivo
- Interpretación de manuales técnicos
- Diagnóstico de fallas comunes
- Recomendaciones de repuestos

CONTEXTO DE TERMINOLOGÍA Y SIGLAS (IMPORTANTE):
La universidad utiliza códigos y siglas específicas. Úsalas para interpretar las consultas de los usuarios y expandirlas cuando sea necesario para mayor claridad:

${formatGlossary()}

Directrices:
1. Sé preciso y técnico, pero claro
2. Si un usuario usa una sigla del glosario (ej: "Falla en la UMA"), entiende a qué equipo se refiere
3. Si no estás seguro, admítelo y sugiere consultar un manual
4. Prioriza la seguridad en todas las recomendaciones
5. Usa terminología técnica apropiada
6. Proporciona pasos claros y numerados cuando sea necesario
7. Cuando el usuario pregunte sobre activos, mantenimientos, inventario o datos del sistema, usa las herramientas disponibles para consultar datos reales del backend GIMA
8. No inventes datos de activos, mantenimientos ni inventario — consulta siempre con las herramientas
9. MUY IMPORTANTE: Usa la herramienta \`consultar_activos\` para CUALQUIER consulta de equipos o activos. Si el usuario pide listados generales, no incluyas el parámetro \`tipo\`. Si el usuario especifica una categoría (ej. mobiliario o equipos), usa el parámetro \`tipo\` con el valor correspondiente ("mobiliario" o "equipo").
10. MUY IMPORTANTE: NO repitas la información devuelta por las herramientas en tu respuesta de texto (como tablas de Markdown o listas detalladas), ya que el sistema mostrará automáticamente el resultado en una tabla interactiva. 
11. Para consultas de repuestos o piezas con stock bajo (agotándose), usa siempre la herramienta \`consultar_inventario\` con el parámetro \`bajo_stock: true\`.
12. Para consultas de mantenimientos pendientes o en progreso, usa la herramienta \`consultar_mantenimientos\` con el parámetro \`estado\` correspondiente ("pendiente" o "en_progreso").
13. Para crear órdenes de trabajo, confirma los detalles con el usuario antes de ejecutar

Contexto General: La UNEG está digitalizando su sistema de mantenimiento. Actualmente muchos procesos son manuales.`;
const VOICE_PROMPT = `Actúa como una máquina de transcripción estricta para el sistema GIMA.
Tu ÚNICA función es convertir el audio en texto, palabra por palabra.

REGLAS DE ORO:
1. Escribe EXACTAMENTE lo que escuchas.
2. IMPORTANTE: Si el usuario dice palabras cortas de verificación (ej: "Prueba", "Test", "Probando", "1 2 3"), TRANSCRÍBELAS LITERALMENTE. No las filtres.
3. NO inventes, NO completes frases.
4. NO incluyas marcas de tiempo ni descripciones de ruido (ej: [silencio]).

TERMINOLOGÍA TÉCNICA:
Si y SOLO SI escuchas términos que coincidan fonéticamente con estas siglas, úsalas en mayúsculas:

${formatGlossary()}

Si el audio no es claro, escribe lo que mejor entiendas fonéticamente.`;
const INVENTORY_PROMPT = `Eres un Auditor de Inventario Experto para el sistema GIMA de la UNEG.
Tu tarea es analizar fotografías de piezas industriales, repuestos o equipos y extraer datos técnicos precisos para el catálogo.

INSTRUCCIONES DE ANÁLISIS:
1. Identifica la pieza con su nombre técnico más preciso (evita nombres genéricos).
2. Clasifícala en una categoría (Ej: Hidráulica, Eléctrica, Herramientas, EPP, Mecánica, Electrónica).
3. Estima la cantidad visible en la foto.
4. Detecta el estado físico (Nuevo, Usado, Dañado, Requiere Inspección).
5. Extrae cualquier texto visible (Números de serie, marcas, especificaciones).
6. Si reconoces la marca o modelo, inclúyelo.

TERMINOLOGÍA TÉCNICA:
${formatGlossary()}

FORMATO DE SALIDA (IMPORTANTE):
Responde SIEMPRE con un bloque de código JSON válido seguido de un breve resumen en español.

Estructura JSON requerida:
\`\`\`json
{
  "item_name": "Nombre Técnico de la Pieza",
  "category": "Categoría",
  "quantity_detected": 1,
  "condition": "Nuevo/Usado/Dañado",
  "brand": "Marca (si visible)",
  "model": "Modelo (si visible)",
  "serial_number": "S/N (si visible)",
  "specs": ["especificación1", "especificación2"],
  "notes": "Observaciones adicionales",
  "confidence": "Alta/Media/Baja"
}
\`\`\`

Después del JSON, proporciona un resumen breve como: "He identificado un/una [nombre] en estado [condición]. Se recomienda [acción]."`;
const STREAM_CONFIG = {
    maxDuration: 30,
    sendSources: false,
    sendReasoning: false
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/config/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Configuración centralizada del chatbot GIMA
// Importar desde aquí: import { ... } from '@/app/config'
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/limits.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$server$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/server.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHeader",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/features/theme/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/theme/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$help$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-help.tsx [app-client] (ecmascript)");
/**
 * ChatHeader - Cabecera del chat con controles principales
 *
 * Muestra el título de la aplicación y proporciona acceso a:
 * - ThemeToggle: Cambiar entre tema claro/oscuro
 * - Botón de limpieza: Borrar todo el historial de conversación
 *
 * El botón para limpiar historial solo aparece cuando hay mensajes.
 * @param hasMessages - Indica si hay mensajes en la conversación (muestra botón de clear)
 * @param hasMessages.hasMessages
 * @param onClearHistory - Callback ejecutado al solicitar limpiar historial (abre confirmación)
 * @param hasMessages.onClearHistory
 * @example
 * ```tsx
 * <ChatHeader
 *   hasMessages={messages.length > 0}
 *   onClearHistory={() => setShowClearDialog(true)}
 * />
 * ```
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/config/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/env.ts [app-client] (ecmascript)");
;
;
;
;
;
;
function ChatHeader({ hasMessages, onClearHistory }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 text-center relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/logotype.svg",
                alt: "GIMA",
                width: 80,
                height: 40,
                className: "mx-auto mb-2 dark:invert",
                priority: true
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-header.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                children: "Asistente Inteligente de Mantenimiento - UNEG"
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-header.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$help$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatHelp"], {}, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-header.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$theme$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-header.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_ENABLE_CHAT_PERSISTENCE && hasMessages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClearHistory,
                        title: "Borrar historial",
                        className: "p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors",
                        "aria-label": "Borrar historial de conversación",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-header.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-header.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-header.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-header.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = ChatHeader;
var _c;
__turbopack_context__.k.register(_c, "ChatHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/command.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Command",
    ()=>Command,
    "CommandDialog",
    ()=>CommandDialog,
    "CommandEmpty",
    ()=>CommandEmpty,
    "CommandGroup",
    ()=>CommandGroup,
    "CommandInput",
    ()=>CommandInput,
    "CommandItem",
    ()=>CommandItem,
    "CommandList",
    ()=>CommandList,
    "CommandSeparator",
    ()=>CommandSeparator,
    "CommandShortcut",
    ()=>CommandShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/dialog.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Command({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
        "data-slot": "command",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Command;
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                className: "sr-only",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/command.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/command.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ui/command.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-0", className),
                showCloseButton: showCloseButton,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Command, {
                    className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/command.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ui/command.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c1 = CommandDialog;
function CommandInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "command-input-wrapper",
        className: "flex h-9 items-center gap-2 border-b px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"], {
                className: "size-4 shrink-0 opacity-50"
            }, void 0, false, {
                fileName: "[project]/app/components/ui/command.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Input, {
                "data-slot": "command-input",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/ui/command.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c2 = CommandInput;
function CommandList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].List, {
        "data-slot": "command-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c3 = CommandList;
function CommandEmpty({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Empty, {
        "data-slot": "command-empty",
        className: "py-6 text-center text-sm",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c4 = CommandEmpty;
function CommandGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
        "data-slot": "command-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c5 = CommandGroup;
function CommandSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Separator, {
        "data-slot": "command-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c6 = CommandSeparator;
function CommandItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Item, {
        "data-slot": "command-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c7 = CommandItem;
function CommandShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "command-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/command.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c8 = CommandShortcut;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "Command");
__turbopack_context__.k.register(_c1, "CommandDialog");
__turbopack_context__.k.register(_c2, "CommandInput");
__turbopack_context__.k.register(_c3, "CommandList");
__turbopack_context__.k.register(_c4, "CommandEmpty");
__turbopack_context__.k.register(_c5, "CommandGroup");
__turbopack_context__.k.register(_c6, "CommandSeparator");
__turbopack_context__.k.register(_c7, "CommandItem");
__turbopack_context__.k.register(_c8, "CommandShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/hover-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverCard",
    ()=>HoverCard,
    "HoverCardContent",
    ()=>HoverCardContent,
    "HoverCardTrigger",
    ()=>HoverCardTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$hover$2d$card$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-hover-card/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function HoverCard({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$hover$2d$card$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "hover-card",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/hover-card.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = HoverCard;
function HoverCardTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$hover$2d$card$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "hover-card-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/hover-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = HoverCardTrigger;
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$hover$2d$card$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "hover-card-portal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$hover$2d$card$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "hover-card-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/app/components/ui/hover-card.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/hover-card.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c2 = HoverCardContent;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HoverCard");
__turbopack_context__.k.register(_c1, "HoverCardTrigger");
__turbopack_context__.k.register(_c2, "HoverCardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/input-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputGroup",
    ()=>InputGroup,
    "InputGroupAddon",
    ()=>InputGroupAddon,
    "InputGroupButton",
    ()=>InputGroupButton,
    "InputGroupInput",
    ()=>InputGroupInput,
    "InputGroupText",
    ()=>InputGroupText,
    "InputGroupTextarea",
    ()=>InputGroupTextarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/textarea.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function InputGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "input-group",
        role: "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none", "h-9 min-w-0 has-[>textarea]:h-auto", // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2", "has-[>[data-align=inline-end]]:[&>input]:pr-2", "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3", "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3", // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]", // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input-group.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = InputGroup;
const inputGroupAddonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50", {
    variants: {
        align: {
            "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
            "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
            "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
            "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
        }
    },
    defaultVariants: {
        align: "inline-start"
    }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "data-slot": "input-group-addon",
        "data-align": align,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputGroupAddonVariants({
            align
        }), className),
        onClick: (e)=>{
            if (e.target.closest("button")) {
                return;
            }
            e.currentTarget.parentElement?.querySelector("input")?.focus();
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input-group.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c1 = InputGroupAddon;
const inputGroupButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm shadow-none flex gap-2 items-center", {
    variants: {
        size: {
            xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
            sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
            "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
            "icon-sm": "size-8 p-0 has-[>svg]:p-0"
        }
    },
    defaultVariants: {
        size: "xs"
    }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: type,
        "data-size": size,
        variant: variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputGroupButtonVariants({
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input-group.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c2 = InputGroupButton;
function InputGroupText({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input-group.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c3 = InputGroupText;
function InputGroupInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        "data-slot": "input-group-control",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input-group.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_c4 = InputGroupInput;
function InputGroupTextarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
        "data-slot": "input-group-control",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/input-group.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_c5 = InputGroupTextarea;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "InputGroup");
__turbopack_context__.k.register(_c1, "InputGroupAddon");
__turbopack_context__.k.register(_c2, "InputGroupButton");
__turbopack_context__.k.register(_c3, "InputGroupText");
__turbopack_context__.k.register(_c4, "InputGroupInput");
__turbopack_context__.k.register(_c5, "InputGroupTextarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/app/components/ui/select.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/select.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/app/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-slot": "select-item-indicator",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ui/select.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/ui/select.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ui/select.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/ui/select.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/ui/select.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ui/select.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ai-elements/prompt-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromptInput",
    ()=>PromptInput,
    "PromptInputActionAddAttachments",
    ()=>PromptInputActionAddAttachments,
    "PromptInputActionMenu",
    ()=>PromptInputActionMenu,
    "PromptInputActionMenuContent",
    ()=>PromptInputActionMenuContent,
    "PromptInputActionMenuItem",
    ()=>PromptInputActionMenuItem,
    "PromptInputActionMenuTrigger",
    ()=>PromptInputActionMenuTrigger,
    "PromptInputAttachment",
    ()=>PromptInputAttachment,
    "PromptInputAttachments",
    ()=>PromptInputAttachments,
    "PromptInputBody",
    ()=>PromptInputBody,
    "PromptInputButton",
    ()=>PromptInputButton,
    "PromptInputCommand",
    ()=>PromptInputCommand,
    "PromptInputCommandEmpty",
    ()=>PromptInputCommandEmpty,
    "PromptInputCommandGroup",
    ()=>PromptInputCommandGroup,
    "PromptInputCommandInput",
    ()=>PromptInputCommandInput,
    "PromptInputCommandItem",
    ()=>PromptInputCommandItem,
    "PromptInputCommandList",
    ()=>PromptInputCommandList,
    "PromptInputCommandSeparator",
    ()=>PromptInputCommandSeparator,
    "PromptInputFooter",
    ()=>PromptInputFooter,
    "PromptInputHeader",
    ()=>PromptInputHeader,
    "PromptInputHoverCard",
    ()=>PromptInputHoverCard,
    "PromptInputHoverCardContent",
    ()=>PromptInputHoverCardContent,
    "PromptInputHoverCardTrigger",
    ()=>PromptInputHoverCardTrigger,
    "PromptInputProvider",
    ()=>PromptInputProvider,
    "PromptInputSelect",
    ()=>PromptInputSelect,
    "PromptInputSelectContent",
    ()=>PromptInputSelectContent,
    "PromptInputSelectItem",
    ()=>PromptInputSelectItem,
    "PromptInputSelectTrigger",
    ()=>PromptInputSelectTrigger,
    "PromptInputSelectValue",
    ()=>PromptInputSelectValue,
    "PromptInputSpeechButton",
    ()=>PromptInputSpeechButton,
    "PromptInputSubmit",
    ()=>PromptInputSubmit,
    "PromptInputTab",
    ()=>PromptInputTab,
    "PromptInputTabBody",
    ()=>PromptInputTabBody,
    "PromptInputTabItem",
    ()=>PromptInputTabItem,
    "PromptInputTabLabel",
    ()=>PromptInputTabLabel,
    "PromptInputTabsList",
    ()=>PromptInputTabsList,
    "PromptInputTextarea",
    ()=>PromptInputTextarea,
    "PromptInputTools",
    ()=>PromptInputTools,
    "usePromptInputAttachments",
    ()=>usePromptInputAttachments,
    "usePromptInputController",
    ()=>usePromptInputController,
    "useProviderAttachments",
    ()=>useProviderAttachments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$hover$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/hover-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/input-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-client] (ecmascript) <export default as CornerDownLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as MicIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperclipIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as PaperclipIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as PlusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquareIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as SquareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const PromptInputController = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const ProviderAttachmentsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const usePromptInputController = ()=>{
    _s();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PromptInputController);
    if (!ctx) {
        throw new Error("Wrap your component inside <PromptInputProvider> to use usePromptInputController().");
    }
    return ctx;
};
_s(usePromptInputController, "/dMy7t63NXD4eYACoT93CePwGrg=");
// Optional variants (do NOT throw). Useful for dual-mode components.
const useOptionalPromptInputController = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PromptInputController);
};
_s1(useOptionalPromptInputController, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const useProviderAttachments = ()=>{
    _s2();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProviderAttachmentsContext);
    if (!ctx) {
        throw new Error("Wrap your component inside <PromptInputProvider> to use useProviderAttachments().");
    }
    return ctx;
};
_s2(useProviderAttachments, "/dMy7t63NXD4eYACoT93CePwGrg=");
const useOptionalProviderAttachments = ()=>{
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProviderAttachmentsContext);
};
_s3(useOptionalProviderAttachments, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function PromptInputProvider({ initialInput: initialTextInput = "", children }) {
    _s4();
    // ----- textInput state
    const [textInput, setTextInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTextInput);
    const clearInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInputProvider.useCallback[clearInput]": ()=>setTextInput("")
    }["PromptInputProvider.useCallback[clearInput]"], []);
    // ----- attachments state (global when wrapped)
    const [attachmentFiles, setAttachmentFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "PromptInputProvider.useRef[openRef]": ()=>{}
    }["PromptInputProvider.useRef[openRef]"]);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInputProvider.useCallback[add]": (files)=>{
            const incoming = Array.from(files);
            if (incoming.length === 0) {
                return;
            }
            setAttachmentFiles({
                "PromptInputProvider.useCallback[add]": (prev)=>prev.concat(incoming.map({
                        "PromptInputProvider.useCallback[add]": (file)=>({
                                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                                type: "file",
                                url: URL.createObjectURL(file),
                                mediaType: file.type,
                                filename: file.name
                            })
                    }["PromptInputProvider.useCallback[add]"]))
            }["PromptInputProvider.useCallback[add]"]);
        }
    }["PromptInputProvider.useCallback[add]"], []);
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInputProvider.useCallback[remove]": (id)=>{
            setAttachmentFiles({
                "PromptInputProvider.useCallback[remove]": (prev)=>{
                    const found = prev.find({
                        "PromptInputProvider.useCallback[remove].found": (f)=>f.id === id
                    }["PromptInputProvider.useCallback[remove].found"]);
                    if (found?.url) {
                        URL.revokeObjectURL(found.url);
                    }
                    return prev.filter({
                        "PromptInputProvider.useCallback[remove]": (f)=>f.id !== id
                    }["PromptInputProvider.useCallback[remove]"]);
                }
            }["PromptInputProvider.useCallback[remove]"]);
        }
    }["PromptInputProvider.useCallback[remove]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInputProvider.useCallback[clear]": ()=>{
            setAttachmentFiles({
                "PromptInputProvider.useCallback[clear]": (prev)=>{
                    for (const f of prev){
                        if (f.url) {
                            URL.revokeObjectURL(f.url);
                        }
                    }
                    return [];
                }
            }["PromptInputProvider.useCallback[clear]"]);
        }
    }["PromptInputProvider.useCallback[clear]"], []);
    // Keep a ref to attachments for cleanup on unmount (avoids stale closure)
    const attachmentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(attachmentFiles);
    attachmentsRef.current = attachmentFiles;
    // Cleanup blob URLs on unmount to prevent memory leaks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptInputProvider.useEffect": ()=>{
            return ({
                "PromptInputProvider.useEffect": ()=>{
                    for (const f of attachmentsRef.current){
                        if (f.url) {
                            URL.revokeObjectURL(f.url);
                        }
                    }
                }
            })["PromptInputProvider.useEffect"];
        }
    }["PromptInputProvider.useEffect"], []);
    const openFileDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInputProvider.useCallback[openFileDialog]": ()=>{
            openRef.current?.();
        }
    }["PromptInputProvider.useCallback[openFileDialog]"], []);
    const attachments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptInputProvider.useMemo[attachments]": ()=>({
                files: attachmentFiles,
                add,
                remove,
                clear,
                openFileDialog,
                fileInputRef
            })
    }["PromptInputProvider.useMemo[attachments]"], [
        attachmentFiles,
        add,
        remove,
        clear,
        openFileDialog
    ]);
    const __registerFileInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInputProvider.useCallback[__registerFileInput]": (ref, open)=>{
            fileInputRef.current = ref.current;
            openRef.current = open;
        }
    }["PromptInputProvider.useCallback[__registerFileInput]"], []);
    const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptInputProvider.useMemo[controller]": ()=>({
                textInput: {
                    value: textInput,
                    setInput: setTextInput,
                    clear: clearInput
                },
                attachments,
                __registerFileInput
            })
    }["PromptInputProvider.useMemo[controller]"], [
        textInput,
        clearInput,
        attachments,
        __registerFileInput
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptInputController.Provider, {
        value: controller,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderAttachmentsContext.Provider, {
            value: attachments,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_s4(PromptInputProvider, "aQnUx0i+4RcJO3bcd8ef99Y8msU=");
_c = PromptInputProvider;
// ============================================================================
// Component Context & Hooks
// ============================================================================
const LocalAttachmentsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const usePromptInputAttachments = ()=>{
    _s5();
    // Dual-mode: prefer provider if present, otherwise use local
    const provider = useOptionalProviderAttachments();
    const local = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LocalAttachmentsContext);
    const context = provider ?? local;
    if (!context) {
        throw new Error("usePromptInputAttachments must be used within a PromptInput or PromptInputProvider");
    }
    return context;
};
_s5(usePromptInputAttachments, "gDHRxA+YNZEqQqgnIhDCdlKhdRo=", false, function() {
    return [
        useOptionalProviderAttachments
    ];
});
function PromptInputAttachment({ data, className, ...props }) {
    _s6();
    const attachments = usePromptInputAttachments();
    const filename = data.filename || "";
    const mediaType = data.mediaType?.startsWith("image/") && data.url ? "image" : "file";
    const isImage = mediaType === "image";
    const attachmentLabel = filename || (isImage ? "Image" : "Attachment");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptInputHoverCard, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$hover$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverCardTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex h-8 cursor-pointer select-none items-center gap-1.5 rounded-md border border-border px-1.5 font-medium text-sm transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50", className),
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative size-5 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex size-5 items-center justify-center overflow-hidden rounded bg-background transition-opacity group-hover:opacity-0",
                                    children: isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: filename || "attachment",
                                        className: "size-5 object-cover",
                                        height: 20,
                                        src: data.url,
                                        width: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex size-5 items-center justify-center text-muted-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperclipIcon$3e$__["PaperclipIcon"], {
                                            className: "size-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                        lineNumber: 321,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "aria-label": "Remove attachment",
                                    className: "absolute inset-0 size-5 cursor-pointer rounded p-0 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 [&>svg]:size-2.5",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        attachments.remove(data.id);
                                    },
                                    type: "button",
                                    variant: "ghost",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-1 truncate",
                            children: attachmentLabel
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, data.id, true, {
                    fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptInputHoverCardContent, {
                className: "w-auto p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-auto space-y-3",
                    children: [
                        isImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex max-h-96 w-96 items-center justify-center overflow-hidden rounded-md border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                alt: filename || "attachment preview",
                                className: "max-h-full max-w-full object-contain",
                                height: 384,
                                src: data.url,
                                width: 448
                            }, void 0, false, {
                                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1 space-y-1 px-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "truncate font-semibold text-sm leading-none",
                                        children: filename || (isImage ? "Image" : "Attachment")
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    data.mediaType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate font-mono text-muted-foreground text-xs",
                                        children: data.mediaType
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 300,
        columnNumber: 5
    }, this);
}
_s6(PromptInputAttachment, "6h6+XPGgBUyTGJWjK2YWL1+kIj0=", false, function() {
    return [
        usePromptInputAttachments
    ];
});
_c1 = PromptInputAttachment;
function PromptInputAttachments({ children, className, ...props }) {
    _s7();
    const attachments = usePromptInputAttachments();
    if (!attachments.files.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap items-center gap-2 p-3 w-full", className),
        ...props,
        children: attachments.files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children(file)
            }, file.id, false, {
                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                lineNumber: 399,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
_s7(PromptInputAttachments, "6h6+XPGgBUyTGJWjK2YWL1+kIj0=", false, function() {
    return [
        usePromptInputAttachments
    ];
});
_c2 = PromptInputAttachments;
const PromptInputActionAddAttachments = ({ label = "Add photos or files", ...props })=>{
    _s8();
    const attachments = usePromptInputAttachments();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
        ...props,
        onSelect: (e)=>{
            e.preventDefault();
            attachments.openFileDialog();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                className: "mr-2 size-4"
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            " ",
            label
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 418,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s8(PromptInputActionAddAttachments, "6h6+XPGgBUyTGJWjK2YWL1+kIj0=", false, function() {
    return [
        usePromptInputAttachments
    ];
});
_c3 = PromptInputActionAddAttachments;
const PromptInput = ({ className, accept, multiple, globalDrop, syncHiddenInput, maxFiles, maxFileSize, onError, onSubmit, children, ...props })=>{
    _s9();
    // Try to use a provider controller if present
    const controller = useOptionalPromptInputController();
    const usingProvider = !!controller;
    // Refs
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ----- Local attachments (only used when no provider)
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const files = usingProvider ? controller.attachments.files : items;
    // Keep a ref to files for cleanup on unmount (avoids stale closure)
    const filesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(files);
    filesRef.current = files;
    const openFileDialogLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInput.useCallback[openFileDialogLocal]": ()=>{
            inputRef.current?.click();
        }
    }["PromptInput.useCallback[openFileDialogLocal]"], []);
    const matchesAccept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInput.useCallback[matchesAccept]": (f)=>{
            if (!accept || accept.trim() === "") {
                return true;
            }
            const patterns = accept.split(",").map({
                "PromptInput.useCallback[matchesAccept].patterns": (s)=>s.trim()
            }["PromptInput.useCallback[matchesAccept].patterns"]).filter(Boolean);
            return patterns.some({
                "PromptInput.useCallback[matchesAccept]": (pattern)=>{
                    if (pattern.endsWith("/*")) {
                        const prefix = pattern.slice(0, -1); // e.g: image/* -> image/
                        return f.type.startsWith(prefix);
                    }
                    return f.type === pattern;
                }
            }["PromptInput.useCallback[matchesAccept]"]);
        }
    }["PromptInput.useCallback[matchesAccept]"], [
        accept
    ]);
    const addLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInput.useCallback[addLocal]": (fileList)=>{
            const incoming = Array.from(fileList);
            const accepted = incoming.filter({
                "PromptInput.useCallback[addLocal].accepted": (f)=>matchesAccept(f)
            }["PromptInput.useCallback[addLocal].accepted"]);
            if (incoming.length && accepted.length === 0) {
                onError?.({
                    code: "accept",
                    message: "No files match the accepted types."
                });
                return;
            }
            const withinSize = {
                "PromptInput.useCallback[addLocal].withinSize": (f)=>maxFileSize ? f.size <= maxFileSize : true
            }["PromptInput.useCallback[addLocal].withinSize"];
            const sized = accepted.filter(withinSize);
            if (accepted.length > 0 && sized.length === 0) {
                onError?.({
                    code: "max_file_size",
                    message: "All files exceed the maximum size."
                });
                return;
            }
            setItems({
                "PromptInput.useCallback[addLocal]": (prev)=>{
                    const capacity = typeof maxFiles === "number" ? Math.max(0, maxFiles - prev.length) : undefined;
                    const capped = typeof capacity === "number" ? sized.slice(0, capacity) : sized;
                    if (typeof capacity === "number" && sized.length > capacity) {
                        onError?.({
                            code: "max_files",
                            message: "Too many files. Some were not added."
                        });
                    }
                    const next = [];
                    for (const file of capped){
                        next.push({
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                            type: "file",
                            url: URL.createObjectURL(file),
                            mediaType: file.type,
                            filename: file.name
                        });
                    }
                    return prev.concat(next);
                }
            }["PromptInput.useCallback[addLocal]"]);
        }
    }["PromptInput.useCallback[addLocal]"], [
        matchesAccept,
        maxFiles,
        maxFileSize,
        onError
    ]);
    const removeLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInput.useCallback[removeLocal]": (id)=>setItems({
                "PromptInput.useCallback[removeLocal]": (prev)=>{
                    const found = prev.find({
                        "PromptInput.useCallback[removeLocal].found": (file)=>file.id === id
                    }["PromptInput.useCallback[removeLocal].found"]);
                    if (found?.url) {
                        URL.revokeObjectURL(found.url);
                    }
                    return prev.filter({
                        "PromptInput.useCallback[removeLocal]": (file)=>file.id !== id
                    }["PromptInput.useCallback[removeLocal]"]);
                }
            }["PromptInput.useCallback[removeLocal]"])
    }["PromptInput.useCallback[removeLocal]"], []);
    const clearLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInput.useCallback[clearLocal]": ()=>setItems({
                "PromptInput.useCallback[clearLocal]": (prev)=>{
                    for (const file of prev){
                        if (file.url) {
                            URL.revokeObjectURL(file.url);
                        }
                    }
                    return [];
                }
            }["PromptInput.useCallback[clearLocal]"])
    }["PromptInput.useCallback[clearLocal]"], []);
    const add = usingProvider ? controller.attachments.add : addLocal;
    const remove = usingProvider ? controller.attachments.remove : removeLocal;
    const clear = usingProvider ? controller.attachments.clear : clearLocal;
    const openFileDialog = usingProvider ? controller.attachments.openFileDialog : openFileDialogLocal;
    // Let provider know about our hidden file input so external menus can call openFileDialog()
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptInput.useEffect": ()=>{
            if (!usingProvider) return;
            controller.__registerFileInput(inputRef, {
                "PromptInput.useEffect": ()=>inputRef.current?.click()
            }["PromptInput.useEffect"]);
        }
    }["PromptInput.useEffect"], [
        usingProvider,
        controller
    ]);
    // Note: File input cannot be programmatically set for security reasons
    // The syncHiddenInput prop is no longer functional
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptInput.useEffect": ()=>{
            if (syncHiddenInput && inputRef.current && files.length === 0) {
                inputRef.current.value = "";
            }
        }
    }["PromptInput.useEffect"], [
        files,
        syncHiddenInput
    ]);
    // Attach drop handlers on nearest form and document (opt-in)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptInput.useEffect": ()=>{
            const form = formRef.current;
            if (!form) return;
            if (globalDrop) return; // when global drop is on, let the document-level handler own drops
            const onDragOver = {
                "PromptInput.useEffect.onDragOver": (e)=>{
                    if (e.dataTransfer?.types?.includes("Files")) {
                        e.preventDefault();
                    }
                }
            }["PromptInput.useEffect.onDragOver"];
            const onDrop = {
                "PromptInput.useEffect.onDrop": (e)=>{
                    if (e.dataTransfer?.types?.includes("Files")) {
                        e.preventDefault();
                    }
                    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
                        add(e.dataTransfer.files);
                    }
                }
            }["PromptInput.useEffect.onDrop"];
            form.addEventListener("dragover", onDragOver);
            form.addEventListener("drop", onDrop);
            return ({
                "PromptInput.useEffect": ()=>{
                    form.removeEventListener("dragover", onDragOver);
                    form.removeEventListener("drop", onDrop);
                }
            })["PromptInput.useEffect"];
        }
    }["PromptInput.useEffect"], [
        add,
        globalDrop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptInput.useEffect": ()=>{
            if (!globalDrop) return;
            const onDragOver = {
                "PromptInput.useEffect.onDragOver": (e)=>{
                    if (e.dataTransfer?.types?.includes("Files")) {
                        e.preventDefault();
                    }
                }
            }["PromptInput.useEffect.onDragOver"];
            const onDrop = {
                "PromptInput.useEffect.onDrop": (e)=>{
                    if (e.dataTransfer?.types?.includes("Files")) {
                        e.preventDefault();
                    }
                    if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
                        add(e.dataTransfer.files);
                    }
                }
            }["PromptInput.useEffect.onDrop"];
            document.addEventListener("dragover", onDragOver);
            document.addEventListener("drop", onDrop);
            return ({
                "PromptInput.useEffect": ()=>{
                    document.removeEventListener("dragover", onDragOver);
                    document.removeEventListener("drop", onDrop);
                }
            })["PromptInput.useEffect"];
        }
    }["PromptInput.useEffect"], [
        add,
        globalDrop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptInput.useEffect": ()=>({
                "PromptInput.useEffect": ()=>{
                    if (!usingProvider) {
                        for (const f of filesRef.current){
                            if (f.url) URL.revokeObjectURL(f.url);
                        }
                    }
                }
            })["PromptInput.useEffect"]
    }["PromptInput.useEffect"], // eslint-disable-next-line react-hooks/exhaustive-deps -- cleanup only on unmount; filesRef always current
    [
        usingProvider
    ]);
    const handleChange = (event)=>{
        if (event.currentTarget.files) {
            add(event.currentTarget.files);
        }
        // Reset input value to allow selecting files that were previously removed
        event.currentTarget.value = "";
    };
    const convertBlobUrlToDataUrl = async (url)=>{
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve)=>{
                const reader = new FileReader();
                reader.onloadend = ()=>resolve(reader.result);
                reader.onerror = ()=>resolve(null);
                reader.readAsDataURL(blob);
            });
        } catch  {
            return null;
        }
    };
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PromptInput.useMemo[ctx]": ()=>({
                files: files.map({
                    "PromptInput.useMemo[ctx]": (item)=>({
                            ...item,
                            id: item.id
                        })
                }["PromptInput.useMemo[ctx]"]),
                add,
                remove,
                clear,
                openFileDialog,
                fileInputRef: inputRef
            })
    }["PromptInput.useMemo[ctx]"], [
        files,
        add,
        remove,
        clear,
        openFileDialog
    ]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const text = usingProvider ? controller.textInput.value : (()=>{
            const formData = new FormData(form);
            return formData.get("message") || "";
        })();
        // Reset form immediately after capturing text to avoid race condition
        // where user input during async blob conversion would be lost
        if (!usingProvider) {
            form.reset();
        }
        // Convert blob URLs to data URLs asynchronously
        Promise.all(files.map(async ({ id, ...item })=>{
            if (item.url && item.url.startsWith("blob:")) {
                const dataUrl = await convertBlobUrlToDataUrl(item.url);
                // If conversion failed, keep the original blob URL
                return {
                    ...item,
                    url: dataUrl ?? item.url
                };
            }
            return item;
        })).then((convertedFiles)=>{
            try {
                const result = onSubmit({
                    text,
                    files: convertedFiles
                }, event);
                // Handle both sync and async onSubmit
                if (result instanceof Promise) {
                    result.then(()=>{
                        clear();
                        if (usingProvider) {
                            controller.textInput.clear();
                        }
                    }).catch(()=>{
                    // Don't clear on error - user may want to retry
                    });
                } else {
                    // Sync function completed without throwing, clear attachments
                    clear();
                    if (usingProvider) {
                        controller.textInput.clear();
                    }
                }
            } catch  {
            // Don't clear on error - user may want to retry
            }
        }).catch(()=>{
        // Don't clear on error - user may want to retry
        });
    };
    // Render with or without local provider
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                accept: accept,
                "aria-label": "Upload files",
                className: "hidden",
                multiple: multiple,
                onChange: handleChange,
                ref: inputRef,
                title: "Upload files",
                type: "file"
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full", className),
                onSubmit: handleSubmit,
                ref: formRef,
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
                    className: "overflow-hidden",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                    lineNumber: 792,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                lineNumber: 786,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    return usingProvider ? inner : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocalAttachmentsContext.Provider, {
        value: ctx,
        children: inner
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 800,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s9(PromptInput, "H46Keu8N5CYY0MyPoWA8k19C9/8=", false, function() {
    return [
        useOptionalPromptInputController
    ];
});
_c4 = PromptInput;
const PromptInputBody = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("contents", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 812,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = PromptInputBody;
const PromptInputTextarea = ({ onChange, className, placeholder = "What would you like to know?", ...props })=>{
    _s10();
    const controller = useOptionalPromptInputController();
    const attachments = usePromptInputAttachments();
    const [isComposing, setIsComposing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            if (isComposing || e.nativeEvent.isComposing) {
                return;
            }
            if (e.shiftKey) {
                return;
            }
            e.preventDefault();
            // Check if the submit button is disabled before submitting
            const form = e.currentTarget.form;
            const submitButton = form?.querySelector('button[type="submit"]');
            if (submitButton?.disabled) {
                return;
            }
            form?.requestSubmit();
        }
        // Remove last attachment when Backspace is pressed and textarea is empty
        if (e.key === "Backspace" && e.currentTarget.value === "" && attachments.files.length > 0) {
            e.preventDefault();
            const lastAttachment = attachments.files.at(-1);
            if (lastAttachment) {
                attachments.remove(lastAttachment.id);
            }
        }
    };
    const handlePaste = (event)=>{
        const items = event.clipboardData?.items;
        if (!items) {
            return;
        }
        const files = [];
        for (const item of items){
            if (item.kind === "file") {
                const file = item.getAsFile();
                if (file) {
                    files.push(file);
                }
            }
        }
        if (files.length > 0) {
            event.preventDefault();
            attachments.add(files);
        }
    };
    const controlledProps = controller ? {
        value: controller.textInput.value,
        onChange: (e)=>{
            controller.textInput.setInput(e.currentTarget.value);
            onChange?.(e);
        }
    } : {
        onChange
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroupTextarea"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("field-sizing-content max-h-48 min-h-16", className),
        name: "message",
        onCompositionEnd: ()=>setIsComposing(false),
        onCompositionStart: ()=>setIsComposing(true),
        onKeyDown: handleKeyDown,
        onPaste: handlePaste,
        placeholder: placeholder,
        ...props,
        ...controlledProps
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 902,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s10(PromptInputTextarea, "8OqP5sboUcr/uWrYgyFEnn1iMEw=", false, function() {
    return [
        useOptionalPromptInputController,
        usePromptInputAttachments
    ];
});
_c6 = PromptInputTextarea;
const PromptInputHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroupAddon"], {
        align: "block-end",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("order-first flex-wrap gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 925,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = PromptInputHeader;
const PromptInputFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroupAddon"], {
        align: "block-end",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("justify-between gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 941,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = PromptInputFooter;
const PromptInputTools = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 954,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = PromptInputTools;
const PromptInputButton = ({ variant = "ghost", className, size, ...props })=>{
    const newSize = size ?? (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(props.children) > 1 ? "sm" : "icon-sm");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroupButton"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        size: newSize,
        type: "button",
        variant: variant,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 969,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c10 = PromptInputButton;
const PromptInputActionMenu = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 981,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = PromptInputActionMenu;
const PromptInputActionMenuTrigger = ({ className, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptInputButton, {
            className: className,
            ...props,
            children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
                lineNumber: 993,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
            lineNumber: 992,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 991,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = PromptInputActionMenuTrigger;
const PromptInputActionMenuContent = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
        align: "start",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1005,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = PromptInputActionMenuContent;
const PromptInputActionMenuItem = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1015,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = PromptInputActionMenuItem;
const PromptInputSubmit = ({ className, variant = "default", size = "icon-sm", status, children, ...props })=>{
    let Icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeftIcon$3e$__["CornerDownLeftIcon"], {
        className: "size-4"
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1033,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0));
    if (status === "submitted") {
        Icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
            className: "size-4 animate-spin"
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
            lineNumber: 1036,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    } else if (status === "streaming") {
        Icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquareIcon$3e$__["SquareIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
            lineNumber: 1038,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    } else if (status === "error") {
        Icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
            lineNumber: 1040,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$input$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroupButton"], {
        "aria-label": "Submit",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        size: size,
        type: "submit",
        variant: variant,
        ...props,
        children: children ?? Icon
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1044,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c15 = PromptInputSubmit;
const PromptInputSpeechButton = ({ className, textareaRef, onTranscriptionChange, ...props })=>{
    _s11();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recognition, setRecognition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptInputSpeechButton.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                const speechRecognition = new SpeechRecognition();
                speechRecognition.continuous = true;
                speechRecognition.interimResults = true;
                speechRecognition.lang = "en-US";
                speechRecognition.onstart = ({
                    "PromptInputSpeechButton.useEffect": ()=>{
                        setIsListening(true);
                    }
                })["PromptInputSpeechButton.useEffect"];
                speechRecognition.onend = ({
                    "PromptInputSpeechButton.useEffect": ()=>{
                        setIsListening(false);
                    }
                })["PromptInputSpeechButton.useEffect"];
                speechRecognition.onresult = ({
                    "PromptInputSpeechButton.useEffect": (event)=>{
                        let finalTranscript = "";
                        for(let i = event.resultIndex; i < event.results.length; i++){
                            const result = event.results[i];
                            if (result.isFinal) {
                                finalTranscript += result[0]?.transcript ?? "";
                            }
                        }
                        if (finalTranscript && textareaRef?.current) {
                            const textarea = textareaRef.current;
                            const currentValue = textarea.value;
                            const newValue = currentValue + (currentValue ? " " : "") + finalTranscript;
                            textarea.value = newValue;
                            textarea.dispatchEvent(new Event("input", {
                                bubbles: true
                            }));
                            onTranscriptionChange?.(newValue);
                        }
                    }
                })["PromptInputSpeechButton.useEffect"];
                speechRecognition.onerror = ({
                    "PromptInputSpeechButton.useEffect": (event)=>{
                        console.error("Speech recognition error:", event.error);
                        setIsListening(false);
                    }
                })["PromptInputSpeechButton.useEffect"];
                recognitionRef.current = speechRecognition;
                setRecognition(speechRecognition);
            }
            return ({
                "PromptInputSpeechButton.useEffect": ()=>{
                    if (recognitionRef.current) {
                        recognitionRef.current.stop();
                    }
                }
            })["PromptInputSpeechButton.useEffect"];
        }
    }["PromptInputSpeechButton.useEffect"], [
        textareaRef,
        onTranscriptionChange
    ]);
    const toggleListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PromptInputSpeechButton.useCallback[toggleListening]": ()=>{
            if (!recognition) {
                return;
            }
            if (isListening) {
                recognition.stop();
            } else {
                recognition.start();
            }
        }
    }["PromptInputSpeechButton.useCallback[toggleListening]"], [
        recognition,
        isListening
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptInputButton, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative transition-all duration-200", isListening && "animate-pulse bg-accent text-accent-foreground", className),
        disabled: !recognition,
        onClick: toggleListening,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicIcon$3e$__["MicIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
            lineNumber: 1212,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1202,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s11(PromptInputSpeechButton, "ie31K7pQCvQh/wuICE0Q/aDW1Jk=");
_c16 = PromptInputSpeechButton;
const PromptInputSelect = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1220,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = PromptInputSelect;
const PromptInputSelectTrigger = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-none bg-transparent font-medium text-muted-foreground shadow-none transition-colors", "hover:bg-accent hover:text-foreground aria-expanded:bg-accent aria-expanded:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1231,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c18 = PromptInputSelectTrigger;
const PromptInputSelectContent = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1249,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = PromptInputSelectContent;
const PromptInputSelectItem = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1258,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c20 = PromptInputSelectItem;
const PromptInputSelectValue = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1267,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c21 = PromptInputSelectValue;
const PromptInputHoverCard = ({ openDelay = 0, closeDelay = 0, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$hover$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverCard"], {
        closeDelay: closeDelay,
        openDelay: openDelay,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1277,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c22 = PromptInputHoverCard;
const PromptInputHoverCardTrigger = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$hover$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverCardTrigger"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1286,
        columnNumber: 6
    }, ("TURBOPACK compile-time value", void 0));
_c23 = PromptInputHoverCardTrigger;
const PromptInputHoverCardContent = ({ align = "start", ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$hover$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverCardContent"], {
        align: align,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1296,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c24 = PromptInputHoverCardContent;
const PromptInputTabsList = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1304,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0));
_c25 = PromptInputTabsList;
const PromptInputTab = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1311,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0));
_c26 = PromptInputTab;
const PromptInputTabLabel = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-2 px-3 font-medium text-muted-foreground text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1319,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c27 = PromptInputTabLabel;
const PromptInputTabBody = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1334,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c28 = PromptInputTabBody;
const PromptInputTabItem = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-3 py-2 text-xs hover:bg-accent", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1343,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c29 = PromptInputTabItem;
const PromptInputCommand = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1357,
        columnNumber: 32
    }, ("TURBOPACK compile-time value", void 0));
_c30 = PromptInputCommand;
const PromptInputCommandInput = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInput"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1365,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c31 = PromptInputCommandInput;
const PromptInputCommandList = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1374,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c32 = PromptInputCommandList;
const PromptInputCommandEmpty = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1383,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c33 = PromptInputCommandEmpty;
const PromptInputCommandGroup = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandGroup"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1392,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c34 = PromptInputCommandGroup;
const PromptInputCommandItem = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandItem"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1401,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c35 = PromptInputCommandItem;
const PromptInputCommandSeparator = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandSeparator"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/ai-elements/prompt-input.tsx",
        lineNumber: 1412,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c36 = PromptInputCommandSeparator;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36;
__turbopack_context__.k.register(_c, "PromptInputProvider");
__turbopack_context__.k.register(_c1, "PromptInputAttachment");
__turbopack_context__.k.register(_c2, "PromptInputAttachments");
__turbopack_context__.k.register(_c3, "PromptInputActionAddAttachments");
__turbopack_context__.k.register(_c4, "PromptInput");
__turbopack_context__.k.register(_c5, "PromptInputBody");
__turbopack_context__.k.register(_c6, "PromptInputTextarea");
__turbopack_context__.k.register(_c7, "PromptInputHeader");
__turbopack_context__.k.register(_c8, "PromptInputFooter");
__turbopack_context__.k.register(_c9, "PromptInputTools");
__turbopack_context__.k.register(_c10, "PromptInputButton");
__turbopack_context__.k.register(_c11, "PromptInputActionMenu");
__turbopack_context__.k.register(_c12, "PromptInputActionMenuTrigger");
__turbopack_context__.k.register(_c13, "PromptInputActionMenuContent");
__turbopack_context__.k.register(_c14, "PromptInputActionMenuItem");
__turbopack_context__.k.register(_c15, "PromptInputSubmit");
__turbopack_context__.k.register(_c16, "PromptInputSpeechButton");
__turbopack_context__.k.register(_c17, "PromptInputSelect");
__turbopack_context__.k.register(_c18, "PromptInputSelectTrigger");
__turbopack_context__.k.register(_c19, "PromptInputSelectContent");
__turbopack_context__.k.register(_c20, "PromptInputSelectItem");
__turbopack_context__.k.register(_c21, "PromptInputSelectValue");
__turbopack_context__.k.register(_c22, "PromptInputHoverCard");
__turbopack_context__.k.register(_c23, "PromptInputHoverCardTrigger");
__turbopack_context__.k.register(_c24, "PromptInputHoverCardContent");
__turbopack_context__.k.register(_c25, "PromptInputTabsList");
__turbopack_context__.k.register(_c26, "PromptInputTab");
__turbopack_context__.k.register(_c27, "PromptInputTabLabel");
__turbopack_context__.k.register(_c28, "PromptInputTabBody");
__turbopack_context__.k.register(_c29, "PromptInputTabItem");
__turbopack_context__.k.register(_c30, "PromptInputCommand");
__turbopack_context__.k.register(_c31, "PromptInputCommandInput");
__turbopack_context__.k.register(_c32, "PromptInputCommandList");
__turbopack_context__.k.register(_c33, "PromptInputCommandEmpty");
__turbopack_context__.k.register(_c34, "PromptInputCommandGroup");
__turbopack_context__.k.register(_c35, "PromptInputCommandItem");
__turbopack_context__.k.register(_c36, "PromptInputCommandSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-input-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInputArea",
    ()=>ChatInputArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ai-elements/prompt-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/features/voice/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/voice-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$quick$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-quick-actions.tsx [app-client] (ecmascript)");
;
;
;
;
;
function ChatInputArea({ textareaRef, input: _input, onInputChange, onSubmit, canSend, status, isAnalyzingFile: _isAnalyzingFile, voiceProps, onQuickAction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInput"], {
        onSubmit: onSubmit,
        className: "mt-2",
        globalDrop: true,
        multiple: true,
        accept: "image/*,application/pdf",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputAttachments"], {
                    children: (attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputAttachment"], {
                            data: attachment
                        }, void 0, false, {
                            fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                            lineNumber: 55,
                            columnNumber: 28
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputBody"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputTextarea"], {
                    ref: textareaRef,
                    onChange: onInputChange,
                    placeholder: "Escribe tu pregunta o sube imágenes/PDFs..."
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputFooter"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputTools"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputActionMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputActionMenuTrigger"], {}, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputActionMenuContent"], {
                                        children: [
                                            onQuickAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                        className: "text-xs",
                                                        children: "Herramientas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$quick$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUICK_ACTIONS"].map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputActionMenuItem"], {
                                                            onClick: ()=>onQuickAction(action.prompt),
                                                            className: "gap-2 cursor-pointer",
                                                            children: [
                                                                action.icon,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: action.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, action.label, true, {
                                                            fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputActionAddAttachments"], {
                                                label: "Añadir fotos o archivos",
                                                className: "gap-2 cursor-pointer [&>svg]:!mr-0 [&>svg]:!size-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceButton"], {
                                ...voiceProps
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ai$2d$elements$2f$prompt$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInputSubmit"], {
                        disabled: !canSend,
                        status: status
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-input-area.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = ChatInputArea;
var _c;
__turbopack_context__.k.register(_c, "ChatInputArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-status-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatStatusIndicators",
    ()=>ChatStatusIndicators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function ChatStatusIndicators({ voiceError, isListening, isProcessing, isAnalyzingImage, fileType = 'image', chatError, mode = 'native' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[36px] flex items-center justify-center",
        children: [
            voiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: voiceError
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            isListening && !voiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs', mode === 'gemini' ? 'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300' : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex size-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', mode === 'gemini' ? 'bg-blue-400' : 'bg-gray-400')
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative inline-flex rounded-full size-2', mode === 'gemini' ? 'bg-blue-500' : 'bg-gray-500')
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    mode === 'gemini' ? 'Grabando para IA...' : 'Escuchando...'
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "size-3 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    "Procesando voz con IA..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            isAnalyzingImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "size-3 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    fileType === 'pdf' ? '📄 Extrayendo contenido del PDF...' : '📷 Analizando contenido de la imagen...'
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            chatError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "❌ Error de conexión - Intenta de nuevo"
                }, void 0, false, {
                    fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-status-bar.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = ChatStatusIndicators;
var _c;
__turbopack_context__.k.register(_c, "ChatStatusIndicators");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constantes de configuración del chat
 * Configuración centralizada para el comportamiento de la interfaz de chat
 */ __turbopack_context__.s([
    "CHAT_CONFIG",
    ()=>CHAT_CONFIG,
    "CHAT_MESSAGES",
    ()=>CHAT_MESSAGES,
    "KEYBOARD_SHORTCUTS",
    ()=>KEYBOARD_SHORTCUTS
]);
const CHAT_CONFIG = {
    /**
   * Longitud mínima de texto requerida antes de analizar imágenes
   * Evita prompts vacíos o muy cortos con imágenes
   */ MIN_TEXT_LENGTH_FOR_IMAGE: 10,
    /**
   * Tamaño máximo de archivo para subidas (en bytes)
   * Límite actual: 5MB
   */ MAX_FILE_SIZE: 5 * 1024 * 1024,
    /**
   * Tipos MIME de imagen permitidos para subida
   */ ALLOWED_IMAGE_TYPES: [
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/gif'
    ],
    /**
   * Retardo de debounce para cambios de input (en milisegundos)
   */ INPUT_DEBOUNCE_MS: 300
};
const CHAT_MESSAGES = {
    /**
   * Prefijo para resultados de análisis de imagen
   */ IMAGE_ANALYSIS_PREFIX: '📷 **Análisis de Imagen Subida por el Usuario**',
    /**
   * Mensajes de diálogo de confirmación
   */ CONFIRM_CLEAR_HISTORY: '¿Borrar todo el historial de conversación?',
    CONFIRM_DELETE_MESSAGE: '¿Eliminar este mensaje?',
    /**
   * Mensajes de error
   */ ERROR_ANALYZING_IMAGE: 'Error al analizar la imagen',
    ERROR_SENDING_MESSAGE: 'Error al enviar mensaje',
    ERROR_FILE_TOO_LARGE: 'El archivo es demasiado grande',
    ERROR_INVALID_FILE_TYPE: 'Tipo de archivo no permitido',
    /**
   * Mensajes de estado
   */ STATUS_ANALYZING: 'Analizando imagen...',
    STATUS_SENDING: 'Enviando mensaje...',
    STATUS_TYPING: 'Escribiendo...',
    /**
   * Texto placeholder
   */ PLACEHOLDER_DEFAULT: 'Escribe un mensaje...',
    PLACEHOLDER_WITH_IMAGE: 'Describe la imagen o haz una pregunta...'
};
const KEYBOARD_SHORTCUTS = {
    /**
   * Enviar mensaje
   */ SUBMIT: 'Enter',
    SUBMIT_WITH_SHIFT: 'Shift+Enter',
    /**
   * Borrar historial de conversación
   */ CLEAR_HISTORY: 'Ctrl+K',
    CLEAR_HISTORY_MAC: 'Cmd+K',
    /**
   * Enfocar input
   */ FOCUS_INPUT: '/'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/hooks/use-chat-actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatActions",
    ()=>useChatActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useChatActions({ reload, clearHistory, setInput }) {
    _s();
    const handleRegenerate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatActions.useCallback[handleRegenerate]": ()=>{
            reload();
        }
    }["useChatActions.useCallback[handleRegenerate]"], [
        reload
    ]);
    const handleClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatActions.useCallback[handleClear]": ()=>{
            clearHistory();
            setInput('');
        }
    }["useChatActions.useCallback[handleClear]"], [
        clearHistory,
        setInput
    ]);
    const handleCopyMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatActions.useCallback[handleCopyMessage]": async (text, toast)=>{
            try {
                await navigator.clipboard.writeText(text);
                toast.success('Copiado', 'Mensaje copiado al portapapeles');
            } catch  {
                toast.error('Error', 'No se pudo copiar el mensaje');
            }
        }
    }["useChatActions.useCallback[handleCopyMessage]"], []);
    return {
        handleRegenerate,
        handleClear,
        handleCopyMessage
    };
}
_s(useChatActions, "qeWQAl7XIioiGKfBmDQ8mC9CwVE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/use-keyboard-shortcuts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useKeyboardShortcuts(shortcuts, enabled = true) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyboardShortcuts.useEffect": ()=>{
            if (!enabled) return;
            const handleKeyDown = {
                "useKeyboardShortcuts.useEffect.handleKeyDown": (event)=>{
                    for (const shortcut of shortcuts){
                        const ctrlMatch = shortcut.ctrlKey === undefined || shortcut.ctrlKey === event.ctrlKey;
                        const shiftMatch = shortcut.shiftKey === undefined || shortcut.shiftKey === event.shiftKey;
                        const altMatch = shortcut.altKey === undefined || shortcut.altKey === event.altKey;
                        const keyMatch = shortcut.key.toLowerCase() === event.key.toLowerCase();
                        if (ctrlMatch && shiftMatch && altMatch && keyMatch) {
                            event.preventDefault();
                            shortcut.handler();
                            break;
                        }
                    }
                }
            }["useKeyboardShortcuts.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "useKeyboardShortcuts.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["useKeyboardShortcuts.useEffect"];
        }
    }["useKeyboardShortcuts.useEffect"], [
        shortcuts,
        enabled
    ]);
}
_s(useKeyboardShortcuts, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/hooks/use-chat-keyboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatKeyboard",
    ()=>useChatKeyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$keyboard$2d$shortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/use-keyboard-shortcuts.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useChatKeyboard({ onSubmit, onCancelVoice, onFocusInput, canSubmit, isListening }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$keyboard$2d$shortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])([
        {
            key: 'Enter',
            ctrlKey: true,
            handler: onSubmit,
            description: 'Enviar mensaje'
        },
        {
            key: 'Escape',
            handler: onCancelVoice,
            description: 'Cancelar grabación de voz'
        },
        {
            key: '/',
            handler: onFocusInput,
            description: 'Enfocar textarea'
        }
    ], canSubmit && !isListening);
}
_s(useChatKeyboard, "kYp0osVtkHT0IOo6qyNGP0vsJXI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$keyboard$2d$shortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:e3e7d0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403c66c2e62acf0f17eb83580dcf9547380831a4c4":"analyzePartImage"},"app/actions/vision.ts",""] */ __turbopack_context__.s([
    "analyzePartImage",
    ()=>analyzePartImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var analyzePartImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("403c66c2e62acf0f17eb83580dcf9547380831a4c4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzePartImage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdmlzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSAnQGFpLXNkay9nb29nbGUnO1xuaW1wb3J0IHsgZ2VuZXJhdGVPYmplY3QgfSBmcm9tICdhaSc7XG5cbmltcG9ydCB7IElOVkVOVE9SWV9QUk9NUFQgfSBmcm9tICdAL2FwcC9jb25maWcnO1xuaW1wb3J0IHsgTUFYX0lNQUdFX1NJWkVfTUIsIGJ5dGVzVG9NQiB9IGZyb20gJ0AvYXBwL2NvbmZpZy9saW1pdHMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQC9hcHAvbGliL2xvZ2dlcic7XG5cbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5jb25zdCBwYXJ0QW5hbHlzaXNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHRpcG9fYXJ0aWN1bG86IHouZW51bShbJ21vYmlsaWFyaW8nLCAnZXF1aXBvJ10pLmRlc2NyaWJlKCdDbGFzaWZpY2FjacOzbiBnZW5lcmFsIGRlbCBhcnTDrWN1bG8nKSxcbiAgY29kaWdvOiB6LnN0cmluZygpLm9wdGlvbmFsKCkuZGVzY3JpYmUoJ0PDs2RpZ28gaWRlbnRpZmljYWRvIHZpc2libGUgZW4gbGEgcGllemEnKSxcbiAgZGVzY3JpcGNpb246IHouc3RyaW5nKCkuZGVzY3JpYmUoJ0Rlc2NyaXBjacOzbiBkZXRhbGxhZGEgZGUgbGEgcGllemEgbyBlcXVpcG8nKSxcbiAgbWFyY2E6IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnTWFyY2EgZGVsIGZhYnJpY2FudGUgc2kgZXMgdmlzaWJsZScpLFxuICBtb2RlbG86IHouc3RyaW5nKCkub3B0aW9uYWwoKS5kZXNjcmliZSgnTW9kZWxvIGRlbCBlcXVpcG8gc2kgZXMgdmlzaWJsZScpLFxuICBjYW50aWRhZF9kZXRlY3RhZGE6IHoubnVtYmVyKCkuZGVzY3JpYmUoJ0NhbnRpZGFkIGRlIHBpZXphcyBkZSBlc3RlIHRpcG8gZGV0ZWN0YWRhcyBlbiBsYSBmb3RvJyksXG4gIGVzdGFkb19maXNpY286IHpcbiAgICAuZW51bShbJ251ZXZvJywgJ3VzYWRvJywgJ2Rhw7FhZG8nLCAncmVxdWllcmVfaW5zcGVjY2lvbiddKVxuICAgIC5kZXNjcmliZSgnQ29uZGljacOzbiB2aXN1YWwgZGUgbGEgcGllemEnKSxcbiAgcmVjb21lbmRhY2lvbjogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZSgnUmVjb21lbmRhY2nDs24gYnJldmUgc29icmUgZWwgbWFuZWpvIG8gbWFudGVuaW1pZW50byBkZSBsYSBwaWV6YScpLFxuICBuaXZlbF9jb25maWFuemE6IHpcbiAgICAuZW51bShbJ2FsdGEnLCAnbWVkaWEnLCAnYmFqYSddKVxuICAgIC5kZXNjcmliZSgnQ29uZmlhbnphIGRlIGxhIElBIHNvYnJlIHN1IGlkZW50aWZpY2FjacOzbicpLFxufSk7XG5cbnR5cGUgUGFydEFuYWx5c2lzUmVzdWx0ID0gei5pbmZlcjx0eXBlb2YgcGFydEFuYWx5c2lzU2NoZW1hPjtcblxuLyoqXG4gKiBBbmFsaXphIHVuYSBpbWFnZW4gZGUgdW5hIHBpZXphIGluZHVzdHJpYWwgcGFyYSBpbnZlbnRhcmlvLlxuICogVXRpbGl6YSBHZW1pbmkgVmlzaW9uIHBhcmEgaWRlbnRpZmljYXIsIGRlc2NyaWJpciB5IGV2YWx1YXIgZWwgZXN0YWRvIGRlIGxhIHBpZXphLlxuICogQHBhcmFtIGZvcm1EYXRhIC0gRm9ybURhdGEgY29udGVuaWVuZG8gZWwgYXJjaGl2byAnZmlsZScgeSAncHJvbXB0JyBvcGNpb25hbFxuICogQHJldHVybnMgT2JqZXRvIGVzdHJ1Y3R1cmFkbyBnZW5lcmFkbyBwb3IgbGEgSUEgZW4gZm9ybWF0byBKU09OXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplUGFydEltYWdlKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyByZXN1bHQ6IFBhcnRBbmFseXNpc1Jlc3VsdCB8IG51bGw7IHN1Y2Nlc3M6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgbGV0IGN1c3RvbVByb21wdCA9IGZvcm1EYXRhLmdldCgncHJvbXB0JykgYXMgc3RyaW5nIHwgbnVsbDtcblxuICAgIGlmICghZmlsZSkgdGhyb3cgbmV3IEVycm9yKCdJbWFnZW4gdmFjw61hJyk7XG5cbiAgICAvLyBWYWxpZGFyIHRhbWHDsW8gZGUgbGEgaW1hZ2VuXG4gICAgY29uc3Qgc2l6ZUluQnl0ZXMgPSBmaWxlLnNpemU7XG4gICAgY29uc3Qgc2l6ZUluTUIgPSBieXRlc1RvTUIoc2l6ZUluQnl0ZXMpO1xuXG4gICAgaWYgKHNpemVJbk1CID4gTUFYX0lNQUdFX1NJWkVfTUIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlbiBkZW1hc2lhZG8gZ3JhbmRlICgke3NpemVJbk1CLnRvRml4ZWQoMSl9TUIpLiBNw6F4aW1vIHBlcm1pdGlkbzogJHtNQVhfSU1BR0VfU0laRV9NQn1NQmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJhc2U2NENvbnRlbnQgPSBCdWZmZXIuZnJvbShidWZmZXIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlT2JqZWN0KHtcbiAgICAgIG1vZGVsOiBnb29nbGUoJ2dlbWluaS0yLjUtZmxhc2gnKSxcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjEsIC8vIE1lbm9yIHRlbXBlcmF0dXJhIHBhcmEgZm9yemFyIGFkaGVyZW5jaWEgZXN0cmljdGEgYWwgZXNxdWVtYVxuICAgICAgc2NoZW1hOiBwYXJ0QW5hbHlzaXNTY2hlbWEsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICB0ZXh0OiBjdXN0b21Qcm9tcHQgfHwgSU5WRU5UT1JZX1BST01QVCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgIGltYWdlOiBiYXNlNjRDb250ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0Lm9iamVjdCwgc3VjY2VzczogdHJ1ZSB9O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGxvZ2dlci5lcnJvcihcbiAgICAgICdFcnJvciBhbsOhbGlzaXMgZGUgaW1hZ2VuJyxcbiAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6IG5ldyBFcnJvcihTdHJpbmcoZXJyb3IpKSxcbiAgICAgIHsgY29tcG9uZW50OiAnYWN0aW9ucycsIGFjdGlvbjogJ2FuYWx5emVQYXJ0SW1hZ2UnIH1cbiAgICApO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0Vycm9yIGRlc2Nvbm9jaWRvIGRlIHZpc2nDs24nO1xuICAgIHJldHVybiB7IHJlc3VsdDogbnVsbCwgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvck1lc3NhZ2UgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFxQ3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:c0ccfc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4014d5003f36ed18763771ffac01d31d2ee9a2443a":"analyzePdf"},"app/actions/files.ts",""] */ __turbopack_context__.s([
    "analyzePdf",
    ()=>analyzePdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var analyzePdf = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4014d5003f36ed18763771ffac01d31d2ee9a2443a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzePdf"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tICdAYWktc2RrL2dvb2dsZSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVRleHQgfSBmcm9tICdhaSc7XG5cbmltcG9ydCB7IE1BWF9QREZfU0laRV9NQiwgYnl0ZXNUb01CIH0gZnJvbSAnQC9hcHAvY29uZmlnL2xpbWl0cyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAL2FwcC9saWIvbG9nZ2VyJztcblxuLyoqXG4gKiBBbmFsaXphIHVuIGRvY3VtZW50byBQREYuXG4gKiBVdGlsaXphIEdlbWluaSBwYXJhIGxlZXIgeSBhbmFsaXphciBlbCBjb250ZW5pZG8gZGVsIGRvY3VtZW50by5cbiAqIEBwYXJhbSBmb3JtRGF0YSAtIE9iamV0byBGb3JtRGF0YSBxdWUgY29udGllbmUgZWwgYXJjaGl2byAnZmlsZScgeSBvcGNpb25hbG1lbnRlIHVuICdwcm9tcHQnXG4gKiBAcmV0dXJucyBBbsOhbGlzaXMgZ2VuZXJhZG8gcG9yIGxhIElBXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplUGRmKFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8eyB0ZXh0OiBzdHJpbmc7IHN1Y2Nlc3M6IGJvb2xlYW47IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZSB8IG51bGw7XG4gICAgY29uc3QgcHJvbXB0ID0gZm9ybURhdGEuZ2V0KCdwcm9tcHQnKSBhcyBzdHJpbmcgfCBudWxsO1xuXG4gICAgaWYgKCFmaWxlKSB0aHJvdyBuZXcgRXJyb3IoJ1BERiB2YWPDrW8nKTtcblxuICAgIC8vIFZhbGlkYXIgdGFtYcOxbyBkZWwgUERGXG4gICAgY29uc3Qgc2l6ZUluQnl0ZXMgPSBmaWxlLnNpemU7XG4gICAgY29uc3Qgc2l6ZUluTUIgPSBieXRlc1RvTUIoc2l6ZUluQnl0ZXMpO1xuXG4gICAgaWYgKHNpemVJbk1CID4gTUFYX1BERl9TSVpFX01CKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBQREYgZGVtYXNpYWRvIGdyYW5kZSAoJHtzaXplSW5NQi50b0ZpeGVkKDEpfU1CKS4gTcOheGltbyBwZXJtaXRpZG86ICR7TUFYX1BERl9TSVpFX01CfU1CYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgYmFzZTY0Q29udGVudCA9IEJ1ZmZlci5mcm9tKGJ1ZmZlcikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVUZXh0KHtcbiAgICAgIG1vZGVsOiBnb29nbGUoJ2dlbWluaS0yLjUtZmxhc2gnKSwgLy8gRmxhc2ggc29wb3J0YSBoYXN0YSAxTSB0b2tlbnMsIGlkZWFsIHBhcmEgUERGc1xuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgdGV4dDogcHJvbXB0IHx8ICdBbmFsaXphIGVzdGUgZG9jdW1lbnRvIFBERiB5IHJlc3VtZSBzdXMgcHVudG9zIGNsYXZlLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgIGRhdGE6IGJhc2U2NENvbnRlbnQsXG4gICAgICAgICAgICAgIG1lZGlhVHlwZTogJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdGV4dDogcmVzdWx0LnRleHQsIHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAnRXJyb3IgYW7DoWxpc2lzIGRlIFBERicsXG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoU3RyaW5nKGVycm9yKSksXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ2FjdGlvbnMnLFxuICAgICAgICBhY3Rpb246ICdhbmFseXplUGRmJyxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdFcnJvciBkZXNjb25vY2lkbyBhbCBhbmFsaXphciBQREYnO1xuICAgIHJldHVybiB7IHRleHQ6ICcnLCBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndSQWNzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/hooks/use-file-submission.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFileSubmission",
    ()=>useFileSubmission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/actions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e3e7d0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:e3e7d0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$c0ccfc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:c0ccfc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/config/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/config/limits.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function useFileSubmission({ setMessages, sendMessage, isListening, toggleListening }) {
    _s();
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analyzingFileType, setAnalyzingFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileSubmission.useCallback[handleSubmit]": async (message)=>{
            const hasText = Boolean(message.text);
            const hasAttachments = Boolean(message.files?.length);
            if (!(hasText || hasAttachments)) {
                return;
            }
            // Stop listening if voice is active
            if (isListening) {
                toggleListening();
            }
            // Check for supported files
            const imageFile = message.files?.find({
                "useFileSubmission.useCallback[handleSubmit]": (file)=>file.mediaType?.startsWith('image/')
            }["useFileSubmission.useCallback[handleSubmit]"]);
            const pdfFile = message.files?.find({
                "useFileSubmission.useCallback[handleSubmit]": (file)=>file.mediaType === 'application/pdf'
            }["useFileSubmission.useCallback[handleSubmit]"]);
            const targetFile = imageFile || pdfFile;
            // Logic for file analysis (Image or PDF)
            if (targetFile && targetFile.url) {
                setIsAnalyzing(true);
                const isPdf = targetFile.mediaType === 'application/pdf';
                setAnalyzingFileType(isPdf ? 'pdf' : 'image');
                const fileTypeLabel = isPdf ? 'PDF' : 'Imagen'; // Fix: Capitalize correctly
                try {
                    // Fetch blob URL and convert to base64
                    const response = await fetch(targetFile.url);
                    const blob = await response.blob();
                    const fileSize = blob.size;
                    // Check limits
                    const limitBytes = isPdf ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PDF_SIZE_BYTES"] : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_IMAGE_SIZE_BYTES"];
                    if (fileSize > limitBytes) {
                        throw new Error(`El archivo excede el límite de ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToMB"])(limitBytes)}MB`);
                    }
                    const base64Promise = new Promise({
                        "useFileSubmission.useCallback[handleSubmit]": (resolve, reject)=>{
                            const reader = new FileReader();
                            reader.onload = ({
                                "useFileSubmission.useCallback[handleSubmit]": ()=>resolve(reader.result)
                            })["useFileSubmission.useCallback[handleSubmit]"];
                            reader.onerror = reject;
                            reader.readAsDataURL(blob);
                        }
                    }["useFileSubmission.useCallback[handleSubmit]"]);
                    const fileDataUrl = await base64Promise;
                    // Add user message with the file attachment
                    const userMessageId = `user-${Date.now()}`;
                    const userText = message.text?.trim() || `Analizar este ${fileTypeLabel}`;
                    setMessages({
                        "useFileSubmission.useCallback[handleSubmit]": (prev)=>[
                                ...prev,
                                {
                                    id: userMessageId,
                                    role: 'user',
                                    content: userText,
                                    parts: [
                                        {
                                            type: 'text',
                                            text: userText
                                        },
                                        isPdf ? {
                                            type: 'file',
                                            data: fileDataUrl,
                                            mediaType: targetFile.mediaType
                                        } : {
                                            type: 'image',
                                            imageUrl: fileDataUrl,
                                            mimeType: targetFile.mediaType
                                        }
                                    ],
                                    createdAt: new Date()
                                }
                            ]
                    }["useFileSubmission.useCallback[handleSubmit]"]);
                    // Call specific server action based on type
                    let result;
                    const formData = new FormData();
                    const fileName = 'name' in targetFile && typeof targetFile.name === 'string' ? targetFile.name : 'archivo';
                    formData.append('file', blob, fileName);
                    if (message.text?.trim()) {
                        formData.append('prompt', message.text.trim());
                    }
                    if (isPdf) {
                        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$c0ccfc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzePdf"])(formData);
                    } else {
                        result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e3e7d0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzePartImage"])(formData);
                    }
                    if (isPdf && result.success && result.text) {
                        const analysisId = `analysis-${Date.now()}`;
                        // Add analysis result to chat
                        setMessages({
                            "useFileSubmission.useCallback[handleSubmit]": (prev)=>[
                                    ...prev,
                                    {
                                        id: analysisId,
                                        role: 'assistant',
                                        content: result.text,
                                        parts: [
                                            {
                                                type: 'text',
                                                text: result.text
                                            }
                                        ],
                                        createdAt: new Date()
                                    }
                                ]
                        }["useFileSubmission.useCallback[handleSubmit]"]);
                        toast.success(`${fileTypeLabel} analizado`, 'El análisis se ha agregado al chat');
                    } else if (!isPdf && result.success && result.result) {
                        const visionId = `analysis-${Date.now()}`;
                        const analysisObj = result.result;
                        const formattedText = `📱 **Análisis Visual (IA)**
          
| Atributo | Detalle |
| :--- | :--- |
| **Tipo** | ${analysisObj.tipo_articulo} |
| **Estado** | ${analysisObj.estado_fisico.replace('_', ' ')} |
| **Confianza** | ${analysisObj.nivel_confianza} |
| **Marca** | ${analysisObj.marca || 'N/A'} |
| **Modelo** | ${analysisObj.modelo || 'N/A'} |
| **Cantidad** | ${analysisObj.cantidad_detectada} |

**Descripción detallada:**
> ${analysisObj.descripcion}

💡 **Recomendación:**  
*${analysisObj.recomendacion}*

---
*Generado automáticamente por IA a partir de la imagen.*`;
                        setMessages({
                            "useFileSubmission.useCallback[handleSubmit]": (prev)=>[
                                    ...prev,
                                    {
                                        id: visionId,
                                        role: 'assistant',
                                        content: formattedText,
                                        parts: [
                                            {
                                                type: 'text',
                                                text: formattedText
                                            }
                                        ],
                                        createdAt: new Date()
                                    }
                                ]
                        }["useFileSubmission.useCallback[handleSubmit]"]);
                        toast.success(`${fileTypeLabel} analizado`, 'El análisis se ha agregado al chat');
                    } else {
                        const errorMsg = `❌ Error al analizar ${fileTypeLabel}: ${result.error || 'Error desconocido'}`;
                        // Add error message to chat
                        setMessages({
                            "useFileSubmission.useCallback[handleSubmit]": (prev)=>[
                                    ...prev,
                                    {
                                        id: `error-${Date.now()}`,
                                        role: 'assistant',
                                        content: errorMsg,
                                        parts: [
                                            {
                                                type: 'text',
                                                text: errorMsg
                                            }
                                        ],
                                        createdAt: new Date()
                                    }
                                ]
                        }["useFileSubmission.useCallback[handleSubmit]"]);
                        toast.error('Error de análisis', result.error || `No se pudo analizar el ${fileTypeLabel}`);
                    }
                } catch (error) {
                    console.error(`Error processing ${fileTypeLabel}:`, error);
                    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
                    const errorMsg = `❌ Error al procesar ${fileTypeLabel}: ${errorMessage}`;
                    setMessages({
                        "useFileSubmission.useCallback[handleSubmit]": (prev)=>[
                                ...prev,
                                {
                                    id: `error-${Date.now()}`,
                                    role: 'assistant',
                                    content: errorMsg,
                                    parts: [
                                        {
                                            type: 'text',
                                            text: errorMsg
                                        }
                                    ],
                                    createdAt: new Date()
                                }
                            ]
                    }["useFileSubmission.useCallback[handleSubmit]"]);
                    toast.error(`Error al procesar ${fileTypeLabel}`, errorMessage);
                } finally{
                    setIsAnalyzing(false);
                    setAnalyzingFileType(null);
                }
                return;
            }
            // Normal text message (no recognized file for analysis) - use GROQ
            // Manually add user message to state first (AI SDK doesn't do this automatically with custom persistence)
            const userMessageId = `user-${Date.now()}`;
            const userText = message.text || 'Mensaje';
            setMessages({
                "useFileSubmission.useCallback[handleSubmit]": (prev)=>[
                        ...prev,
                        {
                            id: userMessageId,
                            role: 'user',
                            content: userText,
                            parts: [
                                {
                                    type: 'text',
                                    text: userText
                                }
                            ],
                            createdAt: new Date()
                        }
                    ]
            }["useFileSubmission.useCallback[handleSubmit]"]);
            await sendMessage({
                role: 'user',
                content: userText
            }, {
                body: {
                    model: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$config$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MODEL"]
                }
            });
        }
    }["useFileSubmission.useCallback[handleSubmit]"], [
        isListening,
        toggleListening,
        setMessages,
        toast,
        sendMessage
    ]);
    return {
        handleSubmit,
        isAnalyzing,
        analyzingFileType
    };
}
_s(useFileSubmission, "91QI/upnIqABSqYX1DzVQQmaqBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chat",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/actions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$17d305__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:17d305 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/features/voice/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$command$2d$mode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/voice/voice-command-mode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$confirm$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/shared/confirm-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ui/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$persistent$2d$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/use-persistent-chat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$voice$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/use-voice-input.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$work$2d$order$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/use-work-order-commands.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$work$2d$order$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/services/work-order-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-conversation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$input$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-input-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$quick$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-quick-actions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-status-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$keyboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-keyboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$file$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-file-submission.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Chat() {
    _s();
    // Estado local
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showClearDialog, setShowClearDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCommandMode, setIsCommandMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detectedCommand, setDetectedCommand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeQuickAction, setActiveQuickAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Integraciones
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { messages, sendMessage, status, reload, error: chatError, clearHistory, setMessages, addToolOutput } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$persistent$2d$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentChat"])();
    // Hook de ejecución de Work Orders
    const { executeCommand } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$work$2d$order$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkOrderCommands"])();
    // Voice input
    const updateTextareaValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[updateTextareaValue]": (value)=>{
            const textarea = textareaRef.current;
            if (textarea) {
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
                nativeInputValueSetter?.call(textarea, value);
                const event = new Event('input', {
                    bubbles: true
                });
                textarea.dispatchEvent(event);
            }
            setInput(value);
        }
    }["Chat.useCallback[updateTextareaValue]"], []);
    const { isListening, isProcessing, isSupported, mode, transcript, toggleListening, error: voiceError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$voice$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceInput"])({
        onTranscript: updateTextareaValue
    });
    // File submission handling (Images & PDFs)
    const { handleSubmit, isAnalyzing, analyzingFileType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$file$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileSubmission"])({
        setMessages,
        sendMessage,
        isListening,
        toggleListening
    });
    // Chat actions
    const { handleRegenerate, handleClear, handleCopyMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatActions"])({
        reload,
        clearHistory,
        setInput
    });
    // Computed values
    const canSend = (status === 'ready' || status === 'error' || status !== 'streaming' && status !== 'submitted') && !isAnalyzing;
    // Voice command handler
    const handleVoiceCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[handleVoiceCommand]": async (command)=>{
            try {
                const result = await executeCommand(command);
                toast.success(result.message, `ID: ${result.resourceId}`);
                setIsCommandMode(false);
            } catch (err) {
                toast.error('Error al crear orden', err instanceof Error ? err.message : 'Error desconocido');
            }
        }
    }["Chat.useCallback[handleVoiceCommand]"], [
        executeCommand,
        toast
    ]);
    // Keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$keyboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatKeyboard"])({
        onSubmit: {
            "Chat.useChatKeyboard": ()=>{
                if (input.trim() && canSend) {
                    handleSubmit({
                        text: input,
                        files: []
                    });
                    setInput('');
                }
            }
        }["Chat.useChatKeyboard"],
        onCancelVoice: {
            "Chat.useChatKeyboard": ()=>{
                if (isListening) toggleListening();
            }
        }["Chat.useChatKeyboard"],
        onFocusInput: {
            "Chat.useChatKeyboard": ()=>textareaRef.current?.focus()
        }["Chat.useChatKeyboard"],
        canSubmit: Boolean(input.trim() && canSend),
        isListening
    });
    // Quick action handler
    const handleQuickAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[handleQuickAction]": (prompt)=>{
            // Find the matching QuickAction to check if it has formFields
            const action = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$quick$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUICK_ACTIONS"].find({
                "Chat.useCallback[handleQuickAction].action": (a)=>a.prompt === prompt
            }["Chat.useCallback[handleQuickAction].action"]);
            if (action?.formFields && action.formFields.length > 0) {
                // Action requires data → show inline form
                setActiveQuickAction(action);
                return;
            }
            // If prompt is complete (doesn't end in space), send directly
            if (!prompt.endsWith(' ')) {
                handleSubmit({
                    text: prompt,
                    files: []
                });
            } else {
                // Incomplete prompt - put in input and focus textarea
                updateTextareaValue(prompt);
                textareaRef.current?.focus();
            }
        }
    }["Chat.useCallback[handleQuickAction]"], [
        handleSubmit,
        updateTextareaValue
    ]);
    // Quick action form submit handler
    const handleQuickActionFormSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[handleQuickActionFormSubmit]": (composedPrompt)=>{
            setActiveQuickAction(null);
            handleSubmit({
                text: composedPrompt,
                files: []
            });
        }
    }["Chat.useCallback[handleQuickActionFormSubmit]"], [
        handleSubmit
    ]);
    // Tool approval handler (for crear_orden_trabajo)
    const handleToolApproval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[handleToolApproval]": async (toolCallId, approved, input)=>{
            if (!approved) {
                addToolOutput({
                    tool: 'crear_orden_trabajo',
                    toolCallId,
                    output: {
                        success: false,
                        error: 'Rechazado por el usuario'
                    }
                });
                return;
            }
            try {
                const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$services$2f$work$2d$order$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWorkOrderService"])();
                // Construimos el comando a partir del input pre-aprobado por el tool
                const result = await service.create({
                    action: 'create_work_order',
                    type: 'work_order',
                    confidence: 1.0,
                    rawTranscript: 'Aprobación mediante UI',
                    equipment: input?.equipment || 'Desconocido',
                    description: input?.description || '',
                    priority: input?.priority || 'normal',
                    location: input?.location
                }, {
                    userId: '1',
                    correlationId: crypto.randomUUID()
                });
                addToolOutput({
                    tool: 'crear_orden_trabajo',
                    toolCallId,
                    output: {
                        success: true,
                        resourceId: result.resourceId,
                        resourceUrl: result.resourceUrl,
                        message: result.message
                    }
                });
                toast.success('Orden Creada', result.message || 'Se ha creado la orden correctamente.');
            } catch (error) {
                console.error('Error al ejecutar la orden de trabajo:', error);
                addToolOutput({
                    tool: 'crear_orden_trabajo',
                    toolCallId,
                    output: {
                        success: false,
                        error: error.message || 'Ocurrió un error en el servidor.'
                    }
                });
                toast.error('Error', 'No se pudo crear la orden de trabajo.');
            }
        }
    }["Chat.useCallback[handleToolApproval]"], [
        addToolOutput
    ]);
    // Auto-detect voice commands
    const prevIsListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const prevIsProcessing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chat.useEffect": ()=>{
            const isGeminiFinish = prevIsProcessing.current && !isProcessing;
            const isNativeFinish = prevIsListening.current && !isListening && !isProcessing;
            // Use transcript directly to avoid state sync issues
            if ((isGeminiFinish || isNativeFinish) && transcript.trim().length > 5) {
                const checkCommand = {
                    "Chat.useEffect.checkCommand": async ()=>{
                        try {
                            // Check if transcript is a command
                            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$17d305__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["executeVoiceCommand"])(transcript, {
                                minConfidence: 0.6
                            });
                            if (result.success && result.command) {
                                setDetectedCommand(result.command);
                            }
                        } catch (error) {
                            console.error('Error detecting voice command:', error);
                        }
                    }
                }["Chat.useEffect.checkCommand"];
                void checkCommand();
            }
            prevIsListening.current = isListening;
            prevIsProcessing.current = isProcessing;
        }
    }["Chat.useEffect"], [
        isListening,
        isProcessing,
        transcript
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 relative size-full h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatHeader"], {
                        hasMessages: messages.length > 0,
                        onClearHistory: ()=>setShowClearDialog(true)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatConversation"], {
                        messages: messages,
                        status: status,
                        isVoiceSupported: isSupported,
                        voiceMode: mode,
                        onRegenerate: handleRegenerate,
                        onCopyMessage: (text)=>handleCopyMessage(text, toast),
                        onQuickAction: handleQuickAction,
                        onToolApproval: (approvalId, approved, input)=>handleToolApproval(approvalId, approved, input)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatStatusIndicators"], {
                        voiceError: voiceError ?? undefined,
                        isListening: isListening,
                        isProcessing: isProcessing,
                        isAnalyzingImage: isAnalyzing,
                        fileType: analyzingFileType || 'image',
                        chatError: chatError,
                        mode: mode
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    isCommandMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-blue-700 dark:text-blue-300",
                                        children: "Modo Comando de Voz"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsCommandMode(false),
                                        className: "text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400",
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/features/chat/chat.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/features/chat/chat.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$voice$2f$voice$2d$command$2d$mode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceCommandMode"], {
                                onCommandExecuted: (result)=>{
                                    toast.success('Orden creada', result.message);
                                    setIsCommandMode(false);
                                },
                                onError: (err)=>toast.error('Error', err),
                                minConfidence: 0.7
                            }, void 0, false, {
                                fileName: "[project]/app/components/features/chat/chat.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this),
                    !isCommandMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsCommandMode(true),
                        className: "mb-2 text-xs text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors",
                        children: "🎤 Usar comando de voz para órdenes de trabajo"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    detectedCommand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-24 left-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-background border border-border shadow-lg rounded-lg p-4 flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium text-sm mb-1",
                                            children: "Comando detectado"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/features/chat/chat.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mb-2",
                                            children: [
                                                detectedCommand.action,
                                                ' ',
                                                detectedCommand.equipment ? `- ${detectedCommand.equipment}` : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/features/chat/chat.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        handleVoiceCommand(detectedCommand);
                                                        setDetectedCommand(null);
                                                        setInput('');
                                                    },
                                                    className: "bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                                                    children: "Ejecutar"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/features/chat/chat.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDetectedCommand(null),
                                                    className: "bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                                                    children: "Ignorar"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/features/chat/chat.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/features/chat/chat.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/features/chat/chat.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDetectedCommand(null),
                                    className: "text-muted-foreground hover:text-foreground",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/features/chat/chat.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/features/chat/chat.tsx",
                            lineNumber: 359,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this),
                    activeQuickAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$quick$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickActionDataForm"], {
                        action: activeQuickAction,
                        onSubmit: handleQuickActionFormSubmit,
                        onCancel: ()=>setActiveQuickAction(null)
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$input$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInputArea"], {
                        textareaRef: textareaRef,
                        input: input,
                        onInputChange: (e)=>setInput(e.target.value),
                        onSubmit: handleSubmit,
                        canSend: canSend,
                        status: status,
                        isAnalyzingFile: isAnalyzing,
                        onQuickAction: handleQuickAction,
                        voiceProps: {
                            isListening,
                            isProcessing,
                            isSupported,
                            mode,
                            onClick: toggleListening,
                            disabled: !canSend || isProcessing
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$shared$2f$confirm$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmDialog"], {
                open: showClearDialog,
                onOpenChange: setShowClearDialog,
                title: "Borrar historial",
                description: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAT_MESSAGES"].CONFIRM_CLEAR_HISTORY,
                confirmLabel: "Borrar",
                cancelLabel: "Cancelar",
                variant: "destructive",
                onConfirm: handleClear
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat.tsx",
        lineNumber: 288,
        columnNumber: 5
    }, this);
}
_s(Chat, "anjgEUicpItteII64tOL6atO4f8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$persistent$2d$chat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersistentChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$work$2d$order$2d$commands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkOrderCommands"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$use$2d$voice$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$file$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileSubmission"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$keyboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatKeyboard"]
    ];
});
_c = Chat;
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/chat-message-skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessageSkeleton",
    ()=>ChatMessageSkeleton,
    "ChatSkeleton",
    ()=>ChatSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
function ChatMessageSkeleton({ role = 'assistant', className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex gap-3 p-4 rounded-lg animate-pulse', role === 'user' ? 'bg-blue-50 dark:bg-blue-950/20' : 'bg-gray-50 dark:bg-gray-800/50', className),
        role: "status",
        "aria-busy": "true",
        "aria-label": "Cargando mensaje",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "size-8 rounded-full bg-gray-300 dark:bg-gray-700 shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"
                    }, void 0, false, {
                        fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Cargando mensaje..."
            }, void 0, false, {
                fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ChatMessageSkeleton;
function ChatSkeleton({ messageCount = 3 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 p-4",
        children: Array.from({
            length: messageCount
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatMessageSkeleton, {
                role: i % 2 === 0 ? 'user' : 'assistant'
            }, i, false, {
                fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/features/chat/chat-message-skeleton.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = ChatSkeleton;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatMessageSkeleton");
__turbopack_context__.k.register(_c1, "ChatSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/hooks/use-chat-submit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatSubmit",
    ()=>useChatSubmit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useChatSubmit({ sendMessage, isListening, toggleListening, model, setInput, analyzeImage, setIsAnalyzingImage }) {
    _s();
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatSubmit.useCallback[handleSubmit]": async (message)=>{
            const hasText = Boolean(message.text);
            const hasAttachments = Boolean(message.files?.length);
            if (!(hasText || hasAttachments)) {
                return;
            }
            // Stop listening if voice is active
            if (isListening) {
                toggleListening();
            }
            // Check if there's an image attachment for auto-inventory analysis
            const imageFile = message.files?.find({
                "useChatSubmit.useCallback[handleSubmit]": (file)=>file.mediaType?.startsWith('image/')
            }["useChatSubmit.useCallback[handleSubmit]"]);
            // If image attached with minimal/no text, use Gemini for vision analysis
            if (imageFile && imageFile.url && (!hasText || (message.text?.trim().length || 0) < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAT_CONFIG"].MIN_TEXT_LENGTH_FOR_IMAGE)) {
                setIsAnalyzingImage(true);
                await analyzeImage(imageFile);
                setIsAnalyzingImage(false);
                setInput('');
                return;
            }
            // Normal text message - use GROQ
            sendMessage({
                text: message.text || 'Archivo adjunto',
                files: message.files
            }, {
                body: {
                    model: model
                }
            });
            setInput('');
        }
    }["useChatSubmit.useCallback[handleSubmit]"], [
        isListening,
        toggleListening,
        model,
        setInput,
        analyzeImage,
        setIsAnalyzingImage,
        sendMessage
    ]);
    return {
        handleSubmit
    };
}
_s(useChatSubmit, "tzNB2ES70+wfA7yeR5/qpxBoorU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/hooks/use-image-analysis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageAnalysis",
    ()=>useImageAnalysis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/actions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e3e7d0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:e3e7d0 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
function useImageAnalysis({ setMessages, toast }) {
    _s();
    const analyzeImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useImageAnalysis.useCallback[analyzeImage]": async (imageFile)=>{
            if (!imageFile.url) return false;
            try {
                // Convert blob URL to base64
                const response = await fetch(imageFile.url);
                const blob = await response.blob();
                const formData = new FormData();
                formData.append('file', blob, imageFile.name || 'image');
                // Call Gemini Vision API via server action
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e3e7d0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzePartImage"])(formData);
                if (result.success && result.result) {
                    const visionId = `vision-${Date.now()}`;
                    const formattedText = `📷 **Análisis Visual (IA)**
          
**Tipo:** ${result.result.tipo_articulo}
**Estado:** ${result.result.estado_fisico.replace('_', ' ')}
**Confianza:** ${result.result.nivel_confianza}

${result.result.descripcion}

- **Cant. detectada:** ${result.result.cantidad_detectada}
- **Marca:** ${result.result.marca || 'N/A'}
- **Modelo:** ${result.result.modelo || 'N/A'}

💡 **Recomendación:** ${result.result.recomendacion}
---
*Generado automáticamente a partir de la imagen.*`;
                    // Add analysis as assistant message
                    setMessages({
                        "useImageAnalysis.useCallback[analyzeImage]": (prev)=>[
                                ...prev,
                                {
                                    id: visionId,
                                    role: 'assistant',
                                    content: formattedText,
                                    parts: [],
                                    createdAt: new Date()
                                }
                            ]
                    }["useImageAnalysis.useCallback[analyzeImage]"]);
                    toast.success('Imagen analizada', 'El análisis se ha agregado al chat');
                    return true;
                } else {
                    // Vision failed
                    const errorMsg = `❌ Error al analizar imagen: ${result.error || 'Error desconocido'}`;
                    setMessages({
                        "useImageAnalysis.useCallback[analyzeImage]": (prev)=>[
                                ...prev,
                                {
                                    id: `vision-error-${Date.now()}`,
                                    role: 'assistant',
                                    content: errorMsg,
                                    parts: [],
                                    createdAt: new Date()
                                }
                            ]
                    }["useImageAnalysis.useCallback[analyzeImage]"]);
                    toast.error('Error de visión', result.error || 'No se pudo analizar la imagen');
                    return false;
                }
            } catch (error) {
                console.error('Error processing image:', error);
                const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
                const errorMsg = `❌ Error al procesar imagen: ${errorMessage}`;
                setMessages({
                    "useImageAnalysis.useCallback[analyzeImage]": (prev)=>[
                            ...prev,
                            {
                                id: `vision-error-${Date.now()}`,
                                role: 'assistant',
                                content: errorMsg,
                                parts: [],
                                createdAt: new Date()
                            }
                        ]
                }["useImageAnalysis.useCallback[analyzeImage]"]);
                toast.error('Error al procesar imagen', errorMessage);
                return false;
            }
        }
    }["useImageAnalysis.useCallback[analyzeImage]"], [
        setMessages,
        toast
    ]);
    return {
        analyzeImage
    };
}
_s(useImageAnalysis, "If9mgqDn9dJve6U2+LfQRsubbbM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$submit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-submit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$image$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-image-analysis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$keyboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-keyboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$file$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-file-submission.ts [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ✅ Barrel export - SOLO para exportar hacia el exterior
// Regla: NO importar desde este index.ts dentro de features/chat/
// Usar rutas relativas dir// Componente principal
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat.tsx [app-client] (ecmascript)");
// Subcomponentes (Fase 2)
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-conversation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$input$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-input-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-status-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-message-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-empty-state.tsx [app-client] (ecmascript)");
// Re-exportar todos los hooks (Fase 1 + existentes)
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/index.ts [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/features/chat/hooks/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatActions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatActions"],
    "useChatKeyboard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$keyboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatKeyboard"],
    "useChatSubmit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$submit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSubmit"],
    "useFileSubmission",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$file$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileSubmission"],
    "useImageAnalysis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$image$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageAnalysis"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$submit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-submit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$image$2d$analysis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-image-analysis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$chat$2d$keyboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-chat-keyboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$use$2d$file$2d$submission$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/use-file-submission.ts [app-client] (ecmascript)");
}),
"[project]/app/components/features/chat/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat"],
    "ChatConversation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatConversation"],
    "ChatEmptyState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatEmptyState"],
    "ChatHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatHeader"],
    "ChatInputArea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$input$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInputArea"],
    "ChatMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessage"],
    "ChatMessageSkeleton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMessageSkeleton"],
    "ChatStatusIndicators",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatStatusIndicators"],
    "useChatActions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatActions"],
    "useChatKeyboard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatKeyboard"],
    "useChatSubmit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatSubmit"],
    "useFileSubmission",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileSubmission"],
    "useImageAnalysis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageAnalysis"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/features/chat/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-conversation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$input$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-input-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$status$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-status-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$message$2d$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-message-skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$chat$2d$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/chat-empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$features$2f$chat$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/features/chat/hooks/index.ts [app-client] (ecmascript)");
}),
"[project]/app/components/features/chat/index.ts [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/features/chat/index.ts [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=app_5af25b97._.js.map