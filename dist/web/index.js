import { browserEncoder } from "./BrowserBasisEncoder.js";
import { decodeImageBitmap } from "./decodeImageData.js";
export * from "../enum.js";
export * from "../type.js";
export function encodeToKTX2(imageBuffer, options) {
    options.imageDecoder ??= decodeImageBitmap;
    globalThis.__KTX2_DEBUG__ = options.enableDebug ?? false;
    return browserEncoder.encode(imageBuffer, options);
}
