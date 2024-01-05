// src/mocks/browser.js
import { setupWorker } from "msw/browser";
import * as MswApi from "./msw-api/index";
import { handlers } from "./handlers";

const handler = [...Object.values(MswApi)];
export const worker = setupWorker(...handler);
