import React from "react";
// import styled from "styled-components";
// import { flex, SpaceProps } from "styled-system";
import { colorOptions } from "../../interfaces";
// import StyledIcon from "./IconStyle";
import { useRouter } from "next/router";


export interface IconProps {
  size?: string;
  children: string;
  transform?: string;
  variant?: "small" | "medium" | "large";
  color?: colorOptions;
  defaultcolor?: "currentColor" | "auto";
}

// const Iimg = styled.div`
//   display: "flex";
//   width: 1.25rem;
//   height: 1.25rem;
// `;


const Icon = ({ children }: IconProps) => {
  const { pathname, asPath } = useRouter();
  console.log({pathname, asPath})
  return (
    // <StyledIcon
    //   src={`/assets/images/icons/${children}.svg`}
    //   fallback={() => <span>{children?.trim()}</span>}
    //   {...props}
    // />

    // <Iimg >
    <div style={{ display: 'flex', height: '1.25rem', width: '1.25rem' , color: 'white' }}>
      <img src={`http://localhost:3000/assets/images/icons/${children}.svg`} alt="" />
    </div>
    // </Iimg>


  );
};

Icon.defaultProps = {
  variant: "medium",
  defaultcolor: "currentColor",
};

export default Icon;
