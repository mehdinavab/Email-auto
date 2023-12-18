import axios from "axios";
import { Env } from "../ServicesConfigs";
import { IGetMailAuthInfoResponseDto } from "../Models/MailAuthInfoDTOs/GetMailAuthInfoDto";
import {
  IPostMailInfoRequestDto,
  IPostMailInfoResponseDto,
} from "../Models/MailAuthInfoDTOs/PostMailAuthInfoDto";
import {
  IPutMailAuthInfoRequestDto,
  IPutMailAuthInfoResponseDto,
} from "../Models/MailAuthInfoDTOs/PutMailAuthInfoDto";
import { StorageService } from "./StorageService";
export class MailAuthInfoService {
  constructor(private SrStorage: StorageService) {}
  apiPath: string = "mail-auth-info/";
  Header = {
    headers: {
      Bearer: this.SrStorage.RestoreToken(),
    },
  };

  async GetAllEmailAuthInfo(): Promise<IGetMailAuthInfoResponseDto[]> {
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

  async CreateNewEmailAuthInfo(
    NewEmailAuthInfo: IPostMailInfoRequestDto
  ): Promise<IPostMailInfoResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .post(`${Env.BaseUrl}${this.apiPath}`, NewEmailAuthInfo,this.Header)
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
  async GetEmailAuthInfoById(
    EmailAuthInfoId: string
  ): Promise<IGetMailAuthInfoResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .get(`${Env.BaseUrl}${this.apiPath}${EmailAuthInfoId}`,this.Header)
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

  async UpdateEmailAuthInfo(
    EmailAuthInfoId: string,
    EditEmailAuthInfoId: IPutMailAuthInfoRequestDto
  ): Promise<IPutMailAuthInfoResponseDto> {
    let IsSuccess: boolean = false;
    let res: any;
    await axios
      .put(
        `${Env.BaseUrl}${this.apiPath}${EmailAuthInfoId}`,
        EditEmailAuthInfoId,this.Header
      )
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
  async DeleteEmailAuthInfo(EditEmailAuthInfoId: number): Promise<boolean> {
    let IsSuccess: boolean = false;
    await axios
      .delete(`${Env.BaseUrl}${this.apiPath}${EditEmailAuthInfoId}`,this.Header)
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
