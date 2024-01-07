import { setupWorker } from "msw/browser";
import * as MswApi from "./msw/index";

const handler = [...Object.values(MswApi)];
export const worker = setupWorker(...handler);
