goog.provide('og.control.ToggleWireframe');

goog.require('og.webgl');
goog.require('og.input');

og.control.ToggleWireframe = function (options) {
    og.base(this, options);
};

og.extend(og.control.ToggleWireframe, og.control.Control);

og.control.ToggleWireframe.prototype.init = function () {
    this.renderer.input.setEvent("oncharkeypressed", this, null, this.toogleWireframe, og.input.KEY_X);
};

og.control.ToggleWireframe.prototype.toogleWireframe = function (e) {
    if (this.renderer.renderNodes.Earth.drawMode === this.renderer.handler.gl.LINE_STRIP) {
        this.renderer.renderNodes.Earth.setDrawMode(this.renderer.handler.gl.TRIANGLE_STRIP);
    } else {
        this.renderer.renderNodes.Earth.setDrawMode(this.renderer.handler.gl.LINE_STRIP);
    }
};
