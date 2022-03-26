import IIdentificationDocumentDto from "@modules/identificationDocuments/dtos/IIdentificationDocumentDto";
import UserGender from "../enums/UserGender";
import IAddressDto from "./IAddressDto";
import IPhoneContactDto from "./IPhoneContactDto";

export default interface ICreateUserDto {
  fullname: string;
  email: string;
  username: string;
  password: string;
  birthday: Date;
  phone: IPhoneContactDto;
  address: IAddressDto;
  document: IIdentificationDocumentDto;
  gender: UserGender;
}