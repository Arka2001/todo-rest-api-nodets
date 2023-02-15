"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/config/db.config.ts":
/*!*********************************!*\
  !*** ./src/config/db.config.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.connect = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nexports.connect = mongoose_1.default.connect(String(process.env.MONGO_URI), {}, (err) => {\n    if (err)\n        console.log(err);\n    else\n        console.log(\"DB connection successful\");\n});\n\n\n//# sourceURL=webpack://todo-rest-api/./src/config/db.config.ts?");

/***/ }),

/***/ "./src/config/swagger.config.ts":
/*!**************************************!*\
  !*** ./src/config/swagger.config.ts ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst swaggerJSDoc = __webpack_require__(/*! swagger-jsdoc */ \"swagger-jsdoc\");\nconst swaggerDefinition = {\n    openapi: \"3.0.0\",\n    info: {\n        title: \"Todo Rest API Documentation\",\n        version: \"1.0.0\",\n        description: \"REST API Service for Todo Application. <br/><br/>&copy; 2022 | <b>Sayantan Dasgupta</b>\",\n    },\n    servers: [\n        {\n            url: `http://localhost:3000`,\n            description: 'Development',\n        }\n    ],\n    // components: {\n    //     securitySchemes: {\n    //         httpBearer: {\n    //             type: \"http\",\n    //             scheme: \"bearer\"\n    //         }\n    //     }\n    // }\n};\nconst options = {\n    swaggerDefinition,\n    apis: [\"./src/config/swagger.doc.yml\"],\n};\nconst swaggerSpec = swaggerJSDoc(options);\nmodule.exports = swaggerSpec;\n\n\n//# sourceURL=webpack://todo-rest-api/./src/config/swagger.config.ts?");

/***/ }),

/***/ "./src/controllers/todo.controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/todo.controller.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst TodoService = __importStar(__webpack_require__(/*! ../services/todo.service */ \"./src/services/todo.service.ts\"));\nconst responseCreator_1 = __importDefault(__webpack_require__(/*! ../utils/responseCreator */ \"./src/utils/responseCreator.ts\"));\nconst AddTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const todo = {\n        title: req.body.title,\n        content: req.body.content,\n    };\n    if (!todo.title || !todo.content) {\n        return responseCreator_1.default.generateResponse(res, 400, {}, \"Title or Content is missing\");\n    }\n    const { code, message } = yield TodoService.AddTodo(todo);\n    return responseCreator_1.default.generateResponse(res, code, {}, message);\n});\nconst GetAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const limit = Number(req.query['limit'] || 10);\n    const offset = Number(req.query['offset'] || 0);\n    const { code, todos, message } = yield TodoService.GetAllTodos(limit, offset);\n    return responseCreator_1.default.generateResponse(res, code, todos, message);\n});\nconst GetTodoByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    let id;\n    try {\n        id = new mongoose_1.Types.ObjectId(req.params.id);\n    }\n    catch (error) {\n        return responseCreator_1.default.generateResponse(res, 404, {}, \"Todo Not Found\");\n    }\n    const { code, todo, message } = yield TodoService.GetTodoByID(id);\n    return responseCreator_1.default.generateResponse(res, code, todo, message);\n});\nconst UpdateTodoByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    let id;\n    const title = req.body.title;\n    const content = req.body.content;\n    try {\n        id = new mongoose_1.Types.ObjectId(req.params.id);\n    }\n    catch (error) {\n        return responseCreator_1.default.generateResponse(res, 404, {}, \"Todo Not Found\");\n    }\n    const { code, message } = yield TodoService.UpdateTodoByID(id, title, content);\n    return responseCreator_1.default.generateResponse(res, code, message);\n});\nconst DeleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    let id;\n    try {\n        id = new mongoose_1.Types.ObjectId(req.params.id);\n    }\n    catch (error) {\n        return responseCreator_1.default.generateResponse(res, 404, {}, \"Todo Not Found\");\n    }\n    const { code, message } = yield TodoService.DeleteTodo(id);\n    return responseCreator_1.default.generateResponse(res, code, message);\n});\nexports[\"default\"] = { AddTodo, GetAllTodos, GetTodoByID, UpdateTodoByID, DeleteTodo };\n\n\n//# sourceURL=webpack://todo-rest-api/./src/controllers/todo.controller.ts?");

