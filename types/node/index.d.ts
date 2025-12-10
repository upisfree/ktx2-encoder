import { IEncodeOptions } from "../type.js";
export declare function encodeToKTX2(imageBuffer: Uint8Array, options?: Partial<IEncodeOptions>): Promise<Uint8Array>;
declare const basisEncoder: {
    basis: import("../type.js").IBasisModule;
    init(): Promise<import("../type.js").IBasisModule>;
    encode(bufferOrBufferArray: Uint8Array | import("../type.js").CubeBufferData, options?: Partial<IEncodeOptions>): Promise<Buffer>;
};
export { basisEncoder };
