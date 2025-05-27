// Types
import type { FC } from "react";

// Theme
import { COLORS } from "../../../constants/colors";

export type TLogo = {
  color?: string;
  width?: number;
  height?: number;
  sizeFactor?: number;
};

const Logo: FC<TLogo> = ({
  color = COLORS.LOGO_DEFAULT,
  width = 70,
  height = 36.024,
  sizeFactor = 1,
}) => {
  return (
    <svg
      data-testid="logo"
      data-size-factor={sizeFactor}
      data-color={color}
      width={`${width * sizeFactor}`}
      height={`${height * sizeFactor}`}
      viewBox="0 0 18.520833 9.53135"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{
          color: `${color}`,
          fill: `${color}`,
          stroke: "none",
          strokeWidth: "0.0268281",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          fillOpacity: 1,
        }}
        d="m 10.745394,8.4492998 c 0.822659,0.67455 1.871363,1.08203 3.010829,1.08203 2.619991,0 4.76461,-2.14671 4.76461,-4.76671 0,-2.61999 -2.144619,-4.764600030122 -4.76461,-4.764600030122 -1.821395,0 -3.409453,1.039430030122 -4.2107568,2.551810030122 l 1.5075078,1.78313 c 0.203991,-1.31547 1.326036,-2.30712 2.703249,-2.30712 1.524005,0 2.736781,1.21277 2.736781,2.73678 0,1.52402 -1.212776,2.73888 -2.736781,2.73888 -0.524013,0 -1.009494,-0.14622 -1.423673,-0.39666 L 7.7764842,1.0815298 C 6.9543012,0.40734977 5.9062662,1.9769878e-5 4.7667102,1.9769878e-5 2.1467082,1.9769878e-5 1.6666667e-7,2.1446298 1.6666667e-7,4.7646198 c 0,2.62 2.14670803333333,4.76671 4.76671003333333,4.76671 1.820918,0 3.407282,-1.03995 4.208131,-2.55234 l -1.507508,-1.7826 c -0.204418,1.31487 -1.32406,2.30711 -2.700623,2.30711 -1.524016,0 -2.73888,-1.21486 -2.73888,-2.73888 0,-1.52401 1.214864,-2.73678 2.73888,-2.73678 0.523799,0 1.008875,0.14621 1.422618,0.39614 z"
      />
    </svg>
  );
};

export default Logo;
