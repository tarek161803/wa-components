/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Main */ "./src/pages/Main.jsx");


const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Main__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./src/utils/cn.js");


const Button = ({
  onClick = () => {},
  children = '',
  className = '',
  size = 'medium',
  type = 'primary',
  icon = '',
  disabled = false
}) => {
  const sizeClass = {
    small: 'ctx-px-1.5 ctx-py-[3px] ctx-text-[10px] ctx-rounded ctx-shadow-custom-sm',
    medium: 'ctx-px-2.5 ctx-py-2.5 ctx-text-xs',
    large: 'ctx-p-2.5 ctx-text-sm'
  };
  const typeClass = {
    primary: 'ctx-bg-gradient-to-r ctx-from-primary ctx-to-primary-light ctx-text-white',
    destructive: 'ctx-bg-red-600 ctx-text-white',
    outline: 'ctx-border ctx-border-primary ctx-text-gray-800',
    'destructive-outline': 'ctx-border ctx-border-red-600 ctx-text-gray-800'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: disabled,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('ctx-font-semibold ctx-rounded-lg ctx-shadow-custom ctx-flex ctx-items-center ctx-gap-1.5 ctx-font-sans ', sizeClass[size], typeClass[type], className),
    onClick: onClick
  }, icon && icon, " ", children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Checkbox.jsx":
/*!*************************************!*\
  !*** ./src/components/Checkbox.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/checkbox/checkbox.js");
/* harmony import */ var _heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/16/solid */ "./node_modules/@heroicons/react/16/solid/esm/CheckIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



const Checkbox = ({
  checked,
  onChange
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
    checked: checked,
    onChange: onChange,
    className: "ctx-flex ctx-justify-center ctx-items-center ctx-group ctx-size-5 ctx-rounded-md ctx-border ctx-border-gray-700 ctx-ring-inset data-[checked]:ctx-bg-primary data-[checked]:ctx-border-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_16_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "ctx-hidden ctx-size-4 ctx-fill-white group-data-[checked]:ctx-block"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ "./src/components/DisclosureTab.jsx":
/*!******************************************!*\
  !*** ./src/components/DisclosureTab.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/Button.jsx");



const DisclosureTab = ({
  title = 'Disclosure Title  '
}) => {
  return /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, null, /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.DisclosureButton, {
    className: ({
      open
    }) => `ctx-bg-white ctx-w-full  ctx-text-gray-800 ctx-px-4 ctx-py-[18px] ctx-flex ctx-justify-between ctx-items-center ctx-rounded-lg  ${open && 'ctx-rounded-b-none'}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "ctx-font-semibold ctx-text-xl"
  }, title), /*#__PURE__*/React.createElement(_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: /*#__PURE__*/React.createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "ctx-size-4"
    })
  })), /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.DisclosurePanel, {
    className: "ctx-text-gray-500 ctx-bg-white"
  }, "Yes! You can purchase a license that you can share with your entire team."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisclosureTab);

/***/ }),

/***/ "./src/components/Input.jsx":
/*!**********************************!*\
  !*** ./src/components/Input.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./src/utils/cn.js");


const Input = ({
  type = 'text',
  placeholder = '',
  size = 'large',
  icon = '',
  onChange = () => {}
}) => {
  const sizeClass = {
    large: 'ctx-text-sm !ctx-py-[5px]',
    small: 'ctx-text-xs !ctx-py-[3px]'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-shadow-gray-200 ctx-shadow-custom-sm ctx-rounded-lg"
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ctx-px-2 -ctx-mr-8 ctx-z-10"
  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    onChange: onChange,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('ctx-font-medium placeholder:ctx-text-gray-600 !ctx-border-gray-100 !ctx-rounded-lg !ctx-px-3  ctx-flex-grow focus:!ctx-border-primary focus-visible:!ctx-outline-none !ctx-shadow-none', sizeClass[size], {
      '!ctx-pl-7': icon
    }),
    type: type,
    placeholder: placeholder
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/components/LinkButton.jsx":
/*!***************************************!*\
  !*** ./src/components/LinkButton.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./src/utils/cn.js");


const LinkButton = ({
  onClick = () => {},
  children = '',
  className = '',
  size = 'medium',
  type = 'primary',
  icon = '',
  disabled = false
}) => {
  const sizeClass = {
    small: 'ctx-text-[10px]',
    medium: 'ctx-text-xs',
    large: 'ctx-text-sm'
  };
  const typeClass = {
    primary: 'ctx-text-primary',
    destructive: 'ctx-text-red-600'
  };
  const iconClass = {
    primary: 'ctx-bg-primary',
    destructive: 'ctx-bg-red-600'
  };
  const iconSizeClass = {
    small: 'ctx-h-3 ctx-w-3 ctx-rounded-sm',
    medium: 'ctx-h-3.5 ctx-w-3.5 ctx-rounded',
    large: 'ctx-h-3.5 ctx-w-3.5 ctx-rounded'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: disabled,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('ctx-font-semibold ctx-flex ctx-items-center ctx-gap-1', sizeClass[size], typeClass[type], className),
    onClick: onClick
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `ctx-flex ctx-justify-center ctx-items-center ${iconSizeClass[size]} ${iconClass[type]}`
  }, icon), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkButton);

/***/ }),

/***/ "./src/components/RadioInput.jsx":
/*!***************************************!*\
  !*** ./src/components/RadioInput.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./src/utils/cn.js");


const RadioInput = ({
  name,
  value,
  label = 'Label',
  checked,
  onChange,
  size = 'large'
}) => {
  const sizeClass = {
    small: 'ctx-size-[12px]',
    medium: 'ctx-size-[16px]',
    large: 'ctx-size-[18px]'
  };
  const radioIconClass = {
    small: 'ctx-size-[10px]',
    medium: 'ctx-size-[14px]',
    large: 'ctx-size-[16px]'
  };
  const labelClass = {
    small: 'ctx-text-[10px]',
    medium: 'ctx-text-xs',
    large: 'ctx-text-sm'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: name,
    className: "ctx-flex ctx-items-center ctx-cursor-pointer ctx-gap-1.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    className: "!ctx-hidden"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('ctx-rounded-full ctx-flex ctx-items-center ctx-justify-center', sizeClass[size], {
      'ctx-bg-gradient-to-br ctx-from-primary ctx-to-primary-light': checked,
      'ctx-bg-black': !checked
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('ctx-rounded-full ctx-border-2 ctx-border-white', radioIconClass[size], {
      'ctx-bg-gradient-to-br ctx-from-primary ctx-to-primary-light': checked,
      'ctx-bg-white': !checked
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('ctx-text-black', labelClass[size])
  }, label));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioInput);

/***/ }),

/***/ "./src/components/Select.jsx":
/*!***********************************!*\
  !*** ./src/components/Select.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cn */ "./src/utils/cn.js");



const Select = ({
  className,
  itemClass,
  size = 'large',
  selected,
  onChange,
  items,
  placeholder = 'Please Select'
}) => {
  const sizeClass = {
    small: 'ctx-text-xs ctx-py-2 ctx-shadow-custom-sm',
    large: 'ctx-text-sm ctx-py-2.5 ctx-shadow-custom'
  };
  const buttonIconClass = {
    small: 'ctx-top-1.5 ctx-right-1.5 ctx-size-5',
    large: 'ctx-top-2.5 ctx-right-2.5 ctx-size-5'
  };
  return /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox, {
    value: selected,
    onChange: onChange
  }, /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.ListboxButton, {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('ctx-relative ctx-bg-white  ctx-block ctx-w-full ctx-rounded-lg  ctx-pr-8 ctx-pl-3 ctx-text-left ctx-font-semibold ctx-text-gray-700 focus-visible:ctx-outline-none', sizeClass[size], className)
  }, selected ? selected.name : placeholder, /*#__PURE__*/React.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('ctx-group ctx-pointer-events-none ctx-absolute ctx-fill-gray-700', buttonIconClass[size]),
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.ListboxOptions, {
    anchor: {
      gap: 8,
      to: 'bottom'
    },
    transition: true,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('ctx-z-20 ctx-scrollbar [--anchor-gap:var(--spacing-1)] ctx-bg-white ctx-shadow-md  ctx-h-60 ctx-space-y-2 ctx-w-[var(--button-width)] ctx-rounded-lg ctx-border ctx-p-2 focus:ctx-outline-none', 'ctx-transition ctx-duration-100 ctx-ease-in data-[closed]:ctx-opacity-0')
  }, items.map(item => /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.ListboxOption, {
    key: item.name,
    value: item,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('ctx-cursor-pointer ctx-bg-gray-100 ctx-border ctx-rounded-lg ctx-flex ctx-border-gray-200 ctx-transform ctx-duration-300  data-[focus]:ctx-border-primary data-[focus]:ctx-bg-white ctx-items-center ctx-gap-2 ctx-py-[7px] ctx-px-3 ctx-select-none', itemClass)
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctx-text-xs ctx-text-gray-900"
  }, item.name)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ "./src/components/ToggleButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/ToggleButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./src/utils/cn.js");


const ToggleButton = ({
  buttons,
  active,
  onChange
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-inline-block ctx-shadow-custom ctx-rounded-lg"
  }, buttons.map((button, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => onChange(button),
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('ctx-text-sm first:ctx-rounded-l-lg last:ctx-rounded-r-lg ctx-border ctx-border-primary ctx-py-1.5 ctx-px-3.5 ctx-bg-white ctx-text-gray-900 ctx-font-medium ', {
      'ctx-bg-gradient-to-r ctx-from-primary ctx-to-primary-light ctx-text-white': button.value === active.value,
      'ctx-border-l-0': index !== 0
    }),
    key: button.value
  }, button.title)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleButton);

/***/ }),

/***/ "./src/components/ToggleSwitch.jsx":
/*!*****************************************!*\
  !*** ./src/components/ToggleSwitch.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/switch/switch.js");

const ToggleSwitch = ({
  checked,
  onChange
}) => {
  return /*#__PURE__*/React.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Switch, {
    checked: checked,
    onChange: onChange,
    className: "ctx-group ctx-bg-gray-400 ctx-relative ctx-flex ctx-h-5 ctx-w-8 ctx-cursor-pointer ctx-rounded-full  ctx-p-1 ctx-transition-colors ctx-duration-200 ctx-ease-in-out focus:ctx-outline-none data-[focus]:ctx-outline-1 data-[focus]:ctx-outline-white data-[checked]:ctx-bg-primary"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "ctx-pointer-events-none ctx-absolute ctx-top-0.5 ctx-left-0.5 ctx-inline-block ctx-size-4 ctx-translate-x-0 ctx-rounded-full ctx-bg-white ctx-ring-0 ctx-shadow-lg ctx-transition ctx-duration-200 ctx-ease-in-out group-data-[checked]:ctx-translate-x-3"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSwitch);

/***/ }),

/***/ "./src/pages/Main.jsx":
/*!****************************!*\
  !*** ./src/pages/Main.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_Common_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/Common/Common */ "./src/pages/sections/Common/Common.jsx");


const Main = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sections_Common_Common__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/pages/components/ComponentContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/components/ComponentContainer.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ComponentContainer = ({
  title = '',
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "ctx-mb-1 ctx-text-base ctx-font-medium ctx-capitalize ctx-select-none"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-border ctx-border-gray-300 ctx-p-4 ctx-rounded-lg"
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentContainer);

/***/ }),

/***/ "./src/pages/sections/Common/Common.jsx":
/*!**********************************************!*\
  !*** ./src/pages/sections/Common/Common.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Buttons/Buttons */ "./src/pages/sections/Common/components/Buttons/Buttons.jsx");
/* harmony import */ var _components_Checkboxes_Checkboxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Checkboxes/Checkboxes */ "./src/pages/sections/Common/components/Checkboxes/Checkboxes.jsx");
/* harmony import */ var _components_DisclosureTabs_DisclosureTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DisclosureTabs/DisclosureTabs */ "./src/pages/sections/Common/components/DisclosureTabs/DisclosureTabs.jsx");
/* harmony import */ var _components_Inputs_Inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Inputs/Inputs */ "./src/pages/sections/Common/components/Inputs/Inputs.jsx");
/* harmony import */ var _components_LinkButtons_LinkButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LinkButtons/LinkButtons */ "./src/pages/sections/Common/components/LinkButtons/LinkButtons.jsx");
/* harmony import */ var _components_RadioInputs_RadioInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RadioInputs/RadioInputs */ "./src/pages/sections/Common/components/RadioInputs/RadioInputs.jsx");
/* harmony import */ var _components_Selects_Selects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Selects/Selects */ "./src/pages/sections/Common/components/Selects/Selects.jsx");
/* harmony import */ var _components_ToggleButtons_ToggleButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ToggleButtons/ToggleButtons */ "./src/pages/sections/Common/components/ToggleButtons/ToggleButtons.jsx");
/* harmony import */ var _components_ToggleSwitches_ToggleSwitches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ToggleSwitches/ToggleSwitches */ "./src/pages/sections/Common/components/ToggleSwitches/ToggleSwitches.jsx");










const Common = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-mt-4 ctx-font-sans ctx-space-y-8 ctx-mr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DisclosureTabs_DisclosureTabs__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ToggleButtons_ToggleButtons__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ToggleSwitches_ToggleSwitches__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Checkboxes_Checkboxes__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Selects_Selects__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Inputs_Inputs__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RadioInputs_RadioInputs__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LinkButtons_LinkButtons__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Common);

/***/ }),

/***/ "./src/pages/sections/Common/components/Buttons/Buttons.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/sections/Common/components/Buttons/Buttons.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ButtonsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ButtonsContainer */ "./src/pages/sections/Common/components/Buttons/components/ButtonsContainer.jsx");


const Buttons = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary",
    iconColor: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "destructive",
    iconColor: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "outline",
    iconColor: "gray-800"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "destructive-outline",
    iconColor: "gary-800"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);

/***/ }),

/***/ "./src/pages/sections/Common/components/Buttons/components/ButtonsContainer.jsx":
/*!**************************************************************************************!*\
  !*** ./src/pages/sections/Common/components/Buttons/components/ButtonsContainer.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/DocumentPlusIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../components/Button */ "./src/components/Button.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");




const ButtonsContainer = ({
  type,
  iconColor
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: `${type} Buttons`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "large",
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-5`
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "large",
    type: type
  }, "Make Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "large",
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-4`
    })
  }, "Make Feed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-4`
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: type
  }, "Make Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-4`
    })
  }, "Make Feed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-4`
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    type: type
  }, "Make Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-3`
    })
  }, "Make Feed"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonsContainer);

/***/ }),

/***/ "./src/pages/sections/Common/components/Checkboxes/Checkboxes.jsx":
/*!************************************************************************!*\
  !*** ./src/pages/sections/Common/components/Checkboxes/Checkboxes.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Checkbox */ "./src/components/Checkbox.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");



const Checkboxes = () => {
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = () => {
    setChecked(prevState => !prevState);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Checkboxes"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    checked: checked,
    onChange: handleChange
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkboxes);

/***/ }),

/***/ "./src/pages/sections/Common/components/DisclosureTabs/DisclosureTabs.jsx":
/*!********************************************************************************!*\
  !*** ./src/pages/sections/Common/components/DisclosureTabs/DisclosureTabs.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DisclosureTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/DisclosureTab */ "./src/components/DisclosureTab.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");



const DisclosureTabs = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Disclosure Tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-w-96"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DisclosureTab__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Read Documentation"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisclosureTabs);

/***/ }),

/***/ "./src/pages/sections/Common/components/Inputs/Inputs.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/sections/Common/components/Inputs/Inputs.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Input */ "./src/components/Input.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js");




const Inputs = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-gap-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-flex-col ctx-gap-3 ctx-w-72"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placeholder: "Search Here",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "ctx-size-4 ctx-text-gray-600"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    placeholder: "Search Here"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "ctx-size-4 ctx-text-gray-600"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-flex-col ctx-gap-3 ctx-w-72"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    placeholder: "Search Here",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "ctx-size-3.5 ctx-text-gray-600"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    placeholder: "Search Here"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "ctx-size-3.5 ctx-text-gray-600"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inputs);

/***/ }),

/***/ "./src/pages/sections/Common/components/LinkButtons/LinkButtons.jsx":
/*!**************************************************************************!*\
  !*** ./src/pages/sections/Common/components/LinkButtons/LinkButtons.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkButtonsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkButtonsContainer */ "./src/pages/sections/Common/components/LinkButtons/LinkButtonsContainer.jsx");


const LinkButtons = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LinkButtonsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "primary",
    iconColor: "white",
    title: "Primary Link Button"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LinkButtonsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "destructive",
    iconColor: "white",
    title: "Destructive Link Button"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkButtons);

/***/ }),

/***/ "./src/pages/sections/Common/components/LinkButtons/LinkButtonsContainer.jsx":
/*!***********************************************************************************!*\
  !*** ./src/pages/sections/Common/components/LinkButtons/LinkButtonsContainer.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/esm/PlusIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/LinkButton */ "./src/components/LinkButton.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");




const LinkButtonsContainer = ({
  type,
  iconColor,
  title = ''
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "large",
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-3`
    })
  }, "Make Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "large",
    type: type
  }, "Make Feed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-3`
    })
  }, "Make Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: type
  }, "Make Feed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-items-center ctx-gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    type: type,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: `ctx-text-${iconColor} ctx-size-2.5`
    })
  }, "Make Feed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    type: type
  }, "Make Feed"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkButtonsContainer);

/***/ }),

/***/ "./src/pages/sections/Common/components/RadioInputs/RadioInputs.jsx":
/*!**************************************************************************!*\
  !*** ./src/pages/sections/Common/components/RadioInputs/RadioInputs.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RadioInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/RadioInput */ "./src/components/RadioInput.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");



const RadioInputs = () => {
  const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('red');
  const handleRadioChange = e => {
    setSelectedOption(e.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Radio Buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RadioInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "large",
    name: "option",
    value: "red",
    label: "Red",
    checked: selectedOption === 'red',
    onChange: handleRadioChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RadioInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "medium",
    name: "option",
    value: "orange",
    label: "Orange",
    checked: selectedOption === 'orange',
    onChange: handleRadioChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RadioInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    name: "option",
    value: "blue",
    label: "Blue",
    checked: selectedOption === 'blue',
    onChange: handleRadioChange
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioInputs);

/***/ }),

/***/ "./src/pages/sections/Common/components/Selects/Selects.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/sections/Common/components/Selects/Selects.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/Select */ "./src/components/Select.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");



const people = [{
  id: 1,
  name: 'Tom Cook'
}, {
  id: 2,
  name: 'Wade Cooper'
}, {
  id: 3,
  name: 'Tanya Fox'
}, {
  id: 4,
  name: 'Arlene Mccoy'
}, {
  id: 5,
  name: 'Devon Webb'
}, {
  id: 6,
  name: 'Tom Cook'
}, {
  id: 7,
  name: 'Wade Cooper'
}, {
  id: 8,
  name: 'Tanya Fox'
}, {
  id: 9,
  name: 'Arlene Mccoy'
}, {
  id: 10,
  name: 'Devon Webb'
}];
const Selects = () => {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleChange = currentSelected => {
    setSelected(currentSelected);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Selects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-gap-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-w-72"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: people,
    selected: selected,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-w-72"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    items: people,
    selected: selected,
    onChange: handleChange
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selects);

/***/ }),

/***/ "./src/pages/sections/Common/components/ToggleButtons/ToggleButtons.jsx":
/*!******************************************************************************!*\
  !*** ./src/pages/sections/Common/components/ToggleButtons/ToggleButtons.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/ToggleButton */ "./src/components/ToggleButton.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");



const buttons = [{
  title: 'Attribute',
  value: 'attribute'
}, {
  title: 'Text',
  value: 'text'
}, {
  title: 'Class',
  value: 'class'
}];
const buttonsLess = [{
  title: 'Attribute',
  value: 'attribute'
}, {
  title: 'Text',
  value: 'text'
}];
const ToggleButtons = () => {
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buttons[0]);
  const handleChange = value => {
    setActive(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Toggle Buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ctx-flex ctx-gap-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    active: active,
    onChange: handleChange,
    buttons: buttons
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    active: active,
    onChange: handleChange,
    buttons: buttonsLess
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleButtons);

/***/ }),

/***/ "./src/pages/sections/Common/components/ToggleSwitches/ToggleSwitches.jsx":
/*!********************************************************************************!*\
  !*** ./src/pages/sections/Common/components/ToggleSwitches/ToggleSwitches.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/ToggleSwitch */ "./src/components/ToggleSwitch.jsx");
/* harmony import */ var _components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ComponentContainer */ "./src/pages/components/ComponentContainer.jsx");



const ToggleSwitches = () => {
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = value => {
    setChecked(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ComponentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Toggle Switches"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ToggleSwitch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    checked: checked,
    onChange: handleChange
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSwitches);

/***/ }),

/***/ "./src/utils/cn.js":
/*!*************************!*\
  !*** ./src/utils/cn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


const twMerge = (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.extendTailwindMerge)({
  prefix: 'ctx-'
});
const cn = (...inputs) => {
  return twMerge((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cn);

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusable: () => (/* binding */ focusable),
/* harmony export */   getTabIndex: () => (/* binding */ getTabIndex),
/* harmony export */   isFocusable: () => (/* binding */ isFocusable),
/* harmony export */   isTabbable: () => (/* binding */ isTabbable),
/* harmony export */   tabbable: () => (/* binding */ tabbable)
/* harmony export */ });
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "./node_modules/@floating-ui/core/dist/floating-ui.core.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* binding */ detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   rectToClientRect: () => (/* reexport safe */ _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement);
  const alignmentAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentAxis)(placement);
  const alignLength = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAxisLength)(alignmentAxis);
  const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
  const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
    const coords = {
      x,
      y
    };
    const axis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentAxis)(placement);
    const length = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAxisLength)(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) === alignment), ...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) !== alignment)] : allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) === alignment || (autoAlignment ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAlignmentPlacement)(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
      const initialSideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(initialPlacement);
      const isBasePlacement = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositePlacement)(initialPlacement)] : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getExpandedPlacements)(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentSides)(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...rects.map(rect => rect.left));
  const minY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...rects.map(rect => rect.top));
  const maxX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...rects.map(rect => rect.right));
  const maxY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getBoundingRect(nativeClientRects));
      const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === 'left';
          const maxRight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...clientRects.map(rect => rect.right));
          const minLeft = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
  const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement);
  const isVertical = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement));
      const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement);
      const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
      const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement);
      const isYAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.left, 0);
        const xMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.right, 0);
        const yMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.top, 0);
        const yMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};




/***/ }),

/***/ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   autoUpdate: () => (/* binding */ autoUpdate),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* binding */ detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   platform: () => (/* binding */ platform),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");
/* harmony import */ var _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/core */ "./node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");





function getCssDimensions(element) {
  const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(width) !== offsetWidth || (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(domElement)) {
    return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(rect.width) : rect.width) / width;
  let y = ($ ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
function getVisualOffsets(element) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isWebKit)() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  if (includeScale) {
    if (offsetParent) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(domElement);
    const offsetWin = offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(offsetParent) ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)({
    width,
    height,
    x,
    y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(offsetParent);
  const topLayer = elements ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTopLayer)(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  const offsets = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(offsetParent);
    }
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element)).left + (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element);
  const scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(element);
  const body = element.ownerDocument.body;
  const width = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(body).direction === 'rtl') {
    x += (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element);
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isWebKit)();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) ? getScale(element) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element));
  } else if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(element);
  if (parentNode === stopNode || !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(parentNode) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(parentNode)) {
    return false;
  }
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors)(element, [], false).filter(el => (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(el) && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeName)(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).position === 'fixed';
  let currentNode = elementIsFixed ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(currentNode) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(currentNode)) {
    const computedStyle = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(currentNode);
    const currentNodeIsContaining = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isContainingBlock)(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(rect.top, accRect.top);
    accRect.right = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent);
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element);
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTopLayer)(element)) {
    return win;
  }
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    let svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(element);
    while (svgOffsetParent && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(svgOffsetParent)) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTableElement)(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isContainingBlock)(offsetParent)) {
    return win;
  }
  return offsetParent || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getContainingBlock)(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(top);
    const insetRight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(root.clientWidth - (left + width));
    const insetBottom = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(root.clientHeight - (top + height));
    const insetLeft = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(0, (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors)(referenceEl) : []), ...(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors)(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const detectOverflow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.detectOverflow;

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.offset;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.size;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.computePosition)(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};




/***/ }),

/***/ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   autoUpdate: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoUpdate),
/* harmony export */   computePosition: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   platform: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.platform),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size),
/* harmony export */   useFloating: () => (/* binding */ useFloating)
/* harmony export */ });
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");






var index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2__.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_2__.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  const setReference = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const floatingRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const dataRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition)(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        react_dom__WEBPACK_IMPORTED_MODULE_3__.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset)(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift)(options),
  options: [options, deps]
});

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift)(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip)(options),
  options: [options, deps]
});

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size)(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement)(options),
  options: [options, deps]
});

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide)(options),
  options: [options, deps]
});

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = (options, deps) => ({
  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline)(options),
  options: [options, deps]
});

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});




/***/ }),

