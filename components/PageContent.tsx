/* eslint-disable sonarjs/no-duplicated-branches */
import React from "react";
import CompanyBanner from "./CompanyBanner";
import HeroSection from "./HeroSection";

const PageContent: React.FC<any> = ({ pageProps }) => {
  const body = pageProps;
  return (
    <div>
      {body?.data?.slices?.map((slices: any) => {
        // eslint-disable-next-line sonarjs/max-switch-cases
        switch (slices.slice_type) {
          case "animated_hero_banner":
            return (
              <HeroSection
                Title={""}
                Description={""}
                List={[]}
                ImageLink={null}
              />
            );

          case "cards_carousel":
            return <CompanyBanner />;
        }
      })}
    </div>
  );
};

export default PageContent;
