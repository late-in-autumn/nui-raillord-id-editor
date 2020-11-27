import { BackgroundType } from "constant/other";
import { Action } from "model/action";
import { ApplicationStore } from "model/store";
import { createContext, useEffect, useState } from "react";
import { loadData, saveData } from "service/utility";

export const useApplicationStore = (): ApplicationStore => {
  const [nuiRegistration, setNuiRegistration] = useState(loadData('nuiRegistration', '8620'));
  const [nuiName, setNuiName] = useState(loadData('nuiName', 'ぬいの名称'));
  const [nuiDepot, setNuiDepot] = useState(loadData('nuiDepot', '車両基地名'));
  const [nuiMastersName, setNuiMastersName] = useState(loadData('nuiMastersName', 'マスターの名称'));
  const [nuiTwitterName, setNuiTwitterName] = useState(loadData('nuiTwitterName', '@screen_name'));
  const [nuiMemo, setNuiMemo] = useState(loadData('nuiRnuiMemoegistration', 'ここはメモ欄です'));
  const [backgroundType, setBackgroundType] = useState<BackgroundType>(loadData<BackgroundType>('backgroundType', '86'));

  // 自動セーブ
  useEffect(() => saveData('nuiRegistration', nuiRegistration), [nuiRegistration]);
  useEffect(() => saveData('nuiName', nuiName), [nuiName]);
  useEffect(() => saveData('nuiDepot', nuiDepot), [nuiDepot]);
  useEffect(() => saveData('nuiMastersName', nuiMastersName), [nuiMastersName]);
  useEffect(() => saveData('nuiTwitterName', nuiTwitterName), [nuiTwitterName]);
  useEffect(() => saveData('nuiMemo', nuiMemo), [nuiMemo]);
  useEffect(() => saveData('backgroundType', backgroundType), [backgroundType]);

  // dispatch
  const dispatch = (action: Action) => {
    switch (action.type) {
      case 'setNuiRegistration':
        setNuiRegistration(action.message as string);
        break;
      case 'setNuiName':
        setNuiName(action.message as string);
        break;
      case 'setNuiDepot':
        setNuiDepot(action.message as string);
        break;
      case 'setNuiMastersName':
        setNuiMastersName(action.message as string);
        break;
      case 'setNuiTwitterName':
        setNuiTwitterName(action.message as string);
        break;
      case 'setNuiMemo':
        setNuiMemo(action.message as string);
        break;
      case 'setBackgroundType':
        setBackgroundType(action.message as BackgroundType);
        break;
    }
  };

  return {
    nuiRegistration,
    nuiName,
    nuiDepot,
    nuiMastersName,
    nuiTwitterName,
    nuiMemo,
    backgroundType,
    dispatch
  };
};

export const ApplicationContext = createContext<ApplicationStore>({} as ApplicationStore);