/***/ "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@floating-ui/react/dist/floating-ui.react.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Composite: () => (/* binding */ Composite),
/* harmony export */   CompositeItem: () => (/* binding */ CompositeItem),
/* harmony export */   FloatingArrow: () => (/* binding */ FloatingArrow),
/* harmony export */   FloatingDelayGroup: () => (/* binding */ FloatingDelayGroup),
/* harmony export */   FloatingFocusManager: () => (/* binding */ FloatingFocusManager),
/* harmony export */   FloatingList: () => (/* binding */ FloatingList),
/* harmony export */   FloatingNode: () => (/* binding */ FloatingNode),
/* harmony export */   FloatingOverlay: () => (/* binding */ FloatingOverlay),
/* harmony export */   FloatingPortal: () => (/* binding */ FloatingPortal),
/* harmony export */   FloatingTree: () => (/* binding */ FloatingTree),
/* harmony export */   arrow: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.arrow),
/* harmony export */   autoPlacement: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.autoPlacement),
/* harmony export */   autoUpdate: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__.autoUpdate),
/* harmony export */   computePosition: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__.computePosition),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__.detectOverflow),
/* harmony export */   flip: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.flip),
/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getOverflowAncestors),
/* harmony export */   hide: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.hide),
/* harmony export */   inline: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.inline),
/* harmony export */   inner: () => (/* binding */ inner),
/* harmony export */   limitShift: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.limitShift),
/* harmony export */   offset: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.offset),
/* harmony export */   platform: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__.platform),
/* harmony export */   safePolygon: () => (/* binding */ safePolygon),
/* harmony export */   shift: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.shift),
/* harmony export */   size: () => (/* reexport safe */ _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.size),
/* harmony export */   useClick: () => (/* binding */ useClick),
/* harmony export */   useClientPoint: () => (/* binding */ useClientPoint),
/* harmony export */   useDelayGroup: () => (/* binding */ useDelayGroup),
/* harmony export */   useDelayGroupContext: () => (/* binding */ useDelayGroupContext),
/* harmony export */   useDismiss: () => (/* binding */ useDismiss),
/* harmony export */   useFloating: () => (/* binding */ useFloating),
/* harmony export */   useFloatingNodeId: () => (/* binding */ useFloatingNodeId),
/* harmony export */   useFloatingParentNodeId: () => (/* binding */ useFloatingParentNodeId),
/* harmony export */   useFloatingPortalNode: () => (/* binding */ useFloatingPortalNode),
/* harmony export */   useFloatingRootContext: () => (/* binding */ useFloatingRootContext),
/* harmony export */   useFloatingTree: () => (/* binding */ useFloatingTree),
/* harmony export */   useFocus: () => (/* binding */ useFocus),
/* harmony export */   useHover: () => (/* binding */ useHover),
/* harmony export */   useId: () => (/* binding */ useId),
/* harmony export */   useInnerOffset: () => (/* binding */ useInnerOffset),
/* harmony export */   useInteractions: () => (/* binding */ useInteractions),
/* harmony export */   useListItem: () => (/* binding */ useListItem),
/* harmony export */   useListNavigation: () => (/* binding */ useListNavigation),
/* harmony export */   useMergeRefs: () => (/* binding */ useMergeRefs),
/* harmony export */   useRole: () => (/* binding */ useRole),
/* harmony export */   useTransitionStatus: () => (/* binding */ useTransitionStatus),
/* harmony export */   useTransitionStyles: () => (/* binding */ useTransitionStyles),
/* harmony export */   useTypeahead: () => (/* binding */ useTypeahead)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @floating-ui/react/utils */ "./node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs");
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @floating-ui/react-dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/react-dom */ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @floating-ui/react-dom */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");










/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/react-utils#usemergerefs
 */
function useMergeRefs(refs) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

// https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
const SafeReact = {
  .../*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))
};

const useInsertionEffect = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = useInsertionEffect || (fn => fn());
function useEffectEvent(callback) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(() => {
    if (true) {
      throw new Error('Cannot call an event handler while rendering.');
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
function isDifferentRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index) {
  return index < 0 || index >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index = startingIndex;
  do {
    index += decrement ? -amount : amount;
  } while (index >= 0 && index <= list.length - 1 && isDisabled(list, index, disabledIndices));
  return index;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset : offset - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }

  // Remains on the same row/column.
  if (orientation === 'both') {
    const prevRow = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_6__.floor)(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_6__.floor)(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}

/** For each cell index, gets the item index that occupies that cell */
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every(cell => cellMap[cell] == null)) {
        targetCells.forEach(cell => {
          cellMap[cell] = index;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });

  // convert into a non-sparse array
  return [...cellMap];
}

/** Gets cell index of an item's corner or -1 when index is -1. */
function getCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
  if (index === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index);
  const sizeItem = sizes[index];
  switch (corner) {
    case 'tl':
      return firstCellIndex;
    case 'tr':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case 'bl':
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case 'br':
      return cellMap.lastIndexOf(index);
  }
}

/** Gets all cell indices that correspond to the specified indices */
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index, cellIndex) => indices.includes(index) ? [cellIndex] : []);
}
function isDisabled(list, index, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index);
  }
  const element = list[index];
  return element == null || element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
}

let rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}

var index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
const FloatingListContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  register: () => {},
  unregister: () => {},
  map: /*#__PURE__*/new Map(),
  elementsRef: {
    current: []
  }
});
/**
 * Provides context for a list of items within the floating element.
 * @see https://floating-ui.com/docs/FloatingList
 */
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new Map());
  const register = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    setMap(prevMap => new Map(prevMap).set(node, null));
  }, []);
  const unregister = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    setMap(prevMap => {
      const map = new Map(prevMap);
      map.delete(node);
      return map;
    });
  }, []);
  index(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index) => {
      newMap.set(node, index);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingListContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
/**
 * Used to register a list item and its index (DOM position) in the
 * `FloatingList`.
 * @see https://floating-ui.com/docs/FloatingList#uselistitem
 */
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingListContext);
  const [index$1, setIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const componentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== undefined;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index(() => {
    const index = componentRef.current ? map.get(componentRef.current) : null;
    if (index != null) {
      setIndex(index);
    }
  }, [map]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}

function renderJsx(render, computedProps) {
  if (typeof render === 'function') {
    return render(computedProps);
  }
  if (render) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(render, computedProps);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", computedProps);
}
const CompositeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  activeIndex: 0,
  onNavigate: () => {}
});
const horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
const verticalKeys = [ARROW_UP, ARROW_DOWN];
const allKeys = [...horizontalKeys, ...verticalKeys];

/**
 * Creates a single tab stop whose items are navigated by arrow keys, which
 * provides list navigation outside of floating element contexts.
 *
 * This is useful to enable navigation of a list of items that aren’t part of a
 * floating element. A menubar is an example of a composite, with each reference
 * element being an item.
 * @see https://floating-ui.com/docs/Composite
 */
const Composite = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Composite(props, forwardedRef) {
  const {
    render,
    orientation = 'both',
    loop = true,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
  const renderElementProps = render && typeof render !== 'function' ? render.props : {};
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      // To calculate movements on the grid, we use hypothetical cell indices
      // as if every item was 1x1, then convert back to real indices.
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex(index => index != null && !isDisabled(elementsRef.current, index, disabledIndices));
      // last enabled index
      const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex) => index != null && !isDisabled(elementsRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map(itemIndex => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...(disabledIndices || elementsRef.current.map((_, index) => isDisabled(elementsRef.current, index) ? index : undefined)), undefined], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(activeIndex > maxIndex ? minIndex : activeIndex, sizes, cellMap, cols,
        // use a corner matching the edge closest to the direction we're
        // moving in so we don't end up in the same item. Prefer
        // top/left over bottom/right.
        event.key === ARROW_DOWN ? 'bl' : event.key === ARROW_RIGHT ? 'tr' : 'tl')
      })]; // navigated cell will never be nullish
    }
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);

      // Wait for FocusManager `returnFocus` to execute.
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    'aria-orientation': orientation === 'both' ? undefined : orientation,
    onKeyDown(e) {
      domProps.onKeyDown == null || domProps.onKeyDown(e);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e);
      handleKeyDown(e);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CompositeContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingList, {
    elementsRef: elementsRef
  }, renderJsx(render, computedProps)));
});
/**
 * @see https://floating-ui.com/docs/Composite
 */
const CompositeItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CompositeItem(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== 'function' ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CompositeContext);
  const {
    ref,
    index
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    'data-active': isActive ? '' : undefined,
    onFocus(e) {
      domProps.onFocus == null || domProps.onFocus(e);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e);
      onNavigate(index);
    }
  };
  return renderJsx(render, computedProps);
});

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

let serverHandoffComplete = false;
let count = 0;
const genId = () => // Ensure the id is unique with multiple independent versions of Floating UI
// on <React 18
"floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => serverHandoffComplete ? genId() : undefined);
  index(() => {
    if (id == null) {
      setId(genId());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
const useReactId = SafeReact.useId;

/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/react-utils#useid
 */
const useId = useReactId || useFloatingId;

let devMessageSet;
if (true) {
  devMessageSet = /*#__PURE__*/new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}

/**
 * Renders a pointing arrow triangle.
 * @see https://floating-ui.com/docs/FloatingArrow
 */
const FloatingArrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FloatingArrow(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn('The `ref` prop is required for `FloatingArrow`.');
    }
  }
  const clipPathId = useId();
  const [isRTL, setIsRTL] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);

  // https://github.com/floating-ui/floating-ui/issues/2932
  index(() => {
    if (!floating) return;
    const isRTL = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getComputedStyle)(floating).direction === 'rtl';
    if (isRTL) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }

  // Strokes must be double the border width, this ensures the stroke's width
  // works as you'd expect.
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split('-');
  const isCustomShape = !!d;
  const isVerticalSide = side === 'top' || side === 'bottom';
  const yOffsetProp = staticOffset && alignment === 'end' ? 'bottom' : 'top';
  let xOffsetProp = staticOffset && alignment === 'end' ? 'right' : 'left';
  if (staticOffset && isRTL) {
    xOffsetProp = alignment === 'end' ? 'left' : 'right';
  }
  const arrowX = (arrow == null ? void 0 : arrow.x) != null ? staticOffset || arrow.x : '';
  const arrowY = (arrow == null ? void 0 : arrow.y) != null ? staticOffset || arrow.y : '';
  const dValue = d || 'M0,0' + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + ' Z';
  const rotation = {
    top: isCustomShape ? 'rotate(180deg)' : '',
    left: isCustomShape ? 'rotate(90deg)' : 'rotate(-90deg)',
    bottom: isCustomShape ? '' : 'rotate(180deg)',
    right: isCustomShape ? 'rotate(-90deg)' : 'rotate(90deg)'
  }[side];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref: ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? '100%' : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ''),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke: stroke
    // Account for the stroke on the fill path rendered below.
    ,
    strokeWidth: computedStrokeWidth + (d ? 0 : 1),
    d: dValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: computedStrokeWidth && !d ? rest.fill : 'none',
    d: dValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: clipPathId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});

function createPubSub() {
  const map = new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach(handler => handler(data));
    },
    on(event, listener) {
      map.set(event, [...(map.get(event) || []), listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter(l => l !== listener)) || []);
    }
  };
}

const FloatingNodeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const FloatingTreeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */
const useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};

/**
 * Returns the nearest floating tree context, if available.
 */
const useFloatingTree = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingTreeContext);

/**
 * Registers a node into the `FloatingTree`, returning its id.
 * @see https://floating-ui.com/docs/FloatingTree
 */
function useFloatingNodeId(customParentId) {
  const id = useId();
  const tree = useFloatingTree();
  const reactParentId = useFloatingParentNodeId();
  const parentId = customParentId || reactParentId;
  index(() => {
    const node = {
      id,
      parentId
    };
    tree == null || tree.addNode(node);
    return () => {
      tree == null || tree.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
}
/**
 * Provides parent node context for nested floating elements.
 * @see https://floating-ui.com/docs/FloatingTree
 */
function FloatingNode(props) {
  const {
    children,
    id
  } = props;
  const parentId = useFloatingParentNodeId();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingNodeContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      id,
      parentId
    }), [id, parentId])
  }, children);
}
/**
 * Provides context for nested floating elements when they are not children of
 * each other on the DOM.
 * This is not necessary in all cases, except when there must be explicit communication between parent and child floating elements. It is necessary for:
 * - The `bubbles` option in the `useDismiss()` Hook
 * - Nested virtual list navigation
 * - Nested floating elements that each open on hover
 * - Custom communication between parent and child floating elements
 * @see https://floating-ui.com/docs/FloatingTree
 */
function FloatingTree(props) {
  const {
    children
  } = props;
  const nodesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
  const addNode = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    nodesRef.current = [...nodesRef.current, node];
  }, []);
  const removeNode = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    nodesRef.current = nodesRef.current.filter(n => n !== node);
  }, []);
  const events = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createPubSub())[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingTreeContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      nodesRef,
      addNode,
      removeNode,
      events
    }), [addNode, removeNode, events])
  }, children);
}

function createAttribute(name) {
  return "data-floating-ui-" + name;
}

function useLatestRef(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

const safePolygonIdentifier = /*#__PURE__*/createAttribute('safe-polygon');
function getDelay(value, prop, pointerType) {
  if (pointerType && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMouseLikePointerType)(pointerType)) {
    return 0;
  }
  if (typeof value === 'number') {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
/**
 * Opens the floating element while hovering over the reference element, like
 * CSS `:hover`.
 * @see https://floating-ui.com/docs/useHover
 */
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef(handleClose);
  const delayRef = useLatestRef(delay);
  const openRef = useLatestRef(open);
  const pointerTypeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
  const handlerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const restTimeoutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
  const blockMouseMoveRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  const performedPointerEventsMutationRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const unbindMouseMoveRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(() => {});
  const isHoverOpen = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes('mouse')) && type !== 'mousedown';
  }, [dataRef]);

  // When closing before opening, clear the delay timeouts to cancel it
  // from showing.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function onOpenChange(_ref) {
      let {
        open
      } = _ref;
      if (!open) {
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        blockMouseMoveRef.current = true;
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
    };
  }, [enabled, events]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    if (!handleCloseRef.current) return;
    if (!open) return;
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event, 'hover');
      }
    }
    const html = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.floating).documentElement;
    html.addEventListener('mouseleave', onLeave);
    return () => {
      html.removeEventListener('mouseleave', onLeave);
    };
  }, [elements.floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
  const closeWithDelay = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event, runElseBranch, reason) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    if (reason === void 0) {
      reason = 'hover';
    }
    const closeDelay = getDelay(delayRef.current, 'close', pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false, event, reason);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = useEffectEvent(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = undefined;
  });
  const clearPointerEvents = useEffectEvent(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.floating).body;
      body.style.pointerEvents = '';
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  });

  // Registering the mouse events on the reference directly to bypass React's
  // delegation system. If the cursor was on a disabled element and then entered
  // the reference (no gap), `mouseenter` doesn't fire in the delegation system.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ['click', 'mousedown'].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMouseLikePointerType)(pointerTypeRef.current) || restMs > 0 && !getDelay(delayRef.current, 'open')) {
        return;
      }
      const openDelay = getDelay(delayRef.current, 'open', pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = window.setTimeout(() => {
          if (!openRef.current) {
            onOpenChange(true, event, 'hover');
          }
        }, openDelay);
      } else {
        onOpenChange(true, event, 'hover');
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      unbindMouseMoveRef.current();
      const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current && dataRef.current.floatingContext) {
        // Prevent clearing `onScrollMouseLeave` timeout.
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...dataRef.current.floatingContext,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay(event, true, 'safe-polygon');
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener('mousemove', handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener('mousemove', handler);
        };
        return;
      }

      // Allow interactivity without `safePolygon` on touch devices. With a
      // pointer, a short close delay is an alternative, so it should work
      // consistently.
      const shouldClose = pointerTypeRef.current === 'touch' ? !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(elements.floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }

    // Ensure the floating element closes after scrolling even if the pointer
    // did not move.
    // https://github.com/floating-ui/floating-ui/discussions/1692
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      if (!dataRef.current.floatingContext) return;
      handleCloseRef.current == null || handleCloseRef.current({
        ...dataRef.current.floatingContext,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay(event);
        }
      })(event);
    }
    if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(elements.domReference)) {
      var _elements$floating;
      const ref = elements.domReference;
      open && ref.addEventListener('mouseleave', onScrollMouseLeave);
      (_elements$floating = elements.floating) == null || _elements$floating.addEventListener('mouseleave', onScrollMouseLeave);
      move && ref.addEventListener('mousemove', onMouseEnter, {
        once: true
      });
      ref.addEventListener('mouseenter', onMouseEnter);
      ref.addEventListener('mouseleave', onMouseLeave);
      return () => {
        var _elements$floating2;
        open && ref.removeEventListener('mouseleave', onScrollMouseLeave);
        (_elements$floating2 = elements.floating) == null || _elements$floating2.removeEventListener('mouseleave', onScrollMouseLeave);
        move && ref.removeEventListener('mousemove', onMouseEnter);
        ref.removeEventListener('mouseenter', onMouseEnter);
        ref.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [elements, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, openRef, tree, delayRef, handleCloseRef, dataRef]);

  // Block pointer-events of every element other than the reference and floating
  // while the floating element is open and has a `handleClose` handler. Also
  // handles nested floating elements.
  // https://github.com/floating-ui/floating-ui/issues/1722
  index(() => {
    var _handleCloseRef$curre;
    if (!enabled) return;
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.floating).body;
      body.setAttribute(safePolygonIdentifier, '');
      body.style.pointerEvents = 'none';
      performedPointerEventsMutationRef.current = true;
      const floatingEl = elements.floating;
      if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(elements.domReference) && floatingEl) {
        var _tree$nodesRef$curren;
        const ref = elements.domReference;
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find(node => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = '';
        }
        ref.style.pointerEvents = 'auto';
        floatingEl.style.pointerEvents = 'auto';
        return () => {
          ref.style.pointerEvents = '';
          floatingEl.style.pointerEvents = '';
        };
      }
    }
  }, [enabled, open, parentId, elements, tree, handleCloseRef, isHoverOpen]);
  index(() => {
    if (!open) {
      pointerTypeRef.current = undefined;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, elements.domReference, cleanupMouseMoveHandler, clearPointerEvents]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        function handleMouseMove() {
          if (!blockMouseMoveRef.current && !openRef.current) {
            onOpenChange(true, nativeEvent, 'hover');
          }
        }
        if (mouseOnly && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMouseLikePointerType)(pointerTypeRef.current)) {
          return;
        }
        if (open || restMs === 0) {
          return;
        }
        clearTimeout(restTimeoutRef.current);
        if (pointerTypeRef.current === 'touch') {
          handleMouseMove();
        } else {
          restTimeoutRef.current = window.setTimeout(handleMouseMove, restMs);
        }
      }
    };
  }, [mouseOnly, onOpenChange, open, openRef, restMs]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(timeoutRef.current);
    },
    onMouseLeave(event) {
      closeWithDelay(event.nativeEvent, false);
    }
  }), [closeWithDelay]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

const NOOP = () => {};
const FloatingDelayGroupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});

/**
 * @deprecated
 * Use the return value of `useDelayGroup()` instead.
 */
const useDelayGroupContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FloatingDelayGroupContext);
/**
 * Provides context for a group of floating elements that should share a
 * `delay`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */
function FloatingDelayGroup(props) {
  const {
    children,
    delay,
    timeoutMs = 0
  } = props;
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const setCurrentId = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(currentId => {
    setState({
      currentId
    });
  }, []);
  index(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else if (!state.isInstantPhase) {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      if (state.isInstantPhase) {
        setState({
          isInstantPhase: false
        });
      }
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId, state.isInstantPhase]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingDelayGroupContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setCurrentId])
  }, children);
}
/**
 * Enables grouping when called inside a component that's a child of a
 * `FloatingDelayGroup`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */
function useDelayGroup(context, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open,
    onOpenChange,
    floatingId
  } = context;
  const {
    id: optionId
  } = options;
  const id = optionId != null ? optionId : floatingId;
  const groupContext = useDelayGroupContext();
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = groupContext;
  index(() => {
    if (!currentId) return;
    setState({
      delay: {
        open: 1,
        close: getDelay(initialDelay, 'close')
      }
    });
    if (currentId !== id) {
      onOpenChange(false);
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  index(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    if (!currentId) return;
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      }
      unset();
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  index(() => {
    if (setCurrentId === NOOP || !open) return;
    setCurrentId(id);
  }, [open, setCurrentId, id]);
  return groupContext;
}

function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find(node => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find(node => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

function getChildren(nodes, id) {
  let allChildren = nodes.filter(node => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter(node => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some(n => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getDeepestNode(nodes, id) {
  let deepestNodeId;
  let maxDepth = -1;
  function findDeepest(nodeId, depth) {
    if (depth > maxDepth) {
      deepestNodeId = nodeId;
      maxDepth = depth;
    }
    const children = getChildren(nodes, nodeId);
    children.forEach(child => {
      findDeepest(child.id, depth + 1);
    });
  }
  findDeepest(id, 0);
  return nodes.find(node => node.id === deepestNodeId);
}

// Modified to add conditional `aria-hidden` support:
// https://github.com/theKashey/aria-hidden/blob/9220c8f4a4fd35f63bee5510a9f41a37264382d4/src/index.ts
let counterMap = /*#__PURE__*/new WeakMap();
let uncontrolledElementsSet = /*#__PURE__*/new WeakSet();
let markerMap = {};
let lockCount = 0;
const supportsInert = () => typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
const unwrapHost = node => node && (node.host || unwrapHost(node.parentNode));
const correctElements = (parent, targets) => targets.map(target => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter(x => x != null);
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert) {
  const markerName = 'data-floating-ui-inert';
  const controlAttribute = inert ? 'inert' : ariaHidden ? 'aria-hidden' : null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const elementsToKeep = new Set();
  const elementsToStop = new Set(avoidElements);
  const hiddenElements = [];
  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  avoidElements.forEach(keep);
  deep(body);
  elementsToKeep.clear();
  function keep(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    el.parentNode && keep(el.parentNode);
  }
  function deep(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    [].forEach.call(parent.children, node => {
      if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getNodeName)(node) === 'script') return;
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        const attr = controlAttribute ? node.getAttribute(controlAttribute) : null;
        const alreadyHidden = attr !== null && attr !== 'false';
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenElements.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledElementsSet.add(node);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, '');
        }
        if (!alreadyHidden && controlAttribute) {
          node.setAttribute(controlAttribute, 'true');
        }
      }
    });
  }
  lockCount++;
  return () => {
    hiddenElements.forEach(element => {
      const counterValue = (counterMap.get(element) || 0) - 1;
      const markerValue = (markerCounter.get(element) || 0) - 1;
      counterMap.set(element, counterValue);
      markerCounter.set(element, markerValue);
      if (!counterValue) {
        if (!uncontrolledElementsSet.has(element) && controlAttribute) {
          element.removeAttribute(controlAttribute);
        }
        uncontrolledElementsSet.delete(element);
      }
      if (!markerValue) {
        element.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = new WeakMap();
      counterMap = new WeakMap();
      uncontrolledElementsSet = new WeakSet();
      markerMap = {};
    }
  };
}
function markOthers(avoidElements, ariaHidden, inert) {
  if (ariaHidden === void 0) {
    ariaHidden = false;
  }
  if (inert === void 0) {
    inert = false;
  }
  const body = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements.concat(Array.from(body.querySelectorAll('[aria-live]'))), body, ariaHidden, inert);
}

const getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck:
  // JSDOM does not support the `tabbable` library. To solve this we can
  // check if `ResizeObserver` is a real function (not polyfilled), which
  // determines if the current environment is JSDOM-like.
  typeof ResizeObserver === 'function' && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none'
});
function getTabbableIn(container, direction) {
  const allTabbable = (0,tabbable__WEBPACK_IMPORTED_MODULE_7__.tabbable)(container, getTabbableOptions());
  if (direction === 'prev') {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, 'next');
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, 'prev');
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = (0,tabbable__WEBPACK_IMPORTED_MODULE_7__.tabbable)(container, getTabbableOptions());
  tabbableElements.forEach(element => {
    element.dataset.tabindex = element.getAttribute('tabindex') || '';
    element.setAttribute('tabindex', '-1');
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll('[data-tabindex]');
  elements.forEach(element => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute('tabindex', tabindex);
    } else {
      element.removeAttribute('tabindex');
    }
  });
}

// See Diego Haz's Sandbox for making this logic work well on Safari/iOS:
// https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/FocusTrap.tsx

const HIDDEN_STYLES = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'fixed',
  whiteSpace: 'nowrap',
  width: '1px',
  top: 0,
  left: 0
};
let timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === 'Tab') {
    event.target;
    clearTimeout(timeoutId);
  }
}
const FocusGuard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FocusGuard(props, ref) {
  const [role, setRole] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  index(() => {
    if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isSafari)()) {
      // Unlike other screen readers such as NVDA and JAWS, the virtual cursor
      // on VoiceOver does trigger the onFocus event, so we can use the focus
      // trap element. On Safari, only buttons trigger the onFocus event.
      // NB: "group" role in the Sandbox no longer appears to work, must be a
      // button role.
      setRole('button');
    }
    document.addEventListener('keydown', setActiveElementOnTab);
    return () => {
      document.removeEventListener('keydown', setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    'aria-hidden': role ? undefined : true,
    [createAttribute('focus-guard')]: '',
    style: HIDDEN_STYLES
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({}, props, restProps));
});

const PortalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const attr = /*#__PURE__*/createAttribute('portal');
/**
 * @see https://floating-ui.com/docs/FloatingPortal#usefloatingportalnode
 */
function useFloatingPortalNode(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    id,
    root
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const [portalNode, setPortalNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const portalNodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  index(() => {
    return () => {
      portalNode == null || portalNode.remove();
      // Allow the subsequent layout effects to create a new node on updates.
      // The portal node will still be cleaned up on unmount.
      // https://github.com/floating-ui/floating-ui/issues/2454
      queueMicrotask(() => {
        portalNodeRef.current = null;
      });
    };
  }, [portalNode]);
  index(() => {
    // Wait for the uniqueId to be generated before creating the portal node in
    // React <18 (using `useFloatingId` instead of the native `useId`).
    // https://github.com/floating-ui/floating-ui/issues/2778
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    const existingIdRoot = id ? document.getElementById(id) : null;
    if (!existingIdRoot) return;
    const subRoot = document.createElement('div');
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, '');
    existingIdRoot.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, uniqueId]);
  index(() => {
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
    if (container && !(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(container)) container = container.current;
    container = container || document.body;
    let idWrapper = null;
    if (id) {
      idWrapper = document.createElement('div');
      idWrapper.id = id;
      container.appendChild(idWrapper);
    }
    const subRoot = document.createElement('div');
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, '');
    container = idWrapper || container;
    container.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, root, uniqueId, portalContext]);
  return portalNode;
}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * This is necessary to ensure the floating element can appear outside any
 * potential parent containers that cause clipping (such as `overflow: hidden`),
 * while retaining its location in the React tree.
 * @see https://floating-ui.com/docs/FloatingPortal
 */
function FloatingPortal(props) {
  const {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = props;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const beforeOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const afterOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const beforeInsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const afterInsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const shouldRenderGuards =
  // The FocusManager and therefore floating element are currently open/
  // rendered.
  !!focusManagerState &&
  // Guards are only for non-modal focus management.
  !focusManagerState.modal &&
  // Don't render if unmount is transitioning.
  focusManagerState.open && preserveTabOrder && !!(root || portalNode);

  // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }

    // Make sure elements inside the portal element are tabbable only when the
    // portal has already been focused, either by tabbing into a focus trap
    // element outside or using the mouse.
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === 'focusin';
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    // Listen to the event on the capture phase so they run before the focus
    // trap elements onFocus prop is called.
    portalNode.addEventListener('focusin', onFocus, true);
    portalNode.addEventListener('focusout', onFocus, true);
    return () => {
      portalNode.removeEventListener('focusin', onFocus, true);
      portalNode.removeEventListener('focusout', onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalContext.Provider, {
    value: react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null || prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), portalNode && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, portalNode), shouldRenderGuards && portalNode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null || nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent));
      }
    }
  }));
}
const usePortalContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(PortalContext);

const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function addPreviouslyFocusedElement(element) {
  previouslyFocusedElements = previouslyFocusedElements.filter(el => el.isConnected);
  let tabbableEl = element;
  if (!tabbableEl || (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getNodeName)(tabbableEl) === 'body') return;
  if (!(0,tabbable__WEBPACK_IMPORTED_MODULE_7__.isTabbable)(tabbableEl, getTabbableOptions())) {
    const tabbableChild = (0,tabbable__WEBPACK_IMPORTED_MODULE_7__.tabbable)(tabbableEl, getTabbableOptions())[0];
    if (tabbableChild) {
      tabbableEl = tabbableChild;
    }
  }
  previouslyFocusedElements.push(tabbableEl);
  if (previouslyFocusedElements.length > LIST_LIMIT) {
    previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
  }
}
function getPreviouslyFocusedElement() {
  return previouslyFocusedElements.slice().reverse().find(el => el.isConnected);
}
const VisuallyHiddenDismiss = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function VisuallyHiddenDismiss(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({}, props, {
    type: "button",
    ref: ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    order = ['content'],
    guards: _guards = true,
    initialFocus = 0,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = props;
  const {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    floatingId,
    elements: {
      domReference,
      floating
    }
  } = context;
  const ignoreInitialFocus = typeof initialFocus === 'number' && initialFocus < 0;
  // If the reference is a combobox and is typeable (e.g. input/textarea),
  // there are different focus semantics. The guards should not be rendered, but
  // aria-hidden should be applied to all nodes still. Further, the visually
  // hidden dismiss button should only appear at the end of the list, not the
  // start.
  const isUntrappedTypeableCombobox = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isTypeableCombobox)(domReference) && ignoreInitialFocus;

  // Force the guards to be rendered if the `inert` attribute is not supported.
  const guards = supportsInert() ? _guards : true;
  const orderRef = useLatestRef(order);
  const initialFocusRef = useLatestRef(initialFocus);
  const returnFocusRef = useLatestRef(returnFocus);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();
  const startDismissButtonRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const endDismissButtonRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const preventReturnFocusRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const isPointerDownRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const tabbableIndexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
  const isInsidePortal = portalContext != null;
  const firstElementChild = floating == null ? void 0 : floating.firstElementChild;
  // If the floating element is acting as a positioning wrapper rather than the
  // element that receives aria props, use it as the focus root instead.
  const floatingFocusNode = (firstElementChild == null ? void 0 : firstElementChild.id) === floatingId ? firstElementChild : floating;
  const getTabbableContent = useEffectEvent(function (container) {
    if (container === void 0) {
      container = floatingFocusNode;
    }
    return container ? (0,tabbable__WEBPACK_IMPORTED_MODULE_7__.tabbable)(container, getTabbableOptions()) : [];
  });
  const getTabbableElements = useEffectEvent(container => {
    const content = getTabbableContent(container);
    return orderRef.current.map(type => {
      if (domReference && type === 'reference') {
        return domReference;
      }
      if (floatingFocusNode && type === 'floating') {
        return floatingFocusNode;
      }
      return content;
    }).filter(Boolean).flat();
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (disabled) return;
    if (!modal) return;
    function onKeyDown(event) {
      if (event.key === 'Tab') {
        // The focus guards have nothing to focus, so we need to stop the event.
        if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(floatingFocusNode, (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(floatingFocusNode))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
        }
        const els = getTabbableElements();
        const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event);
        if (orderRef.current[0] === 'reference' && target === domReference) {
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === 'floating' && target === floatingFocusNode && event.shiftKey) {
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
          enqueueFocus(els[0]);
        }
      }
    }
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(floatingFocusNode);
    doc.addEventListener('keydown', onKeyDown);
    return () => {
      doc.removeEventListener('keydown', onKeyDown);
    };
  }, [disabled, domReference, floatingFocusNode, modal, orderRef, isUntrappedTypeableCombobox, getTabbableContent, getTabbableElements]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (disabled) return;
    if (!floating) return;
    function handleFocusIn(event) {
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event);
      const tabbableContent = getTabbableContent();
      const tabbableIndex = tabbableContent.indexOf(target);
      if (tabbableIndex !== -1) {
        tabbableIndexRef.current = tabbableIndex;
      }
    }
    floating.addEventListener('focusin', handleFocusIn);
    return () => {
      floating.removeEventListener('focusin', handleFocusIn);
    };
  }, [disabled, floating, getTabbableContent]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (disabled) return;
    if (!closeOnFocusOut) return;

    // In Safari, buttons lose focus when pressing them.
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      queueMicrotask(() => {
        const movedToUnrelatedNode = !((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(domReference, relatedTarget) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(floating, relatedTarget) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(relatedTarget, floating) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute('focus-guard')) || tree && (getChildren(tree.nodesRef.current, nodeId).find(node => {
          var _node$context, _node$context2;
          return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
        }) || getAncestors(tree.nodesRef.current, nodeId).find(node => {
          var _node$context3, _node$context4;
          return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
        })));

        // Restore focus to the previous tabbable element index to prevent
        // focus from being lost outside the floating tree.
        if (restoreFocus && movedToUnrelatedNode && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(floatingFocusNode)) === (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(floatingFocusNode).body) {
          // Let `FloatingPortal` effect knows that focus is still inside the
          // floating tree.
          if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(floatingFocusNode)) {
            floatingFocusNode == null || floatingFocusNode.focus();
          }
          const prevTabbableIndex = tabbableIndexRef.current;
          const tabbableContent = getTabbableContent();
          const nodeToFocus = tabbableContent[prevTabbableIndex] || tabbableContent[tabbableContent.length - 1] || floatingFocusNode;
          if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }

        // Focus did not move inside the floating tree, and there are no tabbable
        // portal guards to handle closing.
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current &&
        // Fix React 18 Strict Mode returnFocus due to double rendering.
        relatedTarget !== getPreviouslyFocusedElement()) {
          preventReturnFocusRef.current = true;
          onOpenChange(false, event);
        }
      });
    }
    if (floating && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(domReference)) {
      domReference.addEventListener('focusout', handleFocusOutside);
      domReference.addEventListener('pointerdown', handlePointerDown);
      floating.addEventListener('focusout', handleFocusOutside);
      return () => {
        domReference.removeEventListener('focusout', handleFocusOutside);
        domReference.removeEventListener('pointerdown', handlePointerDown);
        floating.removeEventListener('focusout', handleFocusOutside);
      };
    }
  }, [disabled, domReference, floating, floatingFocusNode, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    var _portalContext$portal;
    if (disabled) return;

    // Don't hide portals nested within the parent portal.
    const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute('portal') + "]")) || []);
    if (floating) {
      const insideElements = [floating, ...portalNodes, startDismissButtonRef.current, endDismissButtonRef.current, orderRef.current.includes('reference') || isUntrappedTypeableCombobox ? domReference : null].filter(x => x != null);
      const cleanup = modal || isUntrappedTypeableCombobox ? markOthers(insideElements, guards, !guards) : markOthers(insideElements);
      return () => {
        cleanup();
      };
    }
  }, [disabled, domReference, floating, modal, orderRef, portalContext, isUntrappedTypeableCombobox, guards]);
  index(() => {
    if (disabled || !(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(floatingFocusNode)) return;
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(floatingFocusNode);
    const previouslyFocusedElement = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)(doc);

    // Wait for any layout effect state setters to execute to set `tabIndex`.
    queueMicrotask(() => {
      const focusableElements = getTabbableElements(floatingFocusNode);
      const initialFocusValue = initialFocusRef.current;
      const elToFocus = (typeof initialFocusValue === 'number' ? focusableElements[initialFocusValue] : initialFocusValue.current) || floatingFocusNode;
      const focusAlreadyInsideFloatingEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(floatingFocusNode, previouslyFocusedElement);
      if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floatingFocusNode
        });
      }
    });
  }, [disabled, open, floatingFocusNode, ignoreInitialFocus, getTabbableElements, initialFocusRef]);
  index(() => {
    if (disabled || !floatingFocusNode) return;
    let preventReturnFocusScroll = false;
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(floatingFocusNode);
    const previouslyFocusedElement = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)(doc);
    const contextData = dataRef.current;
    let openEvent = contextData.openEvent;
    addPreviouslyFocusedElement(previouslyFocusedElement);

    // Dismissing via outside press should always ignore `returnFocus` to
    // prevent unwanted scrolling.
    function onOpenChange(_ref) {
      let {
        open,
        reason,
        event,
        nested
      } = _ref;
      if (open) {
        openEvent = event;
      }
      if (reason === 'escape-key' && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      if (reason === 'hover' && event.type === 'mouseleave') {
        preventReturnFocusRef.current = true;
      }
      if (reason !== 'outside-press') return;
      if (nested) {
        preventReturnFocusRef.current = false;
        preventReturnFocusScroll = true;
      } else {
        preventReturnFocusRef.current = !((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isVirtualClick)(event) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isVirtualPointerEvent)(event));
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
      const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)(doc);
      const isFocusInsideFloatingTree = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
        var _node$context5;
        return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
      });
      const shouldFocusReference = isFocusInsideFloatingTree || openEvent && ['click', 'mousedown'].includes(openEvent.type);
      if (shouldFocusReference && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      const returnElement = getPreviouslyFocusedElement();
      if (
      // eslint-disable-next-line react-hooks/exhaustive-deps
      returnFocusRef.current && !preventReturnFocusRef.current && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(returnElement) && (
      // If the focus moved somewhere else after mount, avoid returning focus
      // since it likely entered a different element which should be
      // respected: https://github.com/floating-ui/floating-ui/issues/2607
      returnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
        enqueueFocus(returnElement, {
          // When dismissing nested floating elements, by the time the rAF has
          // executed, the menus will all have been unmounted. When they try
          // to get focused, the calls get ignored — leaving the root
          // reference focused as desired.
          cancelPrevious: false,
          preventScroll: preventReturnFocusScroll
        });
      }
    };
  }, [disabled, floating, floatingFocusNode, returnFocusRef, dataRef, refs, events, tree, nodeId]);

  // Synchronize the `context` & `modal` value to the FloatingPortal context.
  // It will decide whether or not it needs to render its own guards.
  index(() => {
    if (disabled) return;
    if (!portalContext) return;
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange,
      refs
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, onOpenChange, refs, closeOnFocusOut]);
  index(() => {
    if (disabled) return;
    if (!floatingFocusNode) return;
    if (typeof MutationObserver !== 'function') return;
    if (ignoreInitialFocus) return;
    const handleMutation = () => {
      const tabIndex = floatingFocusNode.getAttribute('tabindex');
      const tabbableContent = getTabbableContent();
      const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(floating));
      const tabbableIndex = tabbableContent.indexOf(activeEl);
      if (tabbableIndex !== -1) {
        tabbableIndexRef.current = tabbableIndex;
      }
      if (orderRef.current.includes('floating') || activeEl !== refs.domReference.current && tabbableContent.length === 0) {
        if (tabIndex !== '0') {
          floatingFocusNode.setAttribute('tabindex', '0');
        }
      } else if (tabIndex !== '-1') {
        floatingFocusNode.setAttribute('tabindex', '-1');
      }
    };
    handleMutation();
    const observer = new MutationObserver(handleMutation);
    observer.observe(floatingFocusNode, {
      childList: true,
      subtree: true,
      attributes: true
    });
    return () => {
      observer.disconnect();
    };
  }, [disabled, floating, floatingFocusNode, refs, orderRef, getTabbableContent, ignoreInitialFocus]);
  function renderDismissButton(location) {
    if (disabled || !visuallyHiddenDismiss || !modal) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VisuallyHiddenDismiss, {
      ref: location === 'start' ? startDismissButtonRef : endDismissButtonRef,
      onClick: event => onOpenChange(false, event.nativeEvent)
    }, typeof visuallyHiddenDismiss === 'string' ? visuallyHiddenDismiss : 'Dismiss');
  }
  const shouldRenderGuards = !disabled && guards && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, shouldRenderGuards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: event => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === 'reference' ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null || nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
        }
      }
    }
  }), !isUntrappedTypeableCombobox && renderDismissButton('start'), children, renderDismissButton('end'), shouldRenderGuards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: event => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        if (closeOnFocusOut) {
          preventReturnFocusRef.current = true;
        }
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null || prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
        }
      }
    }
  }));
}

const activeLocks = /*#__PURE__*/new Set();
/**
 * Provides base styling for a fixed overlay element to dim content or block
 * pointer events behind a floating element.
 * It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
 * @see https://floating-ui.com/docs/FloatingOverlay
 */
const FloatingOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function FloatingOverlay(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  const lockId = useId();
  index(() => {
    if (!lockScroll) return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getPlatform)());
    const bodyStyle = document.body.style;
    // RTL <body> scrollbar
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? 'paddingLeft' : 'paddingRight';
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
    bodyStyle.overflow = 'hidden';
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }

    // Only iOS doesn't respect `overflow: hidden` on document.body, and this
    // technique has fewer side effects.
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      // iOS 12 does not support `visualViewport`.
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: 'fixed',
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: '0'
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: '',
          [paddingProp]: ''
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: '',
            top: '',
            left: '',
            right: ''
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: ref
  }, rest, {
    style: {
      position: 'fixed',
      overflow: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});

function isButtonTarget(event) {
  return (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(event.target) && event.target.tagName === 'BUTTON';
}
function isSpaceIgnored(element) {
  return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isTypeableElement)(element);
}
/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */
function useClick(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    event: eventOption = 'click',
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = props;
  const pointerTypeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const didKeyDownRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onPointerDown(event) {
      pointerTypeRef.current = event.pointerType;
    },
    onMouseDown(event) {
      const pointerType = pointerTypeRef.current;

      // Ignore all buttons except for the "main" button.
      // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
      if (event.button !== 0) return;
      if (eventOption === 'click') return;
      if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMouseLikePointerType)(pointerType, true) && ignoreMouse) return;
      if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'mousedown' : true)) {
        onOpenChange(false, event.nativeEvent, 'click');
      } else {
        // Prevent stealing focus from the floating element
        event.preventDefault();
        onOpenChange(true, event.nativeEvent, 'click');
      }
    },
    onClick(event) {
      const pointerType = pointerTypeRef.current;
      if (eventOption === 'mousedown' && pointerTypeRef.current) {
        pointerTypeRef.current = undefined;
        return;
      }
      if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMouseLikePointerType)(pointerType, true) && ignoreMouse) return;
      if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'click' : true)) {
        onOpenChange(false, event.nativeEvent, 'click');
      } else {
        onOpenChange(true, event.nativeEvent, 'click');
      }
    },
    onKeyDown(event) {
      pointerTypeRef.current = undefined;
      if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
        return;
      }
      if (event.key === ' ' && !isSpaceIgnored(domReference)) {
        // Prevent scrolling
        event.preventDefault();
        didKeyDownRef.current = true;
      }
      if (event.key === 'Enter') {
        if (open && toggle) {
          onOpenChange(false, event.nativeEvent, 'click');
        } else {
          onOpenChange(true, event.nativeEvent, 'click');
        }
      }
    },
    onKeyUp(event) {
      if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
        return;
      }
      if (event.key === ' ' && didKeyDownRef.current) {
        didKeyDownRef.current = false;
        if (open && toggle) {
          onOpenChange(false, event.nativeEvent, 'click');
        } else {
          onOpenChange(true, event.nativeEvent, 'click');
        }
      }
    }
  }), [dataRef, domReference, eventOption, ignoreMouse, keyboardHandlers, onOpenChange, open, toggle]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

function createVirtualElement(domElement, data) {
  let offsetX = null;
  let offsetY = null;
  let isAutoUpdateEvent = false;
  return {
    contextElement: domElement || undefined,
    getBoundingClientRect() {
      var _data$dataRef$current;
      const domRect = (domElement == null ? void 0 : domElement.getBoundingClientRect()) || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      const isXAxis = data.axis === 'x' || data.axis === 'both';
      const isYAxis = data.axis === 'y' || data.axis === 'both';
      const canTrackCursorOnAutoUpdate = ['mouseenter', 'mousemove'].includes(((_data$dataRef$current = data.dataRef.current.openEvent) == null ? void 0 : _data$dataRef$current.type) || '') && data.pointerType !== 'touch';
      let width = domRect.width;
      let height = domRect.height;
      let x = domRect.x;
      let y = domRect.y;
      if (offsetX == null && data.x && isXAxis) {
        offsetX = domRect.x - data.x;
      }
      if (offsetY == null && data.y && isYAxis) {
        offsetY = domRect.y - data.y;
      }
      x -= offsetX || 0;
      y -= offsetY || 0;
      width = 0;
      height = 0;
      if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
        width = data.axis === 'y' ? domRect.width : 0;
        height = data.axis === 'x' ? domRect.height : 0;
        x = isXAxis && data.x != null ? data.x : x;
        y = isYAxis && data.y != null ? data.y : y;
      } else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
        height = data.axis === 'x' ? domRect.height : height;
        width = data.axis === 'y' ? domRect.width : width;
      }
      isAutoUpdateEvent = true;
      return {
        width,
        height,
        x,
        y,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x
      };
    }
  };
}
function isMouseBasedEvent(event) {
  return event != null && event.clientX != null;
}
/**
 * Positions the floating element relative to a client point (in the viewport),
 * such as the mouse position. By default, it follows the mouse cursor.
 * @see https://floating-ui.com/docs/useClientPoint
 */
function useClientPoint(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    dataRef,
    elements: {
      floating,
      domReference
    },
    refs
  } = context;
  const {
    enabled = true,
    axis = 'both',
    x = null,
    y = null
  } = props;
  const initialRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const cleanupListenerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const [pointerType, setPointerType] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const [reactive, setReactive] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  const setReference = useEffectEvent((x, y) => {
    if (initialRef.current) return;

    // Prevent setting if the open event was not a mouse-like one
    // (e.g. focus to open, then hover over the reference element).
    // Only apply if the event exists.
    if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) {
      return;
    }
    refs.setPositionReference(createVirtualElement(domReference, {
      x,
      y,
      axis,
      dataRef,
      pointerType
    }));
  });
  const handleReferenceEnterOrMove = useEffectEvent(event => {
    if (x != null || y != null) return;
    if (!open) {
      setReference(event.clientX, event.clientY);
    } else if (!cleanupListenerRef.current) {
      // If there's no cleanup, there's no listener, but we want to ensure
      // we add the listener if the cursor landed on the floating element and
      // then back on the reference (i.e. it's interactive).
      setReactive([]);
    }
  });

  // If the pointer is a mouse-like pointer, we want to continue following the
  // mouse even if the floating element is transitioning out. On touch
  // devices, this is undesirable because the floating element will move to
  // the dismissal touch point.
  const openCheck = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMouseLikePointerType)(pointerType) ? floating : open;
  const addListener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    // Explicitly specified `x`/`y` coordinates shouldn't add a listener.
    if (!openCheck || !enabled || x != null || y != null) return;
    const win = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getWindow)(floating);
    function handleMouseMove(event) {
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event);
      if (!(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(floating, target)) {
        setReference(event.clientX, event.clientY);
      } else {
        win.removeEventListener('mousemove', handleMouseMove);
        cleanupListenerRef.current = null;
      }
    }
    if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) {
      win.addEventListener('mousemove', handleMouseMove);
      const cleanup = () => {
        win.removeEventListener('mousemove', handleMouseMove);
        cleanupListenerRef.current = null;
      };
      cleanupListenerRef.current = cleanup;
      return cleanup;
    }
    refs.setPositionReference(domReference);
  }, [openCheck, enabled, x, y, floating, dataRef, refs, domReference, setReference]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return addListener();
  }, [addListener, reactive]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (enabled && !floating) {
      initialRef.current = false;
    }
  }, [enabled, floating]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled && open) {
      initialRef.current = true;
    }
  }, [enabled, open]);
  index(() => {
    if (enabled && (x != null || y != null)) {
      initialRef.current = false;
      setReference(x, y);
    }
  }, [enabled, x, y, setReference]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    function setPointerTypeRef(_ref) {
      let {
        pointerType
      } = _ref;
      setPointerType(pointerType);
    }
    return {
      onPointerDown: setPointerTypeRef,
      onPointerEnter: setPointerTypeRef,
      onMouseMove: handleReferenceEnterOrMove,
      onMouseEnter: handleReferenceEnterOrMove
    };
  }, [handleReferenceEnterOrMove]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