/***/ }),

/***/ "./src/models/todo.model.ts":
/*!**********************************!*\
  !*** ./src/models/todo.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst TodoSchema = new mongoose_1.Schema({\n    title: {\n        type: String,\n        required: true,\n    },\n    content: {\n        type: String,\n        required: true,\n    }\n});\nconst Todo = (0, mongoose_1.model)(\"Todo\", TodoSchema);\nexports[\"default\"] = Todo;\n\n\n//# sourceURL=webpack://todo-rest-api/./src/models/todo.model.ts?");

/***/ }),

/***/ "./src/routes/todo.routes.ts":
/*!***********************************!*\
  !*** ./src/routes/todo.routes.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst todo_controller_1 = __importDefault(__webpack_require__(/*! ../controllers/todo.controller */ \"./src/controllers/todo.controller.ts\"));\nconst TodoRouter = (0, express_1.Router)();\nTodoRouter.post(\"/\", todo_controller_1.default.AddTodo);\nTodoRouter.get(\"/\", todo_controller_1.default.GetAllTodos);\nTodoRouter.get(\"/:id\", todo_controller_1.default.GetTodoByID);\nTodoRouter.put(\"/:id\", todo_controller_1.default.UpdateTodoByID);\nTodoRouter.delete(\"/:id\", todo_controller_1.default.DeleteTodo);\nexports[\"default\"] = TodoRouter;\n\n\n//# sourceURL=webpack://todo-rest-api/./src/routes/todo.routes.ts?");

/***/ }),

/***/ "./src/services/todo.service.ts":
/*!**************************************!*\
  !*** ./src/services/todo.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DeleteTodo = exports.UpdateTodoByID = exports.GetTodoByID = exports.GetAllTodos = exports.AddTodo = void 0;\nconst todo_model_1 = __importDefault(__webpack_require__(/*! ../models/todo.model */ \"./src/models/todo.model.ts\"));\nconst AddTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        // Creating a new Todo\n        const newTodo = new todo_model_1.default({\n            title: todo.title,\n            content: todo.content,\n        });\n        yield newTodo.save();\n        return { code: 201, message: \"Success\" };\n    }\n    catch (error) {\n        return { code: 500, message: \"Internal Server Error\" };\n    }\n});\nexports.AddTodo = AddTodo;\nconst GetAllTodos = (limit, offset) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const todos = yield todo_model_1.default.find().limit(limit).skip(limit * offset);\n        return { code: 200, todos, message: \"Success\" };\n    }\n    catch (error) {\n        return { code: 500, todos: [], message: \"Internal Server Error\" };\n    }\n});\nexports.GetAllTodos = GetAllTodos;\nconst GetTodoByID = (_id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const todo = yield todo_model_1.default.findOne({ _id });\n        if (todo)\n            return { code: 200, todo, message: \"Success\" };\n        else\n            return { code: 404, todo, message: \"Todo Not Found\" };\n    }\n    catch (error) {\n        return { code: 500, todo: {}, message: \"Internal Server Error\" };\n    }\n});\nexports.GetTodoByID = GetTodoByID;\nconst UpdateTodoByID = (_id, title, content) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const currentTodo = yield todo_model_1.default.findOne({ _id });\n        if (currentTodo) {\n            const result = yield todo_model_1.default.updateOne({ _id }, {\n                $set: {\n                    title: title === null ? currentTodo.title : title,\n                    content: content === null ? currentTodo.content : content,\n                }\n            }, { upsert: true });\n            if (!result)\n                return { code: 400, todo: {}, message: \"Bad Request\" };\n            return { code: 200, todo: {}, message: \"Updated Successfully\" };\n        }\n        else {\n            return { code: 404, currentTodo, message: \"Todo Not Found\" };\n        }\n    }\n    catch (error) {\n        return { code: 500, todo: {}, message: \"Internal Server Error\" };\n    }\n});\nexports.UpdateTodoByID = UpdateTodoByID;\nconst DeleteTodo = (_id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const todo = yield todo_model_1.default.findOne({ _id });\n        if (todo) {\n            const result = yield todo_model_1.default.deleteOne({ _id }, { upsert: true });\n            if (!result)\n                return { code: 400, todo: {}, message: \"Bad Request\" };\n            return { code: 200, todo: {}, message: \"Deleted Successfully\" };\n        }\n        else {\n            return { code: 404, todo: {}, message: \"Todo Not Found\" };\n        }\n    }\n    catch (error) {\n        return { code: 500, todo: {}, message: \"Internal Server Error\" };\n    }\n});\nexports.DeleteTodo = DeleteTodo;\n\n\n//# sourceURL=webpack://todo-rest-api/./src/services/todo.service.ts?");

