import { StorageService } from "./StorageService";
export class AuthService {
  constructor(private SrStorage: StorageService) {}
  login() {
    this.SrStorage.StoreToken("dfsfs", "3", "erere", []);
    return true;
  }
  LogOut() {
    this.SrStorage.EmptyStorage();
  }
}