const bubbleHandlerKeys = {
  pointerdown: 'onPointerDown',
  mousedown: 'onMouseDown',
  click: 'onClick'
};
const captureHandlerKeys = {
  pointerdown: 'onPointerDownCapture',
  mousedown: 'onMouseDownCapture',
  click: 'onClickCapture'
};
const normalizeProp = normalizable => {
  var _normalizable$escapeK, _normalizable$outside;
  return {
    escapeKey: typeof normalizable === 'boolean' ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
    outsidePress: typeof normalizable === 'boolean' ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
  };
};
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    elements,
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = 'pointerdown',
    referencePress = false,
    referencePressEvent = 'pointerdown',
    ancestorScroll = false,
    bubbles,
    capture
  } = props;
  const tree = useFloatingTree();
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === 'function' ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === 'function' ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const endedOrStartedInsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const {
    escapeKey: escapeKeyCapture,
    outsidePress: outsidePressCapture
  } = normalizeProp(capture);
  const closeOnEscapeKeyDown = useEffectEvent(event => {
    var _dataRef$current$floa;
    if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
      return;
    }
    const nodeId = (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach(child => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    onOpenChange(false, (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isReactEvent)(event) ? event.nativeEvent : event, 'escape-key');
  });
  const closeOnEscapeKeyDownCapture = useEffectEvent(event => {
    var _getTarget2;
    const callback = () => {
      var _getTarget;
      closeOnEscapeKeyDown(event);
      (_getTarget = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event)) == null || _getTarget.removeEventListener('keydown', callback);
    };
    (_getTarget2 = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event)) == null || _getTarget2.addEventListener('keydown', callback);
  });
  const closeOnPressOutside = useEffectEvent(event => {
    var _dataRef$current$floa2;
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;

    // When click outside is lazy (`click` event), handle dragging.
    // Don't close if:
    // - The click started inside the floating element.
    // - The click ended inside the floating element.
    const endedOrStartedInside = endedOrStartedInsideRef.current;
    endedOrStartedInsideRef.current = false;
    if (outsidePressEvent === 'click' && endedOrStartedInside) {
      return;
    }
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === 'function' && !outsidePress(event)) {
      return;
    }
    const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event);
    const inertSelector = "[" + createAttribute('inert') + "]";
    const markers = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.floating).querySelectorAll(inertSelector);
    let targetRootAncestor = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(target) ? target : null;
    while (targetRootAncestor && !(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isLastTraversableNode)(targetRootAncestor)) {
      const nextParent = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getParentNode)(targetRootAncestor);
      if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isLastTraversableNode)(nextParent) || !(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(nextParent)) {
        break;
      }
      targetRootAncestor = nextParent;
    }

    // Check if the click occurred on a third-party element injected after the
    // floating element rendered.
    if (markers.length && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(target) && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isRootElement)(target) &&
    // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(target, elements.floating) &&
    // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(markers).every(marker => !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(targetRootAncestor, marker))) {
      return;
    }

    // Check if the click occurred on the scrollbar
    if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(target) && floating) {
      // In Firefox, `target.scrollWidth > target.clientWidth` for inline
      // elements.
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;

      // In some browsers it is possible to change the <body> (or window)
      // scrollbar to the left side, but is very rare and is difficult to
      // check for. Plus, for modal dialogs with backdrops, it is more
      // important that the backdrop is checked but not so much the window.
      if (canScrollY) {
        const isRTL = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getComputedStyle)(target).direction === 'rtl';
        if (isRTL) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const nodeId = (_dataRef$current$floa2 = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa2.nodeId;
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
      var _node$context;
      return (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isEventTargetWithin)(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isEventTargetWithin)(event, elements.floating) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isEventTargetWithin)(event, elements.domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach(child => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    onOpenChange(false, event, 'outside-press');
  });
  const closeOnPressOutsideCapture = useEffectEvent(event => {
    var _getTarget4;
    const callback = () => {
      var _getTarget3;
      closeOnPressOutside(event);
      (_getTarget3 = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
    };
    (_getTarget4 = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll(event) {
      onOpenChange(false, event, 'ancestor-scroll');
    }
    const doc = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.floating);
    escapeKey && doc.addEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
    outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
    let ancestors = [];
    if (ancestorScroll) {
      if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(elements.domReference)) {
        ancestors = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getOverflowAncestors)(elements.domReference);
      }
      if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(elements.floating)) {
        ancestors = ancestors.concat((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getOverflowAncestors)(elements.floating));
      }
      if (!(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(elements.reference) && elements.reference && elements.reference.contextElement) {
        ancestors = ancestors.concat((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getOverflowAncestors)(elements.reference.contextElement));
      }
    }

    // Ignore the visual viewport for scrolling dismissal (allow pinch-zoom)
    ancestors = ancestors.filter(ancestor => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach(ancestor => {
      ancestor.addEventListener('scroll', onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
      outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
      ancestors.forEach(ancestor => {
        ancestor.removeEventListener('scroll', onScroll);
      });
    };
  }, [dataRef, elements, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, escapeKeyCapture, closeOnEscapeKeyDownCapture, closeOnPressOutside, outsidePressCapture, closeOnPressOutsideCapture]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    [bubbleHandlerKeys[referencePressEvent]]: event => {
      if (referencePress) {
        onOpenChange(false, event.nativeEvent, 'reference-press');
      }
    }
  }), [closeOnEscapeKeyDown, onOpenChange, referencePress, referencePressEvent]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    onMouseDown() {
      endedOrStartedInsideRef.current = true;
    },
    onMouseUp() {
      endedOrStartedInsideRef.current = true;
    },
    [captureHandlerKeys[outsidePressEvent]]: () => {
      insideReactTreeRef.current = true;
    }
  }), [closeOnEscapeKeyDown, outsidePressEvent]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  const [events] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(optionDomReference)) {
      error('Cannot pass a virtual element to the `elements.reference` option,', 'as it must be a real DOM element. Use `refs.setPositionReference()`', 'instead.');
    }
  }
  const [positionReference, setPositionReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open, event, reason) => {
    dataRef.current.openEvent = open ? event : undefined;
    events.emit('openchange', {
      open,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open, event, reason);
  });
  const refs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}

/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [positionReference, _setPositionReference] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.useFloating)({
    ...options,
    elements: {
      ...computedElements,
      ...(positionReference && {
        reference: positionReference
      })
    }
  });
  const setPositionReference = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    const computedPositionReference = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    // Store the positionReference in state if the DOM reference is specified externally via the
    // `elements.reference` option. This ensures that it won't be overridden on future renders.
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }

    // Backwards-compatibility for passing a virtual element to `reference`
    // after it has set the DOM reference.
    if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(position.refs.reference.current) || position.refs.reference.current === null ||
    // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position.elements,
    domReference: domReference
  }), [position.elements, domReference]);
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find(node => node.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

/**
 * Opens the floating element while the reference element has focus, like CSS
 * `:focus`.
 * @see https://floating-ui.com/docs/useFocus
 */
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    dataRef,
    elements
  } = context;
  const {
    enabled = true,
    visibleOnly = true
  } = props;
  const blockFocusRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const keyboardModalityRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    const win = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.getWindow)(elements.domReference);

    // If the reference was focused and the user left the tab/window, and the
    // floating element was not open, the focus should be blocked when they
    // return to the tab/window.
    function onBlur() {
      if (!open && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(elements.domReference) && elements.domReference === (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.domReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    win.addEventListener('blur', onBlur);
    win.addEventListener('keydown', onKeyDown, true);
    return () => {
      win.removeEventListener('blur', onBlur);
      win.removeEventListener('keydown', onKeyDown, true);
    };
  }, [elements.domReference, open, enabled]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function onOpenChange(_ref) {
      let {
        reason
      } = _ref;
      if (reason === 'reference-press' || reason === 'escape-key') {
        blockFocusRef.current = true;
      }
    }
    events.on('openchange', onOpenChange);
    return () => {
      events.off('openchange', onOpenChange);
    };
  }, [events, enabled]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onPointerDown(event) {
      if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isVirtualPointerEvent)(event.nativeEvent)) return;
      keyboardModalityRef.current = false;
    },
    onMouseLeave() {
      blockFocusRef.current = false;
    },
    onFocus(event) {
      if (blockFocusRef.current) return;
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event.nativeEvent);
      if (visibleOnly && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(target)) {
        try {
          // Mac Safari unreliably matches `:focus-visible` on the reference
          // if focus was outside the page initially - use the fallback
          // instead.
          if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isSafari)() && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMac)()) throw Error();
          if (!target.matches(':focus-visible')) return;
        } catch (e) {
          // Old browsers will throw an error when using `:focus-visible`.
          if (!keyboardModalityRef.current && !(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isTypeableElement)(target)) {
            return;
          }
        }
      }
      onOpenChange(true, event.nativeEvent, 'focus');
    },
    onBlur(event) {
      blockFocusRef.current = false;
      const relatedTarget = event.relatedTarget;
      const nativeEvent = event.nativeEvent;

      // Hit the non-modal focus management portal guard. Focus will be
      // moved into the floating element immediately after.
      const movedToFocusGuard = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(relatedTarget) && relatedTarget.hasAttribute(createAttribute('focus-guard')) && relatedTarget.getAttribute('data-type') === 'outside';

      // Wait for the window blur listener to fire.
      timeoutRef.current = window.setTimeout(() => {
        var _dataRef$current$floa;
        const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)(elements.domReference ? elements.domReference.ownerDocument : document);

        // Focus left the page, keep it open.
        if (!relatedTarget && activeEl === elements.domReference) return;

        // When focusing the reference element (e.g. regular click), then
        // clicking into the floating element, prevent it from hiding.
        // Note: it must be focusable, e.g. `tabindex="-1"`.
        // We can not rely on relatedTarget to point to the correct element
        // as it will only point to the shadow host of the newly focused element
        // and not the element that actually has received focus if it is located
        // inside a shadow root.
        if ((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)((_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.refs.floating.current, activeEl) || (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(elements.domReference, activeEl) || movedToFocusGuard) {
          return;
        }
        onOpenChange(false, nativeEvent, 'focus');
      });
    }
  }), [dataRef, elements.domReference, onOpenChange, visibleOnly]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}

const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
function mergeProps(userProps, propsList, elementKey) {
  const map = new Map();
  const isItem = elementKey === 'item';
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...(elementKey === 'floating' && {
      tabIndex: -1
    }),
    ...domUserProps,
    ...propsList.map(value => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === 'function') {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach(_ref => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf('on') === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === 'function') {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function () {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map(fn => fn(...args)).find(val => val !== undefined);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
/**
 * Merges an array of interaction hooks' props into prop getters, allowing
 * event handler functions to be composed together without overwriting one
 * another.
 * @see https://floating-ui.com/docs/useInteractions
 */
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map(key => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map(key => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map(key => key == null ? void 0 : key.item);
  const getReferenceProps = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(userProps => mergeProps(userProps, propsList, 'reference'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  referenceDeps);
  const getFloatingProps = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(userProps => mergeProps(userProps, propsList, 'floating'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  floatingDeps);
  const getItemProps = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(userProps => mergeProps(userProps, propsList, 'item'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  itemDeps);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}

let isPreventScrollSupported = false;
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case 'vertical':
      return vertical;
    case 'horizontal':
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */
function useListNavigation(context, props) {
  const {
    open,
    onOpenChange,
    elements
  } = context;
  const {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {},
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = 'auto',
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = undefined,
    orientation = 'vertical',
    cols = 1,
    scrollItemIntoView = true,
    virtualItemRef,
    itemSizes,
    dense = false
  } = props;
  if (true) {
    if (allowEscape) {
      if (!loop) {
        warn('`useListNavigation` looping must be enabled to allow escaping.');
      }
      if (!virtual) {
        warn('`useListNavigation` must be virtual to allow escaping.');
      }
    }
    if (orientation === 'vertical' && cols > 1) {
      warn('In grid list navigation mode (`cols` > 1), the `orientation` should', 'be either "horizontal" or "both".');
    }
  }
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEffectEvent(unstable_onNavigate);
  const focusItemOnOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(focusItemOnOpen);
  const indexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const isPointerModalityRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  const previousOnNavigateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(onNavigate);
  const previousMountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(!!elements.floating);
  const forceSyncFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const forceScrollIntoViewRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const disabledIndicesRef = useLatestRef(disabledIndices);
  const latestOpenRef = useLatestRef(open);
  const scrollItemIntoViewRef = useLatestRef(scrollItemIntoView);
  const floatingRef = useLatestRef(elements.floating);
  const selectedIndexRef = useLatestRef(selectedIndex);
  const [activeId, setActiveId] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const [virtualId, setVirtualId] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const focusItem = useEffectEvent(function (listRef, indexRef, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    function runFocus(item) {
      if (virtual) {
        setActiveId(item.id);
        tree == null || tree.events.emit('virtualfocus', item);
        if (virtualItemRef) {
          virtualItemRef.current = item;
        }
      } else {
        enqueueFocus(item, {
          preventScroll: true,
          // Mac Safari does not move the virtual cursor unless the focus call
          // is sync. However, for the very first focus call, we need to wait
          // for the position to be ready in order to prevent unwanted
          // scrolling. This means the virtual cursor will not move to the first
          // item when first opening the floating element, but will on
          // subsequent calls. `preventScroll` is supported in modern Safari,
          // so we can use that instead.
          // iOS Safari must be async or the first item will not be focused.
          sync: (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isMac)() && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isSafari)() ? isPreventScrollSupported || forceSyncFocus.current : false
        });
      }
    }
    const initialItem = listRef.current[indexRef.current];
    if (initialItem) {
      runFocus(initialItem);
    }
    requestAnimationFrame(() => {
      const waitedItem = listRef.current[indexRef.current] || initialItem;
      if (!waitedItem) return;
      if (!initialItem) {
        runFocus(waitedItem);
      }
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
        // by all browsers.
        waitedItem.scrollIntoView == null || waitedItem.scrollIntoView(typeof scrollIntoViewOptions === 'boolean' ? {
          block: 'nearest',
          inline: 'nearest'
        } : scrollIntoViewOptions);
      }
    });
  });
  index(() => {
    document.createElement('div').focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);

  // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
  // element. Also, reset `activeIndex` upon closing the floating element.
  index(() => {
    if (!enabled) return;
    if (open && elements.floating) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        // Regardless of the pointer modality, we want to ensure the selected
        // item comes into view when the floating element is opened.
        forceScrollIntoViewRef.current = true;
        indexRef.current = selectedIndex;
        onNavigate(selectedIndex);
      }
    } else if (previousMountedRef.current) {
      // Since the user can specify `onNavigate` conditionally
      // (onNavigate: open ? setActiveIndex : setSelectedIndex),
      // we store and call the previous function.
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, elements.floating, selectedIndex, onNavigate]);

  // Sync `activeIndex` to be the focused item while the floating element is
  // open.
  index(() => {
    if (!enabled) return;
    if (open && elements.floating) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndexRef.current != null) {
          return;
        }

        // Reset while the floating element was open (e.g. the list changed).
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }

        // Initial sync.
        if (!previousMountedRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = () => {
            if (listRef.current[0] == null) {
              // Avoid letting the browser paint if possible on the first try,
              // otherwise use rAF. Don't try more than twice, since something
              // is wrong otherwise.
              if (runs < 2) {
                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              keyRef.current = null;
              onNavigate(indexRef.current);
            }
          };
          waitForListPopulated();
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, elements.floating, activeIndex, selectedIndexRef, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);

  // Ensure the parent floating element has focus when a nested child closes
  // to allow arrow key navigation to work after the pointer leaves the child.
  index(() => {
    var _nodes$find;
    if (!enabled || elements.floating || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = (_nodes$find = nodes.find(node => node.id === parentId)) == null || (_nodes$find = _nodes$find.context) == null ? void 0 : _nodes$find.elements.floating;
    const activeEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getDocument)(elements.floating));
    const treeContainsActiveEl = nodes.some(node => node.context && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, elements.floating, tree, parentId, virtual]);
  index(() => {
    if (!enabled) return;
    if (!tree) return;
    if (!virtual) return;
    if (parentId) return;
    function handleVirtualFocus(item) {
      setVirtualId(item.id);
      if (virtualItemRef) {
        virtualItemRef.current = item;
      }
    }
    tree.events.on('virtualfocus', handleVirtualFocus);
    return () => {
      tree.events.off('virtualfocus', handleVirtualFocus);
    };
  }, [enabled, tree, virtual, parentId, virtualItemRef]);
  index(() => {
    previousOnNavigateRef.current = onNavigate;
    previousMountedRef.current = !!elements.floating;
  });
  index(() => {
    if (!open) {
      keyRef.current = null;
    }
  }, [open]);
  const hasActiveIndex = activeIndex != null;
  const item = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open) return;
      const index = listRef.current.indexOf(currentTarget);
      if (index !== -1) {
        onNavigate(index);
      }
    }
    const props = {
      onFocus(_ref) {
        let {
          currentTarget
        } = _ref;
        syncCurrentTarget(currentTarget);
      },
      onClick: _ref2 => {
        let {
          currentTarget
        } = _ref2;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...(focusItemOnHover && {
        onMouseMove(_ref3) {
          let {
            currentTarget
          } = _ref3;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave(_ref4) {
          let {
            pointerType
          } = _ref4;
          if (!isPointerModalityRef.current || pointerType === 'touch') {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          onNavigate(null);
          if (!virtual) {
            enqueueFocus(floatingRef.current, {
              preventScroll: true
            });
          }
        }
      })
    };
    return props;
  }, [open, floatingRef, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  const commonOnKeyDown = useEffectEvent(event => {
    isPointerModalityRef.current = false;
    forceSyncFocus.current = true;

    // If the floating element is animating out, ignore navigation. Otherwise,
    // the `activeIndex` gets set to 0 despite not being open so the next time
    // the user ArrowDowns, the first item won't be focused.
    if (!latestOpenRef.current && event.currentTarget === floatingRef.current) {
      return;
    }
    if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
      onOpenChange(false, event.nativeEvent, 'list-navigation');
      if ((0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(elements.domReference) && !virtual) {
        elements.domReference.focus();
      }
      return;
    }
    const currentIndex = indexRef.current;
    const minIndex = getMinIndex(listRef, disabledIndices);
    const maxIndex = getMaxIndex(listRef, disabledIndices);
    if (event.key === 'Home') {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
      indexRef.current = minIndex;
      onNavigate(indexRef.current);
    }
    if (event.key === 'End') {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
      indexRef.current = maxIndex;
      onNavigate(indexRef.current);
    }

    // Grid navigation.
    if (cols > 1) {
      const sizes = itemSizes || Array.from({
        length: listRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      // To calculate movements on the grid, we use hypothetical cell indices
      // as if every item was 1x1, then convert back to real indices.
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex(index => index != null && !isDisabled(listRef.current, index, disabledIndices));
      // last enabled index
      const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex) => index != null && !isDisabled(listRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
      indexRef.current = cellMap[getGridNavigatedIndex({
        current: cellMap.map(itemIndex => itemIndex != null ? listRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...(disabledIndices || listRef.current.map((_, index) => isDisabled(listRef.current, index) ? index : undefined)), undefined], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(indexRef.current > maxIndex ? minIndex : indexRef.current, sizes, cellMap, cols,
        // use a corner matching the edge closest to the direction
        // we're moving in so we don't end up in the same item. Prefer
        // top/left over bottom/right.
        event.key === ARROW_DOWN ? 'bl' : event.key === ARROW_RIGHT ? 'tr' : 'tl'),
        stopEvent: true
      })]; // navigated cell will never be nullish

      onNavigate(indexRef.current);
      if (orientation === 'both') {
        return;
      }
    }
    if (isMainOrientationKey(event.key, orientation)) {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);

      // Reset the index if no item is focused.
      if (open && !virtual && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.activeElement)(event.currentTarget.ownerDocument) === event.currentTarget) {
        indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
        onNavigate(indexRef.current);
        return;
      }
      if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
        if (loop) {
          indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          });
        } else {
          indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            disabledIndices
          }));
        }
      } else {
        if (loop) {
          indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          });
        } else {
          indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
            startingIndex: currentIndex,
            decrement: true,
            disabledIndices
          }));
        }
      }
      if (isIndexOutOfBounds(listRef, indexRef.current)) {
        onNavigate(null);
      } else {
        onNavigate(indexRef.current);
      }
    }
  });
  const ariaActiveDescendantProp = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return virtual && open && hasActiveIndex && {
      'aria-activedescendant': virtualId || activeId
    };
  }, [virtual, open, hasActiveIndex, virtualId, activeId]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      'aria-orientation': orientation === 'both' ? undefined : orientation,
      ...(!(0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isTypeableCombobox)(elements.domReference) && ariaActiveDescendantProp),
      onKeyDown: commonOnKeyDown,
      onPointerMove() {
        isPointerModalityRef.current = true;
      }
    };
  }, [ariaActiveDescendantProp, commonOnKeyDown, elements.domReference, orientation]);
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const disabledIndices = disabledIndicesRef.current;
    const activeItem = listRef.current.find(item => (item == null ? void 0 : item.id) === activeId);
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === 'auto' && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isVirtualClick)(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    function checkVirtualPointer(event) {
      // `pointerdown` fires first, reset the state then perform the checks.
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === 'auto' && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.isVirtualPointerEvent)(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    return {
      ...ariaActiveDescendantProp,
      onKeyDown(event) {
        isPointerModalityRef.current = false;
        const isArrowKey = event.key.indexOf('Arrow') === 0;
        const isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
        const isCrossCloseKey = isCrossOrientationCloseKey(event.key, orientation, rtl);
        const isMainKey = isMainOrientationKey(event.key, orientation);
        const isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
        if (virtual && open) {
          const rootNode = tree == null ? void 0 : tree.nodesRef.current.find(node => node.parentId == null);
          const deepestNode = tree && rootNode ? getDeepestNode(tree.nodesRef.current, rootNode.id) : null;
          if (isArrowKey && deepestNode && virtualItemRef) {
            const eventObject = new KeyboardEvent('keydown', {
              key: event.key,
              bubbles: true
            });
            if (isCrossOpenKey || isCrossCloseKey) {
              var _deepestNode$context, _deepestNode$context2;
              const isCurrentTarget = ((_deepestNode$context = deepestNode.context) == null ? void 0 : _deepestNode$context.elements.domReference) === event.currentTarget;
              const dispatchItem = isCrossCloseKey && !isCurrentTarget ? (_deepestNode$context2 = deepestNode.context) == null ? void 0 : _deepestNode$context2.elements.domReference : isCrossOpenKey ? activeItem : null;
              if (dispatchItem) {
                (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
                dispatchItem.dispatchEvent(eventObject);
                setVirtualId(undefined);
              }
            }
            if (isMainKey && deepestNode.context) {
              if (deepestNode.context.open && deepestNode.parentId && event.currentTarget !== deepestNode.context.elements.domReference) {
                var _deepestNode$context$;
                (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
                (_deepestNode$context$ = deepestNode.context.elements.domReference) == null || _deepestNode$context$.dispatchEvent(eventObject);
                return;
              }
            }
          }
          return commonOnKeyDown(event);
        }

        // If a floating element should not open on arrow key down, avoid
        // setting `activeIndex` while it's closed.
        if (!open && !openOnArrowKeyDown && isArrowKey) {
          return;
        }
        if (isNavigationKey) {
          keyRef.current = nested && isMainKey ? null : event.key;
        }
        if (nested) {
          if (isCrossOpenKey) {
            (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
            if (open) {
              indexRef.current = getMinIndex(listRef, disabledIndices);
              onNavigate(indexRef.current);
            } else {
              onOpenChange(true, event.nativeEvent, 'list-navigation');
            }
          }
          return;
        }
        if (isMainKey) {
          if (selectedIndex != null) {
            indexRef.current = selectedIndex;
          }
          (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
          if (!open && openOnArrowKeyDown) {
            onOpenChange(true, event.nativeEvent, 'list-navigation');
          } else {
            commonOnKeyDown(event);
          }
          if (open) {
            onNavigate(indexRef.current);
          }
        }
      },
      onFocus() {
        if (open && !virtual) {
          onNavigate(null);
        }
      },
      onPointerDown: checkVirtualPointer,
      onMouseDown: checkVirtualMouse,
      onClick: checkVirtualMouse
    };
  }, [activeId, ariaActiveDescendantProp, commonOnKeyDown, disabledIndicesRef, focusItemOnOpen, listRef, nested, onNavigate, onOpenChange, open, openOnArrowKeyDown, orientation, rtl, selectedIndex, tree, virtual, virtualItemRef]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}

const componentRoleToAriaRoleMap = /*#__PURE__*/new Map([['select', 'listbox'], ['combobox', 'listbox'], ['label', false]]);

/**
 * Adds base screen reader props to the reference and floating elements for a
 * given floating element `role`.
 * @see https://floating-ui.com/docs/useRole
 */
function useRole(context, props) {
  var _componentRoleToAriaR;
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = 'dialog'
  } = props;
  const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
  const referenceId = useId();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ariaRole === 'tooltip' || role === 'label') {
      return {
        ["aria-" + (role === 'label' ? 'labelledby' : 'describedby')]: open ? floatingId : undefined
      };
    }
    return {
      'aria-expanded': open ? 'true' : 'false',
      'aria-haspopup': ariaRole === 'alertdialog' ? 'dialog' : ariaRole,
      'aria-controls': open ? floatingId : undefined,
      ...(ariaRole === 'listbox' && {
        role: 'combobox'
      }),
      ...(ariaRole === 'menu' && {
        id: referenceId
      }),
      ...(ariaRole === 'menu' && isNested && {
        role: 'menuitem'
      }),
      ...(role === 'select' && {
        'aria-autocomplete': 'none'
      }),
      ...(role === 'combobox' && {
        'aria-autocomplete': 'list'
      })
    };
  }, [ariaRole, floatingId, isNested, open, referenceId, role]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      ...(ariaRole && {
        role: ariaRole
      })
    };
    if (ariaRole === 'tooltip' || role === 'label') {
      return floatingProps;
    }
    return {
      ...floatingProps,
      ...(ariaRole === 'menu' && {
        'aria-labelledby': referenceId
      })
    };
  }, [ariaRole, floatingId, referenceId, role]);
  const item = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(_ref => {
    let {
      active,
      selected
    } = _ref;
    const commonProps = {
      role: 'option',
      ...(active && {
        id: floatingId + "-option"
      })
    };

    // For `menu`, we are unable to tell if the item is a `menuitemradio`
    // or `menuitemcheckbox`. For backwards-compatibility reasons, also
    // avoid defaulting to `menuitem` as it may overwrite custom role props.
    switch (role) {
      case 'select':
        return {
          ...commonProps,
          'aria-selected': active && selected
        };
      case 'combobox':
        {
          return {
            ...commonProps,
            ...(active && {
              'aria-selected': true
            })
          };
        }
    }
    return {};
  }, [floatingId, role]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}

