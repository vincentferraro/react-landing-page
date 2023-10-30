import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  
  const formik = useFormik({
    initialValues: {
      firstName:'',
      email:'',
      type:'',
      comment:''

    },
    onSubmit: (values) => {submit(values)},
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      email:Yup.string().email(),
      type:Yup.string().required(),
      comment:Yup.string().required()
    }),
  });


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName? true:false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName? (<FormErrorMessage>Required</FormErrorMessage>): null}
                
              </FormControl>
              <FormControl isInvalid={(formik.touched.email && formik.errors.email) || (formik.touched.email && formik.getFieldProps('email').value.length ===0)?true : false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                 {(formik.touched.email && formik.errors.email) || (formik.touched.email && formik.getFieldProps('email').value.length ===0)?(<FormErrorMessage>Required</FormErrorMessage>):true}
                
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type? true: false}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type? (<FormErrorMessage>Required</FormErrorMessage>): null}
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment? true : false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                {formik.touched.comment && formik.errors.comment? (<FormErrorMessage>Required</FormErrorMessage>): null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
