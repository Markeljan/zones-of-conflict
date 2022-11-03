import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zones of Conflict</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#f5f5f5"}
        minHeight={"100vh"}
      >
        <Typography variant="h1">Zones of Conflict</Typography>
        <Image src={"/tank512.png"} alt={"beige tank"} width={500} height={500} />
      </Box>
      {/* End Main content */}
    </>
  );
}