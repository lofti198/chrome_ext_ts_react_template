import { SomeEnum } from "./enums";
export interface ISome1 {
  propertyString: string;
  propertyEnum: SomeEnum;
}
export interface ISome2 {
  propertyString: string | undefined;
  someMethodTyped: (id: string) => DynamicData | null;
  someMethodRandom: Function;
  propertyBoolean: boolean;
  propertyArray: ISome1[];
}

export interface DynamicData {
  [key: string]: string;
}
