import { HDRSourceType, SourceType } from "../enum.js";
import { applyInputOptions } from "../applyInputOptions.js";
import BASIS from "../basis/basis_encoder.js";
let promise = null;
class NodeBasisEncoder {
    basis;
    encoder;
    constructor() {
        this.init();
    }
    async init() {
        if (!promise) {
            promise = BASIS().then((basis) => {
                basis.initializeBasis();
                this.basis = basis;
                this.encoder = new this.basis.BasisEncoder();
                return basis;
            });
        }
        return promise;
    }
    async encode(bufferOrBufferArray, options = {}) {
        const bufferArray = Array.isArray(bufferOrBufferArray) ? bufferOrBufferArray : [bufferOrBufferArray];
        applyInputOptions(options, this.encoder);
        for (let i = 0; i < bufferArray.length; i++) {
            const buffer = bufferArray[i];
            if (options.isHDR) {
                this.encoder.setSliceSourceImageHDR(i, buffer, 0, 0, options.imageType === "hdr" ? HDRSourceType.HDR : HDRSourceType.EXR, true);
            }
            else {
                const imageData = await options.imageDecoder(buffer);
                this.encoder.setSliceSourceImage(i, new Uint8Array(imageData.data), imageData.width, imageData.height, SourceType.RAW);
            }
        }
        const resultData = new Uint8Array(1024 * 1024 * (options.isHDR ? 24 : 10));
        const resultSize = this.encoder.encode(resultData);
        if (resultSize === 0) {
            throw new Error("Encode failed");
        }
        return Buffer.from(resultData.subarray(0, resultSize));
    }
}
export const nodeEncoder = new NodeBasisEncoder();
