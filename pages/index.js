import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const index = () => {
  const { t, i18n } = useTranslation()
  return(

    <div>
      {t('common:hello')}
      </div>
  )
};

export default index;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
