import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import InputForm from "container/InputForm";
import CardView from "container/CardView";

const MainForm: React.FC = () => {
  const { t } = useTranslation();

  return <Container>
    <Row className="my-3">
      <Col className="text-center">
        <h1 className="d-none d-sm-inline">{t("ぬいぐるみ用名刺エディタ")}</h1>
        <h4 className="d-inline d-sm-none">{t("ぬいぐるみ用名刺エディタ")}</h4>
      </Col>
    </Row>
    <Row className="my-3">
      <Col className="text-center">
        <span className="d-inline-block mr-3">Ver.1.2.0</span>
        <span className="d-inline-block mr-3"><a href="https://github.com/YSRKEN/NUIDENTITY-CARD-Editor" rel="noreferrer" target="_blank">{t("GitHub")}</a></span>
        <span className="d-inline-block mr-3"><a href="https://twitter.com/sin_kou_hyou/status/985448725026762752" rel="noreferrer" target="_blank">{t("背景テンプレ画像の出典")}</a></span>
        <span><a href="https://twitter.com/YSRKEN" rel="noreferrer" target="_blank">{t("ツール作者のTwitter")}</a></span>
      </Col>
    </Row>
    <Row className="my-3">
      <Col>
        <Tabs defaultActiveKey="option" id="main-tab" transition={false}>
          <Tab className="border-bottom border-left border-right p-3" eventKey="option" title={t("設定")}>
            <InputForm />
          </Tab>
          <Tab className="border-bottom border-left border-right p-3" eventKey="view" title={t("プレビュー")}>
            <CardView />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
};

export default MainForm;