// Converts a JS style key like `backgroundColor` to a CSS transition-property
// like `background-color`.
const camelCaseToKebabCase = str => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());
function execWithArgsOrReturn(valueOrFn, args) {
  return typeof valueOrFn === 'function' ? valueOrFn(args) : valueOrFn;
}
function useDelayUnmount(open, durationMs) {
  const [isMounted, setIsMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(open);
  if (open && !isMounted) {
    setIsMounted(true);
  }
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!open && isMounted) {
      const timeout = setTimeout(() => setIsMounted(false), durationMs);
      return () => clearTimeout(timeout);
    }
  }, [open, isMounted, durationMs]);
  return isMounted;
}
/**
 * Provides a status string to apply CSS transitions to a floating element,
 * correctly handling placement-aware transitions.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstatus
 */
function useTransitionStatus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    elements: {
      floating
    }
  } = context;
  const {
    duration = 250
  } = props;
  const isNumberDuration = typeof duration === 'number';
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState('unmounted');
  const isMounted = useDelayUnmount(open, closeDuration);
  if (!isMounted && status === 'close') {
    setStatus('unmounted');
  }
  index(() => {
    if (!floating) return;
    if (open) {
      setStatus('initial');
      const frame = requestAnimationFrame(() => {
        setStatus('open');
      });
      return () => {
        cancelAnimationFrame(frame);
      };
    }
    setStatus('close');
  }, [open, floating]);
  return {
    isMounted,
    status
  };
}
/**
 * Provides styles to apply CSS transitions to a floating element, correctly
 * handling placement-aware transitions. Wrapper around `useTransitionStatus`.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstyles
 */
function useTransitionStyles(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    initial: unstable_initial = {
      opacity: 0
    },
    open: unstable_open,
    close: unstable_close,
    common: unstable_common,
    duration = 250
  } = props;
  const placement = context.placement;
  const side = placement.split('-')[0];
  const fnArgs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    side,
    placement
  }), [side, placement]);
  const isNumberDuration = typeof duration === 'number';
  const openDuration = (isNumberDuration ? duration : duration.open) || 0;
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [styles, setStyles] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => ({
    ...execWithArgsOrReturn(unstable_common, fnArgs),
    ...execWithArgsOrReturn(unstable_initial, fnArgs)
  }));
  const {
    isMounted,
    status
  } = useTransitionStatus(context, {
    duration
  });
  const initialRef = useLatestRef(unstable_initial);
  const openRef = useLatestRef(unstable_open);
  const closeRef = useLatestRef(unstable_close);
  const commonRef = useLatestRef(unstable_common);
  index(() => {
    const initialStyles = execWithArgsOrReturn(initialRef.current, fnArgs);
    const closeStyles = execWithArgsOrReturn(closeRef.current, fnArgs);
    const commonStyles = execWithArgsOrReturn(commonRef.current, fnArgs);
    const openStyles = execWithArgsOrReturn(openRef.current, fnArgs) || Object.keys(initialStyles).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    if (status === 'initial') {
      setStyles(styles => ({
        transitionProperty: styles.transitionProperty,
        ...commonStyles,
        ...initialStyles
      }));
    }
    if (status === 'open') {
      setStyles({
        transitionProperty: Object.keys(openStyles).map(camelCaseToKebabCase).join(','),
        transitionDuration: openDuration + "ms",
        ...commonStyles,
        ...openStyles
      });
    }
    if (status === 'close') {
      const styles = closeStyles || initialStyles;
      setStyles({
        transitionProperty: Object.keys(styles).map(camelCaseToKebabCase).join(','),
        transitionDuration: closeDuration + "ms",
        ...commonStyles,
        ...styles
      });
    }
  }, [closeDuration, closeRef, initialRef, openRef, commonRef, openDuration, status, fnArgs]);
  return {
    isMounted,
    styles
  };
}

/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
function useTypeahead(context, props) {
  var _ref;
  const {
    open,
    dataRef
  } = context;
  const {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props;
  const timeoutIdRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  const stringRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef('');
  const prevIndexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
  const matchIndexRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const onMatch = useEffectEvent(unstable_onMatch);
  const onTypingChange = useEffectEvent(unstable_onTypingChange);
  const findMatchRef = useLatestRef(findMatch);
  const ignoreKeysRef = useLatestRef(ignoreKeys);
  index(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = '';
    }
  }, [open]);
  index(() => {
    // Sync arrow key navigation but not typeahead navigation.
    if (open && stringRef.current === '') {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  const setTypingChange = useEffectEvent(value => {
    if (value) {
      if (!dataRef.current.typing) {
        dataRef.current.typing = value;
        onTypingChange(value);
      }
    } else {
      if (dataRef.current.typing) {
        dataRef.current.typing = value;
        onTypingChange(value);
      }
    }
  });
  const onKeyDown = useEffectEvent(event => {
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find(text => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
      return str ? list.indexOf(str) : -1;
    }
    const listContent = listRef.current;
    if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
      if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
        setTypingChange(false);
      } else if (event.key === ' ') {
        (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
      }
    }
    if (listContent == null || ignoreKeysRef.current.includes(event.key) ||
    // Character key.
    event.key.length !== 1 ||
    // Modifier key.
    event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (open && event.key !== ' ') {
      (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.stopEvent)(event);
      setTypingChange(true);
    }

    // Bail out if the list contains a word like "llama" or "aaron". TODO:
    // allow it in this case, too.
    const allowRapidSuccessionOfFirstLetter = listContent.every(text => {
      var _text$, _text$2;
      return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
    });

    // Allows the user to cycle through items that start with the same letter
    // in rapid succession.
    if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
    }
    stringRef.current += event.key;
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      stringRef.current = '';
      prevIndexRef.current = matchIndexRef.current;
      setTypingChange(false);
    }, resetMs);
    const prevIndex = prevIndexRef.current;
    const index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
    if (index !== -1) {
      onMatch(index);
      matchIndexRef.current = index;
    } else if (event.key !== ' ') {
      stringRef.current = '';
      setTypingChange(false);
    }
  });
  const reference = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown
  }), [onKeyDown]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      onKeyDown,
      onKeyUp(event) {
        if (event.key === ' ') {
          setTypingChange(false);
        }
      }
    };
  }, [onKeyDown, setTypingChange]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}

function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
/**
 * Positions the floating element such that an inner element inside of it is
 * anchored to the reference element.
 * @see https://floating-ui.com/docs/inner
 */
const inner = props => ({
  name: 'inner',
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_6__.evaluate)(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index];
    if (true) {
      if (!state.placement.startsWith('bottom')) {
        warn('`placement` side must be "bottom" when using the `inner`', 'middleware.');
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...(await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__.offset)(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state))
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__.detectOverflow)(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__.detectOverflow)(nextArgs, {
      ...detectOverflowOptions,
      elementContext: 'reference'
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;

    // There is not enough space, fallback to standard anchored positioning
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => onFallbackChange(true));
      } else {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_3__.detectOverflow)(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
/**
 * Changes the `inner` middleware's `offset` upon a `wheel` event to
 * expand the floating element's height, revealing more list items.
 * @see https://floating-ui.com/docs/inner
 */
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const prevScrollTopRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const initialOverflowRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!enabled) return;
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? 'max' : 'min';
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => {
          onChange(d => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test((0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getUserAgent)())) {
        // Needed to propagate scrolling during momentum scrolling phase once
        // it gets limited by the boundary. UX improvement, not critical.
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener('wheel', onWheel);

      // Wait for the position to be ready.
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener('wheel', onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => onChange(d => d + scrollDiff));
        }
      }

      // [Firefox] Wait for the height change to have been applied.
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside = !isInside;
    }
  }
  return isInside;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
/**
 * Generates a safe polygon area that the user can traverse without closing the
 * floating element once leaving the reference element.
 * @see https://floating-ui.com/docs/useHover#safepolygon
 */
function safePolygon(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    buffer = 0.5,
    blockPointerEvents = false,
    requireIntent = true
  } = options;
  let timeoutId;
  let hasLanded = false;
  let lastX = null;
  let lastY = null;
  let lastCursorTime = performance.now();
  function getCursorSpeed(x, y) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) {
      lastX = x;
      lastY = y;
      lastCursorTime = currentTime;
      return null;
    }
    const deltaX = x - lastX;
    const deltaY = y - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = distance / elapsedTime; // px / ms

    lastX = x;
    lastY = y;
    lastCursorTime = currentTime;
    return speed;
  }
  const fn = _ref => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId);
        onClose();
      }
      clearTimeout(timeoutId);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.getTarget)(event);
      const isLeave = event.type === 'mouseleave';
      const isOverFloatingEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(elements.floating, target);
      const isOverReferenceEl = (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split('-')[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }

      // Prevent overlapping floating element from being stuck in an open-close
      // loop: https://github.com/floating-ui/floating-ui/issues/1910
      if (isLeave && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_4__.isElement)(event.relatedTarget) && (0,_floating_ui_react_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(elements.floating, event.relatedTarget)) {
        return;
      }

      // If any nested child is open, abort.
      if (tree && getChildren(tree.nodesRef.current, nodeId).some(_ref2 => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }

      // If the pointer is leaving from the opposite side, the "buffer" logic
      // creates a point where the floating element remains open, but should be
      // ignored.
      // A constant of 1 handles floating point rounding errors.
      if (side === 'top' && y >= refRect.bottom - 1 || side === 'bottom' && y <= refRect.top + 1 || side === 'left' && x >= refRect.right - 1 || side === 'right' && x <= refRect.left + 1) {
        return close();
      }

      // Ignore when the cursor is within the rectangular trough between the
      // two elements. Since the triangle is created from the cursor point,
      // which can start beyond the ref element's edge, traversing back and
      // forth from the ref to the floating element can cause it to close. This
      // ensures it always remains open in that case.
      let rectPoly = [];
      switch (side) {
        case 'top':
          rectPoly = [[left, refRect.top + 1], [left, rect.bottom - 1], [right, rect.bottom - 1], [right, refRect.top + 1]];
          break;
        case 'bottom':
          rectPoly = [[left, rect.top + 1], [left, refRect.bottom - 1], [right, refRect.bottom - 1], [right, rect.top + 1]];
          break;
        case 'left':
          rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
          break;
        case 'right':
          rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
          break;
      }
      function getPolygon(_ref3) {
        let [x, y] = _ref3;
        switch (side) {
          case 'top':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'bottom':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'left':
            {
              const cursorPointOne = [x + buffer + 1, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x + buffer + 1, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
              return [...commonPoints, cursorPointOne, cursorPointTwo];
            }
          case 'right':
            {
              const cursorPointOne = [x - buffer, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x - buffer, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
        }
      }
      if (isPointInPolygon([clientX, clientY], rectPoly)) {
        return;
      }
      if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isLeave && requireIntent) {
        const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
        const cursorSpeedThreshold = 0.1;
        if (cursorSpeed !== null && cursorSpeed < cursorSpeedThreshold) {
          return close();
        }
      }
      if (!isPointInPolygon([clientX, clientY], getPolygon([x, y]))) {
        close();
      } else if (!hasLanded && requireIntent) {
        timeoutId = window.setTimeout(close, 40);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}




/***/ }),

/***/ "./node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TYPEABLE_SELECTOR: () => (/* binding */ TYPEABLE_SELECTOR),
/* harmony export */   activeElement: () => (/* binding */ activeElement),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   getDocument: () => (/* binding */ getDocument),
/* harmony export */   getPlatform: () => (/* binding */ getPlatform),
/* harmony export */   getTarget: () => (/* binding */ getTarget),
/* harmony export */   getUserAgent: () => (/* binding */ getUserAgent),
/* harmony export */   isAndroid: () => (/* binding */ isAndroid),
/* harmony export */   isEventTargetWithin: () => (/* binding */ isEventTargetWithin),
/* harmony export */   isJSDOM: () => (/* binding */ isJSDOM),
/* harmony export */   isMac: () => (/* binding */ isMac),
/* harmony export */   isMouseLikePointerType: () => (/* binding */ isMouseLikePointerType),
/* harmony export */   isReactEvent: () => (/* binding */ isReactEvent),
/* harmony export */   isRootElement: () => (/* binding */ isRootElement),
/* harmony export */   isSafari: () => (/* binding */ isSafari),
/* harmony export */   isTypeableCombobox: () => (/* binding */ isTypeableCombobox),
/* harmony export */   isTypeableElement: () => (/* binding */ isTypeableElement),
/* harmony export */   isVirtualClick: () => (/* binding */ isVirtualClick),
/* harmony export */   isVirtualPointerEvent: () => (/* binding */ isVirtualPointerEvent),
/* harmony export */   stopEvent: () => (/* binding */ stopEvent)
/* harmony export */ });
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");


function activeElement(doc) {
  let activeElement = doc.activeElement;
  while (((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
    var _activeElement;
    activeElement = activeElement.shadowRoot.activeElement;
  }
  return activeElement;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();

  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
  }

  // then fallback to custom implementation with Shadow DOM support
  if (rootNode && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      // @ts-ignore
      next = next.parentNode || next.host;
    }
  }

  // Give up, the result is false
  return false;
}
// Avoid Chrome DevTools blue warning.
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(_ref => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(' ');
  }
  return navigator.userAgent;
}

// License: https://github.com/adobe/react-spectrum/blob/b35d5c02fe900badccd0cf1a8f23bb593419f238/packages/@react-aria/utils/src/isVirtualEvent.ts
function isVirtualClick(event) {
  // FIXME: Firefox is now emitting a deprecation warning for `mozInputSource`.
  // Try to find a workaround for this. `react-aria` source still has the check.
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  if (isAndroid() && event.pointerType) {
    return event.type === 'click' && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM()) return false;
  return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse' ||
  // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'touch';
}
function isSafari() {
  // Chrome DevTools does not complain about navigator.vendor
  return /apple/i.test(navigator.vendor);
}
function isAndroid() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
  return getPlatform().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
}
function isJSDOM() {
  return getUserAgent().includes('jsdom/');
}
function isMouseLikePointerType(pointerType, strict) {
  // On some Linux machines with Chromium, mouse inputs return a `pointerType`
  // of "pen": https://github.com/floating-ui/floating-ui/issues/2015
  const values = ['mouse', 'pen'];
  if (!strict) {
    values.push('', undefined);
  }
  return values.includes(pointerType);
}
function isReactEvent(event) {
  return 'nativeEvent' in event;
}
function isRootElement(element) {
  return element.matches('html,body');
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ('composedPath' in event) {
    return event.composedPath().includes(node);
  }

  // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
  const e = event;
  return e.target != null && node.contains(e.target);
}
function getTarget(event) {
  if ('composedPath' in event) {
    return event.composedPath()[0];
  }

  // TS thinks `event` is of type never as it assumes all browsers support
  // `composedPath()`, but browsers without shadow DOM don't.
  return event.target;
}
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isTypeableCombobox(element) {
  if (!element) return false;
  return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}




/***/ }),

/***/ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),
/* harmony export */   getContainingBlock: () => (/* binding */ getContainingBlock),
/* harmony export */   getDocumentElement: () => (/* binding */ getDocumentElement),
/* harmony export */   getNearestOverflowAncestor: () => (/* binding */ getNearestOverflowAncestor),
/* harmony export */   getNodeName: () => (/* binding */ getNodeName),
/* harmony export */   getNodeScroll: () => (/* binding */ getNodeScroll),
/* harmony export */   getOverflowAncestors: () => (/* binding */ getOverflowAncestors),
/* harmony export */   getParentNode: () => (/* binding */ getParentNode),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   isContainingBlock: () => (/* binding */ isContainingBlock),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isLastTraversableNode: () => (/* binding */ isLastTraversableNode),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isOverflowElement: () => (/* binding */ isOverflowElement),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   isTableElement: () => (/* binding */ isTableElement),
/* harmony export */   isTopLayer: () => (/* binding */ isTopLayer),
/* harmony export */   isWebKit: () => (/* binding */ isWebKit)
/* harmony export */ });
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isTopLayer(currentNode)) {
      return null;
    }
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}




/***/ }),

/***/ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignments: () => (/* binding */ alignments),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   createCoords: () => (/* binding */ createCoords),
/* harmony export */   evaluate: () => (/* binding */ evaluate),
/* harmony export */   expandPaddingObject: () => (/* binding */ expandPaddingObject),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   getAlignment: () => (/* binding */ getAlignment),
/* harmony export */   getAlignmentAxis: () => (/* binding */ getAlignmentAxis),
/* harmony export */   getAlignmentSides: () => (/* binding */ getAlignmentSides),
/* harmony export */   getAxisLength: () => (/* binding */ getAxisLength),
/* harmony export */   getExpandedPlacements: () => (/* binding */ getExpandedPlacements),
/* harmony export */   getOppositeAlignmentPlacement: () => (/* binding */ getOppositeAlignmentPlacement),
/* harmony export */   getOppositeAxis: () => (/* binding */ getOppositeAxis),
/* harmony export */   getOppositeAxisPlacements: () => (/* binding */ getOppositeAxisPlacements),
/* harmony export */   getOppositePlacement: () => (/* binding */ getOppositePlacement),
/* harmony export */   getPaddingObject: () => (/* binding */ getPaddingObject),
/* harmony export */   getSide: () => (/* binding */ getSide),
/* harmony export */   getSideAxis: () => (/* binding */ getSideAxis),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   placements: () => (/* binding */ placements),
/* harmony export */   rectToClientRect: () => (/* binding */ rectToClientRect),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   sides: () => (/* binding */ sides)
/* harmony export */ });
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}




