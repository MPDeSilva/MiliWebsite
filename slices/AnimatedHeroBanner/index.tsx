import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AnimatedHeroBanner`.
 */
export type AnimatedHeroBannerProps =
  SliceComponentProps<Content.AnimatedHeroBannerSlice>;

/**
 * Component for "AnimatedHeroBanner" Slices.
 */
const AnimatedHeroBanner = ({
  slice,
}: AnimatedHeroBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for animated_hero_banner (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default AnimatedHeroBanner;
