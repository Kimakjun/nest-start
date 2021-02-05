import { gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      result
      error
    }
  }
`;

export default UPLOAD_FILE;
