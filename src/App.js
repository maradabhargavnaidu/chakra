import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  background,
} from "@chakra-ui/react";
import deskImage from "./images/image-product-desktop.jpg";
import iconcart from "./images/icon-cart.svg";
import "./index.css";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "hsl(30, 38%, 92%)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Flex flexDirection={{ base: "column", md: "row" }} py={[20, 0]}>
          <VStack flex={1.25}>
            <Image
              src={deskImage}
              objectFit={"cover"}
              boxSize={"100%"}
              w={"100%"}
              borderLeftRadius={"10px"}
            ></Image>
          </VStack>
          <VStack
            bg="white"
            align={"flex-start"}
            flex={1}
            p={10}
            borderRightRadius={"10px"}
          >
            <Text textColor={"gray.600"} letterSpacing={"8px"}>
              PERFUME
            </Text>
            <VStack align={"flex-start"}>
              <Heading>Gabrielle</Heading>
              <Heading>Essence Eau</Heading>
              <Heading>De Parfum</Heading>
            </VStack>
            <Text textColor={"gray.600"} noOfLines={4}>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </Text>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading textColor={"green.600"}>$149.99</Heading>
              <Text>$169.99</Text>
            </Flex>
            <Button
              w={"100%"}
              bg={"green.700"}
              textColor={"white"}
              _hover={{ bg: "green.800" }}
            >
              <Image src={iconcart}></Image>
              Add to Cart
            </Button>
          </VStack>
        </Flex>
      </Container>
    </div>
  );
}

export default App;
