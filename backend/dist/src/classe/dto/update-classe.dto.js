"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassDto = void 0;
const create_classe_dto_1 = require("./create-classe.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateClassDto extends (0, swagger_1.PartialType)(create_classe_dto_1.CreateClasseDto) {
}
exports.UpdateClassDto = UpdateClassDto;
//# sourceMappingURL=update-classe.dto.js.map