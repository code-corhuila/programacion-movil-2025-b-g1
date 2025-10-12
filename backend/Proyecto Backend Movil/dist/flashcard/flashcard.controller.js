"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashcardController = void 0;
const common_1 = require("@nestjs/common");
const flashcard_service_1 = require("./flashcard.service");
let FlashcardController = class FlashcardController {
    constructor(flashcardService) {
        this.flashcardService = flashcardService;
    }
    generar(documentoId) {
        return this.flashcardService.generar(documentoId);
    }
    listar(documentoId) {
        return this.flashcardService.listar(Number(documentoId));
    }
};
exports.FlashcardController = FlashcardController;
__decorate([
    (0, common_1.Post)('generar'),
    __param(0, (0, common_1.Body)('documentoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlashcardController.prototype, "generar", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('documentoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlashcardController.prototype, "listar", null);
exports.FlashcardController = FlashcardController = __decorate([
    (0, common_1.Controller)('flashcards'),
    __metadata("design:paramtypes", [flashcard_service_1.FlashcardService])
], FlashcardController);
//# sourceMappingURL=flashcard.controller.js.map