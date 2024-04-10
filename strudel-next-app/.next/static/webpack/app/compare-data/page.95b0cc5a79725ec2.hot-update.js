"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/compare-data/page",{

/***/ "(app-pages-browser)/./src/app/compare-data/ScenarioList.tsx":
/*!***********************************************!*\
  !*** ./src/app/compare-data/ScenarioList.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScenarioList: function() { return /* binding */ ScenarioList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Paper,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Paper,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Paper,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Paper,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Container,Paper,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageHeader */ \"(app-pages-browser)/./src/components/PageHeader.tsx\");\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/ContextProvider */ \"(app-pages-browser)/./src/app/compare-data/context/ContextProvider.tsx\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/actions */ \"(app-pages-browser)/./src/app/compare-data/context/actions.ts\");\n/* harmony import */ var _components_AppLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AppLink */ \"(app-pages-browser)/./src/components/AppLink.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n/**\n * List page to show comparable items in the compare-data Task Flow.\n * Items in this table are selectable and can be sent to the `<ScenarioComparison>` \n * page to be rendered in the comparison table. \n */ const ScenarioList = ()=>{\n    _s();\n    const { state, dispatch } = (0,_context_ContextProvider__WEBPACK_IMPORTED_MODULE_3__.useCompareData)();\n    /**\n   * Content to render on the page for this component\n   */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__.PageHeader, {\n                // strudel-kit-variable-next-line\n                pageTitle: \"Scenarios\",\n                // strudel-kit-variable-next-line\n                description: \"Collection of various scenarios saved from simulations, optimizations, or calculations.\",\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    direction: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLink__WEBPACK_IMPORTED_MODULE_5__.AppLink, {\n                                href: \"compare\",\n                                children: [\n                                    state.selectedRows.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        variant: \"outlined\",\n                                        children: \"Compare Scenarios\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 19\n                                    }, void 0),\n                                    state.selectedRows.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        variant: state.selectedRows.length > 1 ? \"contained\" : \"outlined\",\n                                        children: [\n                                            \"Compare Scenarios (\",\n                                            state.selectedRows.length,\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLink__WEBPACK_IMPORTED_MODULE_5__.AppLink, {\n                                href: \"new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    variant: \"contained\",\n                                    children: \"New Scenario\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, void 0)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, void 0),\n                sx: {\n                    padding: 3,\n                    backgroundColor: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                maxWidth: \"xl\",\n                sx: {\n                    marginTop: 3,\n                    marginBottom: 3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Container_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__.DataGrid, {\n                        rows: state.data,\n                        getRowId: (row)=>row[state.dataIdField],\n                        columns: state.columns,\n                        checkboxSelection: true,\n                        rowSelectionModel: state.selectedRows,\n                        onRowSelectionModelChange: (rows)=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_4__.setSelectedRows)(rows)),\n                        disableRowSelectionOnClick: true,\n                        disableDensitySelector: true,\n                        disableColumnFilter: true,\n                        slots: {\n                            toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_12__.GridToolbar\n                        },\n                        slotProps: {\n                            toolbar: {\n                                showQuickFilter: true\n                            }\n                        },\n                        sx: {\n                            \"& .MuiDataGrid-toolbarContainer\": {\n                                padding: 2,\n                                paddingBottom: 0\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/app/compare-data/ScenarioList.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScenarioList, \"qmWImarjUPwzMGzCyjvSb68VFd4=\", false, function() {\n    return [\n        _context_ContextProvider__WEBPACK_IMPORTED_MODULE_3__.useCompareData\n    ];\n});\n_c = ScenarioList;\nvar _c;\n$RefreshReg$(_c, \"ScenarioList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcGFyZS1kYXRhL1NjZW5hcmlvTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkU7QUFDNUI7QUFDckI7QUFFa0I7QUFDYTtBQUNFO0FBQ1A7QUFDTDtBQUUvQzs7OztDQUlDLEdBQ00sTUFBTVksZUFBeUI7O0lBQ3BDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0wsd0VBQWNBO0lBRTFDOztHQUVDLEdBQ0QscUJBQ0UsOERBQUNULDRHQUFHQTs7MEJBQ0YsOERBQUNRLDhEQUFVQTtnQkFDVCxpQ0FBaUM7Z0JBQ2pDTyxXQUFVO2dCQUNWLGlDQUFpQztnQkFDakNDLGFBQVk7Z0JBQ1pDLHVCQUNFLDhEQUFDYiw0R0FBS0E7b0JBQUNjLFdBQVU7O3NDQUNmLDhEQUFDbEIsNEdBQUdBO3NDQUNGLDRFQUFDVyx3REFBT0E7Z0NBQUNRLE1BQUs7O29DQUNYTixNQUFNTyxZQUFZLENBQUNDLE1BQU0sS0FBSyxtQkFDN0IsOERBQUNwQiw0R0FBTUE7d0NBQ0xxQixTQUFRO2tEQUU4Qjs7Ozs7O29DQUl6Q1QsTUFBTU8sWUFBWSxDQUFDQyxNQUFNLEdBQUcsbUJBQzNCLDhEQUFDcEIsNEdBQU1BO3dDQUNMcUIsU0FBU1QsTUFBTU8sWUFBWSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxjQUFjOzs0Q0FFakI7NENBQ2xCUixNQUFNTyxZQUFZLENBQUNDLE1BQU07NENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLdEQsOERBQUNyQiw0R0FBR0E7c0NBQ0YsNEVBQUNXLHdEQUFPQTtnQ0FBQ1EsTUFBSzswQ0FDWiw0RUFBQ2xCLDRHQUFNQTtvQ0FBQ3FCLFNBQVE7OENBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU9oREMsSUFBSTtvQkFDRkMsU0FBUztvQkFDVEMsaUJBQWlCO2dCQUNuQjs7Ozs7OzBCQUVGLDhEQUFDdkIsNEdBQVNBO2dCQUNSd0IsVUFBUztnQkFDVEgsSUFBSTtvQkFDRkksV0FBVztvQkFDWEMsY0FBYztnQkFDaEI7MEJBRUEsNEVBQUN6Qiw2R0FBS0E7OEJBQ0osNEVBQUNJLHVEQUFRQTt3QkFDUHNCLE1BQU1oQixNQUFNaUIsSUFBSTt3QkFDaEJDLFVBQVUsQ0FBQ0MsTUFBUUEsR0FBRyxDQUFDbkIsTUFBTW9CLFdBQVcsQ0FBQzt3QkFDekNDLFNBQVNyQixNQUFNcUIsT0FBTzt3QkFDdEJDLGlCQUFpQjt3QkFDakJDLG1CQUFtQnZCLE1BQU1PLFlBQVk7d0JBQ3JDaUIsMkJBQTJCLENBQUNSLE9BQVNmLFNBQVNKLGlFQUFlQSxDQUFDbUI7d0JBQzlEUywwQkFBMEI7d0JBQzFCQyxzQkFBc0I7d0JBQ3RCQyxtQkFBbUI7d0JBQ25CQyxPQUFPOzRCQUFFQyxTQUFTckMsMERBQVdBO3dCQUFDO3dCQUM5QnNDLFdBQVc7NEJBQ1RELFNBQVM7Z0NBQ1BFLGlCQUFpQjs0QkFDbkI7d0JBQ0Y7d0JBQ0FyQixJQUFJOzRCQUNGLG1DQUFtQztnQ0FDakNDLFNBQVM7Z0NBQ1RxQixlQUFlOzRCQUNqQjt3QkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aLEVBQUM7R0FyRllqQzs7UUFDaUJILG9FQUFjQTs7O0tBRC9CRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBhcmUtZGF0YS9TY2VuYXJpb0xpc3QudHN4PzI2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIENvbnRhaW5lciwgTGluaywgUGFwZXIsIFN0YWNrIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBHcmlkVG9vbGJhciB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBEYXRhR3JpZCB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xuaW1wb3J0IHsgUGFnZUhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgeyB1c2VDb21wYXJlRGF0YSB9IGZyb20gJy4vY29udGV4dC9Db250ZXh0UHJvdmlkZXInO1xuaW1wb3J0IHsgc2V0U2VsZWN0ZWRSb3dzIH0gZnJvbSAnLi9jb250ZXh0L2FjdGlvbnMnO1xuaW1wb3J0IHsgQXBwTGluayB9IGZyb20gJ0AvY29tcG9uZW50cy9BcHBMaW5rJztcbiAgXG4vKipcbiAqIExpc3QgcGFnZSB0byBzaG93IGNvbXBhcmFibGUgaXRlbXMgaW4gdGhlIGNvbXBhcmUtZGF0YSBUYXNrIEZsb3cuXG4gKiBJdGVtcyBpbiB0aGlzIHRhYmxlIGFyZSBzZWxlY3RhYmxlIGFuZCBjYW4gYmUgc2VudCB0byB0aGUgYDxTY2VuYXJpb0NvbXBhcmlzb24+YCBcbiAqIHBhZ2UgdG8gYmUgcmVuZGVyZWQgaW4gdGhlIGNvbXBhcmlzb24gdGFibGUuIFxuICovXG5leHBvcnQgY29uc3QgU2NlbmFyaW9MaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbXBhcmVEYXRhKCk7XG4gIFxuICAvKipcbiAgICogQ29udGVudCB0byByZW5kZXIgb24gdGhlIHBhZ2UgZm9yIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8UGFnZUhlYWRlclxuICAgICAgICAvLyBzdHJ1ZGVsLWtpdC12YXJpYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgcGFnZVRpdGxlPVwiU2NlbmFyaW9zXCJcbiAgICAgICAgLy8gc3RydWRlbC1raXQtdmFyaWFibGUtbmV4dC1saW5lXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQ29sbGVjdGlvbiBvZiB2YXJpb3VzIHNjZW5hcmlvcyBzYXZlZCBmcm9tIHNpbXVsYXRpb25zLCBvcHRpbWl6YXRpb25zLCBvciBjYWxjdWxhdGlvbnMuXCJcbiAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cImNvbXBhcmVcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUuc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Lyogc3RydWRlbC1raXQtdmFyaWFibGUtbmV4dC1saW5lICovfVxuICAgICAgICAgICAgICAgICAgICBDb21wYXJlIFNjZW5hcmlvc1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7c3RhdGUuc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17c3RhdGUuc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDEgPyAnY29udGFpbmVkJyA6ICdvdXRsaW5lZCcgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Lyogc3RydWRlbC1raXQtdmFyaWFibGUtbmV4dC1saW5lICovfVxuICAgICAgICAgICAgICAgICAgICBDb21wYXJlIFNjZW5hcmlvcyAoe3N0YXRlLnNlbGVjdGVkUm93cy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9BcHBMaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8QXBwTGluayBocmVmPVwibmV3XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgICAgICAgICAgICB7Lyogc3RydWRlbC1raXQtdmFyaWFibGUtbmV4dC1saW5lICovfVxuICAgICAgICAgICAgICAgICAgTmV3IFNjZW5hcmlvXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIH1cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwYWRkaW5nOiAzLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIG1heFdpZHRoPVwieGxcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpblRvcDogMyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDMsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxQYXBlcj5cbiAgICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICAgIHJvd3M9e3N0YXRlLmRhdGF9XG4gICAgICAgICAgICBnZXRSb3dJZD17KHJvdykgPT4gcm93W3N0YXRlLmRhdGFJZEZpZWxkXX1cbiAgICAgICAgICAgIGNvbHVtbnM9e3N0YXRlLmNvbHVtbnN9XG4gICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxuICAgICAgICAgICAgcm93U2VsZWN0aW9uTW9kZWw9e3N0YXRlLnNlbGVjdGVkUm93c31cbiAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhyb3dzKSA9PiBkaXNwYXRjaChzZXRTZWxlY3RlZFJvd3Mocm93cykpfVxuICAgICAgICAgICAgZGlzYWJsZVJvd1NlbGVjdGlvbk9uQ2xpY2tcbiAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcbiAgICAgICAgICAgIGRpc2FibGVDb2x1bW5GaWx0ZXJcbiAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XG4gICAgICAgICAgICBzbG90UHJvcHM9e3tcbiAgICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAnJiAuTXVpRGF0YUdyaWQtdG9vbGJhckNvbnRhaW5lcic6IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlBhcGVyIiwiU3RhY2siLCJHcmlkVG9vbGJhciIsIlJlYWN0IiwiRGF0YUdyaWQiLCJQYWdlSGVhZGVyIiwidXNlQ29tcGFyZURhdGEiLCJzZXRTZWxlY3RlZFJvd3MiLCJBcHBMaW5rIiwiU2NlbmFyaW9MaXN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInBhZ2VUaXRsZSIsImRlc2NyaXB0aW9uIiwiYWN0aW9ucyIsImRpcmVjdGlvbiIsImhyZWYiLCJzZWxlY3RlZFJvd3MiLCJsZW5ndGgiLCJ2YXJpYW50Iiwic3giLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyb3dzIiwiZGF0YSIsImdldFJvd0lkIiwicm93IiwiZGF0YUlkRmllbGQiLCJjb2x1bW5zIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJyb3dTZWxlY3Rpb25Nb2RlbCIsIm9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2UiLCJkaXNhYmxlUm93U2VsZWN0aW9uT25DbGljayIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJkaXNhYmxlQ29sdW1uRmlsdGVyIiwic2xvdHMiLCJ0b29sYmFyIiwic2xvdFByb3BzIiwic2hvd1F1aWNrRmlsdGVyIiwicGFkZGluZ0JvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/compare-data/ScenarioList.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/AppLink.tsx":
/*!************************************!*\
  !*** ./src/components/AppLink.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppLink: function() { return /* binding */ AppLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Link_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Link!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\n\n/**\n * Link component for in-app links.\n * \n */ const AppLink = (param)=>{\n    let { href, ...rest } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Link_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            ...rest,\n            component: \"span\"\n        }, void 0, false, {\n            fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/components/AppLink.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ctodonnell/Documents/Projects/Strudel/code/strudel-kit-my-fork/strudel-next-app/src/components/AppLink.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AppLink;\nvar _c;\n$RefreshReg$(_c, \"AppLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FwcExpbmsudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0I7QUFDaEI7QUFLaEM7OztDQUdDLEdBQ00sTUFBTUcsVUFBa0M7UUFBQyxFQUFFQyxJQUFJLEVBQUUsR0FBR0MsTUFBSztJQUM5RCxxQkFDRSw4REFBQ0gsaURBQVFBO1FBQUNFLE1BQU1BO2tCQUNkLDRFQUFDSCxnRkFBSUE7WUFDRixHQUFHSSxJQUFJO1lBQ1JDLFdBQVU7Ozs7Ozs7Ozs7O0FBSWxCLEVBQUM7S0FUWUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwTGluay50c3g/YmYxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgTGlua1Byb3BzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbnRlcmZhY2UgQXBwTGlua1Byb3BzIGV4dGVuZHMgTGlua1Byb3BzIHtcbiAgaHJlZjogc3RyaW5nO1xufVxuLyoqXG4gKiBMaW5rIGNvbXBvbmVudCBmb3IgaW4tYXBwIGxpbmtzLlxuICogXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBMaW5rOiBSZWFjdC5GQzxBcHBMaW5rUHJvcHM+ID0gKHsgaHJlZiwgLi4ucmVzdH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICA8TGlua1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAvPlxuICAgIDwvTmV4dExpbms+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiTmV4dExpbmsiLCJBcHBMaW5rIiwiaHJlZiIsInJlc3QiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AppLink.tsx\n"));

/***/ })

});