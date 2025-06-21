import type {ModelInfo} from "./ModelInfo.ts";

export interface AppModel {
    name: string;
    label: string;
    models: ModelInfo[];
}
