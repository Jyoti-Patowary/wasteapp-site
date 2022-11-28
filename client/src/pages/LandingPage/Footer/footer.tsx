import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    color: "white",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "black", color: "white" }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Services
            </Typography>

            <FooterLink>Door Step Service</FooterLink>
            <br />
            <FooterLink>Household</FooterLink>
            <br />
            <FooterLink>Business</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Our Homes</FooterLink>
            <br />
            <FooterLink>Stories</FooterLink>
            <br />
            <FooterLink>Video</FooterLink>
            <br />
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Get in touch with us on preffered platform, we will be happy to
              hear from you
            </Typography>

            <IconBox>
              <BsInstagram />
              <AiOutlineTwitter />
              <BsFacebook />
              <AiOutlineWhatsApp />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