/***/ }),

/***/ "./src/todo-app.ts":
/*!*************************!*\
  !*** ./src/todo-app.ts ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst db_config_1 = __webpack_require__(/*! ./config/db.config */ \"./src/config/db.config.ts\");\nconst todo_routes_1 = __importDefault(__webpack_require__(/*! ./routes/todo.routes */ \"./src/routes/todo.routes.ts\"));\nconst swagger_ui_express_1 = __importDefault(__webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\"));\n//Environment Variables\nconst app = (0, express_1.default)();\nconst PORT = Number(process.env.PORT || 3000);\n//Swagger Docs\nconst swaggerSpec = __webpack_require__(/*! ./config/swagger.config */ \"./src/config/swagger.config.ts\");\napp.use(\"/docs\", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));\n// Config for express app\napp.use((0, cors_1.default)());\napp.use(express_1.default.json());\napp.use(express_1.default.urlencoded({ extended: true }));\napp.use(\"/api/todos\", todo_routes_1.default);\napp.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.send(`ToDo REST API running successfully since ${new Date()}`); }));\n// Start express server\nconst server = app.listen(PORT, () => {\n    console.log(`Server started listening at ${PORT}`);\n    db_config_1.connect;\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack://todo-rest-api/./src/todo-app.ts?");

/***/ }),

/***/ "./src/utils/responseCreator.ts":
/*!**************************************!*\
  !*** ./src/utils/responseCreator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst responseType = {\n    200: {\n        httpstatus: 200,\n        message: \"Successfully loaded data\",\n        type: \"OK\",\n    },\n    201: {\n        httpstatus: 201,\n        message: \"Successfully created entry\",\n        type: \"Created\",\n    },\n    202: {\n        httpstatus: 202,\n        message: \"Successfully accepted entry\",\n        type: \"Accepted\",\n    },\n    204: {\n        httpstatus: 204,\n        message: \"There is no content available for the same\",\n        type: \"No Content\",\n    },\n    400: {\n        httpstatus: 400,\n        message: \"Bad request\",\n        type: \"Bad request\",\n    },\n    401: {\n        httpstatus: 401,\n        message: \"Unauthorized\",\n        type: \"Unauthorized\",\n    },\n    403: {\n        httpstatus: 403,\n        message: \"Forbidden\",\n        type: \"Forbidden\",\n    },\n    404: {\n        httpstatus: 404,\n        message: \"Request resource does not exist\",\n        type: \"Resource Does Not Exist\",\n    },\n    405: {\n        httpstatus: 405,\n        message: \"Request method not allowed\",\n        type: \"Method Not Allowed\",\n    },\n    406: {\n        httpstatus: 406,\n        message: \"Request resource is not acceptable\",\n        type: \"Not Acceptable\",\n    },\n    413: {\n        httpstatus: 413,\n        message: \"File size limit exceeded\",\n        type: \"Request entity too large\",\n    },\n    500: {\n        httpstatus: 500,\n        message: \"An unknown error occurred\",\n        type: \"Server Error\",\n    }\n};\nclass ResponseCreator {\n    static generateResponse(res, code = 200, result = {}, message = \"\") {\n        let newMessage = message;\n        if (message === \"\") {\n            newMessage = responseType[code].message;\n        }\n        return res.status(responseType[code].httpstatus).json({\n            code,\n            result,\n            type: responseType[code].type,\n            message: newMessage.toString(),\n        });\n    }\n}\nexports[\"default\"] = ResponseCreator;\n\n\n//# sourceURL=webpack://todo-rest-api/./src/utils/responseCreator.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d3e5ac87e66018fb75c4")
/******/ })();
/******/ 
/******/ }
;