/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/checkbox/checkbox.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/checkbox/checkbox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Re)
/* harmony export */ });
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/useFocusRing.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/useHover.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var _hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-active-press.js */ "./node_modules/@headlessui/react/dist/hooks/use-active-press.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_default_value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-default-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-default-value.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/disabled.js */ "./node_modules/@headlessui/react/dist/internal/disabled.js");
/* harmony import */ var _internal_form_fields_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../internal/form-fields.js */ "./node_modules/@headlessui/react/dist/internal/form-fields.js");
/* harmony import */ var _internal_id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../internal/id.js */ "./node_modules/@headlessui/react/dist/internal/id.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _label_label_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../label/label.js */ "./node_modules/@headlessui/react/dist/components/label/label.js");
"use client";let se="span";function ie(T,h){let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),k=(0,_internal_id_js__WEBPACK_IMPORTED_MODULE_1__.useProvidedId)(),x=(0,_internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__.useDisabled)(),{id:g=k||`headlessui-checkbox-${C}`,disabled:e=x||!1,autoFocus:s=!1,checked:E,defaultChecked:v,onChange:P,name:d,value:D,form:R,indeterminate:n=!1,...A}=T,r=(0,_hooks_use_default_value_js__WEBPACK_IMPORTED_MODULE_3__.useDefaultValue)(v),[a,t]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_4__.useControllable)(E,P,r!=null?r:!1),F=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_5__.useLabelledBy)(),K=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_6__.useDescribedBy)(),_=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_7__.useDisposables)(),[p,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),u=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(()=>{c(!0),t==null||t(!a),_.nextFrame(()=>{c(!1)})}),H=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(o=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__.isDisabledReactIssue7711)(o.currentTarget))return o.preventDefault();o.preventDefault(),u()}),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(o=>{o.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.Space?(o.preventDefault(),u()):o.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_10__.Keys.Enter&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_11__.attemptSubmit)(o.currentTarget)}),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(o=>o.preventDefault()),{isFocusVisible:m,focusProps:I}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_12__.useFocusRing)({autoFocus:s}),{isHovered:f,hoverProps:M}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_13__.useHover)({isDisabled:e}),{pressed:b,pressProps:U}=(0,_hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_14__.useActivePress)({disabled:e}),O=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.mergeProps)({ref:h,id:g,role:"checkbox","aria-checked":n?"mixed":a?"true":"false","aria-labelledby":F,"aria-describedby":K,"aria-disabled":e?!0:void 0,indeterminate:n?"true":void 0,tabIndex:e?void 0:0,onKeyUp:e?void 0:B,onKeyPress:e?void 0:L,onClick:e?void 0:H},I,M,U),X=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:a,disabled:e,hover:f,focus:m,active:b,indeterminate:n,changing:p,autofocus:s}),[a,n,e,f,m,b,p,s]),G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(r!==void 0)return t==null?void 0:t(r)},[t,r]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,d!=null&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_form_fields_js__WEBPACK_IMPORTED_MODULE_16__.FormFields,{disabled:e,data:{[d]:D||"on"},overrides:{type:"checkbox",checked:a},form:R,onReset:G}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.render)({ourProps:O,theirProps:A,slot:X,defaultTag:se,name:"Checkbox"}))}let Re=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_15__.forwardRefWithAs)(ie);


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Description: () => (/* binding */ w),
/* harmony export */   useDescribedBy: () => (/* binding */ G),
/* harmony export */   useDescriptions: () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/disabled.js */ "./node_modules/@headlessui/react/dist/internal/disabled.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);a.displayName="DescriptionContext";function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a);if(r===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f),e}return r}function G(){var r,e;return(e=(r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a))==null?void 0:r.value)!=null?e:void 0}function U(){let[r,e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(t){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e(s=>[...s,n]),()=>e(s=>{let o=s.slice(),p=o.indexOf(n);return p!==-1&&o.splice(p,1),o}))),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:t.slot,name:t.name,props:t.props,value:t.value}),[i,t.slot,t.name,t.props,t.value]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Provider,{value:l},t.children)},[e])]}let S="p";function C(r,e){let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),t=(0,_internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__.useDisabled)(),{id:i=`headlessui-description-${d}`,...l}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(e);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>n.register(i),[i,n.register]);let o=t||!1,p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...n.slot,disabled:o}),[n.slot,o]),D={ref:s,...n.props,id:i};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:D,theirProps:l,slot:p,defaultTag:S,name:n.name||"Description"})}let _=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(C),w=Object.assign(_,{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Disclosure: () => (/* binding */ We),
/* harmony export */   DisclosureButton: () => (/* binding */ Ce),
/* harmony export */   DisclosurePanel: () => (/* binding */ Ie)
/* harmony export */ });
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/useFocusRing.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/useHover.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var _hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-active-press.js */ "./node_modules/@headlessui/react/dist/hooks/use-active-press.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-transition.js */ "./node_modules/@headlessui/react/dist/hooks/use-transition.js");
/* harmony import */ var _internal_close_provider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/close-provider.js */ "./node_modules/@headlessui/react/dist/internal/close-provider.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _utils_start_transition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/start-transition.js */ "./node_modules/@headlessui/react/dist/utils/start-transition.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
"use client";var de=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(de||{}),fe=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.LinkPanel=4]="LinkPanel",t[t.UnlinkPanel=5]="UnlinkPanel",t))(fe||{});let Te={[0]:e=>({...e,disclosureState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},[3](e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},M=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);M.displayName="DisclosureContext";function F(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M);if(n===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,F),r}return n}let k=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);k.displayName="DisclosureAPIContext";function V(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(k);if(n===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return n}let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);H.displayName="DisclosurePanelContext";function De(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(H)}function Pe(e,n){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(n.type,Te,e,n)}let ye=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function me(e,n){let{defaultOpen:r=!1,...c}=e,s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_2__.useSyncRefs)(n,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_2__.optionalRef)(u=>{s.current=u},e.as===void 0||e.as===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Pe,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:o,panelRef:t,buttonId:null,panelId:null}),[{disclosureState:f,buttonId:i},T]=l,p=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(u=>{T({type:1});let P=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_4__.getOwnerDocument)(s);if(!P||!i)return;let y=(()=>u?u instanceof HTMLElement?u:u.current instanceof HTMLElement?u.current:P.getElementById(i):P.getElementById(i))();y==null||y.focus()}),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:p}),[p]),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:f===0,close:p}),[f,p]),g={ref:d};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:l},react__WEBPACK_IMPORTED_MODULE_0__.createElement(k.Provider,{value:E},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_close_provider_js__WEBPACK_IMPORTED_MODULE_5__.CloseProvider,{value:p},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(f,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)({ourProps:g,theirProps:c,slot:D,defaultTag:ye,name:"Disclosure"})))))}let Ee="button";function ge(e,n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:c=`headlessui-disclosure-button-${r}`,disabled:s=!1,autoFocus:d=!1,...t}=e,[o,l]=F("Disclosure.Button"),f=De(),i=f===null?!1:f===o.panelId,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_2__.useSyncRefs)(T,n,i?null:o.buttonRef),E=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.useMergeRefsFn)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!i)return l({type:2,buttonId:c}),()=>{l({type:2,buttonId:null})}},[c,l,i]);let D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(a=>{var S;if(i){if(o.disclosureState===1)return;switch(a.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:a.preventDefault(),a.stopPropagation(),l({type:0}),(S=o.buttonRef.current)==null||S.focus();break}}else switch(a.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:a.preventDefault(),a.stopPropagation(),l({type:0});break}}),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(a=>{switch(a.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:a.preventDefault();break}}),u=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_3__.useEvent)(a=>{var S;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__.isDisabledReactIssue7711)(a.currentTarget)||s||(i?(l({type:0}),(S=o.buttonRef.current)==null||S.focus()):l({type:0}))}),{isFocusVisible:P,focusProps:y}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_10__.useFocusRing)({autoFocus:d}),{isHovered:U,hoverProps:h}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_11__.useHover)({isDisabled:s}),{pressed:N,pressProps:w}=(0,_hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_12__.useActivePress)({disabled:s}),q=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.disclosureState===0,hover:U,active:N,disabled:s,focus:P,autofocus:d}),[o,U,N,P,s,d]),G=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(e,T),z=i?(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.mergeProps)({ref:p,type:G,disabled:s||void 0,autoFocus:d,onKeyDown:D,onClick:u},y,h,w):(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.mergeProps)({ref:p,id:c,type:G,"aria-expanded":o.disclosureState===0,"aria-controls":o.linkedPanel?o.panelId:void 0,disabled:s||void 0,autoFocus:d,onKeyDown:D,onKeyUp:g,onClick:u},y,h,w);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)({mergeRefs:E,ourProps:z,theirProps:t,slot:q,defaultTag:Ee,name:"Disclosure.Button"})}let Se="div",be=_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.RenderFeatures.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.RenderFeatures.Static;function Re(e,n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:c=`headlessui-disclosure-panel-${r}`,transition:s=!1,...d}=e,[t,o]=F("Disclosure.Panel"),{close:l}=V("Disclosure.Panel"),f=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.useMergeRefsFn)(),i=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_2__.useSyncRefs)(n,t.panelRef,u=>{(0,_utils_start_transition_js__WEBPACK_IMPORTED_MODULE_14__.startTransition)(()=>o({type:u?4:5}))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(o({type:3,panelId:c}),()=>{o({type:3,panelId:null})}),[c,o]);let T=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.useOpenClosed)(),[p,E]=(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_15__.useTransition)(s,t.panelRef,T!==null?(T&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.State.Open:t.disclosureState===0),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.disclosureState===0,close:l}),[t.disclosureState,l]),g={ref:i,id:c,...(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_15__.transitionDataAttributes)(E)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__.ResetOpenClosedProvider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(H.Provider,{value:t.panelId},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.render)({mergeRefs:f,ourProps:g,theirProps:d,slot:D,defaultTag:Se,features:be,visible:p,name:"Disclosure.Panel"})))}let Ae=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(me),Ce=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(ge),Ie=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_7__.forwardRefWithAs)(Re),We=Object.assign(Ae,{Button:Ce,Panel:Ie});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keys: () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/label/label.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/label/label.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ K),
/* harmony export */   useLabelContext: () => (/* binding */ P),
/* harmony export */   useLabelledBy: () => (/* binding */ I),
/* harmony export */   useLabels: () => (/* binding */ z)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_disabled_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/disabled.js */ "./node_modules/@headlessui/react/dist/internal/disabled.js");
/* harmony import */ var _internal_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/id.js */ "./node_modules/@headlessui/react/dist/internal/id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";let c=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);c.displayName="LabelContext";function P(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(c);if(r===null){let l=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(l,P),l}return r}function I(r){var a,e,o;let l=(e=(a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(c))==null?void 0:a.value)!=null?e:void 0;return((o=r==null?void 0:r.length)!=null?o:0)>0?[l,...r].filter(Boolean).join(" "):l}function z({inherit:r=!1}={}){let l=I(),[a,e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),o=r?[l,...a].filter(Boolean):a;return[o.length>0?o.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(t){let s=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(i=>(e(p=>[...p,i]),()=>e(p=>{let u=p.slice(),d=u.indexOf(i);return d!==-1&&u.splice(d,1),u}))),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:s,slot:t.slot,name:t.name,props:t.props,value:t.value}),[s,t.slot,t.name,t.props,t.value]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(c.Provider,{value:m},t.children)},[e])]}let N="label";function G(r,l){var y;let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),e=P(),o=(0,_internal_id_js__WEBPACK_IMPORTED_MODULE_2__.useProvidedId)(),g=(0,_internal_disabled_js__WEBPACK_IMPORTED_MODULE_3__.useDisabled)(),{id:t=`headlessui-label-${a}`,htmlFor:s=o!=null?o:(y=e.props)==null?void 0:y.htmlFor,passive:m=!1,...i}=r,p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(l);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsoMorphicEffect)(()=>e.register(t),[t,e.register]);let u=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(L=>{let b=L.currentTarget;if(b instanceof HTMLLabelElement&&L.preventDefault(),e.props&&"onClick"in e.props&&typeof e.props.onClick=="function"&&e.props.onClick(L),b instanceof HTMLLabelElement){let n=document.getElementById(b.htmlFor);if(n){let E=n.getAttribute("disabled");if(E==="true"||E==="")return;let x=n.getAttribute("aria-disabled");if(x==="true"||x==="")return;(n instanceof HTMLInputElement&&(n.type==="radio"||n.type==="checkbox")||n.role==="radio"||n.role==="checkbox"||n.role==="switch")&&n.click(),n.focus({preventScroll:!0})}}}),d=g||!1,C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...e.slot,disabled:d}),[e.slot,d]),f={ref:p,...e.props,id:t,htmlFor:s,onClick:u};return m&&("onClick"in f&&(delete f.htmlFor,delete f.onClick),"onClick"in i&&delete i.onClick),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.render)({ourProps:f,theirProps:i,slot:C,defaultTag:s?N:"div",name:e.name||"Label"})}let U=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_6__.forwardRefWithAs)(G),K=Object.assign(U,{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/listbox/listbox.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Listbox: () => (/* binding */ Mo),
/* harmony export */   ListboxButton: () => (/* binding */ Ut),
/* harmony export */   ListboxLabel: () => (/* binding */ Nt),
/* harmony export */   ListboxOption: () => (/* binding */ Vt),
/* harmony export */   ListboxOptions: () => (/* binding */ Gt),
/* harmony export */   ListboxSelectedOption: () => (/* binding */ Ht)
/* harmony export */ });
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/useFocusRing.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/useHover.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../hooks/use-active-press.js */ "./node_modules/@headlessui/react/dist/hooks/use-active-press.js");
/* harmony import */ var _hooks_use_by_comparator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-by-comparator.js */ "./node_modules/@headlessui/react/dist/hooks/use-by-comparator.js");
/* harmony import */ var _hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../hooks/use-computed.js */ "./node_modules/@headlessui/react/dist/hooks/use-computed.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_default_value_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-default-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-default-value.js");
/* harmony import */ var _hooks_use_did_element_move_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../hooks/use-did-element-move.js */ "./node_modules/@headlessui/react/dist/hooks/use-did-element-move.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_element_size_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../hooks/use-element-size.js */ "./node_modules/@headlessui/react/dist/hooks/use-element-size.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../hooks/use-inert-others.js */ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../hooks/use-on-disappear.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_scroll_lock_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../hooks/use-scroll-lock.js */ "./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_text_value_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../hooks/use-text-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-text-value.js");
/* harmony import */ var _hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../hooks/use-tracked-pointer.js */ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js");
/* harmony import */ var _hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../hooks/use-transition.js */ "./node_modules/@headlessui/react/dist/hooks/use-transition.js");
/* harmony import */ var _internal_disabled_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/disabled.js */ "./node_modules/@headlessui/react/dist/internal/disabled.js");
/* harmony import */ var _internal_floating_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../internal/floating.js */ "./node_modules/@headlessui/react/dist/internal/floating.js");
/* harmony import */ var _internal_form_fields_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../internal/form-fields.js */ "./node_modules/@headlessui/react/dist/internal/form-fields.js");
/* harmony import */ var _internal_frozen_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../internal/frozen.js */ "./node_modules/@headlessui/react/dist/internal/frozen.js");
/* harmony import */ var _internal_id_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../internal/id.js */ "./node_modules/@headlessui/react/dist/internal/id.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _label_label_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../label/label.js */ "./node_modules/@headlessui/react/dist/components/label/label.js");
/* harmony import */ var _portal_portal_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../portal/portal.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.js");
"use client";var vt=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(vt||{}),gt=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(gt||{}),Lt=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(Lt||{}),St=(i=>(i[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i))(St||{});function pe(e,r=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.sortByDomNode)(r(e.options.slice()),m=>m.dataRef.current.domRef.current),a=o?n.indexOf(o):null;return a===-1&&(a=null),{options:n,activeOptionIndex:a}}let Rt={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1,__demoMode:!1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,n=e.options.findIndex(a=>o(a.dataRef.current.value));return n!==-1&&(r=n),{...e,listboxState:0,activeOptionIndex:r,__demoMode:!1}},[2](e,r){var m,O,i,p,s;if(e.dataRef.current.disabled||e.listboxState===1)return e;let o={...e,searchQuery:"",activationTrigger:(m=r.trigger)!=null?m:1,__demoMode:!1};if(r.focus===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Nothing)return{...o,activeOptionIndex:null};if(r.focus===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Specific)return{...o,activeOptionIndex:e.options.findIndex(t=>t.id===r.id)};if(r.focus===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Previous){let t=e.activeOptionIndex;if(t!==null){let u=e.options[t].dataRef.current.domRef,b=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.calculateActiveIndex)(r,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(b!==null){let c=e.options[b].dataRef.current.domRef;if(((O=u.current)==null?void 0:O.previousElementSibling)===c.current||((i=c.current)==null?void 0:i.previousElementSibling)===null)return{...o,activeOptionIndex:b}}}}else if(r.focus===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Next){let t=e.activeOptionIndex;if(t!==null){let u=e.options[t].dataRef.current.domRef,b=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.calculateActiveIndex)(r,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled});if(b!==null){let c=e.options[b].dataRef.current.domRef;if(((p=u.current)==null?void 0:p.nextElementSibling)===c.current||((s=c.current)==null?void 0:s.nextElementSibling)===null)return{...o,activeOptionIndex:b}}}}let n=pe(e),a=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.calculateActiveIndex)(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...o,...n,activeOptionIndex:a}},[3]:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,a=e.searchQuery+r.value.toLowerCase(),O=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(p=>{var s;return!p.dataRef.current.disabled&&((s=p.dataRef.current.textValue)==null?void 0:s.startsWith(a))}),i=O?e.options.indexOf(O):-1;return i===-1||i===e.activeOptionIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeOptionIndex:i,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,r)=>{let o={id:r.id,dataRef:r.dataRef},n=pe(e,a=>[...a,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(o)),{...e,...n}},[6]:(e,r)=>{let o=pe(e,n=>{let a=n.findIndex(m=>m.id===r.id);return a!==-1&&n.splice(a,1),n});return{...e,...o,activationTrigger:1}}},ue=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ue.displayName="ListboxActionsContext";function $(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ue);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,$),o}return r}let q=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);q.displayName="ListboxDataContext";function Q(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(q);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Q),o}return r}function Pt(e,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_4__.match)(r.type,Rt,e,r)}let At=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Et(e,r){var de;let o=(0,_internal_disabled_js__WEBPACK_IMPORTED_MODULE_5__.useDisabled)(),{value:n,defaultValue:a,form:m,name:O,onChange:i,by:p,invalid:s=!1,disabled:t=o||!1,horizontal:u=!1,multiple:b=!1,__demoMode:c=!1,...E}=e;const U=u?"horizontal":"vertical";let N=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(r),_=(0,_hooks_use_default_value_js__WEBPACK_IMPORTED_MODULE_7__.useDefaultValue)(a),[y=b?[]:void 0,P]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_8__.useControllable)(n,i,_),[h,g]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Pt,{dataRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),listboxState:c?0:1,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1,optionsVisible:!1,__demoMode:c}),M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map),F=(0,_hooks_use_by_comparator_js__WEBPACK_IMPORTED_MODULE_9__.useByComparator)(p),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(x=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_4__.match)(d.mode,{[1]:()=>y.some(S=>F(S,x)),[0]:()=>F(y,x)}),[y]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...h,value:y,disabled:t,invalid:s,mode:b?1:0,orientation:U,compare:F,isSelected:L,optionsPropsRef:M,buttonRef:w,optionsRef:f,listRef:A}),[y,t,s,b,h,A]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_10__.useIsoMorphicEffect)(()=>{h.dataRef.current=d},[d]);let Y=d.listboxState===0;(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_11__.useOutsideClick)(Y,[d.buttonRef,d.optionsRef],(x,S)=>{var C;g({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.isFocusableElement)(S,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.FocusableMode.Loose)||(x.preventDefault(),(C=d.buttonRef.current)==null||C.focus())});let X=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:d.listboxState===0,disabled:t,invalid:s,value:y}),[d,t,y,s]),Z=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(x=>{let S=d.options.find(C=>C.id===x);S&&B(S.dataRef.current.value)}),ee=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(()=>{if(d.activeOptionIndex!==null){let{dataRef:x,id:S}=d.options[d.activeOptionIndex];B(x.current.value),g({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Specific,id:S})}}),te=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(()=>g({type:0})),oe=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(()=>g({type:1})),H=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_13__.useDisposables)(),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)((x,S,C)=>{H.dispose(),H.microTask(()=>x===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Specific?g({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Specific,id:S,trigger:C}):g({type:2,focus:x,trigger:C}))}),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)((x,S)=>(g({type:5,id:x,dataRef:S}),()=>g({type:6,id:x}))),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(x=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_4__.match)(d.mode,{[0](){return P==null?void 0:P(x)},[1](){let S=d.value.slice(),C=S.findIndex(Pe=>F(Pe,x));return C===-1?S.push(x):S.splice(C,1),P==null?void 0:P(S)}})),ne=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(x=>g({type:3,value:x})),ye=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(()=>g({type:4})),ve=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({onChange:B,registerOption:I,goToOption:l,closeListbox:oe,openListbox:te,selectActiveOption:ee,selectOption:Z,search:ne,clearSearch:ye}),[]),[ge,Le]=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_14__.useLabels)({inherit:!0}),Se={ref:N},Re=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(_!==void 0)return P==null?void 0:P(_)},[P,_]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Le,{value:ge,props:{htmlFor:(de=d.buttonRef.current)==null?void 0:de.id},slot:{open:d.listboxState===0,disabled:t}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_floating_js__WEBPACK_IMPORTED_MODULE_15__.FloatingProvider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ue.Provider,{value:ve},react__WEBPACK_IMPORTED_MODULE_0__.createElement(q.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_16__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_4__.match)(d.listboxState,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_16__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_16__.State.Closed})},O!=null&&y!=null&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_form_fields_js__WEBPACK_IMPORTED_MODULE_17__.FormFields,{disabled:t,data:{[O]:y},form:m,onReset:Re}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.render)({ourProps:Se,theirProps:E,slot:X,defaultTag:At,name:"Listbox"}))))))}let ht="button";function Dt(e,r){var F;let o=Q("Listbox.Button"),n=$("Listbox.Button"),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),m=(0,_internal_id_js__WEBPACK_IMPORTED_MODULE_19__.useProvidedId)(),{id:O=m||`headlessui-listbox-button-${a}`,disabled:i=o.disabled||!1,autoFocus:p=!1,...s}=e,t=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(o.buttonRef,r,(0,_internal_floating_js__WEBPACK_IMPORTED_MODULE_15__.useFloatingReference)()),u=(0,_internal_floating_js__WEBPACK_IMPORTED_MODULE_15__.useFloatingReferenceProps)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(L=>{switch(L.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Enter:(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_21__.attemptSubmit)(L.currentTarget);break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowDown:L.preventDefault(),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>n.openListbox()),o.value||n.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.First);break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowUp:L.preventDefault(),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>n.openListbox()),o.value||n.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Last);break}}),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(L=>{switch(L.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Space:L.preventDefault();break}}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(L=>{var d;if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_22__.isDisabledReactIssue7711)(L.currentTarget))return L.preventDefault();o.listboxState===0?((0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>n.closeListbox()),(d=o.buttonRef.current)==null||d.focus({preventScroll:!0})):(L.preventDefault(),n.openListbox())}),U=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(L=>L.preventDefault()),N=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_14__.useLabelledBy)([O]),_=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_23__.useDescribedBy)(),{isFocusVisible:y,focusProps:P}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_24__.useFocusRing)({autoFocus:p}),{isHovered:h,hoverProps:g}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_25__.useHover)({isDisabled:i}),{pressed:M,pressProps:w}=(0,_hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_26__.useActivePress)({disabled:i}),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.listboxState===0,active:M||o.listboxState===0,disabled:i,invalid:o.invalid,value:o.value,hover:h,focus:y,autofocus:p}),[o.listboxState,o.value,i,h,y,M,o.invalid,p]),A=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.mergeProps)(u(),{ref:t,id:O,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_27__.useResolveButtonType)(e,o.buttonRef),"aria-haspopup":"listbox","aria-controls":(F=o.optionsRef.current)==null?void 0:F.id,"aria-expanded":o.listboxState===0,"aria-labelledby":N,"aria-describedby":_,disabled:i||void 0,autoFocus:p,onKeyDown:b,onKeyUp:c,onKeyPress:U,onClick:E},P,g,w);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.render)({ourProps:A,theirProps:s,slot:f,defaultTag:ht,name:"Listbox.Button"})}let Oe=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1),_t="div",It=_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.RenderFeatures.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.RenderFeatures.Static;function Ct(e,r){var H;let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:n=`headlessui-listbox-options-${o}`,anchor:a,portal:m=!1,modal:O=!0,transition:i=!1,...p}=e,s=(0,_internal_floating_js__WEBPACK_IMPORTED_MODULE_15__.useResolvedAnchor)(a);s&&(m=!0);let t=Q("Listbox.Options"),u=$("Listbox.Options"),b=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_28__.useOwnerDocument)(t.optionsRef),c=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_16__.useOpenClosed)(),[E,U]=(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_29__.useTransition)(i,t.optionsRef,c!==null?(c&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_16__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_16__.State.Open:t.listboxState===0);(0,_hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_30__.useOnDisappear)(E,t.buttonRef,u.closeListbox);let N=t.__demoMode?!1:O&&t.listboxState===0;(0,_hooks_use_scroll_lock_js__WEBPACK_IMPORTED_MODULE_31__.useScrollLock)(N,b);let _=t.__demoMode?!1:O&&t.listboxState===0;(0,_hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_32__.useInertOthers)(_,{allowed:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(()=>[t.buttonRef.current,t.optionsRef.current])});let y=t.listboxState!==0,h=(0,_hooks_use_did_element_move_js__WEBPACK_IMPORTED_MODULE_33__.useDidElementMove)(y,t.buttonRef)?!1:E,g=E&&t.listboxState===1,M=(0,_internal_frozen_js__WEBPACK_IMPORTED_MODULE_34__.useFrozenData)(g,t.value),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(l=>t.compare(M,l)),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{var I;if(s==null||!((I=s==null?void 0:s.to)!=null&&I.includes("selection")))return null;let l=t.options.findIndex(B=>w(B.dataRef.current.value));return l===-1&&(l=0),l},[s,t.options]),A=(()=>{if(s==null)return;if(f===null)return{...s,inner:void 0};let l=Array.from(t.listRef.current.values());return{...s,inner:{listRef:{current:l},index:f}}})(),[F,L]=(0,_internal_floating_js__WEBPACK_IMPORTED_MODULE_15__.useFloatingPanel)(A),d=(0,_internal_floating_js__WEBPACK_IMPORTED_MODULE_15__.useFloatingPanelProps)(),Y=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(t.optionsRef,r,s?F:null),X=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_13__.useDisposables)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var I;let l=t.optionsRef.current;l&&t.listboxState===0&&l!==((I=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_35__.getOwnerDocument)(l))==null?void 0:I.activeElement)&&(l==null||l.focus({preventScroll:!0}))},[t.listboxState,t.optionsRef,t.optionsRef.current]);let Z=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(l=>{var I,B;switch(X.dispose(),l.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Space:if(t.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),u.search(l.key);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:ne}=t.options[t.activeOptionIndex];u.onChange(ne.current.value)}t.mode===0&&((0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>u.closeListbox()),(I=t.buttonRef.current)==null||I.focus({preventScroll:!0}));break;case (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_4__.match)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowDown,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowRight}):return l.preventDefault(),l.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Next);case (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_4__.match)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowUp,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Previous);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.PageUp:return l.preventDefault(),l.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.PageDown:return l.preventDefault(),l.stopPropagation(),u.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Escape:l.preventDefault(),l.stopPropagation(),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>u.closeListbox()),(B=t.buttonRef.current)==null||B.focus({preventScroll:!0});return;case _keyboard_js__WEBPACK_IMPORTED_MODULE_20__.Keys.Tab:l.preventDefault(),l.stopPropagation(),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>u.closeListbox()),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.focusFrom)(t.buttonRef.current,l.shiftKey?_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next);break;default:l.key.length===1&&(u.search(l.key),X.setTimeout(()=>u.clearSearch(),350));break}}),ee=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_36__.useComputed)(()=>{var l;return(l=t.buttonRef.current)==null?void 0:l.id},[t.buttonRef.current]),te=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0}),[t.listboxState]),oe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.mergeProps)(s?d():{},{id:n,ref:Y,"aria-activedescendant":t.activeOptionIndex===null||(H=t.options[t.activeOptionIndex])==null?void 0:H.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":ee,"aria-orientation":t.orientation,onKeyDown:Z,role:"listbox",tabIndex:t.listboxState===0?0:void 0,style:{...p.style,...L,"--button-width":(0,_hooks_use_element_size_js__WEBPACK_IMPORTED_MODULE_37__.useElementSize)(t.buttonRef,!0).width},...(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_29__.transitionDataAttributes)(U)});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_portal_portal_js__WEBPACK_IMPORTED_MODULE_38__.Portal,{enabled:m?e.static||E:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(q.Provider,{value:t.mode===1?t:{...t,isSelected:w}},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.render)({ourProps:oe,theirProps:p,slot:te,defaultTag:_t,features:It,visible:h,name:"Listbox.Options"})))}let Ft="div";function Mt(e,r){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:n=`headlessui-listbox-option-${o}`,disabled:a=!1,value:m,...O}=e,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Oe)===!0,p=Q("Listbox.Option"),s=$("Listbox.Option"),t=p.activeOptionIndex!==null?p.options[p.activeOptionIndex].id===n:!1,u=p.isSelected(m),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,_hooks_use_text_value_js__WEBPACK_IMPORTED_MODULE_39__.useTextValue)(b),E=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_40__.useLatestValue)({disabled:a,value:m,domRef:b,get textValue(){return c()}}),U=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(r,b,f=>{f?p.listRef.current.set(n,f):p.listRef.current.delete(n)});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_10__.useIsoMorphicEffect)(()=>{if(!p.__demoMode&&p.listboxState===0&&t&&p.activationTrigger!==0)return (0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_41__.disposables)().requestAnimationFrame(()=>{var f,A;(A=(f=b.current)==null?void 0:f.scrollIntoView)==null||A.call(f,{block:"nearest"})})},[b,t,p.__demoMode,p.listboxState,p.activationTrigger,p.activeOptionIndex]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_10__.useIsoMorphicEffect)(()=>{if(!i)return s.registerOption(n,E)},[E,n,i]);let N=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(f=>{var A;if(a)return f.preventDefault();s.onChange(m),p.mode===0&&((0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>s.closeListbox()),(A=p.buttonRef.current)==null||A.focus({preventScroll:!0}))}),_=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(()=>{if(a)return s.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Nothing);s.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Specific,n)}),y=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_42__.useTrackedPointer)(),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(f=>{y.update(f),!a&&(t||s.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Specific,n,0))}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(f=>{y.wasMoved(f)&&(a||t||s.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Specific,n,0))}),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_12__.useEvent)(f=>{y.wasMoved(f)&&(a||t&&s.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_3__.Focus.Nothing))}),M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:t,focus:t,selected:u,disabled:a,selectedOption:u&&i}),[t,u,a,i]),w=i?{}:{id:n,ref:U,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":u,disabled:void 0,onClick:N,onFocus:_,onPointerEnter:P,onMouseEnter:P,onPointerMove:h,onMouseMove:h,onPointerLeave:g,onMouseLeave:g};return!u&&i?null:(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.render)({ourProps:w,theirProps:O,slot:M,defaultTag:Ft,name:"Listbox.Option"})}let wt=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Bt(e,r){let{options:o,placeholder:n,...a}=e,O={ref:(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(r)},i=Q("ListboxSelectedOption"),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({}),[]),s=i.value===void 0||i.value===null||i.mode===1&&Array.isArray(i.value)&&i.value.length===0;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Oe.Provider,{value:!0},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.render)({ourProps:O,theirProps:{...a,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n&&s?n:o)},slot:p,defaultTag:wt,name:"ListboxSelectedOption"}))}let kt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.forwardRefWithAs)(Et),Ut=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.forwardRefWithAs)(Dt),Nt=_label_label_js__WEBPACK_IMPORTED_MODULE_14__.Label,Gt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.forwardRefWithAs)(Ct),Vt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.forwardRefWithAs)(Mt),Ht=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_18__.forwardRefWithAs)(Bt),Mo=Object.assign(kt,{Button:Ut,Label:Nt,Options:Gt,Option:Vt,SelectedOption:Ht});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/portal/portal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/portal/portal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portal: () => (/* binding */ te),
/* harmony export */   PortalGroup: () => (/* binding */ J),
/* harmony export */   useNestedPortals: () => (/* binding */ ee)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-on-unmount.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";function D(p){let r=(0,_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__.usePortalRoot)(),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v),e=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(p),[o,n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var t;if(!r&&l!==null)return(t=l.current)!=null?t:null;if(_utils_env_js__WEBPACK_IMPORTED_MODULE_4__.env.isServer)return null;let u=e==null?void 0:e.getElementById("headlessui-portal-root");if(u)return u;if(e===null)return null;let a=e.createElement("div");return a.setAttribute("id","headlessui-portal-root"),e.body.appendChild(a)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o!==null&&(e!=null&&e.body.contains(o)||e==null||e.body.appendChild(o))},[o,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r||l!==null&&n(l.current)},[l,n,r]),o}let M=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,N=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(r,l){let e=r,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)((0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.optionalRef)(i=>{o.current=i}),l),u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(o),a=D(o),[t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var i;return _utils_env_js__WEBPACK_IMPORTED_MODULE_4__.env.isServer?null:(i=u==null?void 0:u.createElement("div"))!=null?i:null}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y),b=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)();return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{!a||!t||a.contains(t)||(t.setAttribute("data-headlessui-portal",""),a.appendChild(t))},[a,t]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{if(t&&s)return s.register(t)},[s,t]),(0,_hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_9__.useOnUnmount)(()=>{var i;!a||!t||(t instanceof Node&&a.contains(t)&&a.removeChild(t),a.childNodes.length<=0&&((i=a.parentElement)==null||i.removeChild(a)))}),b?!a||!t?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:{ref:n},theirProps:e,slot:{},defaultTag:M,name:"Portal"}),t):null});function S(p,r){let l=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(r),{enabled:e=!0,...o}=p;return e?react__WEBPACK_IMPORTED_MODULE_0__.createElement(N,{...o,ref:l}):(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:{ref:l},theirProps:o,slot:{},defaultTag:M,name:"Portal"})}let j=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,v=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function W(p,r){let{target:l,...e}=p,n={ref:(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(r)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(v.Provider,{value:l},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:n,theirProps:e,defaultTag:j,name:"Popover.Group"}))}let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function ee(){let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(n=>(r.current.push(n),p&&p.register(n),()=>e(n))),e=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(n=>{let u=r.current.indexOf(n);u!==-1&&r.current.splice(u,1),p&&p.unregister(n)}),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:l,unregister:e,portals:r}),[l,e,r]);return[r,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function({children:u}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(y.Provider,{value:o},u)},[o])]}let I=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(S),J=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(W),te=Object.assign(I,{Group:J});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/switch/switch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/switch/switch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Switch: () => (/* binding */ qe),
/* harmony export */   SwitchDescription: () => (/* binding */ Ce),
/* harmony export */   SwitchGroup: () => (/* binding */ ve),
/* harmony export */   SwitchLabel: () => (/* binding */ xe)
/* harmony export */ });
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/useFocusRing.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/useHover.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var _hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-active-press.js */ "./node_modules/@headlessui/react/dist/hooks/use-active-press.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_default_value_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-default-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-default-value.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_disabled_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/disabled.js */ "./node_modules/@headlessui/react/dist/internal/disabled.js");
/* harmony import */ var _internal_form_fields_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../internal/form-fields.js */ "./node_modules/@headlessui/react/dist/internal/form-fields.js");
/* harmony import */ var _internal_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internal/id.js */ "./node_modules/@headlessui/react/dist/internal/id.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _label_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label/label.js */ "./node_modules/@headlessui/react/dist/components/label/label.js");
"use client";let S=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);S.displayName="GroupContext";let _e=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Pe(n){var a;let[o,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[f,b]=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_1__.useLabels)(),[h,t]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_2__.useDescriptions)(),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({switch:o,setSwitch:p}),[o,p]),T={},y=n;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(t,{name:"Switch.Description",value:h},react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,{name:"Switch.Label",value:f,props:{htmlFor:(a=c.switch)==null?void 0:a.id,onClick(u){o&&(u.currentTarget instanceof HTMLLabelElement&&u.preventDefault(),o.click(),o.focus({preventScroll:!0}))}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(S.Provider,{value:c},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:T,theirProps:y,slot:{},defaultTag:_e,name:"Switch.Group"}))))}let Ee="button";function De(n,o){var C;let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),f=(0,_internal_id_js__WEBPACK_IMPORTED_MODULE_4__.useProvidedId)(),b=(0,_internal_disabled_js__WEBPACK_IMPORTED_MODULE_5__.useDisabled)(),{id:h=f||`headlessui-switch-${p}`,disabled:t=b||!1,checked:c,defaultChecked:T,onChange:y,name:a,value:u,form:F,autoFocus:d=!1,...k}=n,w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(S),_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),H=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(_,o,w===null?null:w.setSwitch),l=(0,_hooks_use_default_value_js__WEBPACK_IMPORTED_MODULE_7__.useDefaultValue)(T),[s,r]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_8__.useControllable)(c,y,l!=null?l:!1),M=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.useDisposables)(),[P,E]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(()=>{E(!0),r==null||r(!s),M.nextFrame(()=>{E(!1)})}),U=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(e=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_11__.isDisabledReactIssue7711)(e.currentTarget))return e.preventDefault();e.preventDefault(),D()}),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(e=>{e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Space?(e.preventDefault(),D()):e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_12__.Keys.Enter&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_13__.attemptSubmit)(e.currentTarget)}),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(e=>e.preventDefault()),K=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_1__.useLabelledBy)(),W=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_2__.useDescribedBy)(),{isFocusVisible:g,focusProps:O}=(0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_14__.useFocusRing)({autoFocus:d}),{isHovered:v,hoverProps:N}=(0,_react_aria_interactions__WEBPACK_IMPORTED_MODULE_15__.useHover)({isDisabled:t}),{pressed:x,pressProps:J}=(0,_hooks_use_active_press_js__WEBPACK_IMPORTED_MODULE_16__.useActivePress)({disabled:t}),V=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:s,disabled:t,hover:v,focus:g,active:x,autofocus:d,changing:P}),[s,v,g,x,t,P,d]),X=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.mergeProps)({id:h,ref:H,role:"switch",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_17__.useResolveButtonType)(n,_),tabIndex:n.tabIndex===-1?0:(C=n.tabIndex)!=null?C:0,"aria-checked":s,"aria-labelledby":K,"aria-describedby":W,disabled:t||void 0,autoFocus:d,onClick:U,onKeyUp:I,onKeyPress:B},O,N,J),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{if(l!==void 0)return r==null?void 0:r(l)},[r,l]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,a!=null&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_form_fields_js__WEBPACK_IMPORTED_MODULE_18__.FormFields,{disabled:t,data:{[a]:u||"on"},overrides:{type:"checkbox",checked:s},form:F,onReset:j}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:X,theirProps:k,slot:V,defaultTag:Ee,name:"Switch"}))}let ge=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(De),ve=Pe,xe=_label_label_js__WEBPACK_IMPORTED_MODULE_1__.Label,Ce=_description_description_js__WEBPACK_IMPORTED_MODULE_2__.Description,qe=Object.assign(ge,{Group:ve,Label:xe,Description:Ce});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustScrollbarPadding: () => (/* binding */ d)
/* harmony export */ });
function d(){let r;return{before({doc:e}){var l;let o=e.documentElement,t=(l=e.defaultView)!=null?l:window;r=Math.max(0,t.innerWidth-o.clientWidth)},after({doc:e,d:o}){let t=e.documentElement,l=Math.max(0,t.clientWidth-t.offsetWidth),n=Math.max(0,r-l);o.style(t,"paddingRight",`${n}px`)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleIOSLocking: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
function d(){return (0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_0__.isIOS)()?{before({doc:r,d:n,meta:c}){function o(a){return c.containers.flatMap(l=>l()).some(l=>l.contains(a))}n.microTask(()=>{var s;if(window.getComputedStyle(r.documentElement).scrollBehavior!=="auto"){let t=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();t.style(r.documentElement,"scrollBehavior","auto"),n.add(()=>n.microTask(()=>t.dispose()))}let a=(s=window.scrollY)!=null?s:window.pageYOffset,l=null;n.addEventListener(r,"click",t=>{if(t.target instanceof HTMLElement)try{let e=t.target.closest("a");if(!e)return;let{hash:f}=new URL(e.href),i=r.querySelector(f);i&&!o(i)&&(l=i)}catch{}},!0),n.addEventListener(r,"touchstart",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&o(e.parentElement);)e=e.parentElement;n.style(e,"overscrollBehavior","contain")}else n.style(t.target,"touchAction","none")}),n.addEventListener(r,"touchmove",t=>{if(t.target instanceof HTMLElement){if(t.target.tagName==="INPUT")return;if(o(t.target)){let e=t.target;for(;e.parentElement&&e.dataset.headlessuiPortal!==""&&!(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth);)e=e.parentElement;e.dataset.headlessuiPortal===""&&t.preventDefault()}else t.preventDefault()}},{passive:!1}),n.add(()=>{var e;let t=(e=window.scrollY)!=null?e:window.pageYOffset;a!==t&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   overflows: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store.js */ "./node_modules/@headlessui/react/dist/utils/store.js");
/* harmony import */ var _adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjust-scrollbar-padding.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js");
/* harmony import */ var _handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-ios-locking.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js");
/* harmony import */ var _prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prevent-scroll.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js");
function m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a=(0,_utils_store_js__WEBPACK_IMPORTED_MODULE_0__.createStore)(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m(t)},c=[(0,_handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__.handleIOSLocking)(),(0,_adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__.adjustScrollbarPadding)(),(0,_prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__.preventScroll)()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});a.subscribe(()=>{let e=a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a.dispatch("TEARDOWN",t)}});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preventScroll: () => (/* binding */ r)
/* harmony export */ });
function r(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentOverflowLockedEffect: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-store.js */ "./node_modules/@headlessui/react/dist/hooks/use-store.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overflow-store.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js");
function a(r,e,n=()=>({containers:[]})){let f=(0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__.useStore)(_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{if(!(!e||!r))return _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("PUSH",e,n),()=>_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("POP",e,n)},[r,e]),i}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-active-press.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-active-press.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useActivePress: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _use_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function E(e){let t=e.width/2,n=e.height/2;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function P(e,t){return!(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}function w({disabled:e=!1}={}){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[n,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),r=(0,_use_disposables_js__WEBPACK_IMPORTED_MODULE_1__.useDisposables)(),o=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(()=>{t.current=null,l(!1),r.dispose()}),f=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(s=>{if(r.dispose(),t.current===null){t.current=s.currentTarget,l(!0);{let i=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_3__.getOwnerDocument)(s.currentTarget);r.addEventListener(i,"pointerup",o,!1),r.addEventListener(i,"pointermove",c=>{if(t.current){let p=E(c);l(P(p,t.current.getBoundingClientRect()))}},!1),r.addEventListener(i,"pointercancel",o,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:f,onPointerUp:o,onClick:o}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-by-comparator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-by-comparator.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useByComparator: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function l(e,r){return e!==null&&r!==null&&typeof e=="object"&&typeof r=="object"&&"id"in e&&"id"in r?e.id===r.id:e===r}function u(e=l){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((r,t)=>{if(typeof e=="string"){let o=e;return(r==null?void 0:r[o])===(t==null?void 0:t[o])}return e(r,t)},[e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-computed.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-computed.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComputed: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function i(e,o){let[u,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>t(r.current),[r,t,...o]),u}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-controllable.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useControllable: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=l!==void 0,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e||s(n),r==null?void 0:r(n)))]}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-default-value.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-default-value.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDefaultValue: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function l(e){let[t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e);return t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-did-element-move.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-did-element-move.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDidElementMove: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function p(r,e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({left:0,top:0});if((0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{let u=e.current;if(!u)return;let l=u.getBoundingClientRect();l&&(t.current=l)},[r]),e.current==null||!r||e.current===document.activeElement)return!1;let n=e.current.getBoundingClientRect();return n.top!==t.current.top||n.left!==t.current.left}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDisposables: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function i(t,e,o,n){let u=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(o);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!t)return;function r(m){u.current(m)}return document.addEventListener(e,r,n),()=>document.removeEventListener(e,r,n)},[t,e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-element-size.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-element-size.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useElementSize: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){if(e===null)return{width:0,height:0};let{width:n,height:t}=e.getBoundingClientRect();return{width:n,height:t}}function f(e,n=!1){let t=e===null?null:"current"in e?e.current:e,[l,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(()=>({}),{}),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>s(t),[t,l]);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!t)return;let i=new ResizeObserver(u);return i.observe(t),()=>{i.disconnect()}},[t]),n?{width:`${r.width}px`,height:`${r.height}px`}:r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEvent: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-flags.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-flags.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFlags: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function c(u=0){let[t,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(u),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(e),[t]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a|e),[t]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>(t&e)===e,[t]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a&~e),[l]),F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a^e),[l]);return{flags:t,setFlag:g,addFlag:s,hasFlag:m,removeFlag:n,toggleFlag:F}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-inert-others.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInertOthers: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let f=new Map,u=new Map;function h(t){var e;let r=(e=u.get(t))!=null?e:0;return u.set(t,r+1),r!==0?()=>m(t):(f.set(t,{"aria-hidden":t.getAttribute("aria-hidden"),inert:t.inert}),t.setAttribute("aria-hidden","true"),t.inert=!0,()=>m(t))}function m(t){var i;let r=(i=u.get(t))!=null?i:1;if(r===1?u.delete(t):u.set(t,r-1),r!==1)return;let e=f.get(t);e&&(e["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",e["aria-hidden"]),t.inert=e.inert,f.delete(t))}function y(t,{allowed:r,disallowed:e}={}){let i=(0,_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__.useIsTopLayer)(t,"inert-others");(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{var d,c;if(!i)return;let a=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)();for(let n of(d=e==null?void 0:e())!=null?d:[])n&&a.add(h(n));let s=(c=r==null?void 0:r())!=null?c:[];for(let n of s){if(!n)continue;let l=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_3__.getOwnerDocument)(n);if(!l)continue;let o=n.parentElement;for(;o&&o!==l.body;){for(let p of o.children)s.some(E=>p.contains(E))||a.add(h(p));o=o.parentElement}}return a.dispose},[i,r,e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsTopLayer: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_default_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/default-map.js */ "./node_modules/@headlessui/react/dist/utils/default-map.js");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/store.js */ "./node_modules/@headlessui/react/dist/utils/store.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-store.js */ "./node_modules/@headlessui/react/dist/hooks/use-store.js");
let p=new _utils_default_map_js__WEBPACK_IMPORTED_MODULE_1__.DefaultMap(()=>(0,_utils_store_js__WEBPACK_IMPORTED_MODULE_2__.createStore)(()=>[],{ADD(r){return this.includes(r)?this:[...this,r]},REMOVE(r){let e=this.indexOf(r);if(e===-1)return this;let t=this.slice();return t.splice(e,1),t}}));function x(r,e){let t=p.get(e),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),h=(0,_use_store_js__WEBPACK_IMPORTED_MODULE_3__.useStore)(t);if((0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>{if(r)return t.dispatch("ADD",i),()=>t.dispatch("REMOVE",i)},[t,r]),!r)return!1;let s=h.indexOf(i),o=h.length;return s===-1&&(s=o,o+=1),s===o-1}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsoMorphicEffect: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
let n=(e,t)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,t):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,t)};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLatestValue: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnDisappear: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function m(s,n,l){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t=>{let e=t.getBoundingClientRect();e.x===0&&e.y===0&&e.width===0&&e.height===0&&l()});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s)return;let t=n===null?null:n instanceof HTMLElement?n:n.current;if(!t)return;let e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)();if(typeof ResizeObserver!="undefined"){let r=new ResizeObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect())}if(typeof IntersectionObserver!="undefined"){let r=new IntersectionObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect())}return()=>e.dispose()},[n,i,s])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnUnmount: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function c(t){let r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(t),e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(e.current=!1,()=>{e.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__.microTask)(()=>{e.current&&r()})}),[r])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutsideClick: () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
/* harmony import */ var _use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
const d=30;function F(E,p,C){let u=(0,_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_1__.useIsTopLayer)(E,"outside-click"),f=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(C),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e,o){if(e.defaultPrevented)return;let r=o(e);if(r===null||!r.getRootNode().contains(r)||!r.isConnected)return;let T=function i(n){return typeof n=="function"?i(n()):Array.isArray(n)||n instanceof Set?n:[n]}(p);for(let i of T){if(i===null)continue;let n=i instanceof HTMLElement?i:i.current;if(n!=null&&n.contains(r)||e.composed&&e.composedPath().includes(n))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_3__.isFocusableElement)(r,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_3__.FocusableMode.Loose)&&r.tabIndex!==-1&&e.preventDefault(),f.current(e,r)},[f]),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"pointerdown",t=>{var e,o;l.current=((o=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:o[0])||t.target},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"mousedown",t=>{var e,o;l.current=((o=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:o[0])||t.target},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"click",t=>{(0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_5__.isMobile)()||l.current&&(s(t,()=>l.current),l.current=null)},!0);let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({x:0,y:0});(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"touchstart",t=>{a.current.x=t.touches[0].clientX,a.current.y=t.touches[0].clientY},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"touchend",t=>{let e={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY};if(!(Math.abs(e.x-a.current.x)>=d||Math.abs(e.y-a.current.y)>=d))return s(t,()=>t.target instanceof HTMLElement?t.target:null)},!0),(0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_6__.useWindowEvent)(u,"blur",t=>s(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOwnerDocument: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useResolveButtonType: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function T(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScrollLock: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-overflow/use-document-overflow.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js");
/* harmony import */ var _use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
function f(e,c,n=()=>[document.body]){let r=(0,_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__.useIsTopLayer)(e,"scroll-lock");(0,_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_1__.useDocumentOverflowLockedEffect)(r,c,t=>{var o;return{containers:[...(o=t.containers)!=null?o:[],n]}})}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServerHandoffComplete: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function s(){let r=typeof document=="undefined";return"useSyncExternalStore" in /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))?(o=>o.useSyncExternalStore)(/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))))(()=>()=>{},()=>!1,()=>!r):!1}function l(){let r=s(),[e,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete===!1&&n(!1),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{e!==!0&&n(!0)},[e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.handoff(),[]),r?!1:e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-store.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-store.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStore: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function o(t){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionalRef: () => (/* binding */ T),
/* harmony export */   useSyncRefs: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-text-value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-text-value.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTextValue: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_get_text_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-text-value.js */ "./node_modules/@headlessui/react/dist/utils/get-text-value.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function s(c){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(""),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("");return (0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=(0,_utils_get_text_value_js__WEBPACK_IMPORTED_MODULE_2__.getTextValue)(e).trim().toLowerCase();return t.current=u,r.current=n,n})}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTrackedPointer: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(r){e.current=t(r)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-transition.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transitionDataAttributes: () => (/* binding */ A),
/* harmony export */   useTransition: () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_once_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/once.js */ "./node_modules/@headlessui/react/dist/utils/once.js");
/* harmony import */ var _use_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _use_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-flags.js */ "./node_modules/@headlessui/react/dist/hooks/use-flags.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
var D=(i=>(i[i.None=0]="None",i[i.Closed=1]="Closed",i[i.Enter=2]="Enter",i[i.Leave=4]="Leave",i))(D||{});function A(e){let a={};for(let t in e)e[t]===!0&&(a[`data-${t}`]="");return a}function V(e,a,t,r){let[i,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(t),{hasFlag:d,addFlag:f,removeFlag:s}=(0,_use_flags_js__WEBPACK_IMPORTED_MODULE_1__.useFlags)(e&&i?3:0),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),o=(0,_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)();return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(function p(){var T;if(!e)return;t&&u(!0);let c=a.current;return c?((T=r==null?void 0:r.start)==null||T.call(r,t),M(c,{inFlight:l,prepare(){n.current?n.current=!1:n.current=l.current,l.current=!0,!n.current&&(t?(f(3),s(4)):(f(4),s(2)))},run(){n.current?t?(s(3),f(4)):(s(4),f(3)):t?s(1):f(1)},done(){var m;n.current&&typeof c.getAnimations=="function"&&c.getAnimations().length>0||(l.current=!1,s(7),t||u(!1),(m=r==null?void 0:r.end)==null||m.call(r,t))}})):t?(f(3),o.nextFrame(()=>p())):void 0},[e,t,a,o]),e?[i,{closed:d(1),enter:d(2),leave:d(4),transition:d(2)||d(4)}]:[t,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function M(e,{prepare:a,run:t,done:r,inFlight:i}){let u=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__.disposables)();return R(e,{prepare:a,inFlight:i}),u.nextFrame(()=>{u.add(F(e,r)),t()}),u.dispose}function F(e,a){let t=(0,_utils_once_js__WEBPACK_IMPORTED_MODULE_5__.once)(a),r=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__.disposables)();if(!e)return r.dispose;let{transitionDuration:i,transitionDelay:u}=getComputedStyle(e),[d,f]=[i,u].map(l=>{let[n=0]=l.split(",").filter(Boolean).map(o=>o.includes("ms")?parseFloat(o):parseFloat(o)*1e3).sort((o,p)=>p-o);return n}),s=d+f;if(s!==0){let l=r.group(n=>{let o=n.setTimeout(()=>{t(),n.dispose()},s);n.addEventListener(e,"transitionrun",p=>{p.target===p.currentTarget&&(o(),n.addEventListener(e,"transitioncancel",c=>{c.target===c.currentTarget&&(t(),l())}))})});r.addEventListener(e,"transitionend",n=>{n.target===n.currentTarget&&(t(),r.dispose())})}else t();return r.dispose}function R(e,{inFlight:a,prepare:t}){if(a!=null&&a.current){t();return}let r=e.style.transition;e.style.transition="none",t(),e.offsetHeight,e.style.transition=r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWindowEvent: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(t,e,o,n){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(o);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!t)return;function r(d){i.current(d)}return window.addEventListener(e,r,n),()=>window.removeEventListener(e,r,n)},[t,e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/close-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/close-provider.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseProvider: () => (/* binding */ u),
/* harmony export */   useClose: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});function l(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function u({value:o,children:t}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:o},t)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/disabled.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/disabled.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisabledProvider: () => (/* binding */ l),
/* harmony export */   useDisabled: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function a(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function l({value:t,children:o}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:t},o)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/floating.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/floating.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatingProvider: () => (/* binding */ ve),
/* harmony export */   useFloatingPanel: () => (/* binding */ Re),
/* harmony export */   useFloatingPanelProps: () => (/* binding */ be),
/* harmony export */   useFloatingReference: () => (/* binding */ ye),
/* harmony export */   useFloatingReferenceProps: () => (/* binding */ Fe),
/* harmony export */   useResolvedAnchor: () => (/* binding */ xe)
/* harmony export */ });
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @floating-ui/react */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});y.displayName="FloatingContext";let S=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);S.displayName="PlacementContext";function xe(e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>e?typeof e=="string"?{to:e}:e:null,[e])}function ye(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y).setReference}function Fe(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y).getReferenceProps}function be(){let{getFloatingProps:e,slot:t}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function Re(e=null){e===!1&&(e=null),typeof e=="string"&&(e={to:e});let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(S),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>e,[JSON.stringify(e,typeof HTMLElement!="undefined"?(r,o)=>o instanceof HTMLElement?o.outerHTML:o:void 0)]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{t==null||t(n!=null?n:null)},[t,n]);let l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[l.setFloating,e?l.styles:{}],[l.setFloating,e,l.styles])}let q=4;function ve({children:e,enabled:t=!0}){let[n,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[u,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);pe(u);let i=t&&n!==null&&u!==null,{to:F="bottom",gap:C=0,offset:M=0,padding:p=0,inner:P}=ce(n,u),[a,f="center"]=F.split(" ");(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{i&&o(0)},[i]);let{refs:b,floatingStyles:w,context:g}=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useFloating)({open:i,placement:a==="selection"?f==="center"?"bottom":`bottom-${f}`:f==="center"?`${a}`:`${a}-${f}`,strategy:"absolute",transform:!1,middleware:[(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.offset)({mainAxis:a==="selection"?0:C,crossAxis:M}),(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.shift)({padding:p}),a!=="selection"&&(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.flip)({padding:p}),a==="selection"&&P?(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.inner)({...P,padding:p,overflowRef:c,offset:r,minItemsVisible:q,referenceOverflowThreshold:p,onFallbackChange(h){var O,W;if(!h)return;let d=g.elements.floating;if(!d)return;let T=parseFloat(getComputedStyle(d).scrollPaddingBottom)||0,$=Math.min(q,d.childElementCount),B=0,N=0;for(let m of(W=(O=g.elements.floating)==null?void 0:O.childNodes)!=null?W:[])if(m instanceof HTMLElement){let x=m.offsetTop,k=x+m.clientHeight+T,H=d.scrollTop,U=H+d.clientHeight;if(x>=H&&k<=U)$--;else{N=Math.max(0,Math.min(k,U)-Math.max(x,H)),B=m.clientHeight;break}}$>=1&&o(m=>{let x=B*$-N+T;return m>=x?m:x})}}):null,(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_3__.size)({padding:p,apply({availableWidth:h,availableHeight:d,elements:T}){Object.assign(T.floating.style,{overflow:"auto",maxWidth:`${h}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${d}px)`})}})].filter(Boolean),whileElementsMounted:_floating_ui_react__WEBPACK_IMPORTED_MODULE_4__.autoUpdate}),[I=a,V=f]=g.placement.split("-");a==="selection"&&(I="selection");let G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({anchor:[I,V].filter(Boolean).join(" ")}),[I,V]),K=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useInnerOffset)(g,{overflowRef:c,onChange:o}),{getReferenceProps:Q,getFloatingProps:X}=(0,_floating_ui_react__WEBPACK_IMPORTED_MODULE_2__.useInteractions)([K]),Y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(h=>{s(h),b.setFloating(h)});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(S.Provider,{value:l},react__WEBPACK_IMPORTED_MODULE_0__.createElement(y.Provider,{value:{setFloating:Y,setReference:b.setReference,styles:w,getReferenceProps:Q,getFloatingProps:X,slot:G}},e))}function pe(e){(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!e)return;let t=new MutationObserver(()=>{let n=window.getComputedStyle(e).maxHeight,l=parseFloat(n);if(isNaN(l))return;let r=parseInt(n);isNaN(r)||l!==r&&(e.style.maxHeight=`${Math.ceil(l)}px`)});return t.observe(e,{attributes:!0,attributeFilter:["style"]}),()=>{t.disconnect()}},[e])}function ce(e,t){var o,c,u;let n=L((o=e==null?void 0:e.gap)!=null?o:"var(--anchor-gap, 0)",t),l=L((c=e==null?void 0:e.offset)!=null?c:"var(--anchor-offset, 0)",t),r=L((u=e==null?void 0:e.padding)!=null?u:"var(--anchor-padding, 0)",t);return{...e,gap:n,offset:l,padding:r}}function L(e,t,n=void 0){let l=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_6__.useDisposables)(),r=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((s,i)=>{if(s==null)return[n,null];if(typeof s=="number")return[s,null];if(typeof s=="string"){if(!i)return[n,null];let F=J(s,i);return[F,C=>{let M=D(s);{let p=M.map(P=>window.getComputedStyle(i).getPropertyValue(P));l.requestAnimationFrame(function P(){l.nextFrame(P);let a=!1;for(let[b,w]of M.entries()){let g=window.getComputedStyle(i).getPropertyValue(w);if(p[b]!==g){p[b]=g,a=!0;break}}if(!a)return;let f=J(s,i);F!==f&&(C(f),F=f)})}return l.dispose}]}return[n,null]}),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>r(e,t)[0],[e,t]),[c=o,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{let[s,i]=r(e,t);if(u(s),!!i)return i(u)},[e,t]),c}function D(e){let t=/var\((.*)\)/.exec(e);if(t){let n=t[1].indexOf(",");if(n===-1)return[t[1]];let l=t[1].slice(0,n).trim(),r=t[1].slice(n+1).trim();return r?[l,...D(r)]:[l]}return[]}function J(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let l=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),l}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/form-fields.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/form-fields.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFields: () => (/* binding */ j),
/* harmony export */   FormFieldsProvider: () => (/* binding */ W),
/* harmony export */   HoistFormFields: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hidden_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
let f=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function W(t){let[e,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(f.Provider,{value:{target:e}},t.children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Hidden,{features:_hidden_js__WEBPACK_IMPORTED_MODULE_2__.HiddenFeatures.Hidden,ref:r}))}function c({children:t}){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(f);if(!e)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,t);let{target:r}=e;return r?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,t),r):null}function j({data:t,form:e,disabled:r,onReset:n,overrides:F}){let[i,a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),p=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(n&&i)return p.addEventListener(i,"reset",n)},[i,e,n]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(C,{setForm:a,formId:e}),(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_4__.objectToFormEntries)(t).map(([s,v])=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Hidden,{features:_hidden_js__WEBPACK_IMPORTED_MODULE_2__.HiddenFeatures.Hidden,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.compact)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:e,disabled:r,name:s,value:v,...F})})))}function C({setForm:t,formId:e}){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(e){let r=document.getElementById(e);r&&t(r)}},[t,e]),e?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Hidden,{features:_hidden_js__WEBPACK_IMPORTED_MODULE_2__.HiddenFeatures.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:r=>{if(!r)return;let n=r.closest("form");n&&t(n)}})}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/frozen.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/frozen.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Frozen: () => (/* binding */ f),
/* harmony export */   useFrozenData: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function f({children:o,freeze:e}){let n=l(e,o);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n)}function l(o,e){let[n,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e);return!o&&n!==e&&t(e),o?n:e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hidden: () => (/* binding */ T),
/* harmony export */   HiddenFeatures: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let a="span";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});function l(t,r){var n;let{features:d=1,...e}=t,o={ref:r,"aria-hidden":(d&2)===2?!0:(n=e["aria-hidden"])!=null?n:void 0,hidden:(d&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(d&4)===4&&(d&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)({ourProps:o,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}let T=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(l);


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/id.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/id.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdProvider: () => (/* binding */ f),
/* harmony export */   useProvidedId: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function u(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function f({id:t,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:t},r)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenClosedProvider: () => (/* binding */ c),
/* harmony export */   ResetOpenClosedProvider: () => (/* binding */ s),
/* harmony export */   State: () => (/* binding */ i),
/* harmony export */   useOpenClosed: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var i=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(i||{});function u(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:t}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},t)}function s({children:o}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:null},o)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/portal-force-root.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcePortalRoot: () => (/* binding */ l),
/* harmony export */   usePortalRoot: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function a(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function l(o){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:o.force},o.children)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDisabledReactIssue7711: () => (/* binding */ r)
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/calculate-active-index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ c),
/* harmony export */   calculateActiveIndex: () => (/* binding */ f)
/* harmony export */ });
function u(l){throw new Error("Unexpected object: "+l)}var c=(i=>(i[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i))(c||{});function f(l,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),s=r!=null?r:-1;switch(l.focus){case 0:{for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 1:{s===-1&&(s=t.length);for(let e=s-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 2:{for(let e=s+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 3:{for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 4:{for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===l.id)return e;return r}case 5:return null;default:u(l)}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/class-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/class-names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ t)
/* harmony export */ });
function t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/default-map.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/default-map.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultMap: () => (/* binding */ a)
/* harmony export */ });
class a extends Map{constructor(t){super();this.factory=t}get(t){let e=super.get(t);return e===void 0&&(e=this.factory(t),this.set(t,e)),e}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disposables: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.includes(e)||n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/env.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/env.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ F),
/* harmony export */   FocusResult: () => (/* binding */ T),
/* harmony export */   FocusableMode: () => (/* binding */ h),
/* harmony export */   focusElement: () => (/* binding */ I),
/* harmony export */   focusFrom: () => (/* binding */ j),
/* harmony export */   focusIn: () => (/* binding */ P),
/* harmony export */   focusableSelector: () => (/* binding */ f),
/* harmony export */   getAutoFocusableElements: () => (/* binding */ S),
/* harmony export */   getFocusableElements: () => (/* binding */ b),
/* harmony export */   isFocusableElement: () => (/* binding */ A),
/* harmony export */   restoreFocusIfNecessary: () => (/* binding */ G),
/* harmony export */   sortByDomNode: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),p=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n[n.AutoFocus=64]="AutoFocus",n))(F||{}),T=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(T||{}),y=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(y||{});function b(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}function S(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var h=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(h||{});function A(e,r=0){var t;return e===((t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:t.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r,{[0](){return e.matches(f)},[1](){let u=e;for(;u!==null;){if(u.matches(f))return!0;u=u.parentElement}return!1}})}function G(e){let r=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)().nextFrame(()=>{r&&!A(r.activeElement,0)&&I(e)})}var H=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(H||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function I(e){e==null||e.focus({preventScroll:!0})}let w=["textarea","input"].join(",");function O(e){var r,t;return(t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,w))!=null?t:!1}function _(e,r=t=>t){return e.slice().sort((t,u)=>{let o=r(t),c=r(u);if(o===null||c===null)return 0;let l=o.compareDocumentPosition(c);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function j(e,r){return P(b(),r,{relativeTo:e})}function P(e,r,{sorted:t=!0,relativeTo:u=null,skipElements:o=[]}={}){let c=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?t?_(e):e:r&64?S(e):b(e);o.length>0&&l.length>1&&(l=l.filter(s=>!o.some(a=>a!=null&&"current"in a?(a==null?void 0:a.current)===s:a===s))),u=u!=null?u:c.activeElement;let n=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,l.indexOf(u))-1;if(r&4)return Math.max(0,l.indexOf(u))+1;if(r&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),M=r&32?{preventScroll:!0}:{},m=0,d=l.length,i;do{if(m>=d||m+d<=0)return 0;let s=x+m;if(r&16)s=(s+d)%d;else{if(s<0)return 3;if(s>=d)return 1}i=l[s],i==null||i.focus(M),m+=n}while(i!==c.activeElement);return r&6&&O(i)&&i.select(),2}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attemptSubmit: () => (/* binding */ p),
/* harmony export */   objectToFormEntries: () => (/* binding */ e)
/* harmony export */ });
function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):typeof t=="boolean"?i.push([s,t?"1":"0"]):typeof t=="string"?i.push([s,t]):typeof t=="number"?i.push([s,`${t}`]):t==null?i.push([s,""]):e(t,s,i)}function p(i){var t,r;let s=(t=i==null?void 0:i.form)!=null?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(r=s.requestSubmit)==null||r.call(s)}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/get-text-value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/get-text-value.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTextValue: () => (/* binding */ g)
/* harmony export */ });
let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=(r=e.innerText)!=null?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?(i=t.innerText)!=null?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}function g(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map(l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():o(r).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   microTask: () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   once: () => (/* binding */ l)
/* harmony export */ });
function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnerDocument: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function u(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.env.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/platform.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/platform.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAndroid: () => (/* binding */ i),
/* harmony export */   isIOS: () => (/* binding */ t),
/* harmony export */   isMobile: () => (/* binding */ n)
/* harmony export */ });
function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i(){return/Android/gi.test(window.navigator.userAgent)}function n(){return t()||i()}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderFeatures: () => (/* binding */ M),
/* harmony export */   RenderStrategy: () => (/* binding */ O),
/* harmony export */   compact: () => (/* binding */ m),
/* harmony export */   forwardRefWithAs: () => (/* binding */ W),
/* harmony export */   mergeProps: () => (/* binding */ D),
/* harmony export */   render: () => (/* binding */ H),
/* harmony export */   useMergeRefsFn: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var M=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(M||{}),O=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(O||{});function H({ourProps:r,theirProps:n,slot:e,defaultTag:a,features:s,visible:t=!0,name:l,mergeRefs:i}){i=i!=null?i:A;let o=N(n,r);if(t)return b(o,e,a,l,i);let y=s!=null?s:0;if(y&2){let{static:f=!1,...u}=o;if(f)return b(u,e,a,l,i)}if(y&1){let{unmount:f=!0,...u}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(f?0:1,{[0](){return null},[1](){return b({...u,hidden:!0,style:{display:"none"}},e,a,l,i)}})}return b(o,e,a,l,i)}function b(r,n={},e,a,s){let{as:t=e,children:l,refName:i="ref",...o}=h(r,["unmount","static"]),y=r.ref!==void 0?{[i]:r.ref}:{},f=typeof l=="function"?l(n):l;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(n)),o["aria-labelledby"]&&o["aria-labelledby"]===o.id&&(o["aria-labelledby"]=void 0);let u={};if(n){let d=!1,p=[];for(let[c,T]of Object.entries(n))typeof T=="boolean"&&(d=!0),T===!0&&p.push(c.replace(/([A-Z])/g,g=>`-${g.toLowerCase()}`));if(d){u["data-headlessui-state"]=p.join(" ");for(let c of p)u[`data-${c}`]=""}}if(t===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&(Object.keys(m(o)).length>0||Object.keys(m(u)).length>0))if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(f)||Array.isArray(f)&&f.length>1){if(Object.keys(m(o)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(m(o)).concat(Object.keys(m(u))).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}else{let d=f.props,p=d==null?void 0:d.className,c=typeof p=="function"?(...F)=>(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(p(...F),o.className):(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(p,o.className),T=c?{className:c}:{},g=N(f.props,m(h(o,["ref"])));for(let F in u)F in g&&delete u[F];return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(f,Object.assign({},g,u,y,{ref:s(f.ref,y.ref)},T))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t,Object.assign({},h(o,["ref"]),t!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&y,t!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u),f)}function I(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{for(let a of r.current)a!=null&&(typeof a=="function"?a(e):a.current=e)},[]);return(...e)=>{if(!e.every(a=>a==null))return r.current=e,n}}function A(...r){return r.every(n=>n==null)?void 0:n=>{for(let e of r)e!=null&&(typeof e=="function"?e(n):e.current=n)}}function N(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let n={},e={};for(let s of r)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((a=e[t])!=null||(e[t]=[]),e[t].push(s[t])):n[t]=s[t];if(n.disabled||n["aria-disabled"])for(let s in e)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s)&&(e[s]=[t=>{var l;return(l=t==null?void 0:t.preventDefault)==null?void 0:l.call(t)}]);for(let s in e)Object.assign(n,{[s](t,...l){let i=e[s];for(let o of i){if((t instanceof Event||(t==null?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...l)}}});return n}function D(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let n={},e={};for(let s of r)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((a=e[t])!=null||(e[t]=[]),e[t].push(s[t])):n[t]=s[t];for(let s in e)Object.assign(n,{[s](...t){let l=e[s];for(let i of l)i==null||i(...t)}});return n}function W(r){var n;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(n=r.displayName)!=null?n:r.name})}function m(r){let n=Object.assign({},r);for(let e in n)n[e]===void 0&&delete n[e];return n}function h(r,n=[]){let e=Object.assign({},r);for(let a of n)a in e&&delete e[a];return e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/start-transition.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/start-transition.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startTransition: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
var t;let a=(t=react__WEBPACK_IMPORTED_MODULE_0__.startTransition)!=null?t:function(i){i()};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/store.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/store.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStore: () => (/* binding */ a)
/* harmony export */ });
function a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}


