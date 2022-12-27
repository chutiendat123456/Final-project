import {
  Box,
  Container,
  Flex,
  StackDivider,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { MdSchool } from "react-icons/md";
import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <Flex
      as="footer"
      style={{
        position: "absolute",
        bottom: "0%",
        width: "100%",
        maxH: "20%",
        flexDirection: "column",
        color: "white",
      }}
      bg="teal"
    >
      <Container maxW="70%" textAlign="center">
        <Text className={styles.footerSchoolName}
        style={{fontSize:"20px"}}>
          UNIVERSITY OF GREENWICH ALLIANCE WITH FPT EDUCATION
        </Text>
        <VStack
          
        >
          <Text>
            <Icon as={MdSchool} />
            TẠI HÀ NỘI Tòa nhà GOLDEN PARK – Số 2 Phạm Văn Bạch – Yên Hòa - Cầu
            Giấy.
          </Text>
          <Text>
            <Icon as={MdSchool} />
            TẠI ĐÀ NẴNG 658 Ngô Quyền - Quận Sơn Trà -TP Đà Nẵng Điện thoại:
            0236.730.2266
          </Text>
          <Text>
            <Icon as={MdSchool} />
            TẠI HỒ CHÍ MINH Số 20 đường Cộng Hòa – Phường 12 – Quận Tân Bình
            Điện thoại: 028.7300.2266
          </Text>
          <Text>
            <Icon as={MdSchool} />
            TẠI CẦN THƠ Số 160 đường 30/4 - Phường An phú - Quận Ninh Kiều – TP.
            Cần Thơ Điện thoại: 0292.730.0068
          </Text>
        </VStack>
      </Container>
      <Box textAlign="center" bg="teal.700" py="2" mt="2">
        
        <Text>
          Chu Tiến Đạt - GCS18584 - FPT Greenwich VN - Hồ Chí Minh
          © 2022 Copyright:{" "}
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
