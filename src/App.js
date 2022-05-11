import "./App.css";
import { Box, Flex, Image } from "@chakra-ui/react";
import ImgageBg from "./images/Islamy-app.jpg";
import MobileBg from "./images/mobileBg-min.jpg";
import Islamy from "./images/islamy.svg";
import topIcon from "./images/topIcon.svg";
import PlayStore from "./images/playStore.svg";
import AppStore from "./images/appStore.svg";
import MobileOne from "./images/mobile-2.jpg";
import MobileTwo from "./images/mobile.jpg";
import react, { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <Flex
      alignItems={{ base: "start", md: "center" }}
      justifyContent={{ base: "start", md: "center" }}
      w="100%"
      h="100vh"
      minH="800px"
      position="relative"
      overflow="hidden"
    >
      {windowSize !== undefined && windowSize.width > 468 ? (
        <Image
          objectFit="cover"
          position="absolute"
          h="100%"
          w="100%"
          layout="fill"
          src={ImgageBg}
          alt="Islamy-app"
        />
      ) : (
        <Image
          objectFit="cover"
          layout="fill"
          src={MobileBg}
          alt="Islamy-app"
          h="100%"
          w="100%"
          position="absolute"
        />
      )}

      <Box
        position="absolute"
        bottom="-100px"
        left={{ base: "20px", md: "40px", lg: "90px" }}
        w={{ base: "297px", xl: "70%" }}
        h={{ base: "600px", xl: "936.68px" }}
        maxW="466.1px"
        maxH="936.68px"
      >
        <Image
          objectFit="cover"
          layout="fill"
          src={MobileOne}
          position="absolute"
          alt="Islamy-app"
        />
      </Box>
      <Box
        w={{ base: "230px", xl: "70%" }}
        h={{ base: "465px", xl: "936.68px" }}
        position="absolute"
        bottom="-100px"
        left={{ base: "130px", md: "240px", lg: "330px" }}
        maxW="362.59px"
        maxH="728.66px"
      >
        <Image
          position="absolute"
          objectFit="cover"
          layout="fill"
          src={MobileTwo}
          alt="Islamy-app"
        />
      </Box>
      <Box
        position="absolute"
        top="10px"
        left="10px"
        w={{ base: "86px", md: "200px", lg: "300px" }}
        h={{ base: "82px", md: "190px", lg: "290px" }}
      >
        <Image
          position="absolute"
          objectFit="cover"
          layout="fill"
          src={topIcon}
          alt="Islamy-app"
        />
      </Box>
      <Box
        color="#ECECEC"
        fontSize="30px"
        display={{ base: "none", md: "block" }}
        position="absolute"
        bottom="50px"
        right="120px"
        cursor="pointer"
      >
        <a href="https://orkabit.com/">
          <h2 style={{ textAlign: "center" }}>
            From <br /> <span style={{ fontWeight: "bold" }}>ORKA</span>BIT
          </h2>
        </a>
      </Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        maxW={{ base: "260px", md: "330px", lg: "445px" }}
        margin={{ base: "100px 40px", md: "0" }}
        fontSize={{ base: "14px", md: "18px", lg: "26px" }}
        color="#ECECEC"
        position="relative"
        gap="20px"
        flexDirection="column"
      >
        <Box
          position="relative"
          w={{ base: "60px", md: "80px", lg: "100px" }}
          h={{ base: "60px", md: "80px", lg: "100px" }}
        >
          <Image
            objectFit="cover"
            layout="fill"
            position="absolute"
            src={Islamy}
            alt="Islamy-app"
          />
        </Box>

        <h1
          style={{
            textAlign: "center",
            padding: "0 20px",
            fontWeight: "400",
          }}
        >
          Comprehensive Quran, Qibla Azan, and Azkar application
        </h1>
        <Flex
          w={{ base: "90%", lg: "calc(100% - 20px) " }}
          justifyContent="space-between"
          flexDirection="row-reverse"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.orkabit.islamy"
          >
            <Box
              className="hover-sun"
              cursor="pointer"
              position="relative"
              w={{ base: "90px", md: "120px", lg: "150px" }}
              h={{ base: "23px", md: "30px", lg: "40px" }}
            >
              <Image
                objectFit="cover"
                layout="fill"
                position="absolute"
                src={PlayStore}
                alt="Islamy-app"
              />
            </Box>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/jo/app/islamy/id1616741529"
          >
            <Box
              className="hover-sun"
              cursor="pointer"
              position="relative"
              w={{ base: "90px", md: "120px", lg: "153px" }}
              h={{ base: "23px", md: "30px", lg: "40px" }}
            >
              <Image position="absolute" src={AppStore} alt="Islamy-app" />
            </Box>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