/***/ }),

/***/ "./node_modules/@heroicons/react/16/solid/esm/CheckIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/16/solid/esm/CheckIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function MagnifyingGlassIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MagnifyingGlassIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/DocumentPlusIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/DocumentPlusIcon.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function DocumentPlusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DocumentPlusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/esm/PlusIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/PlusIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function PlusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@react-aria/focus/dist/useFocusRing.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@react-aria/focus/dist/useFocusRing.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFocusRing: () => (/* binding */ $f7dceffc5ad7768b$export$4e328f61c538687f)
/* harmony export */ });
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/useFocus.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");





function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.isFocusVisible)()
    });
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.useFocusVisibleListener)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocus)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__.useFocusWithin)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}



//# sourceMappingURL=useFocusRing.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/interactions/dist/useFocus.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-aria/interactions/dist/useFocus.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFocus: () => (/* binding */ $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@react-aria/interactions/dist/utils.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/domHelpers.mjs");




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__.useSyntheticBlurEvent)(onBlur);
    const onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(e.target);
        if (e.target === e.currentTarget && ownerDocument.activeElement === e.target) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}



//# sourceMappingURL=useFocus.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@react-aria/interactions/dist/useFocusVisible.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWindowFocusTracking: () => (/* binding */ $507fabe10e71c6fb$export$2f1888112f558a7d),
/* harmony export */   getInteractionModality: () => (/* binding */ $507fabe10e71c6fb$export$630ff653c5ada6a9),
/* harmony export */   hasSetupGlobalListeners: () => (/* binding */ $507fabe10e71c6fb$export$d90243b58daecda7),
/* harmony export */   isFocusVisible: () => (/* binding */ $507fabe10e71c6fb$export$b9b3dfddab17db27),
/* harmony export */   setInteractionModality: () => (/* binding */ $507fabe10e71c6fb$export$8397ddfc504fdb9a),
/* harmony export */   useFocusVisible: () => (/* binding */ $507fabe10e71c6fb$export$ffd9e5021c1fb2d6),
/* harmony export */   useFocusVisibleListener: () => (/* binding */ $507fabe10e71c6fb$export$ec71b4b83ac08ec3),
/* harmony export */   useInteractionModality: () => (/* binding */ $507fabe10e71c6fb$export$98e20ec92f614cfe)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/platform.mjs");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/isVirtualEvent.mjs");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/domHelpers.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/SSRProvider.mjs");




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isMac)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.isVirtualClick)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === 'undefined' || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerWindow)(element))) return;
    const windowObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerWindow)(element);
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerDocument)(element);
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    documentObject.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerWindow)(element);
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerDocument)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.removeEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerDocument)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== 'pointer';
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($507fabe10e71c6fb$var$currentModality);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_4__.useIsSSR)() ? null : modality;
}
const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    var _e_target;
    const IHTMLInputElement = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== 'undefined' ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
    isTextInput = isTextInput || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLTextAreaElement || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLElement && (e === null || e === void 0 ? void 0 : e.target.isContentEditable);
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput, autoFocus: autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}



