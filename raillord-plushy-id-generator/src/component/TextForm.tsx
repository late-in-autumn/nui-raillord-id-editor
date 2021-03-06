import { FormEvent, useContext } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ActionType } from "../constant/other";
import { FontOptionImpl } from "../model/FontOption";
import { ApplicationContext } from "../service/store";

const TextForm: React.FC<{
  label: string;
  value: string;
  dataKey: string;
  dataKey2: string;
}> = ({
   label, value, dataKey, dataKey2,
}) => {
   const { t } = useTranslation();

   const { fontOption, dispatch } = useContext(ApplicationContext);

   const onChangeText = (e: FormEvent<any>) => dispatch({ type: (`set${dataKey}`) as ActionType, message: e.currentTarget.value });
   const onChangeBoldFlg = () => dispatch({ type: "setBoldFlg", message: dataKey2 });
   const onChangeLargeFlg = () => dispatch({ type: "setLargeFlg", message: dataKey2 });

   const { boldFlg } = ((fontOption as any) as { [key: string]: FontOptionImpl })[dataKey2];
   const { largeFlg } = ((fontOption as any) as { [key: string]: FontOptionImpl })[dataKey2];

   return (
     <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control value={value} onChange={onChangeText} />
        <Form.Check label={t("太字にする")} checked={boldFlg} onChange={onChangeBoldFlg} />
        <Form.Check label={t("大きめのフォントサイズにする")} checked={largeFlg} onChange={onChangeLargeFlg} />
      </Form.Group>
   );
};

export default TextForm;
