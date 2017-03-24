"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var default_editor_1 = require('./default-editor');
var SelectEditorComponent = (function (_super) {
    __extends(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        _super.call(this);
    }
    SelectEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'select-editor',
                    template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    "
                },] },
    ];
    /** @nocollapse */
    SelectEditorComponent.ctorParameters = function () { return []; };
    return SelectEditorComponent;
}(default_editor_1.DefaultEditor));
exports.SelectEditorComponent = SelectEditorComponent;
//# sourceMappingURL=select-editor.component.js.map