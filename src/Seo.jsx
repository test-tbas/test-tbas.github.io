import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO(props) {
  return (
    <Helmet>
      <title>T-BAS玉川学園</title>
      <meta name="description" content="玉川学園IBクラス生のための頼れるマンツーマン指導塾。数学が苦手な中学生や文系高校生のための個別指導塾" />
      <meta name="keywords" content="T-BAS, TBAS, ティーバス, T-BAS玉川学園, 玉川学園, 塾,　個別指導,マンツーマン,バカロレア,国際バカロレア,DP,ディプロマ,インターナショナルバカロレア,MYP,BLES、ブレス、EP,インターナショナル,IBクラス,英検,数検,英語検定,数学検定,数学,苦手,中学生,高校生,文系高校生,一般クラス,卒業生,海外大学,DP試験" />

      <link rel="canonical" href={"https://t-bas.github.io/#/" + props.url} />
    </Helmet>
  )
}