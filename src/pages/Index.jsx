import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box bg="red.500" color="white" minHeight="100vh">
      <Container maxW="container.lg" py={10}>
        {/* Header */}
        <Flex as="header" justify="space-between" align="center" mb={10}>
          <Heading as="h1" size="lg">John Doe</Heading>
          <HStack spacing={8}>
            <Link href="#about" fontSize="lg">About Me</Link>
            <Link href="#portfolio" fontSize="lg">Portfolio</Link>
            <Link href="#contact" fontSize="lg">Contact</Link>
          </HStack>
        </Flex>

        {/* About Me Section */}
        <VStack id="about" spacing={4} align="start" mb={10}>
          <Heading as="h2" size="md">About Me</Heading>
          <Text fontSize="lg">
            Hello! I'm John Doe, a passionate web developer with a knack for creating stunning websites and applications. With a background in computer science and years of experience in the industry, I bring a unique blend of technical expertise and creative flair to every project I undertake.
          </Text>
        </VStack>

        {/* Portfolio Section */}
        <VStack id="portfolio" spacing={4} align="start" mb={10}>
          <Heading as="h2" size="md">Portfolio</Heading>
          <Text fontSize="lg">
            Here are some of the projects I've worked on:
          </Text>
          <Box>
            <Text fontSize="lg">Project 1</Text>
            <Text>Description of project 1.</Text>
          </Box>
          <Box>
            <Text fontSize="lg">Project 2</Text>
            <Text>Description of project 2.</Text>
          </Box>
          <Box>
            <Text fontSize="lg">Project 3</Text>
            <Text>Description of project 3.</Text>
          </Box>
        </VStack>

        {/* Contact Section */}
        <VStack id="contact" spacing={4} align="start">
          <Heading as="h2" size="md">Contact</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="start">
              <Input
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" colorScheme="teal">Submit</Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;