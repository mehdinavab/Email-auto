import axios from "axios";
import { Env } from "../ServicesConfigs";
import { IGetEmailsResponseDto } from "../Models/EmailsDTOs/GetEMailsDto";
import { IPostEmailRequestDto, IPostEmailResponseDto } from "../Models/EmailsDTOs/PostEmailsDto";
import { IPutEmailRequestDto, IPutEmailResponseDto } from "../Models/EmailsDTOs/PutEmailsDto";
import { StorageService } from "./StorageService";

export class EmailService {
  constructor(private SrStorage: StorageService) {}
  apiPath: string = "emails/";
  Header = {
    headers: {
      Bearer: this.SrStorage.RestoreToken(),
    },
  };
  async GetAllEmails(): Promise<IGetEmailsResponseDto[]> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .get(`${Env.BaseUrl}${this.apiPath}`,this.Header)
      .then((response: any) => {
        res = response;
        IsSuccess = true;
      })
      .catch((err) => {
        res = err;
        IsSuccess = false;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }


  async CreateNewEmail(
    NewEmail: IPostEmailRequestDto
  ): Promise<IPostEmailResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .post(`${Env.BaseUrl}${this.apiPath}`, NewEmail,this.Header)
      .then((response: any) => {
        res = response;
        IsSuccess = true;
      })
      .catch((err) => {
        res = err;
        IsSuccess = false;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }
  async GetEmailById(EmailId: string): Promise<IGetEmailsResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .get(`${Env.BaseUrl}${this.apiPath}${EmailId}`,this.Header)
      .then((response: any) => {
        res = response;
        IsSuccess = true;
      })
      .catch((err) => {
        IsSuccess = false;
        res = err;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }

  async UpdateEmail(
    EmailId: string,
    EditEmail: IPutEmailRequestDto
  ): Promise<IPutEmailResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .put(`${Env.BaseUrl}${this.apiPath}${EmailId}`, EditEmail,this.Header)
      .then((response: any) => {
        IsSuccess = true;
        res = response;
      })
      .catch((err) => {
        IsSuccess = false;
        res = err;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(res);
    else return Promise.reject(res);
  }
  async DeleteEmail(ConfigId: number): Promise<boolean> {
    let IsSuccess: boolean = false;
    await axios
      .delete(`${Env.BaseUrl}${this.apiPath}${ConfigId}`,this.Header)
      .then((response: any) => {
        IsSuccess = true;
      })
      .catch((err) => {
        IsSuccess = false;
      })
      .finally();
    if (IsSuccess) return Promise.resolve(IsSuccess);
    else return Promise.reject(IsSuccess);
  }
}
