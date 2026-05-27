"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassDto = void 0;
const create_classe_dto_1 = require("./create-classe.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateClassDto extends (0, mapped_types_1.PartialType)(create_classe_dto_1.CreateClasseDto) {
}
exports.UpdateClassDto = UpdateClassDto;
//# sourceMappingURL=update-classe.dto.js.map