//# sourceMappingURL=useFocusVisible.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-aria/interactions/dist/useFocusWithin.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFocusWithin: () => (/* binding */ $9ab94262bd0047c7$export$420e68273165f4ec)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/@react-aria/interactions/dist/utils.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocusWithin: false
    });
    let onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state
    ]);
    let onSyntheticFocus = (0, _utils_mjs__WEBPACK_IMPORTED_MODULE_1__.useSyntheticBlurEvent)(onBlur);
    let onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (!state.current.isFocusWithin && document.activeElement === e.target) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These should not have been null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}



//# sourceMappingURL=useFocusWithin.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/interactions/dist/useHover.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-aria/interactions/dist/useHover.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHover: () => (/* binding */ $6179b936705e76d3$export$ae780daf29e6d456)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}



//# sourceMappingURL=useHover.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/interactions/dist/utils.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@react-aria/interactions/dist/utils.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyntheticFocusEvent: () => (/* binding */ $8a9cb279dc87e130$export$905e7fc544a71f36),
/* harmony export */   useSyntheticBlurEvent: () => (/* binding */ $8a9cb279dc87e130$export$715c682d09d639cc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/useEffectEvent.mjs");



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    // eslint-disable-next-line arrow-body-style
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.useEffectEvent)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36('blur', e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}



//# sourceMappingURL=utils.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/ssr/dist/SSRProvider.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSRProvider: () => (/* binding */ $b5e257d569688ac6$export$9f8ac96af4b1b2ae),
/* harmony export */   useIsSSR: () => (/* binding */ $b5e257d569688ac6$export$535bd6ca7f90a273),
/* harmony export */   useSSRSafeId: () => (/* binding */ $b5e257d569688ac6$export$619500959fc48b26)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(false);
// This is only used in React < 18.
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
    let cur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
    let [isSSR, setIsSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    let value = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $b5e257d569688ac6$var$defaultContext ? '' : `${cur.prefix}-${counter}`,
            current: 0
        }), [
        cur,
        counter
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== 'undefined') // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($b5e257d569688ac6$var$IsSSRContext.Provider, {
        value: isSSR
    }, props.children));
}
let $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)['useId'] === 'function') {
        if ( true && !$b5e257d569688ac6$var$warnedAboutSSRProvider) {
            console.warn('In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.');
            $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
        }
        return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, react__WEBPACK_IMPORTED_MODULE_0__).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && "development" === 'test' ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    // @ts-ignore
    let id = (0, react__WEBPACK_IMPORTED_MODULE_0__).useId();
    let [didSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || "development" === 'test' ? 'react-aria' : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)['useId'] === 'function' ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)['useSyncExternalStore'] === 'function') return (0, react__WEBPACK_IMPORTED_MODULE_0__)['useSyncExternalStore']($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$IsSSRContext);
}



//# sourceMappingURL=SSRProvider.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/utils/dist/domHelpers.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@react-aria/utils/dist/domHelpers.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnerDocument: () => (/* binding */ $431fbd86ca7dc216$export$b204af158042fbac),
/* harmony export */   getOwnerWindow: () => (/* binding */ $431fbd86ca7dc216$export$f21a1ffae260145a)
/* harmony export */ });
const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};



//# sourceMappingURL=domHelpers.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/utils/dist/isVirtualEvent.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@react-aria/utils/dist/isVirtualEvent.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVirtualClick: () => (/* binding */ $6a7db85432448f7f$export$60278871457622de),
/* harmony export */   isVirtualPointerEvent: () => (/* binding */ $6a7db85432448f7f$export$29bf1b5f2c56cf63)
/* harmony export */ });
/* harmony import */ var _platform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.mjs */ "./node_modules/@react-aria/utils/dist/platform.mjs");


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__.isAndroid)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, _platform_mjs__WEBPACK_IMPORTED_MODULE_0__.isAndroid)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}



//# sourceMappingURL=isVirtualEvent.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/utils/dist/platform.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@react-aria/utils/dist/platform.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAndroid: () => (/* binding */ $c87311424ea30a05$export$a11b0059900ceec8),
/* harmony export */   isAppleDevice: () => (/* binding */ $c87311424ea30a05$export$e1865c3bedcd822b),
/* harmony export */   isChrome: () => (/* binding */ $c87311424ea30a05$export$6446a186d09e379e),
/* harmony export */   isFirefox: () => (/* binding */ $c87311424ea30a05$export$b7d78993b74f766d),
/* harmony export */   isIOS: () => (/* binding */ $c87311424ea30a05$export$fedb369cb70207f1),
/* harmony export */   isIPad: () => (/* binding */ $c87311424ea30a05$export$7bef049ce92e4224),
/* harmony export */   isIPhone: () => (/* binding */ $c87311424ea30a05$export$186c6964ca17d99),
/* harmony export */   isMac: () => (/* binding */ $c87311424ea30a05$export$9ac100e40613ea10),
/* harmony export */   isWebKit: () => (/* binding */ $c87311424ea30a05$export$78551043582a6a98)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}



//# sourceMappingURL=platform.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/utils/dist/useEffectEvent.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@react-aria/utils/dist/useEffectEvent.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEffectEvent: () => (/* binding */ $8ae05eaa5c114e9c$export$7f54fc3180508a52)
/* harmony export */ });
/* harmony import */ var _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLayoutEffect.mjs */ "./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, _useLayoutEffect_mjs__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}



//# sourceMappingURL=useEffectEvent.module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLayoutEffect: () => (/* binding */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};



//# sourceMappingURL=useLayoutEffect.module.js.map


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/tailwind-merge/dist/bundle-mjs.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTailwindMerge: () => (/* binding */ createTailwindMerge),
/* harmony export */   extendTailwindMerge: () => (/* binding */ extendTailwindMerge),
/* harmony export */   fromTheme: () => (/* binding */ fromTheme),
/* harmony export */   getDefaultConfig: () => (/* binding */ getDefaultConfig),
/* harmony export */   mergeConfigs: () => (/* binding */ mergeConfigs),
/* harmony export */   twJoin: () => (/* binding */ twJoin),
/* harmony export */   twMerge: () => (/* binding */ twMerge),
/* harmony export */   validators: () => (/* binding */ validators)
/* harmony export */ });
const CLASS_PART_SEPARATOR = '-';
function createClassGroupUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
const IMPORTANT_MODIFIER = '!';
function createParseClassName(config) {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  function parseClassName(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  }
  if (experimentalParseClassName) {
    return function parseClassNameExperimental(className) {
      return experimentalParseClassName({
        className,
        parseClassName
      });
    };
  }
  return parseClassName;
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    ...createClassGroupUtils(config)
  };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(originalClassName => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(parsed => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(group => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map(parsed => parsed.originalClassName).join(' ');
}

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
const validators = /*#__PURE__*/Object.defineProperty({
  __proto__: null,
  isAny,
  isArbitraryImage,
  isArbitraryLength,
  isArbitraryNumber,
  isArbitraryPosition,
  isArbitraryShadow,
  isArbitrarySize,
  isArbitraryValue,
  isInteger,
  isLength,
  isNumber,
  isPercent,
  isTshirtSize
}, Symbol.toStringTag, {
  value: 'Module'
});
function getDefaultConfig() {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}

/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
function mergeConfigs(baseConfig, {
  cacheSize,
  prefix,
  separator,
  experimentalParseClassName,
  extend = {},
  override = {}
}) {
  overrideProperty(baseConfig, 'cacheSize', cacheSize);
  overrideProperty(baseConfig, 'prefix', prefix);
  overrideProperty(baseConfig, 'separator', separator);
  overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
}
function overrideProperty(baseObject, overrideKey, overrideValue) {
  if (overrideValue !== undefined) {
    baseObject[overrideKey] = overrideValue;
  }
}
function overrideConfigProperties(baseObject, overrideObject) {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
}
function mergeConfigProperties(baseObject, mergeObject) {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== undefined) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
}
function extendTailwindMerge(configExtension, ...createConfig) {
  return typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
}
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

//# sourceMappingURL=bundle-mjs.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");



const wacl = document.getElementById('wacl-root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(wacl);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
/******/ })()
;
//# sourceMappingURL=index.js.map