import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface SocialItem {
  id: number;
  url: string;
  icon: JSX.Element;
}

export const Social: SocialItem[] = [
  {
    id: 1,
    url: "https://www.instagram.com",
    icon: <InstagramIcon />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    url: "https://www.facebook.com",
    icon: <FacebookIcon />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com",
    icon: <LinkedInIcon />,
  },
];
