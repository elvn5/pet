import Logo from "./logo.svg?react";

const icons = {
  logo: Logo,
};

type IconProps = {
  name: keyof typeof icons;
} & React.SVGProps<SVGSVGElement>;

export const Icon = (props: IconProps) => {
  const { name, width = 24, height = 24, ...rest } = props;
  const SvgIcon = icons[name];

  return <SvgIcon width={width} height={height} {...rest} />;
};
