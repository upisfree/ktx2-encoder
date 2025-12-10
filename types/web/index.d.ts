import { CubeBufferData, IEncodeOptions } from "../type.js";
export * from "../enum.js";
export * from "../type.js";
export declare function encodeToKTX2(imageBuffer: Uint8Array | CubeBufferData, options: IEncodeOptions): Promise<Uint8Array>;
