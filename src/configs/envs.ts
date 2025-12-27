export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const MODE = process.env.NODE_ENV || "production";
export const PLATFORM = process.env.NEXT_PUBLIC_PLATFORM || "web";
export const IS_MOBILE = process.env.NEXT_PUBLIC_PLATFORM === "web";
export const VERSION = process.env.VERSION || "0.0.0";
